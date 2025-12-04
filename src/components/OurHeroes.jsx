import React from "react";

const heroes = [
  {
    name: "Anupoma",
    role: "Pet Care Volunteer",
    image: "https://i.ibb.co.com/jv3MtJ2y/IMG-20251009-WA0071.jpg",
  },
  {
    name: "Rimjhim",
    role: "Adopter",
    image: "https://i.ibb.co.com/H1MvsLf/ww2.png",
  },
  {
    name: "Anika",
    role: "Foster Caregiver",
    image: "https://i.ibb.co.com/bj63pkzw/ww.jpg",
  },
];

const OurHeroes = () => {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Meet Our Pet Heroes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {heroes.map((hero, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:scale-105 transition"
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
        </div>
      </section>
    </div>
  );
};

export default OurHeroes;
