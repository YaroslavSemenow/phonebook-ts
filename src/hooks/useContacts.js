import { useDispatch, useSelector } from 'react-redux';
import { contactsActions } from 'redux/contacts';

export default function useContacts() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilter = string => dispatch(contactsActions.setFilter(string));

  return {
    filter,
    setFilter: handleFilter,
  };
}
