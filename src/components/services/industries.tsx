"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Maintitle from "@/components/common/maintitle";

export interface InsustryItem {
  title: string;
  description: string;
  img: string;
  href: string;
}

export interface IndustryProps {
  items: InsustryItem[];
  initialVisible?: number;
  loadMoreCount?: number;
  title?: { text: string; color?: "black" | "orange" }[];
  description?: string;
  id?: string;
}

export const Industries: React.FC<IndustryProps> = ({
  items,
  initialVisible = 6,
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
    >
      <Maintitle title={title} description={description} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center mt-4 md:mt-8">
        {visibleItems.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="p-2 flex flex-col gap-2 relative mb-6 group"
            data-aos="zoom-in"
            data-aos-delay={index * 80}
          >
            <Link href={item.href}>
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="h-auto aspect-square object-cover rounded-[50%_5%_5%_5%/_50%_5%_5%_5%]"
              />
            </Link>

            <Link
              href={item.href}
              className="
                absolute -bottom-4 left-1/2 transform -translate-x-1/2 
                bg-bwhite rounded-lg w-[80%] mx-auto flex flex-col 
                justify-center items-center p-3 shadow-lg
                group-hover:bg-borange transition-all duration-1000
              "
            >
              <h3 className="text-bblack text-lg font-semibold group-hover:hidden">
                {item.title}
              </h3>

              <p className="hidden group-hover:block text-white font-light">
                {item.description}
              </p>
            </Link>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="flex items-center justify-center mt-6">
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

export default Industries;
