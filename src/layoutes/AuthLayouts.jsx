import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const AuthLayouts = () => {
  return (
    <div className="min-h-screen">
      <header>
        <Navbar></Navbar>
        <main className="w-11/12 mx-auto py-5">
        <Outlet></Outlet>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </header>
    </div>
  );
};

export default AuthLayouts;
