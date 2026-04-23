"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Maintitle from "@/components/common/maintitle";

export interface processItem {
  title: string;
  description: string;
}

export interface processProps {
  items: processItem[];
  initialVisible?: number;
  loadMoreCount?: number;
  title?: { text: string; color?: "black" | "orange" }[];
  description?: string;
  id?: string;
}

export const Process: React.FC<processProps> = ({
  items,
  initialVisible = 9,
  loadMoreCount = 3,
  title = [
    { text: "What", color: "black" },
    { text: "We Do", color: "orange" },
  ],
  description,
  id,
}) => {
  const [visibleCount, setVisibleCount] = useState(initialVisible);

  const visibleItems = useMemo(
    () => items.slice(0, visibleCount),
    [items, visibleCount]
  );

  const hasMore = visibleCount < items.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + loadMoreCount, items.length));
  };

  return (
    <div
      className="container max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-12 lg:pt-16 xl:pt-20"
      id={id}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Maintitle title={title} description={description} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 md:gap-6 mt-4 md:mt-8">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="bg-white hover:bg-[#FFE6C7] rounded-br-4xl px-4 py-6 border-1 border-gray-300 border-l-4 border-l-borange transition-all duration-200 ease-in"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <h2 className="text-bblack text-xl md:text-2xl font-medium">
              {item.title}
            </h2>
            <p className="text-bblack">{item.description}</p>
          </div>
        ))}
      </div>

      {hasMore && (
        <div
          className="flex items-center justify-center mt-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 rounded-full bg-borange text-white font-semibold hover:bg-orange-600 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Process;
