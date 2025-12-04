import React from "react";

import PetAndSupplies from "../components/PetAndSupplies";
import WhyAdopt from "../components/WhyAdopt";
import OurHeroes from "../components/OurHeroes";

const Home = () => {
  return (
    <div>
      <PetAndSupplies></PetAndSupplies>
      <section className="w-11/12 mx-auto pb-10 ">
        <WhyAdopt></WhyAdopt>
      </section>
      <section className="w-11/12 mx-auto pb-10 ">
        <OurHeroes></OurHeroes>
      </section>
    </div>
  );
};

export default Home;
