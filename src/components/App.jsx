import { useState, useEffect } from 'react';
import Container from './Container';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

const LS_KEY = 'contacts';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [isFirstRender, setIsFirstRender] = useState(false);

  useEffect(() => {
    setIsFirstRender(true);

    const contactsLS = localStorage.getItem(LS_KEY);
    const parsedContactsLS = JSON.parse(contactsLS);

    if (parsedContactsLS) {
      setContacts(parsedContactsLS);
    }
  }, []);

  useEffect(() => {
    if (isFirstRender) {
      localStorage.setItem(LS_KEY, JSON.stringify(contacts));
    }
  }, [contacts, isFirstRender]);

  const formSubmitHandler = newContact => {
    setContacts(prevContacts => {
      for (const { name } of prevContacts) {
        if (name.toLowerCase() === newContact.name.toLowerCase()) {
          alert(`${newContact.name} is already in contact`);
          return prevContacts;
        }
      }

      return [...prevContacts, newContact];
    });
  };

  const handleInputChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => {
        return contact.id !== contactId;
      })
    );
  };

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleInputChangeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
}
