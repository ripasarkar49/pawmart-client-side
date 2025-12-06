import React, { Suspense, use, useEffect, useState } from "react";
import CardDesign from "./CardDesign";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loading from "../pages/Loading";

const PetSuppliesDataAll = () => {
  const [petsData, setPetsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchPets = () => {
      fetch(
        `https://pawmart-server-side.vercel.app/services?category=${category}`
      )
        .then((res) => res.json())
        .then((data) => {
          setPetsData(data);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    };
    fetchPets();
  }, [category]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="w-11/12 mx-auto">
          <select
            name="category"
            className=" border rounded-lg px-2 my-5 py-2 sm:w-60 
    text-sm sm:text-base focus:outline-none focus:ring focus:ring-blue-300"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            // defaultValue="Select Category"
          >
            <option value="">Select Category</option>
            <option value="Pets">Pets</option>
            <option value="Food">Pets Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Care Products">Pet Care Products</option>
          </select>
        </div>
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
