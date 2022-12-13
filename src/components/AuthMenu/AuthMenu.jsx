import { NavLink } from 'react-router-dom';
import styles from './AuthMenu.module.css';

export default function AuthMenu() {
  return (
    <div>
      <NavLink to="/register" className={styles.auth_link}>
        Register
      </NavLink>
      <NavLink to="/login" className={styles.auth_link}>
        Log in
      </NavLink>
    </div>
  );
}
