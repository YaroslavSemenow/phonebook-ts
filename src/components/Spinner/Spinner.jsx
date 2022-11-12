import ClipLoader from 'react-spinners/ClipLoader';
import styles from './Spinner.module.css';

export default function Spinner({ size }) {
  return (
    <div className={styles.spinner}>
      <ClipLoader size={size} color={'rgba(0, 0, 0, 0.6)'} />
    </div>
  );
}
