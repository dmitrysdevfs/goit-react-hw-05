import { Link } from 'react-router';
import css from './MovieList.module.css';

export default function MovieList({ movies }) {
  return (
    <div>
      <ul className={css.list}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link className={css.link}>
              <h3 className={css.title}>{movie.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
