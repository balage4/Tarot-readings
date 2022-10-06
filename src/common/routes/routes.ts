import React from 'react';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Readings from '../../pages/Readings';

type singleRoute = {
  path: string;
  element: React.FC;
  protected: boolean;
};

export const domRoutes: Array<singleRoute> = [
  {
    path: '/',
    element: Home,
    protected: false,
  },
  {
    path: '/login',
    element: Login,
    protected: false,
  },
  {
    path: 'readings',
    element: Readings,
    protected: false,
  },
];
