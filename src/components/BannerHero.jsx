import React from "react";
import banner from "../assets/herobanner.png";
const BannerHero = () => {
  return (
    <div className="w-full mt-10 rounded-2xl bg-[#a2e0ff]">
      <div className="max-w-6xl mx-auto gap-1 flex flex-col  md:flex-row items-center justify-between py-6 px-10">
        <div className="md:w-1/2 space-y-4 ">
          <p className="text-[#d97c6e] font-semibold text-lg">
            Get Up to 25% Discount
          </p>

          <h1 className="text-2xl md:text-5xl font-bold  text-[#1a1919]">
            All New Best Latest Toy Collection
          </h1>

          <button className="mt-4 px-6 py-3 bg-[#f49c89] text-white rounded-full shadow-md hover:bg-[#ea8c75] transition">
            Shop Now
          </button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src={banner}
            className="w-full h-auto rounded-2xl"
            alt="Toy Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerHero;
