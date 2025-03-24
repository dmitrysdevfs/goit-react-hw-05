import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <div>
      404 Not Found! Please follow this{' '}
      <Link style={{ color: 'blue', textDecoration: 'underline' }} to="/">
        link
      </Link>
    </div>
  );
}
