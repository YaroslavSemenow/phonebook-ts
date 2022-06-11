import PropTypes from 'prop-types';
import style from './ContactItem.module.css';

export default function ContactItem({ id, name, number, onDelete }) {
  return (
    <li className={style.item}>
      <div className={style.item_inner}>
        <span className={style.item_name}>{name}:</span> <span>{number}</span>
        <button className={style.item_btn} onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
