import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth';
import { contactsApi } from './contacts/contacts-api';
import { contactsReducer } from './contacts/contacts-slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
