import { Toaster } from 'react-hot-toast';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from '../../components/ContactList/ContactList';
// import ContactList from 'components/ContactList';
import styles from './ContactsPage.module.css';

export default function ContactsPage() {
  return (
    <div className={styles.contactsPage}>
      <ContactForm />
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
