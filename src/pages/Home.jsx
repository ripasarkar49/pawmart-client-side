import React from "react";

import PetAndSupplies from "../components/PetAndSupplies";
import WhyAdopt from "../components/WhyAdopt";
import OurHeroes from "../components/OurHeroes";
import Slider from "../components/Slider";
import CategoryCards from "../components/CategoryCards";

const Home = () => {
  return (
    <div>
      <section>
        <Slider></Slider>
      </section>
      <section>
        <CategoryCards></CategoryCards>
      </section>
      <section>
        <PetAndSupplies></PetAndSupplies>
      </section>
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
