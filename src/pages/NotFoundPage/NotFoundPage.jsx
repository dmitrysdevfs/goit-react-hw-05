import { Link } from 'react-router';
import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div>
      404 Not Found! Please follow this{' '}
      <Link className={css.link} to="/">
        link
      </Link>
    </div>
  );
}
