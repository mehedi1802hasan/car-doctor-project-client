
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Home/Main/Main";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import CheckOut from "../Pages/CheckOut";
import Bookings from "../Pages/Bookings";
import PrivateRoute from "../Provider/PrivateRoute";
const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },{
          path:'registration',
          element:<Registration></Registration>
        },
        {
          path:'checkout/:id',
          element:<CheckOut></CheckOut>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'bookings',
          element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    },
  ]);
  export default router;