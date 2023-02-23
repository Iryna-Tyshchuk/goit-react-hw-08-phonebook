import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      prepare: newContact => {
        return { payload: { ...newContact, id: nanoid() } };
      },
      reducer: (state, action) => {
        state.contacts = [action.payload, ...state.contacts];
      },
    },

    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },

    handleFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addContact, deleteContact, handleFilter, filteredContacts } =
  contactsSlice.actions;
