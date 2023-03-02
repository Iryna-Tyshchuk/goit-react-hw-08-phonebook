import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectStatus } from 'redux/auth/selectors';

import { StyledForm } from './SignUpForm.styled';
import { Loader } from 'components/Loader/Loader';

function SignUpForm({ onSubmit, isLoginForm = false }) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const status = useSelector(selectStatus);

  const handleSubmit = event => {
    event.preventDefault();

    const formData = {
      ...(!isLoginForm && { name: nameInputRef.current.value }),
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    onSubmit(formData);

    event.target.reset();
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <h2>{isLoginForm ? 'Sign In' : 'Sign Up'}</h2>
        {isLoginForm ? null : (
          <label>
            <span>Ім'я: </span>
            <input
              type="text"
              name="name"
              placeholder={"Введіть ім'я"}
              ref={nameInputRef}
              required
            />
          </label>
        )}
        <label>
          <span>Емейл: </span>
          <input
            type="email"
            name="email"
            placeholder={'Введіть cвій e-mail'}
            ref={emailInputRef}
            required
          />
        </label>
        <label>
          <span>Пароль: </span>
          <input
            type="password"
            name="password"
            minLength={7}
            placeholder={'Введіть пароль'}
            ref={passwordInputRef}
            required
          />
        </label>

        <button disabled={status === 'pending'} type="submit">
          {isLoginForm ? 'Sign In' : 'Sign Up'}
        </button>
      </StyledForm>
      {status === 'pending' && <Loader />}
    </>
  );
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignUpForm;
