import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Shared/Footer/Footer";
import authImage from "../assets/form-logo.jpg";

const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <div className="flex">
        <div className="flex-1">
          <Outlet />
        </div>
        <div className="flex-1">
          <img className="rounded-l-4xl" src={authImage} alt="Auth" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
