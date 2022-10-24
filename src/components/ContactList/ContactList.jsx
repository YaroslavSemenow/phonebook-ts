import useContacts from 'hooks/useContacts';
import { useEffect } from 'react';
import ContactItem from './ContactItem/ContactItem';
import style from './ContactList.module.css';

export default function ContactList() {
  const { contacts, loading, error, filter, fetchContacts } = useContacts();

  useEffect(() => {
    fetchContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      {contacts.length !== 0 && (
        <ul className={style.list}>
          {visibleContacts.map(({ id, name, phone }) => (
            <ContactItem key={id} id={id} name={name} phone={phone} />
          ))}
        </ul>
      )}
      {loading && <p>Loading...</p>}
      {error && <h3>Oops, something went wrong. Please, reload the page.</h3>}
    </>
  );
}
