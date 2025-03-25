import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../movieService';
import MovieList from '../../components/MovieList/MovieList';
import css from './HomePage.module.css';

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
      {loading && <b>Loadin movies...</b>}
      {error && <b>Whoops there was an error, plz reload the page...</b>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}
