import React, { useEffect, useState } from "react";
import CardDesign from "./CardDesign";

const PetAndSupplies = () => {
  const [petsData, setPetsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => setPetsData(data));
  }, []);

  const supplier = petsData.slice(0, 3);

  console.log("Supplier:", supplier);

  return (
    <div>
      <h2 className="font-bold text-3xl my-3 w-11/12 mx-auto">
        Pets & Supplies
      </h2>
      <CardDesign pets={supplier}></CardDesign>
    </div>
  );
};

export default PetAndSupplies;
