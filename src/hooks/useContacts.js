import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import { contactsActions } from 'redux/contacts';

export default function useContacts() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleAddContact = (name, number) => {
    const id = shortid.generate();
    const newContact = { id, name, number };

    for (const { name } of contacts) {
      if (name.toLowerCase() === newContact.name.toLowerCase()) {
        alert(`${newContact.name} is already in contact`);
        return;
      }
    }

    dispatch(contactsActions.addContact(newContact));
  };

  const handleDeleteContact = id => {
    dispatch(contactsActions.deleteContact(id));
  };

  const handleFilter = string => dispatch(contactsActions.setFilter(string));

  return {
    contacts,
    filter,
    addContact: handleAddContact,
    deleteContact: handleDeleteContact,
    setFilter: handleFilter,
  };
}
