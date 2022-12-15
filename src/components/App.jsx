import { lazy, useEffect, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import PrivateRoute from './PrivateRoute';
import HomePage from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage';
import Layout from './Layout';
import AppBar from './AppBar';
import Spinner from './Spinner';

const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<Spinner size={100} />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route path="login" element={<LoginPage />} />

            <Route path="register" element={<RegisterPage />} />

            <PrivateRoute path="contacts">
              <ContactsPage />
            </PrivateRoute>

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
