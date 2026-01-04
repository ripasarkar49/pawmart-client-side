import React from "react";
import { useNavigate } from "react-router";
import petsImg from "../assets/pets.jpg";
import foodImg from "../assets/food.jpg";
import accessoriesImg from "../assets/accessories.jpg";
import careImg from "../assets/care.jpg";
import useScrollAnimation from "../hooks/useScrollAnimation";

const CategoryCards = () => {
  const navigate = useNavigate();
  const headerRef = useScrollAnimation("fade-up");
  const gridRef = useScrollAnimation("fade-up", 0.2);

  const categories = [
    { name: "Pets", emoji: "🐶", image: petsImg },
    { name: "Food", emoji: "🍖", image: foodImg },
    { name: "Accessories", emoji: "🧸", image: accessoriesImg },
    { name: "Care Products", emoji: "💊", image: careImg },
  ];

  return (
    <div className="w-11/12 mx-auto py-16">
      <div ref={headerRef} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-4">
          Shop by Category
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find your favorite pets, nutritious food, fun accessories, and essential
          care products. Click a category to explore all available listings
          instantly!
        </p>
      </div>

      <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            onClick={() =>
              navigate(
                `/category-filtered-product/${encodeURIComponent(cat.name)}`
              )
            }
            className="relative cursor-pointer rounded-2xl shadow-lg overflow-hidden group h-64 border border-base-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            {/* Background Image with Zoom Effect */}
            <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${cat.image})` }}
            ></div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end items-center p-6 text-white transition-opacity duration-300">
               <div className="transform transition-transform duration-300 group-hover:scale-125 mb-2 text-6xl drop-shadow-md">
                 {cat.emoji}
               </div>
               <h3 className="text-2xl font-bold tracking-wide border-b-2 border-transparent group-hover:border-[var(--color-secondary)] pb-1 transition-all">
                 {cat.name}
               </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
