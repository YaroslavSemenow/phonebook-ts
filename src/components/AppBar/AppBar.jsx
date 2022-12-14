import { NavLink } from 'react-router-dom';
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
        <div className={styles.nav}>
          <div>
            <NavLink to="/">HOME PAGE</NavLink>
            <NavLink to="/contacts">CONTACTS</NavLink>
          </div>
          {isLoggedIn ? <UserMenu /> : <AuthMenu />}
        </div>
      </Container>
    </header>
  );
}
