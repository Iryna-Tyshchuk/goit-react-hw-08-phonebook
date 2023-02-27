import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts, selectError, selectLoading } from 'redux/selectors';

import { ContactForm } from '../ContactForm.jsx/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

import { StyledApp } from './App.styled';
import { Loader } from 'components/Loader/Loader';

export function App() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(fetchContacts());
  }, [dispatch]);

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
      {error !== null && <p>Oops, some error occured... Message: {error}</p>}
      {isLoading && <Loader />}
    </StyledApp>
  );
}
