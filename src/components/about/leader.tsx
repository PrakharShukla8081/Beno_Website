import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Leader: React.FC = () => {
  return (
    <section className="container max-w-7xl mx-auto px-4 md:px-8 mt-8 md:mt-12 lg:mt-16 xl:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center">
          <img
            src="/images/about/pawan-sir.webp"
            alt="Pavan Sengar"
            className="object-contain w-[320px] md:w-[400px] lg:w-[450px] max-h-[450px]"
          />

          <div className="rounded-3xl bg-gradient-to-r from-[#F1742D] to-[#C2221E] p-6 lg:pb-10 flex flex-col gap-2 items-center">
            <h4 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl relative after:content-[''] after:absolute after:bg-bwhite after:w-[105%] after:h-0.5 after:-bottom-1 after:left-1/2 after:-translate-x-1/2">
              Pavan Sengar
            </h4>
            <p className="text-white text-md md:text-lg lg:text-xl mb-4 md:mb-0">
              Chief Executive Officer
            </p>
          </div>

          <div className="bg-bwhite rounded-xl py-2 px-4 flex items-center justify-center gap-2 shadow-lg h-14 -mt-7">
            <div className="bg-[#F1742D] w-8 h-8 flex items-center justify-center">
              <Link
                href={"https://www.linkedin.com/in/pavan-ceo/"}
                className="text-bwhite"
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: "url('/images/about/leader-right-bg.webp')",
          }}
          className="min-h-100 bg-cover bg-center bg-no-repeat rounded-[50px_50px_50px_50px] lg:rounded-[50px_250px_50px_50px] p-12 md:p-16 lg:p-20"
        >
          <h1 className="text-3xl lg:text-5xl text-bwhite font-bold leading-snug">
            Leading from <br className="hidden lg:block" /> the front
          </h1>
          <Link
            href="/"
            className="mt-4 md:mt-8 
    relative inline-flex items-center gap-3 
    text-white uppercase text-sm font-bold tracking-[3px]
    border-3 border-white border-l-0
    px-12 pl-14 py-3
    group
    before:content-[''] before:absolute before:left-0 before:top-0 before:w-[3px] before:h-[30%] before:bg-white
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[3px] after:h-[30%] after:bg-white
  "
          >
            <span
              className="
      absolute top-1/2 -translate-y-1/2 -left-10 
      flex items-center justify-center
      w-[40px]
      transition-all duration-300
      group-hover:left-0
    "
            >
              <MdOutlineArrowRightAlt
                size={50}
                className="text-white text-3xl rotate-180 hidden sm:block"
              />
            </span>
            MEET OUR LEADER
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Leader;
