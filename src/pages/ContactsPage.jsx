import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { getContactsRequest } from 'redux/contacts/operations';
import {
  selectContactError,
  selectContacts,
  selectContactStatus,
} from 'redux/contacts/selectors';

import { Loader } from 'components/Loader/Loader';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm.jsx/ContactForm';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import WithAuthRedirect from 'HOC/WithAuthRedirect';
import css from '../components/App/App.module.css';

function ContactsPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const contacts = useSelector(selectContacts);
  const status = useSelector(selectContactStatus);
  const error = useSelector(selectContactError);

  useEffect(() => {
    if (!isLoggedIn) return;

    dispatch(getContactsRequest());
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (error) {
      toast.error('Sorry, something went wrong');
    }
  }, [error]);

  return (
    <main>
      <h1 className={css.hidden}>Phone book</h1>
      <h2>Add new contact</h2>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts?.length !== 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>You haven't any contacts</p>
      )}

      {status === 'pending' && <Loader />}
    </main>
  );
}
export default WithAuthRedirect(ContactsPage, '/login');
