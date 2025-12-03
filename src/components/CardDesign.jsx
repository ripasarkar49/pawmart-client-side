import React from 'react'

const CardDesign = () => {  
    const { name, image, price, category, id,location} = pets;
  return (
    <div className="card bg-base-100  border shadow-sm hover:scale-105 transition ease-in-out">
      <figure className="h-48 overflow-hidden">
        <img className="w-full object-cover" src={image} alt="pets" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Category:{category}</p>
        <p>Location:{location}</p>
        <p>Price:${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline">
            Product Detsils
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardDesign
