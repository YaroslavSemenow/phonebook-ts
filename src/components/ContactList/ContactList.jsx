import useContacts from 'hooks/useContacts';
import ContactItem from './ContactItem/ContactItem';
import style from './ContactList.module.css';

export default function ContactList() {
  const { contacts, filter } = useContacts();

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
