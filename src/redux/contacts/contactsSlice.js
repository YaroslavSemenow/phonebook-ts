import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const initialState = {
  items: [],
  filter: '',
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, { payload }) {
      state.items = [...state.items, payload];
    },
    deleteContact(state, { payload }) {
      state.items = state.items.filter(contact => contact.id !== payload);
    },
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [fetchContacts.rejected]: state => {
      state.isLoading = false;
      state.error = true;
    },
    [addContact.pending]: state => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = [...state.items, payload];
    },
    [addContact.rejected]: state => {
      state.isLoading = false;
      state.error = true;
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.items = state.items.filter(contact => contact.id !== payload.id);
      state.isLoading = false;
    },
    [deleteContact.rejected]: state => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const contactsActions = contactsSlice.actions;
