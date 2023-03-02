import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contactData.contacts;
export const selectContactStatus = state => state.contactData.status;
export const selectContactError = state => state.contactData.error;
export const selectFilter = state => state.contactData.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().trim().includes(filter.toLowerCase())
    );
  }
);
