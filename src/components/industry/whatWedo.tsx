"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Maintitle from "@/components/common/maintitle";

export interface WhatWedoItem {
  title: string;
  description: string;
  img: string;
  href: string;
}

export interface WhatWedoProps {
  items: WhatWedoItem[];
  initialVisible?: number;
  loadMoreCount?: number;
  title?: { text: string; color?: "black" | "orange" | "white" }[];
  description?: string;
  id?: string;
}

export const WhatWedo: React.FC<WhatWedoProps> = ({
  items,
  initialVisible = 3,
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
    <section
      className="py-8 md:py-12 lg:py-16 xl:py-20 bg-no-repeat bg-cover bg-center mt-8 md:mt-12 lg:mt-16 xl:mt-20"
      style={{ backgroundImage: "url('/images/industry/whatwedobanner.webp')" }}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8" id={id}>
        <div data-aos="fade-up" data-aos-duration="1000">
          <Maintitle
            title={title}
            description={description}
            descriptionColor="text-bwhite"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center mt-4 md:mt-8">
          {visibleItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="p-2 flex flex-col gap-2"
              data-aos="zoom-in"
              data-aos-delay={index * 120}
            >
              <Link href={item.href}>
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="h-auto aspect-video rounded-xl border-6 border-bwhite hover:border-borange transition-all duration-300 ease-out"
                />
              </Link>

              <div className="px-2 flex flex-col gap-2">
                <Link href={item.href}>
                  <h3 className="text-bwhite text-lg hover:text-borange transition-colors duration-150 ease-in-out font-semibold">
                    {item.title}
                  </h3>
                </Link>
                <p className="text-bwhite font-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div
            className="flex items-center justify-center mt-6"
            data-aos="fade-up"
            data-aos-delay="150"
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
    </section>
  );
};

export default WhatWedo;
