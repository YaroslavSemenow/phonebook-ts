import { useDispatch, useSelector } from 'react-redux';
import { contactsActions } from 'redux/contacts';

export default function useContacts() {
  const filter = useSelector(state => state.contacts.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();

  const handleFilter = string => dispatch(contactsActions.setFilter(string));

  const handleIsDisabledButton = bull =>
    dispatch(contactsActions.setIsDisabledButton(bull));

  return {
    filter,
    isLoading,
    setFilter: handleFilter,
    setIsDisabledButton: handleIsDisabledButton,
  };
}
