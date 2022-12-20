import { useState } from 'react';
import toast from 'react-hot-toast';
import { TextField, Button } from '@mui/material';
import { useAddContactMutation, useGetAllContactsQuery } from 'redux/contacts';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact, { isLoading }] = useAddContactMutation();
  const { data: contacts } = useGetAllContactsQuery();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    resetForm();
    const newContact = { name, number };

    for (const { name } of contacts) {
      if (name.toLowerCase() === newContact.name.toLowerCase()) {
        toast.error(`"${newContact.name}" is already in contact`, {
          duration: 3000,
        });
        return;
      }
    }

    toast.promise(addContact(newContact).unwrap(), {
      loading: 'Adding...',
      success: `Contact successfully added`,
      error: 'Oops! Something went wrong. Please reload the page and try again',
    });
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <ul className={styles.form__list}>
        <li className={styles.form__item}>
          <TextField
            label="Name"
            size="small"
            variant="standard"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={handleInputChange}
            value={name}
            required
          />
        </li>
        <li className={styles.form__item}>
          <TextField
            label="Number"
            size="small"
            variant="standard"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={handleInputChange}
            value={number}
            required
          />
        </li>
        <li className={styles.form__item}>
          <Button variant="contained" type="submit" disabled={isLoading}>
            Add contact
          </Button>
        </li>
      </ul>
    </form>
  );
}
