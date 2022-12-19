import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';
import UserMenu from 'components/UserMenu';
import AuthMenu from 'components/AuthMenu';
import styles from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__inner}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <Link className={styles.nav__link} to="/">
                <Typography variant="subtitle1" sx={{ fontWeight: '500' }}>
                  HOME PAGE
                </Typography>
              </Link>
            </li>

            <li className={styles.nav__item}>
              {isLoggedIn && !isFetchingCurrentUser && (
                <Link className={styles.nav__link} to="/contacts">
                  <Typography variant="subtitle1" sx={{ fontWeight: '500' }}>
                    PHONEBOOK
                  </Typography>
                </Link>
              )}
            </li>
          </ul>

          {!isFetchingCurrentUser && (isLoggedIn ? <UserMenu /> : <AuthMenu />)}
        </div>
      </Container>
    </header>
  );
}
