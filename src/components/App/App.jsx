import { Route, Routes } from 'react-router';
import Navigation from '../Navigation/Navigation';
import css from './App.module.css';
import HomePage from '../../pages/HomePage';
import MoviesPage from '../../pages/MoviesPage';
import NotFoundPage from '../../pages/NotFoundPage';

export default function App() {
  return (
    <>
      <div className={css.container}>
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}
