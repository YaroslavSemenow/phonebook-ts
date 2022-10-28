import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
  isDisabledButton: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter(state, { payload }) {
      state.filter = payload;
    },
    setIsDisabledButton(state, { payload }) {
      state.isLoading = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const contactsActions = contactsSlice.actions;
