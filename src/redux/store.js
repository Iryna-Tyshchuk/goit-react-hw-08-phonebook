import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { userReducer } from './auth/slice';
import { contactsReducer } from './contacts/slice';

const rootReducer = combineReducers({
  user: userReducer,
  contactData: contactsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
