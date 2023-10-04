import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <div>Auth Layout</div>
      <Outlet />
    </>
  );
};

export default AuthLayout;
