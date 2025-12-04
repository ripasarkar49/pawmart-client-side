import React, { Suspense, use, useEffect, useState } from "react";
import CardDesign from "./CardDesign";
import Navbar from "./Navbar";
import Footer from "./Footer";


const PetSuppliesDataAll = () => {
  const [petsData, setPetsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPets = () => {
    fetch("http://localhost:3000/services")
      .then(res => res.json())
      .then(data => {
        setPetsData(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchPets();
  }, []);
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
