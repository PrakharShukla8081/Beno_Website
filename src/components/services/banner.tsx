"use client";
import React from "react";
import Button from "../common/button";
import { FaArrowRightLong } from "react-icons/fa6";

interface BannerProps {
  title: string;
  description: string;
  button: string;
  href: string;
  bg: string;
  titleColor?: string;
  descriptionColor?: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  button,
  href,
  bg,
  titleColor = "text-bblack",
  descriptionColor = "text-bblack",
}) => {
  return (
    <div
      className="bg-no-repeat bg-center bg-cover py-12 md:py-20 min-h-[50vh] md:min-h-[60vh] flex items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Animated Text Section */}
          <div
            className="flex flex-col items-center md:items-start"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <h1
              className={`${titleColor} text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug mb-4 text-center md:text-start`}
            >
              {title}
            </h1>

            <p
              className={`${descriptionColor} font-extralight text-base sm:text-lg lg:text-xl mb-6 leading-relaxed max-w-lg text-center md:text-start`}
            >
              {description}
            </p>

            <Button text={button} href={href} icon={<FaArrowRightLong />} />
          </div>

          <div className="hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
