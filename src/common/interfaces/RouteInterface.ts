import React from 'react';

export default interface RouteInterface {
  name: string;
  pathName: string;
  element: React.ReactElement;
  isProtected: boolean;
}
