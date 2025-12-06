import React from "react";
import { useNavigate } from "react-router";
import petsImg from "../assets/pets.jpg";
import foodImg from "../assets/food.jpg";
import accessoriesImg from "../assets/accessories.jpg";
import careImg from "../assets/care.jpg";
import Reveal from "./Reveal";

const CategoryCards = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Pets", emoji: "🐶", image: petsImg },
    { name: "Food", emoji: "🍖", image: foodImg },
    { name: "Accessories", emoji: "🧸", image: accessoriesImg },
    { name: "Care Products", emoji: "💊", image: careImg },
  ];

  return (
    <div className="w-11/12 mx-auto py-7">
      <h1 className="text-3xl font-bold text-center">Shop by Category</h1>
      <p className="text-center">
        Find your favorite pets, nutritious food, fun accessories, and essential
        care products. Click a category to explore all available listings
        instantly!"
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6  pt-6 ">
        {categories.map((cat, i) => (
          <Reveal key={i}>
            <div
            onClick=
            {() =>
              navigate(
                `/category-filtered-product/${encodeURIComponent(cat.name)}`
              )
            }
            className="relative cursor-pointer rounded-lg shadow overflow-hidden
            group h-48" style=
            {{
              backgroundImage: `url(${cat.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            >
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white transition group-hover:bg-black/50">
              <div className="text-5xl">{cat.emoji}</div>
              <h3 className="text-xl font-bold mt-2">{cat.name}</h3>
            </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
