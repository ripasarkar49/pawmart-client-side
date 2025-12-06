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
    <div>
      <section className="">
        <div className=" mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Meet Our Pet Heroes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {heroes.map((hero, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:scale-105 transition cursor-pointer"
                data-tooltip-id={`hero-tooltip-${idx}`}
                data-tooltip-html={`
                  <div class="p-2 text-left">
                    <img src="${hero.image}" class="w-24 h-24 rounded-full mb-2 mx-auto"/>
                    <h3 class="font-bold text-lg mb-1">${hero.name}</h3>
                    <p class="text-gray-600 mb-1">${hero.role}</p>
                    <p class="text-gray-600 mb-1"><strong>Location:</strong> ${hero.Add}</p>
                    <p class="text-gray-600 mb-1"><strong>Phone:</strong> ${hero.PhoneNo}</p>
                    <p class="text-gray-600"><strong>Email:</strong> ${hero.email}</p>
                  </div>
                `}
              >
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">{hero.name}</h3>
                <p className="text-gray-600">{hero.role}</p>
              </div>
            ))}
          </div>

          {heroes.map((_, idx) => (
            <Tooltip
              key={idx}
              id={`hero-tooltip-${idx}`}
              place="top"
              effect="white"
              className="max-w-xs"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurHeroes;
