import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCurrentUserRequest } from 'redux/auth/operations';

import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Box } from './App.styled';

const HomePage = lazy(() => import('pages/HomePage'));
const SignUpPage = lazy(() => import('pages/SignUpPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const SignInPage = lazy(() => import('pages/SignInPage'));

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    dispatch(getCurrentUserRequest());
  }, [dispatch]);

  return (
    <Box>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<SignInPage />} />
          <Route path="register" element={<SignUpPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </Box>
  );
}
