import React, { useEffect, useState } from "react";
import CardDesign from "./CardDesign";
import Loading from "../pages/Loading";

const PetAndSupplies = () => {
  const [petsData, setPetsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/services/latest")
      .then((res) => res.json())
      .then((data) => {
        setPetsData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading />;
  }
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
