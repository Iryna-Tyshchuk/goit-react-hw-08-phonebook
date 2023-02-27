import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts, selectError, selectLoading } from 'redux/selectors';

import { ContactForm } from '../ContactForm.jsx/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Loader } from 'components/Loader/Loader';

import { StyledApp } from './App.styled';

export function App() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error('Sorry, something went wrong');
    }
  }, [error]);

  return (
    <StyledApp>
      <h1 style={{ fontSize: '32px' }}>Phone book</h1>
      <ContactForm />
      <h2 style={{ fontSize: '32px' }}>Contacts</h2>
      {contacts.length !== 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>You haven't any contacts</p>
      )}

      {isLoading && <Loader />}
    </StyledApp>
  );
}
