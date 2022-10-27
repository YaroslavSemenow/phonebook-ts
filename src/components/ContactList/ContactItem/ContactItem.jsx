import PropTypes from 'prop-types';
import style from './ContactItem.module.css';
import { toast } from 'react-toastify';
import { useDeleteContactMutation } from 'redux/contacts/contacts';
import { useEffect } from 'react';

export default function ContactItem({ contact }) {
  const [deleteContact, { isLoading, isSuccess, isError }] =
    useDeleteContactMutation();
  const { id, name, phone } = contact;

  useEffect(() => {
    if (isSuccess) {
      toast.success(`"${name}" was successfully deleted`, {
        autoClose: 3000,
      });
    }
    if (isError) {
      toast.error('Oops, something went wrong. Please, reload the page.', {
        autoClose: 7000,
      });
    }
  }, [isError, isSuccess, name]);

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
