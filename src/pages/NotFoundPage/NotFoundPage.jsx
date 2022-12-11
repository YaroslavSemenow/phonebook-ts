import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div className={styles.text}>
      This page was not found, please return to <Link to="/">home page.</Link>
    </div>
  );
}
