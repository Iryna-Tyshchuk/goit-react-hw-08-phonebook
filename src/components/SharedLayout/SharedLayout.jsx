import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { logOutRequest } from 'redux/auth/operations';

import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { selectIsLoggedIn, selectUserData } from 'redux/auth/selectors';
import { Container, Header, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUserData);
  const handleLogOut = () => {
    dispatch(logOutRequest());
  };

  return (
    <Container>
      <Header>
        <Link to={'/'}>HOME</Link>
        <nav>
          {isLoggedIn ? (
            <>
              <Link to={'/contacts'}>CONTACTS</Link>
              <span>HELLO, {userData.name}</span>
              <Button type="button" onClick={handleLogOut}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <Link to={'/login'}>LOGIN</Link>
              <Link to={'/register'}>SIGN UP</Link>
            </>
          )}
        </nav>
      </Header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
