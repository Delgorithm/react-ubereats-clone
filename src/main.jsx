import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hero from './components/Hero/Hero.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './routes/error-page.jsx'
import Home from './pages/Home/Home.jsx'
import Bordeaux from './pages/Bordeaux/Bordeaux.jsx'
import Paris from './pages/Paris/Paris.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/bordeaux",
    element: <Bordeaux />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Paris",
    element: <Paris />,
    errorElement: <ErrorPage />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
