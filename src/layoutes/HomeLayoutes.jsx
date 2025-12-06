import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";



const HomeLayoutes = () => {
  return (
    <div>
      <header>
        <section>
          <Navbar></Navbar>
        </section>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayoutes;
