/* eslint-disable react/jsx-no-undef */
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/home/Home";
import Main from "../Layout/Main";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);