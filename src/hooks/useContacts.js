import { useDispatch, useSelector } from 'react-redux';
import { contactsActions } from 'redux/contacts';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/contactsOperations';

export default function useContacts() {
  const contacts = useSelector(state => state.contacts.items);
  const loading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFetchContacts = () => {
    dispatch(fetchContacts());
  };

  const handleAddContact = (name, phone) => {
    const newContact = { name, phone };

    for (const { name } of contacts) {
      if (name.toLowerCase() === newContact.name.toLowerCase()) {
        alert(`${newContact.name} is already in contact`);
        return;
      }
    }
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilter = string => dispatch(contactsActions.setFilter(string));

  return {
    contacts,
    filter,
    loading,
    error,
    fetchContacts: handleFetchContacts,
    addContact: handleAddContact,
    deleteContact: handleDeleteContact,
    setFilter: handleFilter,
  };
}
