import Container from 'components/Container';
import Navigation from 'components/Navigation';
import styles from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={styles.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
}
