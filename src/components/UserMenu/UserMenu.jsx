import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const userName = useSelector(authSelectors.getUserName);

  return (
    <div className={styles.user__wrap}>
      <p className={styles.user__name}>{userName}</p>
      <button>Log out</button>
    </div>
  );
}
