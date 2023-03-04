import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectStatus } from 'redux/auth/selectors';

import { StyledForm } from './SignUpForm.styled';
import { Loader } from 'components/Loader/Loader';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';

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
            <span>Name: </span>
            <Input
              type="text"
              name="name"
              placeholder={'Enter your name'}
              ref={nameInputRef}
              required
            />
          </label>
        )}
        <label>
          <span>E-mail: </span>
          <Input
            type="email"
            name="email"
            placeholder={'Enter your e-mail'}
            ref={emailInputRef}
            required
          />
        </label>
        <label>
          <span>Password: </span>
          <Input
            type="password"
            name="password"
            minLength={7}
            placeholder={'Enter your password'}
            ref={passwordInputRef}
            required
          />
        </label>

        <Button disabled={status === 'pending'} type="submit">
          {isLoginForm ? 'Sign In' : 'Sign Up'}
        </Button>
      </StyledForm>
      {status === 'pending' && <Loader />}
    </>
  );
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignUpForm;
