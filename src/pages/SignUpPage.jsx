import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom/dist';

import { registerRequest } from 'redux/auth/operations';
import { selectAuthError, selectIsLoggedIn } from 'redux/auth/selectors';

import SignUpForm from 'components/Forms/SignUpForm/SignUpForm';
import { toast } from 'react-toastify';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectAuthError);

  useEffect(() => {
    if (!isLoggedIn) return;

    navigate('/contacts');
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    if (error) {
      toast.error('Sorry, something went wrong');
    }
  }, [error]);

  const handleRegister = formData => {
    dispatch(registerRequest(formData));
  };

  return (
    <>
      <section>
        <div>
          <h1>Register page</h1>
          {error !== null && <p>Oops, some error occured... {error}</p>}
          <SignUpForm onSubmit={handleRegister} />
        </div>
      </section>
    </>
  );
};

export default SignUpPage;
