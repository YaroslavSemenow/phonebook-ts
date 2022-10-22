import { combineReducers } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { itemsReducer } from './itemsSlice';

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
