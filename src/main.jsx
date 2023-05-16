import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import AuthProvider from './Provider/AuthProvider.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Route/Routes.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='mx-auto max-w-7xl'>
   <React.StrictMode>
 <AuthProvider>  <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
 </div>
)
