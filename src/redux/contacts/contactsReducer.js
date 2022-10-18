import { combineReducers } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { itemsReducer } from './itemsSlice';

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
