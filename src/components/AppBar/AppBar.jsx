import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import Container from 'components/Container';
import UserMenu from 'components/UserMenu';
import AuthMenu from 'components/AuthMenu';
import styles from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={styles.header}>
      <Container>
        {!isLoggedIn && (
          <div className={styles.nav}>
            <Link to="/">PHONEBOOK</Link>
            <AuthMenu />
          </div>
        )}
        {isLoggedIn && (
          <div className={styles.nav}>
            <Link to="/contacts">PHONEBOOK</Link>
            <UserMenu />
          </div>
        )}
      </Container>
    </header>
  );
}
