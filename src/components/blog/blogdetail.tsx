"use client";

export interface BlogProps {
  id: string;
  image: string;
  category?: string;
  title: string;
  description: string;
  date?: string;
  metaTitle: string;
  metaDescription: string;
  metaKeyword: string;
}

import React from "react";
import Link from "next/link";
import he from "he";
import { blogs } from "../../../public/json/blogs";

interface BlogDetailComponentProps {
  blog: BlogProps;
}

const BlogDetailComponent: React.FC<BlogDetailComponentProps> = ({ blog }) => {
  return (
    <section
      className="mt-8 md:mt-12 lg:mt-16 xl:mt-20 container max-w-7xl mx-auto px-4 md:px-8 mb-4 md:mb-8"
      id="main-blog-detail"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2">
          <article className="relative mb-6">
            <img
              src={blog.image}
              alt={blog.title}
              loading="lazy"
              className="w-full h-auto rounded-t-lg object-cover transition-all duration-500 ease-out"
            />
            {blog.date && (
              <span className="absolute top-4 left-4 text-white bg-borange  font-semibold text-lg lg:text-xl px-4 py-2 rounded-lg">
                {blog.date}
              </span>
            )}
          </article>

          <h3 className="text-borange  font-medium text-xl md:text-2xl lg:text-3xl mb-6 px-2 lg:px-4">
            {blog.title}
          </h3>

          <div
            className="text-bblack font-light text-base md:text-lg px-2 lg:px-4 prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: he.decode(blog.description) }}
          />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Categories */}
          <div className="mb-8 lg:mb-12">
            <h4 className="text-black  font-semibold text-xl mb-3">
              Categories:
            </h4>
            <ul className="space-y-2">
              {Array.from(new Set(blogs.map((b) => b.category))).map((cat) => (
                <li key={cat}>
                  <p className="text-[#7f8497] font-semibold text-lg">{cat}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent News */}
          <div>
            <h4 className="text-black  font-semibold text-xl mb-4">
              Recent News:
            </h4>
            <div className="space-y-6">
              {blogs.slice(0, 3).map((recentBlog) => (
                <div
                  key={recentBlog.id}
                  className="border-l-4 border-borange pl-4 py-1"
                >
                  <p className="text-[#7f8497]  font-light text-sm md:text-base mb-2 line-clamp-3">
                    {recentBlog.description.slice(0, 120) + "..."}
                  </p>
                  <h5 className="text-[#1a1e4f] hover:text-borange  font-semibold text-base md:text-lg transition-colors duration-200">
                    <Link href={`/blog/${recentBlog.id}`}>
                      Published on {recentBlog.date}
                    </Link>
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailComponent;
