import React from "react";
import { useLoaderData } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SeeDetails = () => {
  const data = useLoaderData();
  return (
   <div>
    <Navbar></Navbar>
     <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row gap-5 my-10">
      <div className="md:w-1/3 flex justify-center items-center bg-gray-100 p-4">
        <img
          src={data.image}
          alt={data.name}
          className="object-contain h-64 w-full"
        />
      </div>

      <div className="md:w-2/3 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
          <p className="text-gray-600 mb-3 text-justify">{data.description}</p>
          <p className="mb-1">
            <span className="font-semibold">Category:</span> {data.category}
          </p>
          <p className="mb-1">
            <span className="font-semibold">Price:</span> ${data.price}
          </p>
          <p className="mb-1">
            <span className="font-semibold">Location:</span> {data.location}
          </p>
          <p className="mb-1">
            <span className="font-semibold">Owner's Email:</span> {data.email}
          </p>
          <p className="mb-1">
            <span className="font-semibold">Pick Up Date:</span> {data.date}
          </p>
        </div>

        <div className="mt-4">
          <button className="btn btn-secondary w-full">Order Now</button>
        </div>
      </div>
    </div>
    <Footer></Footer>
   </div>
  );
};

export default SeeDetails;
