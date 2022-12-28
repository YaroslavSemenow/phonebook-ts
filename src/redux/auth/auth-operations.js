import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = 'Bearer ' + token;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error);

      if (error.response.status === 400) {
        toast.error('A user with this name or email already exists.');
      } else {
        toast.error(
          'Oops! Something went wrong. Please reload the page and try again.'
        );
      }

      return rejectWithValue();
    }
  }
);

const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error);

      if (error.response.status === 400) {
        toast.error(
          'The email address and password combination you entered cannot be recognized or does not exist. Please try again.'
        );
      } else {
        toast.error(
          'Oops! Something went wrong. Please reload the page and try again'
        );
      }

      return rejectWithValue();
    }
  }
);

const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      console.log(error);
      toast.error(
        'Oops! Something went wrong. Please reload the page and try again.'
      );
      return rejectWithValue();
    }
  }
);

const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue();
    }
  }
);

const authOperations = {
  register,
  logIn,
  logOut,
  refreshCurrentUser,
};

export default authOperations;
