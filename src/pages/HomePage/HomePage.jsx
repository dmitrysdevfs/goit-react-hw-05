import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../movieService';
import MovieList from '../../components/MovieList/MovieList';
import css from './HomePage.module.css';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getMovies();
  }, []);

  return (
    <>
      <h1 className={css.title}>Trending today</h1>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}
