import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const response = await axios.post('/users/signup', credentials);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const response = await axios.post('/users/login', credentials);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
});

const authOperations = {
  register,
  logIn,
};

export default authOperations;
