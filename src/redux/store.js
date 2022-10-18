import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsReducer';

// export const addContact = createAction('contacts/addContact');
// export const deleteContact = createAction('contacts/deleteContact');
// export const filterContacts = createAction('contacts/filterContacts');

// const itemsReducer = createReducer([], {
//   [addContact]: (state, { payload }) => [...state, payload],
//   [deleteContact]: (state, { payload }) =>
//     state.filter(contact => contact.id !== payload),
// });

// const filterReducer = createReducer('', {
//   [filterContacts]: (_, { payload }) => payload,
// });

// const contactssReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
