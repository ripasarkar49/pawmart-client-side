import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import BannerHero from "../components/BannerHero";

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
        <section className="w-11/12 mx-auto ">
          <BannerHero></BannerHero>
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
