import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
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
          <div>
            <Link className={styles.nav__link} to="/">
              HOME PAGE
            </Link>

            {isLoggedIn && !isFetchingCurrentUser && (
              <Link className={styles.nav__link} to="/contacts">
                PHONEBOOK
              </Link>
            )}
          </div>

          {!isFetchingCurrentUser && (isLoggedIn ? <UserMenu /> : <AuthMenu />)}
        </div>
      </Container>
    </header>
  );
}
