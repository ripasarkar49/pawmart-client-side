import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";

import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Link } from "react-router";

const Slider = () => {
  const slides = [
    {
      img: slide1,
      tagline: "Find Your Furry Friend Today!",
      subtext: "Thousands of pets are waiting for a loving home. Make a difference.",
    },
    {
      img: slide2,
      tagline: "Adopt, Don’t Shop — Give a Pet a Home.",
      subtext: "Adoption is a loving option. Start your journey now.",
    },
    {
      img: slide3,
      tagline: "Because Every Pet Deserves Love and Care.",
      subtext: "Quality supplies for your beloved companions.",
    },
    {
      img: slide4,
      tagline: "Play, Love, Repeat — Pets Make Life Joyful!",
      subtext: "Discover toys and treats that bring wagging tails.",
    },
    {
      img: slide5,
      tagline: "Bring Happiness Home with a Loving Pet.",
      subtext: "Complete your family with a new best friend.",
    },
  ];

  return (
    <div className="w-full relative group">
      <Swiper
        spaceBetween={0}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper h-[500px] lg:h-[650px] w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center">
                <div className="w-11/12 mx-auto pl-4 md:pl-16 lg:pl-24 text-white max-w-3xl space-y-6">
                  <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight animate-fade-in-up drop-shadow-lg">
                    {slide.tagline}
                  </h2>
                  <p className="text-lg md:text-2xl text-gray-200 font-light max-w-xl animate-fade-in-up delay-200">
                    {slide.subtext}
                  </p>
                  <div className="animate-fade-in-up delay-300 pt-4">
                     <Link to="/pets" className="btn btn-lg border-none bg-[var(--color-secondary)] text-gray-900 border-none hover:bg-[var(--color-accent)] hover:scale-105 transition-transform shadow-lg rounded-full px-8">
                        Explore Now
                     </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
