"use client"; // Ensure this is a client component

import { services } from "../data/details"; // Adjust the path if needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Correct import for FontAwesomeIcon
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import REVIEW from "@/components/REVIEW";
import Slider from "react-slick"; // Importing Slick Slider
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick theme CSS

export default function Page() {
  // Slick Slider settings for services
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <section className="w-full bg-black overflow-x-hidden">
      <div className="w-full h-[100vh] flex justify-center items-center flex-col">
        <h1 className=" text-center text-5xl font-black
        sm:text-5xl
        md:text-7xl
        lg:text-8xl ">
          Web <br /> Development
        </h1>
        <h2 className="text-5xl sm:text-5xl md:text-7xl lg:text-9xl"> & Design</h2>
        <p className="py-10 px-5 text-center">
          Web Development, Web design and Graphic design services.
        </p>
        <p className="border border-div rounded px-5 py-3">
          <FontAwesomeIcon icon={faArrowCircleDown} className="px-5" /> My Services
        </p>
      </div>
      <div className="flex flex-col gap-10 items-center">
        {/* Slick Slider for Services */}
        <Slider {...settings} className="w-full max-w-3xl">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col bg-carddd border border-div rounded p-5 gap-10 lg:px-20">
              <div>
                <p className="uppercase">{service.title}</p>
                <h2 className="text-5xl py-3 sm:text-3xl">{service.subtitle}</h2>
              </div>
              <div className="flex justify-center items-center">
                <Image src={service.image} alt={service.title} width={600} height={500} />
              </div>
              <div>
                <h3 className="playfair text-2xl py-5">{service.title}</h3>
                <p className="text-justify leading-6" dangerouslySetInnerHTML={{ __html: service.description }}></p>
                {service.list && (
                  <div>
                    <p>My services include:</p>
                    <ul className="list-disc ml-5">
                      {service.list.map((item, index) => (
                        <li key={index}>
                          <span className="font-bold italic playfair">{item.title}:</span> {item.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
        <REVIEW />
      </div>
    </section>
  );
}
