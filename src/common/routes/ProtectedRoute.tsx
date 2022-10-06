import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router';
import { ProtectedRouteProps } from './ProtectedRouteProps';

const ProtectedRoute = ({
  isAuthenticated,
  authenticationPath,
  redirectPath,
  setRedirectPath,
  outlet,
}: ProtectedRouteProps) => {
  const currentLocation = useLocation();

  useEffect(() => {
    if (!isAuthenticated) setRedirectPath(currentLocation.pathname);
  }, [isAuthenticated, setRedirectPath, currentLocation]);

  if (isAuthenticated && redirectPath === currentLocation.pathname)
    return outlet;
  return (
    <Navigate
      to={{ pathname: isAuthenticated ? redirectPath : authenticationPath }}
    />
  );
};

export default ProtectedRoute;
