import { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import style from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const id = shortid.generate();
    const newContact = { id, ...this.state };

    this.props.onSubmit(newContact);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
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
                  onChange={this.handleInputChange}
                  value={name}
                  required
                />
              </label>
            </li>
            <li className={style.form__item}>
              {' '}
              <label className={style.form__label}>
                <span>Number</span>
                <input
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  onChange={this.handleInputChange}
                  value={number}
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
}

export default ContactForm;
