import useContacts from 'hooks/useContacts';
import ContactItem from './ContactItem/ContactItem';
import style from './ContactList.module.css';
import { useGetAllContactsQuery } from 'redux/contacts/contacts';

export default function ContactList() {
  const { data, isError, isFetching } = useGetAllContactsQuery();
  const { filter } = useContacts();

  const showContacts = data && data.length > 0;

  const getVisibleContacts = () => {
    if (!showContacts) {
      return;
    }

    const normalizedFilter = filter.toLowerCase();

    return data.filter(({ name }) =>
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
          {visibleContacts.map(({ id, name, phone }) => (
            <ContactItem key={id} id={id} name={name} phone={phone} />
          ))}
        </ul>
      )}
    </>
  );
}
