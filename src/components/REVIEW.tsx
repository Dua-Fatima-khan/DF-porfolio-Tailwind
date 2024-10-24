"use client"; // Add this line to make it a client component

import React from "react";
import Slider from "react-slick"; // Importing Slick Slider
import { reviews } from "@/app/data/details"; // Importing your reviews data
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick theme CSS

export default function REVIEW() {
  // Slick Slider settings
  const settings = {
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 5000, 
    adaptiveHeight: true, 
  };

  return (
    <section className="pb-10 w-full flex flex-col bg-black gap-8">
      {/* Section Heading */}
      <h2 className="text-5xl font-bold text-center italic text-div py-8">
        Reviews
      </h2>

      {/* Slick Slider for Reviews */}
      <div className="w-full flex justify-center  overflow-hidden">
        <Slider {...settings} className="w-full max-w-3xl">
          {reviews.map((review) => (
            <div key={review.id} className="px-4">
              <div className="font-playfair flex flex-col items-start bg-carddd gap-5 p-6 rounded-lg shadow-lg border border-div text-div">
                <p className="">{review.id}</p>
                <h2 className="text-2xl font-bold mb-2">{review.title}</h2>
                <p className="text-base text-justify mb-4">{review.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
