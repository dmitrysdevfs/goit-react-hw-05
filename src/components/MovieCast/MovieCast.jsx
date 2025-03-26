import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchMovieCast } from '../../movieService';
import css from './MovieCast.module.css';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getCast() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchMovieCast(movieId);
        setCast(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getCast();
  }, [movieId]);

  return (
    <div className={css.container}>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ul className={css.list}>
        {cast
          .filter(
            item => item.known_for_department === 'Acting' && item.profile_path
          )
          .map(item => (
            <li key={item.id} className={css.item}>
              <h2 className={css.name}>{item.name}</h2>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                alt={item.name}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
