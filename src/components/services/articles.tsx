"use client";

import React, { useState, useMemo } from "react";
import Maintitle from "../common/maintitle";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

interface ArticleCardProps {
  article: ArticleItem;
}

interface TitleSegment {
  text: string;
  color?: "black" | "orange";
}
export interface ArticleItem {
  id: number;
  image: string;
  title: React.ReactNode;
  shortDesc: string;
  longDesc: string;
  link?: string;
}
interface ArticlesProps {
  items: ArticleItem[];
  mainTitle?: TitleSegment[];
  mainDescription?: string;
  id?: string;
  initialVisible?: number;
  loadMoreCount?: number;
}

const Articles: React.FC<ArticlesProps> = ({
  items,
  mainTitle,
  mainDescription,
  id,
  initialVisible = 6,
  loadMoreCount = 3,
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
      className="container max-w-7xl mx-auto px-4 md:px-8 mt-8 md:mt-12 lg:mt-16 xl:mt-20"
      id={id}
    >
      {mainTitle && (
        <Maintitle title={mainTitle} description={mainDescription} />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-4 md:mt-8">
        {visibleItems.map((item) => (
          <ArticleCard key={item.id} article={item} />
        ))}
      </div>

      {hasMore && (
        <div className="flex items-center justify-center mt-8 md:mt-12">
          <button
            onClick={handleLoadMore}
            className="px-8 py-3 rounded-full bg-borange text-white font-semibold hover:bg-orange-600 transition-all duration-300 ease-out shadow-md hover:shadow-lg"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Articles;

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { image, title, shortDesc, longDesc, link = "/" } = article;
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  return (
    <div
      className={`group relative overflow-hidden min-h-[450px] ${
        isMobileOpen ? "mobile-open" : ""
      }`}
      onClick={() => {
        if ("ontouchstart" in window) {
          setIsMobileOpen(!isMobileOpen);
        }
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-500" />
      </div>

      <div
        className={`relative z-10 h-full flex flex-col py-8 px-6 transition-all duration-500 ${
          isMobileOpen
            ? "opacity-0 translate-y-4"
            : "group-hover:opacity-0 group-hover:translate-y-4"
        }`}
      >
        <h1 className="text-bwhite text-2xl md:text-3xl lg:text-4xl font-semibold">
          {title}
        </h1>
        <p className="text-bwhite text-lg">{shortDesc}</p>
      </div>

      <div
        className={`absolute inset-0 z-20 flex flex-col justify-end py-8 px-6 transition-all duration-500 delay-100 ${
          isMobileOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0"
        }`}
      >
        <h1 className="text-bwhite text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          {title}
        </h1>
        <p className="text-bwhite text-lg mb-6">{longDesc}</p>

        <div className="flex justify-end">
          <Link
            href={link}
            className="flex items-center gap-1 text-bblack font-semibold bg-bwhite px-4 py-2 rounded self-start hover:bg-gray-100 transition-colors duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            Expand <MdKeyboardArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};
