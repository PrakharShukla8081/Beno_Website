"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Maintitle from "@/components/common/maintitle";

export interface serviceItem {
  title: string;
  description: string;
  img: string;
  href: string;
}

export interface serviceProps {
  items: serviceItem[];
  initialVisible?: number;
  loadMoreCount?: number;
  title?: { text: string; color?: "black" | "orange" }[];
  description?: string;
  id?: string;
}

export const Services: React.FC<serviceProps> = ({
  items,
  initialVisible = 4,
  loadMoreCount = 2,
  title = [
    { text: "What", color: "black" },
    { text: "We Do", color: "orange" },
  ],
  description,
  id,
}) => {
  const [visibleCount, setVisibleCount] = useState(initialVisible);
  const [mobileOpenStates, setMobileOpenStates] = useState<{
    [key: string]: boolean;
  }>({});

  const visibleItems = useMemo(
    () => items.slice(0, visibleCount),
    [items, visibleCount]
  );

  const hasMore = visibleCount < items.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + loadMoreCount, items.length));
  };

  const handleCardClick = (index: number, e: React.MouseEvent) => {
    // Only handle on touch devices
    if ("ontouchstart" in window) {
      e.preventDefault();
      e.stopPropagation();
      setMobileOpenStates((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    }
  };

  return (
    <div
      className="container max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-12 lg:pt-16 xl:pt-20"
      id={id}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Maintitle title={title} description={description} />

      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-4 md:gap-6 mt-4 md:mt-8">
        {visibleItems.map((item, index) => {
          const isMobileOpen = mobileOpenStates[index] || false;

          return (
            <div
              key={`${item.title}-${index}`}
              className="relative mb-6 w-full min-h-80 bg-no-repeat bg-center bg-cover group overflow-hidden rounded-tl-4xl rounded-tr-4xl"
              style={{ backgroundImage: `url(${item.img})` }}
              data-aos="zoom-in"
              data-aos-delay={index * 120}
              onClick={(e) => handleCardClick(index, e)}
            >
              {/* Title overlay - visible by default */}
              <h3
                className={`
                  absolute bottom-0 bg-[#659E5AD9] text-white text-center py-4 w-full 
                  rounded-tl-4xl rounded-tr-4xl transition-all duration-300 
                  text-xl md:text-2xl font-semibold
                  ${
                    isMobileOpen
                      ? "opacity-0 translate-y-4"
                      : "group-hover:opacity-0 group-hover:translate-y-4"
                  }
                `}
              >
                {item.title}
              </h3>

              {/* Description panel - hidden by default */}
              <div
                className={`
                  absolute inset-0 bg-[#659E5AD9] text-white flex flex-col 
                  items-start justify-center p-5 md:p-10 transition-all 
                  duration-500 ease-in-out
                  ${
                    isMobileOpen
                      ? "translate-y-0"
                      : "translate-y-full group-hover:translate-y-0"
                  }
                `}
              >
                <Link
                  href={item.href}
                  onClick={(e) => {
                    // On mobile, stop propagation so clicking the link doesn't toggle the card
                    if ("ontouchstart" in window) {
                      e.stopPropagation();
                    }
                  }}
                  className="w-full"
                >
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 hover:text-borange transition-all duration-300">
                    {item.title}
                  </h3>
                </Link>
                <p className="text-md">{item.description}</p>
              </div>
            </div>
          );
        })}
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

export default Services;
