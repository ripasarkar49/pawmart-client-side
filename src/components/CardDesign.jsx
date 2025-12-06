import React from "react";
import { Link } from "react-router";
import Reveal from "./Reveal";

const CardDesign = ({ pets }) => {
  return (
    <div className="grid w-11/12 mx-auto py-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {pets.map((pet) => (
        <Reveal
          key={pet._id}
          className="card bg-base-100 border shadow-sm hover:scale-105 transition"
        >
          <figure className="h-48 overflow-hidden">
            <img
              className="w-full object-cover"
              src={pet.image}
              alt={pet.name}
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">{pet.name}</h2>
            <p>Category: {pet.category}</p>
            <div className="flex justify-between">
              <p>Location: {pet.location}</p>
              <p>Price: ${pet.price}</p>
            </div>

            <div className="card-actions justify-end">
              <Link to={`/see-details/${pet._id}`} className="btn btn-outline">
                See Details
              </Link>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default CardDesign;
