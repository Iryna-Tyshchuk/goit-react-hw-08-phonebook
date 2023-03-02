import { createSlice } from '@reduxjs/toolkit';

import {
  addContactRequest,
  deleteContactRequest,
  getContactsRequest,
} from './operations';

const initialState = {
  contacts: [],
  status: 'idle', // 'idle' | 'pending' | 'resolved' | 'rejected'
  error: null,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState,

  reducers: {
    handleFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },

  extraReducers: builder =>
    builder
      // ----- Get Contacts -----

      .addCase(getContactsRequest.pending, pendingHandler)
      .addCase(getContactsRequest.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.contacts = action.payload;
      })
      .addCase(getContactsRequest.rejected, rejectHandler)

      // ----- Add Contact -----

      .addCase(addContactRequest.pending, pendingHandler)
      .addCase(addContactRequest.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.contacts = [...state.contacts, action.payload];
      })
      .addCase(addContactRequest.rejected, rejectHandler)

      // ----- Delete Contact -----

      .addCase(deleteContactRequest.pending, pendingHandler)
      .addCase(deleteContactRequest.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContactRequest.rejected, rejectHandler),
});

function pendingHandler(state) {
  state.error = null;
  state.status = 'pending';
}
function rejectHandler(state, action) {
  state.status = 'rejected';
  state.error = action.payload;
}

export const contactsReducer = contactsSlice.reducer;
export const { handleFilter } = contactsSlice.actions;
