import axios from 'axios';

axios.defaults.baseURL = 'https://6355ae6a483f5d2df3b88926.mockapi.io/';

export const getContacts = async () => {
  const response = await axios.get('/contacts');
  return response;
};

export const addContact = async contact => {
  const response = await axios.post('/contacts', contact);
  return response;
};
export const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response;
};
