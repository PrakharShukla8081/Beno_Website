import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Loading... | Beno Support",
  description: "Beno Support...",
};

const Loader: React.FC = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="relative">
          <div className="animate-spin rounded-full border-4 border-gray-500 border-t-borange border-r-borange w-16 h-16"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-borange rounded-full animate-ping"></div>
          </div>

          <div className="absolute inset-0 rounded-full bg-bwhite opacity-20 animate-pulse"></div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gray-600 font-medium animate-pulse">
            Loading
          </span>

          <div className="flex gap-1">
            <span className="animate-bounce">.</span>
            <span className="animate-bounce animation-delay-150">.</span>
            <span className="animate-bounce animation-delay-300">.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
