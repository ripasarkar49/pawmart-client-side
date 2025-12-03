import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";

import { Autoplay, Pagination } from "swiper/modules";

const Slider = () => {
  const slides = [
    {
      img: slide1,
      tagline: "Find Your Furry Friend Today!",
    },
    {
      img: slide2,
      tagline: "Adopt, Don’t Shop — Give a Pet a Home.",
    },
    {
      img: slide3,
      tagline: "Because Every Pet Deserves Love and Care.",
    },
    {
      img: slide4,
      tagline: "Play, Love, Repeat — Pets Make Life Joyful!",
    },
    {
      img: slide5,
      tagline: "Bring Happiness Home with a Loving Pet.",
    },
  ];
  return (
    <>
      <div className="w-11/12 mx-auto my-3">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <img
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover rounded-lg filter brightness-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center px-4">
                    {slide.tagline}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
