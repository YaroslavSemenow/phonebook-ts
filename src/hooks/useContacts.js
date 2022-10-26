import { useDispatch, useSelector } from 'react-redux';
import { contactsActions } from 'redux/contacts';

export default function useContacts() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  // const handleAddContact = (name, phone) => {
  //   const newContact = { name, phone };

  //   for (const { name } of contacts) {
  //     if (name.toLowerCase() === newContact.name.toLowerCase()) {
  //       alert(`${newContact.name} is already in contact`);
  //       return;
  //     }
  //   }
  //   dispatch(addContact(newContact));
  // };

  // const handleDeleteContact = id => {
  //   dispatch(deleteContact(id));
  // };

  const handleFilter = string => dispatch(contactsActions.setFilter(string));

  return {
    filter,
    setFilter: handleFilter,
  };
}
