import Link from "next/link";
import React from "react";

const Cta: React.FC = () => {
  return (
    <div className="bg-[#14212B] mt-4 md:mt-8 lg:mt-12 mb-2 md:mb-4 lg:mb-6">
      <div className="container max-w-4xl mx-auto px-4 md:px-8 flex items-center justify-center md:justify-between gap-4 md:gap-0 flex-wrap py-2 md:py-4">
        <h5 className="text-lg md:text-xl lg:text-2xl text-bwhite text-center md:text-left">
          Still have any questions for us? Don't Worry!
        </h5>
        <Link
          href={"/contact-us"}
          className="text-bwhite py-1.5 px-6 hover:bg-bblue rounded-full text-lg cursor-pointer bg-borange transition-all duration-150 ease-in"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Cta;
