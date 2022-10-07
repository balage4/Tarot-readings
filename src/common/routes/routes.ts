import React from 'react';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Readings from '../../pages/Readings';

type singleRoute = {
  path: string;
  protected: boolean;
  element: React.FC;
};

export const domRoutes: Array<singleRoute> = [
  {
    path: '/',
    protected: false,
    element: Home,
  },
  {
    path: '/login',
    protected: false,
    element: Login,
  },
  {
    path: 'readings',
    protected: false,
    element: Readings,
  },
];
