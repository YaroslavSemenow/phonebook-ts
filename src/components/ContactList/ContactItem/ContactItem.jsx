import PropTypes from 'prop-types';
import style from './ContactItem.module.css';
import { toast } from 'react-toastify';
import { useDeleteContactMutation } from 'redux/contacts/contacts';

export default function ContactItem({ contact }) {
  const [deleteContact, { isLoading, isError }] = useDeleteContactMutation();
  const { id, name, phone } = contact;

  if (isLoading && !isError) {
    toast.success(`${name} was successfully deleted`);
  }

  const handleDeleteContact = () => {
    deleteContact(id);
  };

  return (
    <li className={style.item}>
      <div className={style.item_inner}>
        <span className={style.item_name}>{name}</span> <span>{phone}</span>
        <button
          className={style.item_btn}
          disabled={isLoading}
          onClick={handleDeleteContact}
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
