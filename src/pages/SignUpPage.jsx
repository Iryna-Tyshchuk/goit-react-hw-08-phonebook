import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom/dist';

import { registerRequest } from 'redux/auth/operations';
import { selectAuthError, selectIsLoggedIn } from 'redux/auth/selectors';

import SignUpForm from 'components/Forms/SignUpForm/SignUpForm';
import { toast } from 'react-toastify';
import css from '../components/App/App.module.css';

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
    <main>
      <section>
        <div>
          <h1 className={css.hidden}>Register page</h1>
          {error !== null && <p>Oops, some error occured... {error}</p>}
          <SignUpForm onSubmit={handleRegister} />
        </div>
      </section>
    </main>
  );
};

export default SignUpPage;
