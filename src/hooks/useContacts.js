import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import { filterActions, itemsActions } from 'redux/contacts';

export default function useContacts() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleAddContactsFromLS = contacts => {
    dispatch(itemsActions.addContactsFromLS(contacts));
  };

  const handleAddContact = (name, number) => {
    const id = shortid.generate();
    const newContact = { id, name, number };

    for (const { name } of contacts) {
      if (name.toLowerCase() === newContact.name.toLowerCase()) {
        alert(`${newContact.name} is already in contact`);
        return;
      }
    }

    dispatch(itemsActions.addContact(newContact));
  };

  const handleDeleteContact = id => {
    dispatch(itemsActions.deleteContact(id));
  };

  const handleFilter = string => dispatch(filterActions.setFilter(string));

  return {
    contacts,
    filter,
    addContactsFromLS: handleAddContactsFromLS,
    addContact: handleAddContact,
    deleteContact: handleDeleteContact,
    setFilter: handleFilter,
  };
}
