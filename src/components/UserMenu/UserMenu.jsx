import styles from './UserMenu.module.css';

export default function UserMenu() {
  return (
    <div className={styles.user__wrap}>
      <p className={styles.user__name}>mango@mail.com</p>
      <button>logout</button>
    </div>
  );
}
