import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import { Typography } from '@mui/material';
import styles from './HomePage.module.css';

export default function HomePage() {
  const userName = useSelector(authSelectors.getUserName);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div className={styles.text_wrap}>
      <Typography variant="h3" component="h1">
        Welcome{userName && <>, {userName}</>}!
      </Typography>{' '}
      <Typography variant="h5" component="p" sx={{ marginTop: '15px' }}>
        Click{' '}
        <Link to={isLoggedIn ? '/contacts' : '/login'}>
          <Typography
            variant="h5"
            component="span"
            sx={{ color: 'rgb(22, 102, 183)' }}
          >
            here
          </Typography>
        </Link>{' '}
        to go to your personal phone book.
      </Typography>
    </div>
  );
}
