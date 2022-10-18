import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import style from './ContactItem.module.css';
import { itemsActions } from 'redux/contacts/itemsSlice';
import { filterActions } from 'redux/contacts/filterSlice';

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  const handleBtnClick = id => {
    dispatch(itemsActions.deleteContact(id));
    dispatch(filterActions.filterContacts(''));
  };

  return (
    <li className={style.item}>
      <div className={style.item_inner}>
        <span className={style.item_name}>{name}:</span> <span>{number}</span>
        <button className={style.item_btn} onClick={() => handleBtnClick(id)}>
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
