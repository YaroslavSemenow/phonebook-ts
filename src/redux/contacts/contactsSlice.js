import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const contactsActions = contactsSlice.actions;
