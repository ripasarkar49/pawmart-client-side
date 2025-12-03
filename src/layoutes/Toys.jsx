import React, { Suspense, use } from "react";
import ToyCards from "../components/ToyCards";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import ToysData from "../components/ToysData";

// const toyPromise = fetch("/toys.json").then((res) => res.json());

const Toys = () => {
//   const toysData = use(toyPromise);

  return (
    <div>
      <Navbar></Navbar>
      <Outlet>
        <ToysData></ToysData>
        {/* <div>
          <Suspense
            fallback={<span className="loading loading-bars loading-md"></span>}
          >
            <ToyCards toys={toysData} />
          </Suspense>
        </div> */}
      </Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Toys;
