import PropTypes from 'prop-types';
import style from './ContactItem.module.css';
import useContacts from 'hooks/useContacts';

export default function ContactItem({ id, name, number }) {
  const { deleteContact, setFilter } = useContacts();

  return (
    <li className={style.item}>
      <div className={style.item_inner}>
        <span className={style.item_name}>{name}:</span> <span>{number}</span>
        <button
          className={style.item_btn}
          onClick={() => {
            deleteContact(id);
            setFilter('');
          }}
        >
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
};
