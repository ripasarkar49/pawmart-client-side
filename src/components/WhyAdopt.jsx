import React from "react";

const WhyAdopt = () => {
  return (
    <section className="py-12 bg-base-100 rounded-3xl shadow-sm border border-base-200">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-extrabold mb-6 text-[var(--color-primary)]"> Why Adopt from PawMart?</h2>
          <div className="space-y-4">
             <p className="text-base-content/80 text-xl leading-relaxed">
            Adopting pets saves lives and gives loving animals a second chance.
            At <span className="font-bold text-[var(--color-secondary)]">PawMart</span>, we connect you with pets in need of a home, ensuring
            each adoption is responsible and fulfilling.
          </p>
          <p className="text-base-content/80 text-xl leading-relaxed">
            By adopting instead of buying, you’re reducing stray populations and
            helping animals find safe, happy homes.
          </p>
          </div>
          
          <div className="mt-8 flex justify-center gap-4">
             <div className="badge badge-lg bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100 p-4 font-bold border-none">Save a Life</div>
             <div className="badge badge-lg bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100 p-4 font-bold border-none">Unconditional Love</div>
             <div className="badge badge-lg bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-100 p-4 font-bold border-none">End Cruelty</div>
          </div>
        </div>
    </section>
  );
};

export default WhyAdopt;
