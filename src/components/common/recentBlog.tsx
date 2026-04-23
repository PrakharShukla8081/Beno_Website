"use client";

import React from "react";
import Maintitle from "@/components/common/maintitle";
import Button from "../common/button";

export interface BlogItem {
  image: string;
  title: string;
  description: string;
  id?: string;
  date?: string;
  category?: string;
}

export interface BlogProps {
  blog: BlogItem;
  title?: { text: string; color?: "black" | "orange" }[];
  description?: string;
  id?: string;
}

export const RecentBlog: React.FC<BlogProps> = ({
  blog,
  title = [
    { text: "Recent", color: "black" },
    { text: "Blog", color: "orange" },
  ],
  description,
  id,
}) => {
  return (
    <div
      className="container max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-12 lg:pt-16 xl:pt-20"
      id={id}
      data-aos="fade-up"
    >
      <Maintitle
        title={title}
        description={description}
        aos="fade-up"
        aosDelay={100}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-10 items-center">
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          className="w-full h-auto object-cover aspect-[16/9]"
          data-aos="fade-right"
          data-aos-delay="200"
        />

        <div
          className="flex flex-col gap-3 items-center md:items-start p-2 md:p-4"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <h3 className="text-bblack text-xl lg:text-2xl font-semibold leading-snug text-center md:text-left">
            {blog.title}
          </h3>

          <p
            className="text-bblack font-light leading-relaxed line-clamp-3 md:line-clamp-none text-center md:text-left"
            dangerouslySetInnerHTML={{
              __html: blog.description.slice(0, 250) + "...",
            }}
          ></p>

          {blog.id && blog.category && blog.date && (
            <div className="flex items-center flex-wrap gap-3 justify-center mt-4">
              <Button text="Learn More" href={`/blog/${blog.id}`} />

              <p className="text-bblack font-light text-sm md:text-base">
                {blog.date} -{" "}
                <span className="font-medium">{blog.category}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
