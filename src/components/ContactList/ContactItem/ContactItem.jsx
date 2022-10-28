import PropTypes from 'prop-types';
import style from './ContactItem.module.css';
import { useDeleteContactMutation } from 'services/contacts';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

export default function ContactItem({ contact }) {
  const [deleteContact, { isLoading: isDeleting, isSuccess, isError }] =
    useDeleteContactMutation();
  const { id, name, phone } = contact;

  useEffect(() => {
    if (isSuccess) {
      toast.success(`${contact.name} has been deleted`);
    }
    if (isError) {
      toast.error(
        'Oops! Something went wrong. Please reload the page and try again'
      );
    }
  }, [contact.name, isError, isSuccess]);

  console.log('isSuccess :', isSuccess, 'isError :', isError);

  return (
    <li className={style.item}>
      <div className={style.item_inner}>
        <span className={style.item_name}>{name}</span> <span>{phone}</span>
        <button
          className={style.item_btn}
          disabled={isDeleting}
          onClick={() => deleteContact(id)}
        >
          Detete
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
