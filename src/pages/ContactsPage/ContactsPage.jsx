import { Toaster } from 'react-hot-toast';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from '../../components/ContactList/ContactList';
// import ContactList from 'components/ContactList';

export default function ContactsPage() {
  return (
    <div>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <Toaster
        toastOptions={{
          error: {
            duration: 3000,
          },
        }}
      />
    </div>
  );
}
