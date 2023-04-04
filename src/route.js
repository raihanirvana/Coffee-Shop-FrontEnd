import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Signup from "./pages/Signup";
import Payment from "./pages/Payment";
import Home from "./pages/Home";
import ChangePassword from "./pages/ChangePassword";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import History from "./pages/History";
import EditPassword from "./pages/Profile/changepass";
import { PrivateRoute, TokenNotAvail } from "./utils/wrapper/isTokenAvail";

const router = createBrowserRouter([
  {
    path: "/payment",
    element: (
      <PrivateRoute>
        <Payment />
      </PrivateRoute>
    ),
  },
  {
    path: "/editpass",
    element: (
      <PrivateRoute>
        <EditPassword />
      </PrivateRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <TokenNotAvail>
        <Signup />
      </TokenNotAvail>
    ),
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: (
      <TokenNotAvail>
        <Login />
      </TokenNotAvail>
    ),
  },
  {
    path: "/forgot",
    element: (
      <TokenNotAvail>
        <ForgotPassword />
      </TokenNotAvail>
    ),
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/productdetail/:id",
    element: (
      <PrivateRoute>
        <ProductDetail />
      </PrivateRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
  {
    path: "/history",
    element: (
      <PrivateRoute>
        <History />
      </PrivateRoute>
    ),
  },
  {
    path: "/changepass",
    element: <ChangePassword />,
  },
]);
export default router;
