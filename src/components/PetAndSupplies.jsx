import React, { useEffect, useState } from "react";
import CardDesign from "./CardDesign";

const PetAndSupplies = () => {
  const [petsData, setPetsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/services/latest")
      .then((res) => res.json())
      .then((data) => setPetsData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <h1 className="text-3xl font-bold text-center">Recent Listings</h1>
        <p className="text-center">
          "Check out the latest pets and products added to our store. Don’t miss
          out on these new arrivals!"
        </p>
      </div>
      <CardDesign pets={petsData} />
    </div>
  );
};

export default PetAndSupplies;
