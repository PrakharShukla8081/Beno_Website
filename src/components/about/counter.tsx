import React from "react";

const Counter: React.FC = () => {
  return (
    <section
      style={{ backgroundImage: "url('/images/about/counter-bg.webp')" }}
      className="bg-cover bg-center bg-no-repeat mt-8 md:mt-12 lg:mt-16 xl:mt-20 py-8 md:py-12 lg:py-16 xl:py-20"
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <div className="flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-[#FFD7A4] to-[#FFFFFF] rounded-2xl py-12">
            <h2 className="text-[#F1742D] text-3xl lg:text-5xl  font-bold">
              USD 6.5+
            </h2>
            <p className="text-bblack font-medium text-lg md:text-xl xl:text-2xl">
              Billion Total Revenue
            </p>
          </div>{" "}
          <div className="flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-[#FFD7A4] to-[#FFFFFF] rounded-2xl py-12">
            <h2 className="text-[#F1742D] text-3xl lg:text-5xl  font-bold">
              46,000+
            </h2>
            <p className="text-bblack font-medium text-lg md:text-xl xl:text-2xl">
              Associates
            </p>
          </div>{" "}
          <div className="flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-[#FFD7A4] to-[#FFFFFF] rounded-2xl py-12">
            <h2 className="text-[#F1742D] text-3xl lg:text-5xl  font-bold">
              1250+
            </h2>
            <p className="text-bblack font-medium text-lg md:text-xl xl:text-2xl">
              Global Customers
            </p>
          </div>{" "}
          <div className="flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-[#FFD7A4] to-[#FFFFFF] rounded-2xl py-12">
            <h2 className="text-[#F1742D] text-3xl lg:text-5xl  font-bold">
              90+
            </h2>
            <p className="text-bblack font-medium text-lg md:text-xl xl:text-2xl">
              Presence in Countries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
