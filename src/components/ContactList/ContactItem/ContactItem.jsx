import PropTypes from 'prop-types';
import style from './ContactItem.module.css';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import toast from 'react-hot-toast';

export default function ContactItem({ contact }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation({
    fixedCacheKey: 'delete-contacts-item',
  });
  const { id, name, phone } = contact;

  const handleDeleteContact = () => {
    toast.promise(deleteContact(id).unwrap(), {
      loading: 'Deleting...',
      success: `"${contact.name}" has been deleted`,
      error: 'Oops! Something went wrong. Please reload the page and try again',
    });
  };

  return (
    <li className={style.item}>
      <div className={style.item_inner}>
        <span className={style.item_name}>{name}</span> <span>{phone}</span>
        <button
          className={style.item_btn}
          disabled={isDeleting}
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
