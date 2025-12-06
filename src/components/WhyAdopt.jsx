import React from "react";
import Reveal from "./Reveal";

const WhyAdopt = () => {
  return (
    <section className="border py-13 rounded">
      <Reveal>
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4"> Why Adopt from PawMart?</h2>
          <p className="text-gray-700 text-lg mb-6">
            Adopting pets saves lives and gives loving animals a second chance.
            At PawMart, we connect you with pets in need of a home, ensuring
            each adoption is responsible and fulfilling.
          </p>
          <p className="text-gray-700 text-lg">
            By adopting instead of buying, you’re reducing stray populations and
            helping animals find safe, happy homes.
          </p>
        </div>
      </Reveal>
    </section>
  );
};

export default WhyAdopt;
