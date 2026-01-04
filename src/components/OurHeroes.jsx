import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const heroes = [
  {
    name: "Anupoma",
    role: "Pet Care Volunteer",
    image: "https://i.ibb.co/jv3MtJ2y/IMG-20251009-WA0071.jpg",
    Add: "Dhaka",
    PhoneNo: "01315572442",
    email: "ripasarkar49@gmail.com",
  },
  {
    name: "Rimjhim",
    role: "Adopter",
    image: "https://i.ibb.co/H1MvsLf/ww2.png",
    Add: "Dhaka",
    PhoneNo: "01315572442",
    email: "ripasarkar49@gmail.com",
  },
  {
    name: "Anika",
    role: "Foster Caregiver",
    image: "https://i.ibb.co/bj63pkzw/ww.jpg",
    Add: "Dhaka",
    PhoneNo: "01315572442",
    email: "ripasarkar49@gmail.com",
  },
];

const OurHeroes = () => {
  return (
    <div className="py-12">
      <section>
        <div className="mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-4 text-[var(--color-primary)]">Meet Our Pet Heroes</h2>
          <p className="text-lg text-base-content/70 mb-12 max-w-2xl mx-auto">These dedicated individuals make a difference in the lives of pets every single day.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {heroes.map((hero, idx) => (
              <div
                key={idx}
                className="bg-base-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-base-200 group"
                data-tooltip-id={`hero-tooltip-${idx}`}
                data-tooltip-html={`
                  <div class="p-3 text-left">
                    <div class="flex items-center gap-3 mb-3 border-b border-gray-500 pb-2">
                       <img src="${hero.image}" class="w-12 h-12 rounded-full object-cover"/>
                       <div>
                         <h3 class="font-bold text-lg text-white">${hero.name}</h3>
                         <p class="text-xs text-gray-300">${hero.role}</p>
                       </div>
                    </div>
                    <p class="text-sm mb-1 text-gray-200"><strong>📍 Location:</strong> ${hero.Add}</p>
                    <p class="text-sm mb-1 text-gray-200"><strong>📞 Phone:</strong> ${hero.PhoneNo}</p>
                    <p class="text-sm text-gray-200"><strong>✉️ Email:</strong> ${hero.email}</p>
                  </div>
                `}
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                   <div className="absolute inset-0 rounded-full bg-[var(--color-secondary)] opacity-0 group-hover:opacity-20 transition-opacity duration-300 scale-110"></div>
                   <img
                    src={hero.image}
                    alt={hero.name}
                    className="w-full h-full object-cover rounded-full border-4 border-base-100 shadow-md z-1 relative"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-base-content">{hero.name}</h3>
                <p className="text-[var(--color-primary-light)] font-medium mt-1">{hero.role}</p>
              </div>
            ))}
          </div>

          {heroes.map((_, idx) => (
            <Tooltip
              key={idx}
              id={`hero-tooltip-${idx}`}
              place="top"
              effect="solid"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.9)", color: "#fff", boxShadow: "0px 4px 20px rgba(0,0,0,0.3)", borderRadius: "12px", zIndex: 50, backdropFilter: "blur(4px)" }}
              className="max-w-xs"
              clickable={true}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurHeroes;
