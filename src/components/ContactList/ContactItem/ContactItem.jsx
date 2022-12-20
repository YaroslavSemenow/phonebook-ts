import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts';
import toast from 'react-hot-toast';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import style from './ContactItem.module.css';

export default function ContactItem({ contact }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation({
    fixedCacheKey: 'delete-contacts-item',
  });
  const { id, name, number } = contact;

  const handleDeleteContact = () => {
    toast.promise(deleteContact(id).unwrap(), {
      loading: 'Deleting...',
      success: `"${contact.name}" has been deleted`,
      error: 'Oops! Something went wrong. Please reload the page and try again',
    });
  };

  return (
    <li className={style.item}>
      <div className={style.item__inner}>
        <span className={style.item__name}>{name}</span>{' '}
        <span className={style.item__number}>{number}</span>
        <IconButton
          aria-label="delete"
          disabled={isDeleting}
          onClick={handleDeleteContact}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
