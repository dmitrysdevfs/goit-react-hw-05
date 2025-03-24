import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../movieService';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch {}
    }

    getMovies();
  }, []);

  return <div>Home Page</div>;
}
