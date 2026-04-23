import React, { memo } from "react";
import Maintitle from "../common/maintitle";

interface JobCategory {
  id: number;
  category: string;
  count: number;
}

const jobs: JobCategory[] = [
  { id: 1, category: "Technology", count: 50 },
  { id: 2, category: "Technology", count: 50 },
  { id: 3, category: "Technology", count: 50 },
  { id: 4, category: "Technology", count: 50 },
  { id: 5, category: "Technology", count: 50 },
  { id: 6, category: "Technology", count: 50 },
  { id: 7, category: "Technology", count: 50 },
  { id: 8, category: "Technology", count: 50 },
];

const Skills: React.FC = memo(() => {
  return (
    <section
      className="py-8 md:py-12 lg:py-16 xl:py-20 bg-cover bg-center bg-no-repeat border-t-8 border-t-borange"
      style={{ backgroundImage: "url('/images/career/skills-bg.webp')" }}
    >
      <div
        className="container max-w-7xl mx-auto px-4 md:px-8 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/contact/form-bg.webp')" }}
      >
        <Maintitle
          title={[{ text: "Let's get in touch with us", color: "white" }]}
        />

        <div className="mt-8 md:mt-12 flex items-center justify-center gap-4 lg:gap-6 flex-wrap">
          {jobs.map((job) => (
            <article
              key={job.id}
              className="flex flex-col gap-3 items-center justify-center bg-bwhite rounded-3xl p-4 w-64 h-52 border-b-4 border-b-borange flex-grow-1 transition-all duration-200 ease-in-out hover:-translate-y-2"
            >
              <h4 className="text-2xl font-semibold text-borange">
                {job.category}
              </h4>
              <p className="font-medium text-lg">{job.count} Jobs</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Skills;
