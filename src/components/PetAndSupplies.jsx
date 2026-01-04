import React, { useEffect, useState } from "react";
import CardDesign from "./CardDesign";
import Loading from "../pages/Loading";

const PetAndSupplies = () => {
  const [petsData, setPetsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://pawmart-server-side.vercel.app/services/latest")
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
    <div className="py-16 bg-[var(--color-base-200)]">
      <div className="w-11/12 mx-auto mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-[var(--color-primary)] mb-4">
          Recent Listings
        </h1>
        <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
          Check out the latest pets and products added to our store. Don’t miss
          out on these new arrivals!
        </p>
      </div>
      <CardDesign pets={petsData} />
    </div>
  );
};

export default PetAndSupplies;
