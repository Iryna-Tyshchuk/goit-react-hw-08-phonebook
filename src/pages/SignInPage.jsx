import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectAuthError, selectIsLoggedIn } from 'redux/auth/selectors';
import { loginRequest } from 'redux/auth/operations';
import SignUpForm from 'components/Forms/SignUpForm/SignUpForm';
import css from '../components/App/App.module.css';

function SignInPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectAuthError);

  useEffect(() => {
    if (!isLoggedIn) return;

    navigate('/contacts');
  }, [isLoggedIn, navigate]);

  const handleLogin = formData => {
    dispatch(loginRequest(formData));
  };

  return (
    <div>
      <h1 className={css.hidden}>Sign-in page</h1>
      {error !== null && <p>Oops, some error occured... {error}</p>}
      <SignUpForm onSubmit={handleLogin} isLoginForm />
    </div>
  );
}

export default SignInPage;
