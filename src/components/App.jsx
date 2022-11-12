import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage/RefisterPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import NotFoundPage from 'pages/NotFoundPage';
import Layout from './Layout';
import AppBar from './AppBar';

export default function App() {
  return (
    <>
      <AppBar />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
