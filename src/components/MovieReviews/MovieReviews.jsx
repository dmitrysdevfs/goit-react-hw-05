import { useEffect, useState } from 'react';
import { fetchMovieReviews } from '../../movieService';
import { useParams } from 'react-router';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';
import css from './MovieReviews.module.css';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getReviews() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchMovieReviews(movieId);
        setReviews(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getReviews();
  }, [movieId]);

  return (
    <div className={css.container}>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ul className={css.list}>
        {reviews.length > 0 &&
          reviews.map(review => (
            <li key={review.id} className={css.item}>
              <h2 className={css.author}>{review.author}</h2>
              <p
                className={css.content}
                dangerouslySetInnerHTML={{ __html: review.content }}
              />
              <p>
                <strong>Updated on:</strong>{' '}
                {new Date(review.updated_at).toLocaleDateString()}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
}
