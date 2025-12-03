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
      <h2 className="font-bold text-3xl my-3 w-11/12 mx-auto">
        Pets & Supplies
      </h2>
      <CardDesign pets={petsData} />
    </div>
  );
};

export default PetAndSupplies;
