import { useState } from 'react';
import useContacts from 'hooks/useContacts';
import { useAddContactMutation } from 'redux/contacts/contacts';
import style from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { setFilter } = useContacts();

  const [updatePost, result] = useAddContactMutation();

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
    setFilter('');
    updatePost({ name, phone });
    resetForm();
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
            <button type="submit">Add contact</button>
          </li>
        </ul>
      </div>
    </form>
  );
}
