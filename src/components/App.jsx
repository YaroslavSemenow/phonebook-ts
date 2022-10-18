import Container from './Container';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

// const LS_KEY = 'contacts';

export default function App() {
  // ============== робота з ЛС =====================
  // const [isFirstRender, setIsFirstRender] = useState(false);

  // useEffect(() => {
  //   setIsFirstRender(true);

  //   const contactsLS = localStorage.getItem(LS_KEY);
  //   const parsedContactsLS = JSON.parse(contactsLS);

  //   if (parsedContactsLS) {
  //     setContacts(parsedContactsLS);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (isFirstRender) {
  //     localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  //   }
  // }, [contacts, isFirstRender]);

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}
