import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://6355ae6a483f5d2df3b88926.mockapi.io';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => '/cntacts',
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
