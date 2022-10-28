import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './ContactItem.module.css';
import { useDeleteContactMutation } from 'services/contacts';
import toast from 'react-hot-toast';

export default function ContactItem({ contact }) {
  const [deleteContact, { isLoading: isDeleting, isSuccess, isError }] =
    useDeleteContactMutation();
  const [toastId, setToastId] = useState(null);
  const { id, name, phone } = contact;

  useEffect(() => {
    if (isDeleting) {
      setToastId(toast.loading('Deleting...'));
    }
  }, [isDeleting]);

  useEffect(() => {
    if (isSuccess) {
      toast.success(`${contact.name} has been deleted`, { id: toastId });
    }
    if (isError) {
      toast.error(
        'Oops! Something went wrong. Please reload the page and try again',
        { id: toastId }
      );
    }
  }, [contact.name, isError, isSuccess, toastId]);

  return (
    <li className={style.item}>
      <div className={style.item_inner}>
        <span className={style.item_name}>{name}</span> <span>{phone}</span>
        <button
          className={style.item_btn}
          disabled={isDeleting}
          onClick={() => deleteContact(id)}
        >
          {isDeleting ? 'Deleting...' : 'Delete'}
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
