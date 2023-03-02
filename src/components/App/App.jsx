import { Navigate, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import ContactsPage from 'pages/ContactsPage';
import HomePage from 'pages/HomePage';
import SignUpPage from 'pages/SignUpPage';
import { Box } from './App.styled';
import { getCurrentUserRequest, logOutRequest } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserData } from 'redux/auth/selectors';
import { useEffect } from 'react';
import SignInPage from 'pages/SignInPage';

export function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUserData);

  const handleLogOut = () => {
    dispatch(logOutRequest());
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    dispatch(getCurrentUserRequest());
  }, [dispatch]);

  return (
    <Box>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <header>
                <div style={{ display: 'flex', gap: 10 }}>
                  <nav>
                    {isLoggedIn ? (
                      <>
                        <ul style={{ display: 'flex', gap: 10 }}>
                          <li>
                            <NavLink to={'/'}>HOME</NavLink>
                          </li>

                          <li>
                            <NavLink to={'/contacts'}>CONTACTS</NavLink>
                          </li>
                        </ul>
                        <span>Hello, {userData.name}</span>
                        <div>
                          USER MENU
                          <button type="button" onClick={handleLogOut}>
                            LOG OUT
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <ul style={{ display: 'flex', gap: 10 }}>
                          <li>
                            <NavLink to={'/'}>HOME</NavLink>
                          </li>
                          <li>
                            <NavLink to={'/login'}>LOGIN</NavLink>
                          </li>
                          <li>
                            <NavLink to={'/register'}>SIGN UP</NavLink>
                          </li>
                        </ul>
                      </>
                    )}
                  </nav>
                </div>
              </header>
              <main>
                <Outlet />
              </main>
            </>
          }
        >
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
