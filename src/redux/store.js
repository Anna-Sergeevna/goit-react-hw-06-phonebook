import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactReducer from './contacts/contacts-reducer';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
