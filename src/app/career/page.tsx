import Banner from "@/components/career/banner";
import dynamic from "next/dynamic";
import { LuSearch } from "react-icons/lu";
import Loader from "../loading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Beno Support | Join Our IT, AI & BPO Team",
  description:
    "Explore open positions at Beno Support. Build your career in IT consulting, AI, cybersecurity, software engineering, cloud services, and BPO operations.",
  keywords:
    "Beno Support careers, IT jobs India, BPO jobs hiring, tech jobs, AI jobs India",
};

const Jobs = dynamic(() => import("@/components/career/jobs"), {
  loading: () => <Loader />,
});

const Skills = dynamic(() => import("@/components/career/skills"), {
  loading: () => <Loader />,
});

const Benefits = dynamic(() => import("@/components/career/benefits"), {
  loading: () => <Loader />,
});

const benefitsList = [
  {
    id: 1,
    title: "Shape your career",
    description:
      "At Beno Support, we give you the platform to explore your potential and build a meaningful career. Grow at your own pace with diverse opportunities, mentorship, and a supportive environment that helps you achieve your long term goals.",
  },
  {
    id: 2,
    title: "Learn and grow",
    description:
      "We believe in continuous learning. From skill development programs to hands on project experience, we ensure you stay ahead with the knowledge and tools needed for personal and professional growth.",
  },
  {
    id: 3,
    title: "Keep current",
    description:
      "The digital and business landscape evolves fast and so do we. Our training sessions, workshops, and knowledge sharing culture help you stay updated with the latest technologies and industry best practices.",
  },
  {
    id: 4,
    title: "Give back",
    description:
      "At Beno Support, we encourage employees to be part of something bigger. Engage in community driven initiatives and contribute to meaningful causes that create positive impact beyond the workplace.",
  },
  {
    id: 5,
    title: "Stay healthy",
    description:
      "Your well being matters. We promote a balanced lifestyle through wellness support, flexible work options, and a positive work culture that prioritizes mental and physical health.",
  },
  {
    id: 6,
    title: "Invest in yourself",
    description:
      "We support your ambition. Whether it’s pursuing certifications, advancing your skills, or exploring new career paths, Beno Support empowers you to invest in your personal and professional development.",
  },
];

export default function Career() {
  return (
    <div>
      <Banner />
      <section className="bg-[#14212B] py-4 md:py-8 lg:py-12">
        <div className="container max-w-5xl mx-auto px-4 md:px-8 flex flex-col gap-4 lg:gap-6">
          <div className="flex items-center justify-center gap-2 text-bwhite">
            <LuSearch className="text-lg" />
            <h5 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold">
              Ready to explore?
            </h5>
          </div>

          <h4 className="text-center text-lg md:text-xl lg:text-2xl text-bwhite font-medium">
            Let's search for your preferred job opportunity!
          </h4>

          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 w-full max-w-3xl">
              <input
                type="text"
                placeholder="Search for job keywords..."
                className="bg-white/90 w-full py-2 px-4 rounded-md outline-none text-bblack placeholder-gray-600 md:col-span-2"
              />

              <input
                type="text"
                placeholder="Search for location (city)"
                className="bg-white/90 w-full py-2 px-4 rounded-md outline-none text-bblack placeholder-gray-600 md:col-span-2"
              />

              <input
                type="submit"
                className="text-bwhite py-2 bg-bblue rounded-full text-lg cursor-pointer hover:bg-borange transition-all duration-150 ease-in w-full md:col-span-1"
                value={"FIND JOB"}
              />
            </div>
          </div>
        </div>
      </section>
      <Jobs />
      <Skills />
      <Benefits
        mainTitle={[
          { text: "Our", color: "black" },
          { text: "Benefits", color: "orange" },
        ]}
        benefitsData={benefitsList}
      />
    </div>
  );
}
