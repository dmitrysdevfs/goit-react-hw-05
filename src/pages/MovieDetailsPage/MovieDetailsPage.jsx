import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchMovieById } from '../../movieService';
import css from './MovieDetailsPage.module.css';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movie && (
        <div className={css.container}>
          <img
            className={css.moviePoster}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title || 'Movie Poster'}
          />
          <div className={css.movieInfo}>
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
              {movie.genres && movie.genres.map(genre => genre.name).join(', ')}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
