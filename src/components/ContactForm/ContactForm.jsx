import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import {
  useAddContactMutation,
  useGetAllContactsQuery,
} from 'services/contacts';
import style from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [toastId, setToastId] = useState(null);
  const [addContact, { isLoading, isSuccess, isError }] =
    useAddContactMutation();
  const { data: contacts } = useGetAllContactsQuery();

  useEffect(() => {
    if (isLoading) {
      setToastId(toast.loading('Adding...'));
    }
  }, [isLoading]);

  useEffect(() => {
    if (isSuccess) {
      toast.success(`Contact successfully added`, { id: toastId });
    }
    if (isError) {
      toast.error(
        'Oops! Something went wrong. Please reload the page and try again',
        { id: toastId }
      );
    }
  }, [isError, isSuccess, toastId]);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    resetForm();
    const newContact = { name, phone };

    for (const { name } of contacts) {
      if (name.toLowerCase() === newContact.name.toLowerCase()) {
        toast.error(`"${newContact.name}" is already in contact`, {
          duration: 3000,
        });
        return;
      }
    }
    addContact(newContact);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.form__inner}>
        <ul className={style.form__list}>
          <li className={style.form__item}>
            <label className={style.form__label}>
              <span>Name</span>
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={handleInputChange}
                value={name}
                required
              />
            </label>
          </li>
          <li className={style.form__item}>
            {' '}
            <label className={style.form__label}>
              <span>Phone</span>
              <input
                type="tel"
                name="phone"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
                onChange={handleInputChange}
                value={phone}
                required
              />
            </label>
          </li>
          <li className={style.form__item}>
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Please wait...' : 'Add contact'}
            </button>
          </li>
        </ul>
      </div>
    </form>
  );
}
