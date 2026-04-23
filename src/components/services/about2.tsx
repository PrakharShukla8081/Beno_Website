"use client";
import React from "react";

export interface About2Props {
  title1: string;
  title2?: string;
  description1: string;
  description2?: string;
  image: string;
  id: string;
  boxTitle: string;
  boxSubtitle: string;
  boxDescription: string;
  imagePosiotion?: "left" | "right";
}

export const About2: React.FC<About2Props> = ({
  title1,
  title2,
  description1,
  description2,
  image,
  id,
  boxTitle,
  boxSubtitle,
  boxDescription,
  imagePosiotion = "right",
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
        <div className="flex flex-col ">
          <img
            src={image}
            alt={title1}
            loading="lazy"
            className="max-w-[350px] md:max-w-[420px] lg:max-w-[480px] h-auto object-cover aspect-video rounded-3xl mx-auto"
            data-aos={imagePosiotion === "right" ? "fade-left" : "fade-right"}
            data-aos-delay="200"
          />

          <div
            className="rounded-3xl border border-gray-500 bg-bwhite p-4 lg:pl-10 -mt-10"
            data-aos="fade-up"
          >
            <div className="inline-flex flex-col mb-2">
              <h3 className="text-bblack w-fit">{boxTitle}</h3>
              <span className="inline-block bg-borange h-0.5 w-full"></span>
            </div>

            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-bblack mb-2">
              {boxSubtitle}
            </h2>

            <p className="text-bblack text-sm">{boxDescription}</p>
          </div>
        </div>

        <div
          className="flex flex-col gap-3 items-center md:items-start p-2 md:p-4"
          data-aos={imagePosiotion === "right" ? "fade-right" : "fade-left"}
          data-aos-delay="300"
        >
          <h3 className="text-bblack text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold lg:font-bold leading-tight text-center md:text-left">
            {title1} <br /> <span className="text-borange">{title2}</span>
          </h3>

          <p className="text-bblack font-light leading-relaxed line-clamp-3 md:line-clamp-none text-center md:text-left text-sm md:text-md xl:text-lg mt-2">
            {description1}
            <br />
            <br /> {description2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About2;
