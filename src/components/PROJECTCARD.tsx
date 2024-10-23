// components/ProjectSlider.tsx
"use client"; // Ensure this is a client component
import React from "react";
import Slider from "react-slick"; // Importing Slick Slider
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick theme CSS
import { projects } from "@/app/data/details"; // Ensure this path is correct
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { StaticImageData } from 'next/image';
import Link from "next/link";
// Define the Project interface as per your requirements
interface Project {
  id: number;
  cat:string,
  title: string;
  description: string;
  image: StaticImageData | string;
  badges: string[];
  url:string,

}

export default function ProjectSlider() {
  // Slider settings
  const settings = {
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 5000, 
    adaptiveHeight: true, 
  };

  // Check if projects exist and are an array
  if (!Array.isArray(projects) || projects.length === 0) {
    return <div>No projects available.</div>; // Handle empty or undefined projects
  }

  return (
    <div className="w-full h-full flex justify-center ">
      <Slider {...settings} className="w-full max-w-3xl"> 
        {projects.map((project: Project) => (
          <div key={project.id} className=" gap-5 flex flex-col items-start bg-carddd flex-wrap p-5 rounded border border-div lg:w-[60vw] ">
              <p>
          {project.cat}
          </p>
          <div className="flex justify-center py-5  h-[450px] overflow-hidden ">
  <Image 
    src={project.image} 
    alt={project.title} 
    width={500} // Adjust width to match the container width
    height={300} // Adjust height to match the container height
    className="object-cover object-bottom rounded-lg"
  />
</div>

           <div className="flex  flex-col items-start gap-5">
        
           <h3 className="playfair text-2xl italic font-bold">{project.title}</h3>
            <p>{project.description}</p>
            <div className="w-full flex gap-5 flex-wrap">
              {project.badges.map((badge, index) => (
                <Badge key={index}>{badge}</Badge>
              ))}
            </div>
            <Link href={project.url} target="_blank">
  <Button  >View Project</Button>
</Link>
           </div>
   
          </div>
        ))}
      </Slider>
    </div>
  );
}
