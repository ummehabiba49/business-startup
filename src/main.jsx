
import * as React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as ReactDOM from "react-dom/client";

import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Main from "./layout/Main.jsx";
import Login from "./components/login/login.jsx";
import Registration from "./components/registration/Registration.jsx";
import AuthProvider from "./components/providers/AuthProvider.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <PrivateRoute><App></App></PrivateRoute>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Registration></Registration>,
      },

      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('http://localhost:5000/users')

      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>
);