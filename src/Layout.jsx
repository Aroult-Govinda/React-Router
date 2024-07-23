import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

// Outlet is a react-router-dom functionality that helps to dynamically change things in the given Layout.

function Layout() {
  return (
    <>
      <Header />
      <Outlet />  
      <Footer />
    </>
  );
}

export default Layout;
