// eslint-disable-next-line
import React from 'react';
import { Navigate } from 'react-router';
import MainLayout from './layouts/MainLayout/index';
import ManatokiLayout from './layouts/ManatokiLayout/index';
import ManatokiComics from './views/manatoki/ManatokiComics';

const routes = [
  {
    path: '/app',
    element: <MainLayout />,
    children: [
      {
        path: 'manatoki',
        elememt: <ManatokiLayout />,
        children: [
          {
            path: 'comics',
            element: <ManatokiComics />,
          },
          {
            path: '*',
            eletron: <Navigate to="/404" />,
          },
        ],
      },
      {
        path: '404',
        element: <div>404</div>,
      },
      {
        path: '*',
        element: <Navigate to="/app/manatoki/comics" />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/app/manatoki/comics" />,
  },
];

export default routes;
