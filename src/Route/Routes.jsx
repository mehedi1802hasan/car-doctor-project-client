
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Home/Main/Main";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
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
        }
      ]
    },
  ]);
  export default router;