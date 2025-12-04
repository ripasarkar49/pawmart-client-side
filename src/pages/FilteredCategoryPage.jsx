import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const FilteredCategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]); // <-- THIS MUST EXIST

  useEffect(() => {
    fetch(`http://localhost:3000/services?category=${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Products:", data);
        setProducts(data);        
      })
      .catch((err) => console.error(err));
  }, [categoryName]);

  return (
   <div>
    <Navbar></Navbar>
     <div className="w-11/12 mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-2">
        Showing Results for: {categoryName}
      </h1>
      <p className="text-center text-gray-600 mb-5">
        {products.length} items found
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p._id} className="border p-4 rounded-lg shadow">
            <img
              src={p.image}
              className="h-40 w-full object-cover rounded"
              alt=""
            />
            <h2 className="text-xl font-bold mt-2">{p.name}</h2>
            <p className="text-gray-600">Category: {p.category}</p>
            <p className="font-semibold mt-1">${p.price}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer></Footer>
   </div>
  );
};

export default FilteredCategoryPage;
