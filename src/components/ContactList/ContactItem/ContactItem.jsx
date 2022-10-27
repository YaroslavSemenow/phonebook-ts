import PropTypes from 'prop-types';
import style from './ContactItem.module.css';
import { useDeleteContactMutation } from 'redux/contacts/contacts';

export default function ContactItem({ contact }) {
  const [deleteContact, { isLoading, isSuccess, isError }] =
    useDeleteContactMutation();
  const { id, name, phone } = contact;

  return (
    <li className={style.item}>
      <div className={style.item_inner}>
        <span className={style.item_name}>{name}</span> <span>{phone}</span>
        <button
          className={style.item_btn}
          disabled={isLoading}
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
