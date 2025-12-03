import React from "react";
import CardDesign from "./CardDesign";


const toyPromise = fetch("/toys.json").then((res) => res.json());
const PetAndSupplies = () => {
  const petsData = use(toyPromise);
  const supplier = petsData.slice(0, 3);
  return (
    <div>
      <h2 className="font-bold text-3xl my-3 w-11/12 mx-auto ">Pets & Supplies</h2>
      <CardDesign pets={supplier}></CardDesign>
    </div>
  );
};

export default PetAndSupplies;
