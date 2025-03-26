import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router';
import clsx from 'clsx';
import { fetchMovieById } from '../../movieService';
import css from './MovieDetailsPage.module.css';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';
import defaultPoster from '../../assets/image.jpg';

const getLinkStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state);

  useEffect(() => {
    async function getMovie() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchMovieById(movieId);
        setMovie(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getMovie();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkRef.current} className={css.backLink}>
        Go back
      </Link>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movie && (
        <div className={css.container}>
          <div className={css.wrapper}>
            <img
              className={css.moviePoster}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : defaultPoster
              }
              alt={movie.title || 'Movie Poster'}
            />
            <div className={css.movieInfo}>
              <div className={css.movieMainInfo}>
                <h2>{movie.title}</h2>
                <p>
                  <strong>Release Date:</strong> {movie.release_date}
                </p>

                <p>
                  <strong>Rating:</strong> {movie.vote_average} / 10 (
                  {movie.vote_count} votes)
                </p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h4>Genres</h4>
                <p>
                  {movie.genres &&
                    movie.genres.map(genre => genre.name).join(', ')}
                </p>
              </div>
              <div className={css.movieAddInfo}>
                <h4>Additional information</h4>
                <ul className={css.addInfoList}>
                  <li>
                    <NavLink to="cast" className={getLinkStyles}>
                      Cast
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="reviews" className={getLinkStyles}>
                      Reviews
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
}
