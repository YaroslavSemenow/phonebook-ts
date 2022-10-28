import Container from './Container';
import { Toaster } from 'react-hot-toast';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList/ContactList';

export default function App() {
  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <Toaster
        toastOptions={{
          error: {
            duration: 7000,
          },
        }}
      />
    </Container>
  );
}
