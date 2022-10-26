import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://6355ae6a483f5d2df3b88926.mockapi.io';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => '/contacts',
    }),
  }),
});

export const { useGetAllContactsQuery } = contactsApi;
