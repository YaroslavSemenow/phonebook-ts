import { useState } from 'react';
import { useEffect } from 'react';
import useContacts from 'hooks/useContacts';
import ContactItem from './ContactItem/ContactItem';
import style from './ContactList.module.css';
import { useGetAllContactsQuery } from 'redux/contacts/contacts';

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const { data, isError, isFetching, isSuccess } = useGetAllContactsQuery();
  const { filter } = useContacts();

  useEffect(() => {
    if (isSuccess) {
      setContacts(data);
    }
  }, [data, isSuccess]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      {isFetching && <p>Loading...</p>}
      {isError && <h3>Oops, something went wrong. Please, reload the page.</h3>}
      {contacts.length !== 0 && (
        <ul className={style.list}>
          {visibleContacts.map(({ id, name, phone }) => (
            <ContactItem key={id} id={id} name={name} phone={phone} />
          ))}
        </ul>
      )}
    </>
  );
}
