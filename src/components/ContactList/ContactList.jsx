import useContacts from 'hooks/useContacts';
import ContactItem from './ContactItem/ContactItem';
import style from './ContactList.module.css';
import { useGetAllContactsQuery } from 'redux/contacts/contacts';

export default function ContactList() {
  const { data: contacts, isError, isFetching } = useGetAllContactsQuery();
  const { filter } = useContacts();

  const showContacts = contacts && contacts.length > 0;

  const getVisibleContacts = () => {
    if (!showContacts) {
      return;
    }

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
      {showContacts && (
        <ul className={style.list}>
          {visibleContacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </ul>
      )}
    </>
  );
}
