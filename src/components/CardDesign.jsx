import React, { useRef, useEffect } from "react";
import { Link } from "react-router";
import gsap from "gsap";

const CardDesign = ({ pets }) => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Simple staggering animation when cards load/change
    gsap.fromTo(cardsRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" }
    );
  }, [pets]);

  return (
    <div className="grid w-11/12 mx-auto py-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {pets.map((pet, index) => (
        <div
          key={pet._id}
          ref={el => cardsRef.current[index] = el}
          className="group relative bg-base-100 rounded-3xl overflow-hidden shadow-lg border border-transparent hover:border-[var(--color-secondary)] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        >
          <figure className="h-64 overflow-hidden relative">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={pet.image}
              alt={pet.name}
            />
             <div className="absolute top-4 right-4 bg-base-100/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-sm uppercase tracking-wider text-[var(--color-primary)]">
               {pet.category}
             </div>
          </figure>

          <div className="p-6 flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-base-content group-hover:text-[var(--color-primary)] transition-colors">{pet.name}</h2>
            
            <div className="flex justify-between items-center text-sm text-base-content/70 font-medium">
              <span className="flex items-center gap-1">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                 {pet.location}
              </span>
              <span className="text-[var(--color-accent)] font-bold text-lg">${pet.price}</span>
            </div>

            <div className="mt-4 pt-4 border-t border-base-200 flex justify-end">
              <Link 
                to={`/see-details/${pet._id}`} 
                className="btn btn-sm sm:btn-md bg-[var(--color-primary)] border-none text-white hover:bg-[var(--color-secondary)] hover:text-gray-900 rounded-full px-6 transition-all duration-300 shadow-md transform group-hover:scale-105"
              >
                See Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDesign;
