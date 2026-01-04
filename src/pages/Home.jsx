import React from "react";
import PetAndSupplies from "../components/PetAndSupplies";
import WhyAdopt from "../components/WhyAdopt";
import OurHeroes from "../components/OurHeroes";
import Slider from "../components/Slider";
import CategoryCards from "../components/CategoryCards";
import useScrollAnimation from "../hooks/useScrollAnimation";
import Contact from "../components/Contact";

const Home = () => {
    // Create separate refs for each section to trigger animations independently
    const sliderRef = useScrollAnimation("fade-in");
    const categoryRef = useScrollAnimation("fade-up");
    const suppliesRef = useScrollAnimation("fade-up", 0.2);
    const adoptRef = useScrollAnimation("fade-up");
    const heroesRef = useScrollAnimation("fade-up", 0.2);
    const contactRef = useScrollAnimation("fade-up", 0.2);

  return (
    <div className="bg-[var(--color-base-200)] overflow-hidden">
      <section ref={sliderRef}>
        <Slider></Slider>
      </section>
      
      <section ref={categoryRef}>
        <CategoryCards></CategoryCards>
      </section>
      
      <section ref={suppliesRef}>
        <PetAndSupplies></PetAndSupplies>
      </section>
      
      <section ref={adoptRef} className="w-11/12 mx-auto pb-16">
        <WhyAdopt></WhyAdopt>
      </section>
      
      <section ref={heroesRef} className="w-11/12 mx-auto pb-16">
        <OurHeroes></OurHeroes>
      </section>
      <section ref={contactRef} className="w-11/12 mx-auto pb-16">
        <Contact></Contact>
      </section>
    </div>
  );
};

export default Home;
