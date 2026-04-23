"use client";
import React, { useState } from "react";

export interface AboutProps {
  title: {
    text: string;
    color?: "black" | "orange";
  }[];
  list?: { text: string }[];
  description1: string;
  description2?: string;
  image: string;
  id: string;
  imagePosiotion?: "left" | "right";
  enableReadMore?: boolean;
  defaultExpanded?: boolean;
}

export const About: React.FC<AboutProps> = ({
  title,
  list,
  description1,
  description2,
  image,
  id,
  imagePosiotion = "right",

  enableReadMore = true,
  defaultExpanded = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div
      className="container max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-12 lg:pt-16 xl:pt-20"
      id={id}
      data-aos="fade-up"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-6 md:gap-8">
        {/* IMAGE */}
        <div
          className={`md:col-span-2 flex items-center justify-center py-4 border-r-6 border-borange ${
            imagePosiotion === "right" ? "md:order-2" : "md:order-1"
          }`}
        >
          <img
            src={image}
            alt="about-image"
            loading="lazy"
            className="object-cover aspect-video rounded-tl-full rounded-bl-full"
            data-aos={imagePosiotion === "right" ? "fade-left" : "fade-right"}
            data-aos-delay="200"
          />
        </div>

        {/* TEXT */}
        <div
          className={`md:col-span-3 flex flex-col gap-3 items-center md:items-start p-2 md:p-4 ${
            imagePosiotion === "right" ? "md:order-1" : "md:order-2"
          }`}
          data-aos={imagePosiotion === "right" ? "fade-right" : "fade-left"}
          data-aos-delay="300"
        >
          {/* TITLE */}
          <h3 className="text-bblack text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold lg:font-bold leading-snug text-center md:text-left">
            {title.map((seg, index) => (
              <span
                key={index}
                className={
                  seg.color === "orange" ? "text-borange" : "text-bblack"
                }
              >
                {seg.text}{" "}
              </span>
            ))}
          </h3>

          <p className="text-bblack font-light leading-relaxed text-center md:text-left text-md transition-all duration-300">
            {description1}

            {description2 && isExpanded && ` ${description2}`}

            {enableReadMore && description2 && (
              <span
                className="text-borange font-medium cursor-pointer ml-1"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Read Less" : "Read More..."}
              </span>
            )}
          </p>

          <div className="flex flex-col gap-2 pl-2">
            {list &&
              list.map((l) => (
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-bblack rounded-full"></span>
                  <span className="text-md font-semibold">{l.text}</span>
                </div>
              ))}
          </div>

          {!enableReadMore && description2 && (
            <p className="text-bblack font-light leading-relaxed text-center md:text-left text-md transition-all duration-300">
              {description2}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
