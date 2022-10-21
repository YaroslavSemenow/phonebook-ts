import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addContact: (state, { payload }) => [...state, payload],
    addContactsFromLS: (_, { payload }) => payload,
    deleteContact: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
  },
});

export const itemsReducer = itemsSlice.reducer;
export const { addContact, addContactsFromLS, deleteContact } =
  itemsSlice.actions;
