// import { Loader } from 'components/Loader/Loader';
// import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { logOutRequest } from 'redux/auth/operations';
import { selectIsLoggedIn, selectUserData } from 'redux/auth/selectors';
import { Container, Header, Logo, Link } from './SharedLayout.styled';

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
        <Logo>PhoneBook</Logo>
        <nav>
          {isLoggedIn ? (
            <>
              <Link to={'/'}>HOME</Link>
              <Link to={'/contacts'}>CONTACTS</Link>
              <span>Hello, {userData.name}</span>
              <button type="button" onClick={handleLogOut}>
                LOG OUT
              </button>
            </>
          ) : (
            <>
              <Link to={'/'}>HOME</Link>
              <Link to={'/login'}>LOGIN</Link>
              <Link to={'/register'}>SIGN UP</Link>
            </>
          )}
        </nav>
      </Header>

      <main>
        <Outlet />
      </main>

      {/* <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense> */}
    </Container>
  );
};
