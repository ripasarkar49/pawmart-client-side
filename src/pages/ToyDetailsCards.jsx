import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router";

const ToyDetailsCards = ({ toy }) => {
  //   console.log(toy);

  return (
    <div className=" mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row gap-5">
      <div className="md:w-1/3 flex justify-center items-center bg-gray-100 p-4">
        <img
          src={toy.pictureURL}
          alt={toy.toyName}
          className="object-contain h-64 w-full"
        />
      </div>

      <div className="md:w-2/3 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{toy.toyName}</h2>
          <p className="text-gray-600 mb-3 text-justify">{toy.description}</p>
          <p className="mb-1">
            <span className="font-semibold">Category:</span> {toy.subCategory}
          </p>
          <p className="mb-1">
            <span className="font-semibold">Price:</span> ${toy.price}
          </p>
          <p className="mb-1">
            <span className="font-semibold">Rating:</span> {toy.rating}
          </p>
          <p className="mb-1">
            <span className="font-semibold">Available Quantity:</span>{" "}
            {toy.availableQuantity}
          </p>
          <p className="mb-1">
            <span className="font-semibold">Seller:</span> {toy.sellerName} (
            {toy.sellerEmail})
          </p>
          <p className="mb-1">
            <span className="font-semibold">SubCategory:</span> {toy.subCategory} (
            {toy.subCategory})
          </p>
        </div>
        <div className="mt-4">
          <Link className="btn btn-secondary" to="/toys">
            <IoMdArrowRoundBack />
            Back to Toys
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyDetailsCards;
