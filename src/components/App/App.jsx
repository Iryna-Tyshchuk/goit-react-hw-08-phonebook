import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCurrentUserRequest } from 'redux/auth/operations';

import HomePage from 'pages/HomePage';
import SignUpPage from 'pages/SignUpPage';
import ContactsPage from 'pages/ContactsPage';
import SignInPage from 'pages/SignInPage';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Box } from './App.styled';

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
