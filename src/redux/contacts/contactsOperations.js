import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'services';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async () => {
    const response = await API.getContacts();
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  'contact/addContact',
  async contact => {
    const response = await API.addContact(contact);
    return response.data;
  }
);
export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async id => {
    const response = await API.deleteContact(id);
    return response.data;
  }
);
