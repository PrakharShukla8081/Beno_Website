"use client";

import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { blogs } from "../../../public/json/blogs";

const HomeBlogs = () => {
  const BlogCard = ({ image, date, category, title, excerpt, id }: any) => {
    const [isMobileOpen, setIsMobileOpen] = React.useState(false);

    return (
      <article
        className="group relative overflow-hidden min-h-[350px]"
        data-aos="fade-up"
        data-aos-delay="100"
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

        {/* Initial Content */}
        <div
          className={`relative z-10 h-full flex flex-col justify-between items-start py-8 px-6 transition-all duration-500 ${
            isMobileOpen
              ? "opacity-0 translate-y-4"
              : "group-hover:opacity-0 group-hover:translate-y-4"
          }`}
        >
          <h1 className="bg-bwhite inline-block text-bblack text-lg px-4">
            {date} - <span className="font-semibold">{category}</span>
          </h1>
          <p className="text-bwhite text-lg max-w-80 font-semibold">{title}</p>
        </div>

        {/* Hover/Expanded Content */}
        <div
          className={`absolute inset-0 z-20 flex flex-col gap-4 justify-center items-start py-8 px-6 transition-all duration-500 delay-100 ${
            isMobileOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0"
          }`}
        >
          <h1 className="bg-bwhite inline-block text-bblack text-lg px-4">
            {date} - <span className="font-semibold">{category}</span>
          </h1>
          <p className="text-bwhite text-lg max-w-80 font-semibold">{title}</p>
          <p className="text-bwhite text-lg mb-6">{excerpt}</p>
          <Link
            href={`/blog/${id}`}
            className="flex items-center gap-1 text-borange font-semibold rounded self-start transition-colors duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            Read More... <IoIosArrowRoundForward size={20} />
          </Link>
        </div>
      </article>
    );
  };

  return (
    <section
      className="container max-w-7xl mx-auto px-4 md:px-8 mt-8 md:mt-12 lg:mt-16 xl:mt-20"
      data-aos="fade-up"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {blogs.map((blog, i) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default HomeBlogs;
