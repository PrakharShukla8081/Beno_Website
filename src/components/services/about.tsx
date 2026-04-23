"use client";
import React from "react";

export interface AboutProps {
  title1: string;
  title2?: string;
  description1: string;
  description2?: string;
  image: string;
  id: string;
  imageBorder?: boolean;
  borderRadius?: string;
  imagePosiotion?: "left" | "right";
}

export const About: React.FC<AboutProps> = ({
  title1,
  title2,
  description1,
  description2,
  image,
  id,
  imageBorder = true,
  borderRadius = "rounded-[10%_60%_0%_0%/10%_60%_0%_0%]",
  imagePosiotion = "left",
}) => {
  const directionClass =
    imagePosiotion === "right" ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <div
      className="container max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-12 lg:pt-16 xl:pt-20"
      id={id}
      data-aos="fade-up"
    >
      <div
        className={`flex flex-col ${directionClass} justify-center gap-6 md:gap-8 mt-6 md:mt-10`}
      >
        <div className="flex flex-col items-center">
          <img
            src={image}
            alt={title1}
            loading="lazy"
            className={`max-w-[300px] md:max-w-[400px] lg:max-w-[450px] h-auto object-cover aspect-square ${borderRadius}`}
            data-aos={imagePosiotion === "right" ? "fade-left" : "fade-right"}
            data-aos-delay="200"
          />
          {imageBorder && (
            <div
              className="w-[105%] h-4 bg-borange z-10 rounded-full"
              data-aos="fade-up"
            ></div>
          )}
        </div>

        <div
          className="flex flex-col gap-3 items-center md:items-start p-2 md:p-4"
          data-aos={imagePosiotion === "right" ? "fade-right" : "fade-left"}
          data-aos-delay="300"
        >
          <h3 className="text-bblack text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold lg:font-bold leading-snug text-center md:text-left">
            {title1} <br /> {title2}
          </h3>

          <p className="text-bblack font-light leading-relaxed line-clamp-3 md:line-clamp-none text-center md:text-left text-md md:text-lg xl:text-xl">
            {description1} <br />
            <br /> {description2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
