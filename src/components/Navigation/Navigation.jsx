import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <div className={styles.nav}>
      <NavLink to="/">HOME PAGE</NavLink>
      <div>
        <NavLink to="/register" className={styles.auth_link}>
          Register
        </NavLink>
        <NavLink to="/login" className={styles.auth_link}>
          Login
        </NavLink>
      </div>
    </div>
  );
}
