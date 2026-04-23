"use client";

import React, { useEffect, useMemo, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { RiResetLeftLine } from "react-icons/ri";
import jobs from "../../../public/json/jobs";
import Button from "../common/button";
import Link from "next/link";

const Jobs: React.FC = () => {
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    jobs.forEach((job) => {
      counts[job.category] = (counts[job.category] || 0) + 1;
    });
    return counts;
  }, [jobs]);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");
  const [sortOption, setSortOption] = useState("newest");

  const [openSearch, setOpenSearch] = useState(true);
  const [openCategory, setOpenCategory] = useState(true);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  // Debounce effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchText]);

  // Sorting
  const sortedJobs = useMemo(() => {
    return [...jobs].sort((a, b) => {
      if (sortOption === "newest") {
        return (
          new Date(b.postingDate).getTime() - new Date(a.postingDate).getTime()
        );
      } else if (sortOption === "oldest") {
        return (
          new Date(a.postingDate).getTime() - new Date(b.postingDate).getTime()
        );
      } else if (sortOption === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  }, [sortOption]);

  // Filters
  const filteredJobs = useMemo(() => {
    return sortedJobs.filter((job) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(job.category);

      const matchesSearch =
        debouncedSearchText === "" ||
        job.title.toLowerCase().includes(debouncedSearchText.toLowerCase()) ||
        job.location
          .toLowerCase()
          .includes(debouncedSearchText.toLowerCase()) ||
        job.description
          .toLowerCase()
          .includes(debouncedSearchText.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [sortedJobs, selectedCategories, debouncedSearchText]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSearchText("");
  };

  return (
    <>
      <div className="mt-4 md:mt-8 lg:mt-12">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
            <div className="md:col-span-3 max-h-[50vh] lg:max-h-[80vh] overflow-y-auto sidebar-scroll flex flex-col gap-6 pr-2">
              <div className="flex justify-between border-b-1 border-b-borange pb-4">
                <h6 className="font-medium text-lg text-borange">Filters</h6>
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={clearFilters}
                >
                  <p className="text-[#606060] text-md">Clear Filters</p>
                  <RiResetLeftLine className="text-[#606060] mt-1" />
                </div>
              </div>

              <div className="border-b-1 border-b-borange pb-4">
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() => setOpenSearch(!openSearch)}
                >
                  <h6 className="font-medium text-lg text-borange">Search</h6>
                  {openSearch ? (
                    <FaMinus className="text-borange mt-1" />
                  ) : (
                    <FaPlus className="text-borange mt-1" />
                  )}
                </div>

                {openSearch && (
                  <div className="relative mt-4">
                    <input
                      type="text"
                      placeholder="Search for job keywords..."
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      className="bg-[#9F9F9F4A] w-full py-2 px-4 rounded-md outline-none text-bblack placeholder-[#606060] pl-10"
                    />
                    <LuSearch
                      size={22}
                      className="absolute top-1/2 left-2 -translate-y-1/2"
                    />
                  </div>
                )}
              </div>

              <div className="border-b-1 border-b-borange pb-4">
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() => setOpenCategory(!openCategory)}
                >
                  <h6 className="font-medium text-lg text-borange">
                    Area of Interest
                  </h6>
                  {openCategory ? (
                    <FaMinus className="text-borange mt-1" />
                  ) : (
                    <FaPlus className="text-borange mt-1" />
                  )}
                </div>

                {openCategory && (
                  <div className="mt-4 flex flex-col gap-2">
                    {Object.keys(categoryCounts).map((cat) => (
                      <div
                        key={cat}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(cat)}
                            onChange={() => handleCategoryChange(cat)}
                          />
                          <p className="text-[#606060] text-md">{cat}</p>
                        </div>
                        <span className="text-[#6060607A] text-sm">
                          {categoryCounts[cat]}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* JOBS LIST */}
            <div className="md:col-span-7 h-[80vh] overflow-y-auto no-scrollbar">
              <div className="flex flex-col gap-4 ">
                {/* SORTING SECTION */}
                <div className="self-end relative flex items-center gap-4">
                  <h5 className="text-xl text-borange font-medium">
                    {filteredJobs.length} Results
                  </h5>

                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                  >
                    <p className="text-[#606060]">Sort by {sortOption}</p>
                    <IoIosArrowDown className="mt-1 text-bblack" />
                  </div>

                  {sortDropdownOpen && (
                    <div className="absolute top-8 right-0 bg-white border border-[#D1D1D1] rounded-md w-40 shadow-md">
                      {["newest", "oldest", "title"].map((opt) => (
                        <p
                          key={opt}
                          onClick={() => {
                            setSortOption(opt);
                            setSortDropdownOpen(false);
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                        >
                          {opt.toUpperCase()}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                {/* JOB CARDS */}
                <div className="flex flex-col gap-3">
                  {filteredJobs.map((job) => (
                    <div
                      key={job.id}
                      className="border border-[#D1D1D1] p-4 flex flex-col gap-2"
                    >
                      <h5 className="self-end font-medium text-lg text-bblack">
                        Status : {job.status}
                      </h5>
                      <h4 className="font-medium text-lg text-borange">
                        {job.category}
                      </h4>
                      <h4 className="font-medium text-lg text-bblack">
                        {job.title}
                      </h4>
                      <p className="text-[#696969]">{job.description}</p>
                      <div className="self-center md:self-end flex items-center gap-4 mt-4">
                        <Link
                          className="px-4 py-1.5 text-bwhite rounded-full transition-all duration-150 bg-borange hover:bg-bblue w-32 flex items-center justify-center"
                          href={`/career/${job.slug}`}
                        >
                          View Detail
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredJobs.length === 0 && (
                  <p className="text-center text-[#606060] py-6">
                    No jobs found
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
