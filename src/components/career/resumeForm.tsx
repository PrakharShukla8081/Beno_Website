import React from "react";
import Maintitle from "../common/maintitle";

const ResumeForm: React.FC = () => {
  return (
    <div
      className="my-4 md:my-8 lg:my-12 py-8 md:py-12 lg:py-16 xl:py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/career/resume-form-bg.webp')" }}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <Maintitle title={[{ text: "Post Your Resume", color: "white" }]} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 md:mt-8 lg:mt-12">
          <input
            type="text"
            placeholder="Full Name"
            className="bg-white/90 w-full py-3 px-4 rounded-md outline-none text-bblack placeholder-gray-600 border-0 border-b border-b-transparent focus:border-b-[3px] focus:border-borange"
          />

          <input
            type="email"
            placeholder="E-Mail"
            className="bg-white/90 w-full py-3 px-4 rounded-md outline-none text-bblack placeholder-gray-600 border-0 border-b border-b-transparent focus:border-b-[3px] focus:border-borange"
          />

          <input
            type="text"
            placeholder="Contact Details"
            className="bg-white/90 w-full py-3 px-4 rounded-md outline-none text-bblack placeholder-gray-600 border-0 border-b border-b-transparent focus:border-b-[3px] focus:border-borange"
          />

          <input
            type="number"
            placeholder="Experience in Years"
            className="bg-white/90 w-full py-3 px-4 rounded-md outline-none text-bblack placeholder-gray-600 border-0 border-b border-b-transparent focus:border-b-[3px] focus:border-borange"
          />

          <input
            type="text"
            placeholder="User Type"
            className="bg-white/90 w-full py-3 px-4 rounded-md outline-none text-bblack placeholder-gray-600 border-0 border-b border-b-transparent focus:border-b-[3px] focus:border-borange"
          />

          <input
            type="file"
            placeholder="Upload Resume"
            className="bg-white/90 w-full py-3 px-4 rounded-md outline-none text-bblack placeholder-gray-600 border-0 border-b border-b-transparent focus:border-b-[3px] focus:border-borange"
          />
        </div>

        <div className="mt-4 md:mt-6 flex justify-center">
          <input
            type="submit"
            className="text-bwhite py-3 px-10 hover:bg-bblue rounded-full text-xl cursor-pointer bg-borange transition-all duration-150 ease-in"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;
