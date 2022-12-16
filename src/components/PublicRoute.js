import { Navigate } from 'react-router-dom';

export default function PublicRoute({ children, isLoggedIn }) {
  return <>{!isLoggedIn ? children : <Navigate to="/contacts" />}</>;
}
