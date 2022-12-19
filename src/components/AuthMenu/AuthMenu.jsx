import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styles from './AuthMenu.module.css';

export default function AuthMenu() {
  return (
    <div>
      <NavLink to="/register" className={styles.auth_link}>
        <Typography variant="subtitle1" component="span">
          Register
        </Typography>
      </NavLink>
      <NavLink to="/login" className={styles.auth_link}>
        <Typography variant="subtitle1" component="span">
          Log in
        </Typography>
      </NavLink>
    </div>
  );
}
