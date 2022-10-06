import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { domRoutes } from './routes';

const RoutesMapping = () => {
  return (
    <BrowserRouter>
      <Routes>
        {domRoutes.map((route, i) => {
          if (route.protected)
            return (
              <Route
                key={`domroute_${i}`}
                path={route.path}
                element={<ProtectedRoute />}>
                <Route path={route.path} element={<route.element />}></Route>
              </Route>
            );
          else
            return (
              <Route
                key={`domroute_${i}`}
                path={route.path}
                element={<route.element />}
              />
            );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesMapping;
