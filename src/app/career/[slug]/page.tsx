"use client";
import { useParams } from "next/navigation";
import jobs from "../../../../public/json/jobs";
import Banner from "@/components/industry/banner";
import { useState } from "react";
import ResumeForm from "@/components/career/resume-form";
import { IoIosClose } from "react-icons/io";
import Benefits from "@/components/career/benefits";

export default function () {
  const { slug } = useParams();
  const [openPopup, setOpenPopup] = useState(false);
  const job = jobs.find((item) => item.slug === slug);

  if (!job) {
    return (
      <div className="container mx-auto py-20">
        <h2 className="text-center text-2xl font-semibold text-red-500">
          Job Not Found
        </h2>
      </div>
    );
  }

  const similarJob = jobs.filter((s) => {
    const searchTerm = `${job.title} ${job.description}`.toLowerCase();

    return (
      s.id !== job.id &&
      (s.title.toLowerCase().includes(job.title.toLowerCase()) ||
        s.description.toLowerCase().includes(job.description.toLowerCase()) ||
        s.title.toLowerCase().includes(searchTerm) ||
        s.description.toLowerCase().includes(searchTerm))
    );
  });

  return (
    <div className="overflow-x-hidden">
      <Banner
        title={job.title}
        titleColor="text-bwhite"
        description={`Location: ${job.location}`}
        descriptionColor="text-bwhite"
        bg="/images/career/detail-banner.webp"
        bannerContentAlignment="left"
        className="min-h-[40vh] md:min-h-[50vh]"
        button1="Save Job"
        href1="/"
        button2="Apply Now"
        onClickButton2={() => setOpenPopup(true)}
      />

      <div className="container max-w-7xl mx-auto px-4 md:px-8 mt-10 md:mt-14 lg:mt-20 space-y-6">
        <section>
          <h4 className="text-borange text-lg font-medium">Job Details:</h4>

          <div className="p-6 lg:p-8 mt-6 border border-gray-200 space-y-4">
            <div className="flex items-start gap-3">
              <h3 className="text-lg font-semibold">Primary Skills:</h3>
              <ul className="text-gray-700 flex flex-wrap gap-2">
                {job.primarySkills?.map((skill, i) => (
                  <li key={i} className="">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-start gap-3">
              <h3 className="text-lg font-semibold">Years of Experience:</h3>
              <p className="text-gray-700">{job.experience}</p>
            </div>

            <div className="flex items-start gap-3">
              <h3 className="text-lg font-semibold">Location:</h3>
              <p className="text-gray-700">{job.location}</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Must Have Skills</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {job.mustHaveSkills?.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Roles & Responsibility</h3>
              <p className="text-gray-700 leading-relaxed">
                {job.responsibility}
              </p>
            </div>
          </div>
        </section>

        <section>
          <h4 className="text-borange text-lg font-medium">
            Additional Details:
          </h4>

          <div className="p-6 lg:p-8 mt-6 border border-gray-200 space-y-4">
            <div className="flex items-start gap-3">
              <h3 className="text-lg font-semibold">Employee Status:</h3>
              <ul className="text-gray-700 flex flex-wrap gap-2">
                {job.status}
              </ul>
            </div>

            <div className="flex items-start gap-3">
              <h3 className="text-lg font-semibold">Shift:</h3>
              <ul className="text-gray-700 flex flex-wrap gap-2">
                {job.shift}
              </ul>
            </div>

            <div className="flex items-start gap-3">
              <h3 className="text-lg font-semibold">Travel:</h3>
              <ul className="text-gray-700 flex flex-wrap gap-2">
                {job.travel}
              </ul>
            </div>

            <div className="flex items-start gap-3">
              <h3 className="text-lg font-semibold">Job Posting:</h3>
              <p className="text-gray-700">{job.postingDate}</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">About Beno Support:</h3>
              <p className="text-gray-700 leading-relaxed">
                Proin ultricies ligula felis, dapibus lobortis odio maximus a.
                Fusce eu mi nec quam molestie auctor. Ut vitae gravida ante. Sed
                molestie suscipit eros. Donec facilisis lorem consequat aliquet
                sodales. Sed imperdiet nisl vel mi auctor, nec gravida turpis
                sollicitudin. Suspendisse quis lectus ornare nunc eleifend
                placerat vitae vitae enim. Aliquam vitae urna felis. Donec nisl
                sapien, bibendum eu metus non, ullamcorper volutpat urna. Duis
                quis orci nisl. Curabitur vel dignissim massa. Vestibulum ac
                lectus orci. Nulla id lacus vel velit sollicitudin finibus.
                Etiam nunc sem, semper ut fringilla vitae, egestas vel diam.
                Nullam eget facilisis lacus. Fusce eros diam, interdum tincidunt
                lacus vel, ullamcorper faucibus enim.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-4 md:mt-6 lg:mt-8 flex w-full justify-end">
          <button
            onClick={() => setOpenPopup(true)}
            className="mb-4 md:mb-6 px-6 py-2 rounded-md bg-borange text-white font-semibold hover:bg-orange-600 transition-all duration-200"
          >
            Apply Now
          </button>
        </div>

        {openPopup && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4">
            <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setOpenPopup(false)}
                className="absolute right-3 top-3 text-xl font-bold text-bwhite hover:text-borange cursor-pointer transition-text duration-150"
              >
                <IoIosClose size={32} />
              </button>

              <ResumeForm jobTitle={job.title} jobCategory={job.category} />
            </div>
          </div>
        )}
      </div>

      <section className="bg-[#14212B] py-4 md:py-8 lg:py-12 mb-4">
        <div className="container max-w-5xl mx-auto px-4 md:px-8 flex flex-col gap-4 lg:gap-6">
          <div className="flex items-center justify-center gap-2 text-bwhite">
            <h5 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold">
              Get notified for similar jobs
            </h5>
          </div>

          <h4 className="text-center text-lg md:text-xl lg:text-2xl text-bwhite font-medium">
            Sign up to receive job alerts
          </h4>

          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 w-full max-w-3xl">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/90 w-full py-2 px-4 rounded-md outline-none text-bblack placeholder-gray-600 md:col-span-4"
              />

              <input
                type="submit"
                className="text-bwhite py-2 bg-bblue rounded-full text-lg cursor-pointer hover:bg-borange transition-all duration-150 ease-in w-full md:col-span-1"
                value={"Subscribe"}
              />
            </div>
          </div>
        </div>
      </section>

      {similarJob.length > 0 && (
        <Benefits
          mainTitle={[
            { text: "Similar", color: "black" },
            { text: "Jobs", color: "orange" },
          ]}
          benefitsData={similarJob}
        />
      )}
    </div>
  );
}
