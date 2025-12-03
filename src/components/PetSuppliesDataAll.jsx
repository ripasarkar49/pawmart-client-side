import React, { Suspense, use } from "react";
import CardDesign from "./CardDesign";
import Navbar from "./Navbar";
import Footer from "./Footer";
const petPromise = fetch("http://localhost:3000/services").then((res) =>
  res.json()
);

const PetSuppliesDataAll = () => {
  const petsData = use(petPromise);
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Suspense
          fallback={<span className="loading loading-bars loading-md"></span>}
        >
          <CardDesign pets={petsData} />
        </Suspense>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PetSuppliesDataAll;
