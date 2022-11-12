import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage';
import Layout from './Layout';
import AppBar from './AppBar';
import Spinner from './Spinner';

const LoginPage = React.lazy(() => import('pages/LoginPage'));
const RegisterPage = React.lazy(() => import('pages/RegisterPage'));
const ContactsPage = React.lazy(() => import('pages/ContactsPage'));

export default function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Spinner size={100} />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
