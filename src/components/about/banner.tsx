"use client";
import React from "react";
import Link from "next/link";

const Banner: React.FC = () => {
  return (
    <div
      className="bg-no-repeat bg-right md:bg-center bg-cover bg-blend-overlay py-12 md:py-20 min-h-[30vh] md:min-h-[40vh] flex items-center"
      style={{ backgroundImage: `url("/images/about/banner.webp")` }}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="gap-10 md:gap-16 items-center">
          <div
            className="flex flex-col items-center md:items-start"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1
              className={`text-bblack text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug mb-2 text-center md:text-left max-w-xl`}
            >
              We master it ourselves, so we can do it for you
            </h1>

            <p
              className="text-bblack font-extralight text-base sm:text-lg lg:text-xl mb-2 leading-relaxed max-w-lg text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Are you ready to make a difference?
            </p>

            <div
              className="flex items-center justify-center gap-4"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <Link href="/" className="font-semibold">
                Knock Us!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
