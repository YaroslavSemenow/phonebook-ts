import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.text_wrap}>
      <div>Welcome to the personal phone book!</div>{' '}
      <div className={styles.links_wrap}>
        <Link to="/login" className={styles.link}>
          Sign in
        </Link>{' '}
        or{' '}
        <Link to="/register" className={styles.link}>
          create an account.
        </Link>
      </div>
    </div>
  );
}
