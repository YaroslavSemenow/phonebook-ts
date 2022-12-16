import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import styles from './HomePage.module.css';

export default function HomePage() {
  const userName = useSelector(authSelectors.getUserName);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div className={styles.text_wrap}>
      <h3>Welcome{userName && <>, {userName}</>}!</h3>{' '}
      <h4 className={styles.links_wrap}>
        Click{' '}
        <Link to={isLoggedIn ? '/contacts' : '/login'} className={styles.link}>
          here
        </Link>{' '}
        to go to your personal phone book.
      </h4>
    </div>
  );
}
