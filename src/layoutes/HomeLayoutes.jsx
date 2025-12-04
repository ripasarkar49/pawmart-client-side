import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

import CategoryCards from "../components/CategoryCards";

const HomeLayoutes = () => {
  return (
    <div>
      <header>
        <section>
          <Navbar></Navbar>
        </section>
        <section>
          <Slider></Slider>
        </section>
        <section>
          <CategoryCards></CategoryCards>
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
