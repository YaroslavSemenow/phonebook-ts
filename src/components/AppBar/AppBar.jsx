import { NavLink } from 'react-router-dom';
import Container from 'components/Container';
import UserMenu from 'components/UserMenu';
import AuthMenu from 'components/AuthMenu';
import styles from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.nav}>
          <NavLink to="/">HOME PAGE</NavLink>
          <UserMenu />
          <AuthMenu />
        </div>
      </Container>
    </header>
  );
}
