import { useEffect, useState } from 'react';
import useContacts from 'hooks/useContacts';
import ContactItem from './ContactItem';
import style from './ContactList.module.css';

const LS_KEY = 'contacts';

export default function ContactList() {
  const { contacts, filter, addContactsFromLS } = useContacts();
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    const contactsLS = localStorage.getItem(LS_KEY);
    const parsedContactsLS = JSON.parse(contactsLS);
    setIsFirstRender(false);

    if (!parsedContactsLS) {
      return;
    }
    addContactsFromLS(parsedContactsLS);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isFirstRender) {
      return;
    }

    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts, isFirstRender]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    contacts.length !== 0 && (
      <ul className={style.list}>
        {visibleContacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    )
  );
}
