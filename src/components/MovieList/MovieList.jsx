import { Link, useLocation } from 'react-router';
import css from './MovieList.module.css';

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <div>
      <ul className={css.list}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              className={css.link}
              state={location}
            >
              <h3 className={css.title}>{movie.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
