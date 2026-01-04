import React, { Suspense, useEffect, useState } from "react";
import CardDesign from "./CardDesign";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loading from "../pages/Loading";

const PetSuppliesDataAll = () => {
  const [petsData, setPetsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");

  useEffect(() => {
    const fetchPets = () => {
      setLoading(true);
      fetch(
        `https://pawmart-server-side.vercel.app/services?category=${category}`
      )
        .then((res) => res.json())
        .then((data) => {
          setPetsData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    };
    fetchPets();
  }, [category]);

  // Client-side filtering and sorting
  const filteredAndSortedPets = petsData
    .filter((pet) => {
      if (!search) return true;
      return pet.name.toLowerCase().includes(search.toLowerCase());
    })
    .sort((a, b) => {
      if (sort === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-[var(--color-base-200)] min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="w-11/12 mx-auto py-8">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-[var(--color-primary)] mb-2">
              Browse Pet Supplies
            </h1>
            <p className="text-gray-600">Find everything your pet needs in one place.</p>
          </div>

          {/* Controls Bar */}
          <div className="bg-base-100 p-4 rounded-2xl shadow-sm border border-base-200 flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
            {/* Search */}
            <div className="relative w-full md:w-1/3">
              <input 
                type="text" 
                placeholder="Search items..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input input-bordered w-full rounded-full pl-10 focus:outline-none focus:border-[var(--color-primary)] bg-base-200 text-base-content placeholder-gray-500"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              {/* Category Filter */}
              <select
                name="category"
                className="select select-bordered rounded-xl w-full sm:w-48 bg-base-200 text-base-content focus:outline-none focus:border-[var(--color-primary)]"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                <option value="Pets">Pets</option>
                <option value="Food">Pet Food</option>
                <option value="Accessories">Accessories</option>
                <option value="Care Products">Care Products</option>
              </select>

              {/* Sort Order */}
              <select
                className="select select-bordered rounded-xl w-full sm:w-48 bg-base-200 text-base-content focus:outline-none focus:border-[var(--color-primary)]"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          <Suspense
            fallback={<span className="loading loading-bars loading-md"></span>}
          >
            {filteredAndSortedPets.length > 0 ? (
               <CardDesign pets={filteredAndSortedPets} />
            ) : (
               <div className="text-center py-20">
                  <h3 className="text-2xl font-bold text-gray-400">No items found</h3>
                  <p className="text-gray-500">Try adjusting your search or filters.</p>
               </div>
            )}
           
          </Suspense>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PetSuppliesDataAll;
