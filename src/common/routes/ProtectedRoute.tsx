import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
  const isAuthUser = true; //temp
  return isAuthUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
