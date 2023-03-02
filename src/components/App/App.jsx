import { Navigate, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import ContactsPage from 'pages/ContactsPage';
import HomePage from 'pages/HomePage';
import SignUpPage from 'pages/SignUpPage';
import { Box } from './App.styled';

export function App() {
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
                      <li>
                        <NavLink to={'/contacts'}>CONTACTS</NavLink>
                      </li>
                    </ul>
                  </nav>
                  <div>
                    USER MENU <button type="button">LOG OUT</button>
                  </div>
                </div>
              </header>
              <main>
                <Outlet />
              </main>
            </>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="login" element={<div>SIGN UP PAGE</div>} />
          <Route path="register" element={<SignUpPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </Box>
  );
}
