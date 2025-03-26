import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import css from './MoviesPage.module.css';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router';
import { fetchMovieByQuery } from '../../movieService';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const onSubmit = values => {
    setLoading(true);
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('query', values);
    setSearchParams(nextParams);
  };

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchMovieByQuery(query);
        setMovies(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    if (query) {
      getMovies();
    }
  }, [query]);

  return (
    <div>
      <div>
        <Formik
          initialValues={{
            query: query,
          }}
          onSubmit={(values, actions) => {
            onSubmit(values.query.trim());
            actions.setSubmitting(false);
          }}
        >
          <Form className={css.form}>
            <div className={css.inputWrapper}>
              <button type="submit" className={css.iconButton}>
                🔍
              </button>
              <Field
                type="text"
                name="query"
                autoComplete="off"
                autoFocus
                placeholder="Search movies by name"
                className={css.input}
              />
            </div>
            <button type="submit" className={css.hiddenButton}>
              Search
            </button>
          </Form>
        </Formik>
      </div>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
