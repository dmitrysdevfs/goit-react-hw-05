import { NavLink } from 'react-router';
import clsx from 'clsx';
import css from './Navigation.module.css';

const getLinkStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <ul className={css.list}>
          <li>
            <NavLink className={getLinkStyles} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={getLinkStyles} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
