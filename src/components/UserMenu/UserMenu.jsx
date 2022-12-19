import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const userName = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();

  return (
    <div className={styles.userMenu}>
      <p className={styles.user}>
        <Typography
          sx={{ fontWeight: '500' }}
          variant="subtitle1"
          component="span"
        >
          <span className={styles.user__text}>Welcome,</span> {userName}
        </Typography>
      </p>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>
    </div>
  );
}
