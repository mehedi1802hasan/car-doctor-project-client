import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Route/Routes.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='mx-auto max-w-7xl'>
   <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
 </div>
)
