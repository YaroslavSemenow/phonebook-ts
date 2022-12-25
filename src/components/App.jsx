import { lazy, useEffect, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { authOperations, authSelectors } from 'redux/auth';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import HomePage from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage';
// import LayoutMain from './LayoutMain';
import LayoutMain from './LayoutMain/LayoutMain';
import AppBar from './AppBar';
import Spinner from './Spinner';

const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      {isFetchingCurrentUser ? (
        <Spinner size={100} />
      ) : (
        <Suspense fallback={<Spinner size={100} />}>
          <Routes>
            <Route path="/" element={<LayoutMain />}>
              <Route
                index
                element={
                  <PublicRoute>
                    <HomePage />
                  </PublicRoute>
                }
              />

              <Route
                path="login"
                element={
                  <PublicRoute restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />

              <Route
                path="register"
                element={
                  <PublicRoute restricted>
                    <RegisterPage />
                  </PublicRoute>
                }
              />

              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <ContactsPage />
                  </PrivateRoute>
                }
              />

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      )}
      <Toaster
        toastOptions={{
          duration: 4000,
          position: 'bottom-right',
        }}
      />
    </>
  );
}
