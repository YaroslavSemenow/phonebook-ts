import Container from 'components/Container';
import Navigation from 'components/Navigation';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <header className={styles.header}>
        <Container>
          <Navigation />
        </Container>
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}
