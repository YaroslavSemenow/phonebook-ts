import PropTypes from 'prop-types';
import style from './ContactItem.module.css';
import useContacts from 'hooks/useContacts';

export default function ContactItem({ id, name, phone }) {
  const { deleteContact } = useContacts();

  return (
    <li className={style.item}>
      <div className={style.item_inner}>
        <span className={style.item_name}>{name}</span> <span>{phone}</span>
        <button
          className={style.item_btn}
          onClick={() => {
            deleteContact(id);
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
  phone: PropTypes.string.isRequired,
};
