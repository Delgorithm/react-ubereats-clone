import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider, BrowserRouter} from "react-router-dom";
import ErrorPage from './routes/error-page.jsx';
import Home from './pages/Home/Home.jsx';
import Bordeaux from './pages/Bordeaux/Bordeaux.jsx';
import Paris from './pages/Paris/Paris.jsx';

import AuthLogin from './pages/Auth/AuthLogin.jsx';
import AuthRegister from './pages/Auth/AuthRegister.jsx';

import Lyon from './pages/Lyon/Lyon.jsx';
import Toulouse from './pages/Toulouse/Toulouse.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Browse from './pages/Browse/Browse.jsx';
import Profil from './pages/Profil/Profil.jsx';
import Orders from './pages/Orders/Orders.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Bordeaux",
    element: <Bordeaux />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Paris",
    element: <Paris />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Lyon",
    element: <Lyon />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Toulouse",
    element: <Toulouse />,
    errorElement: <ErrorPage />
  },
  {
    path: "/AuthLogin",
    element: <AuthLogin />,
    errorElement: <ErrorPage />
  },
  {
    path: "/AuthRegister",
    element: <AuthRegister />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Cart",
    element: <Cart />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Browse",
    element: <Browse />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Profil",
    element: <Profil />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Orders",
    element: <Orders />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
