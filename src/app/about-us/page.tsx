import dynamic from "next/dynamic";
import Loader from "../loading";
import Banner from "@/components/about/banner";
import Vision from "@/components/about/vision";
import { Metadata } from "next";
import { TestimonialItem } from "@/components/home/testimonials";
import { blogs } from "../../../public/json/blogs";

export const metadata: Metadata = {
  title: "About Beno Support | Trusted IT & BPO Service Provider",
  description:
    "Learn about Beno Support, our mission, values, leadership, and expertise in AI, IT services, cybersecurity, software development, and customer experience outsourcing.",
  keywords:
    "About Beno Support, IT company profile, tech consulting India, BPO company India",
};

const testimonialsData: TestimonialItem[] = [
  {
    name: "Johnathan M., CEO ",
    image: "/images/home/test-user.webp",
    message:
      "Partnering with Beno Support has been one of our best business decisions. Their team not only understands technology but also focuses on real business outcomes. From cloud migration to ongoing support, they delivered everything with precision and reliability. Highly recommended for any organization looking for a trusted technology partner.",
  },
  {
    name: " Sofia Martinez, Operations Director ",
    image: "/images/home/test-user.webp",
    message:
      "The level of professionalism and responsiveness we receive from Beno Support is outstanding. They helped us streamline operations and reduce downtime significantly. What I appreciate most is their proactive approach  they don’t wait for problems to happen, they prevent them. A fantastic long-term partner!",
  },
  {
    name: "Marcus Lee, Head of IT ",
    image: "/images/home/test-user.webp",
    message:
      "We were looking for a skilled team that could handle cybersecurity and performance optimization at scale Beno Support delivered beyond expectations. Their solutions are secure, efficient, and tailored just for our environment. It feels more like working with an internal extension of our own team.",
  },
];

const JourneySlider = dynamic(() => import("@/components/about/journey"), {
  loading: () => <Loader />,
});

const Leader = dynamic(() => import("@/components/about/leader"), {
  loading: () => <Loader />,
});

const Counter = dynamic(() => import("@/components/about/counter"), {
  loading: () => <Loader />,
});

const Recognise = dynamic(() => import("@/components/about/recognise"), {
  loading: () => <Loader />,
});

const RecentBlog = dynamic(() => import("@/components/common/recentBlog"), {
  loading: () => <Loader />,
});

const Blogs = dynamic(() => import("@/components/common/blogs"), {
  loading: () => <Loader />,
});
const Testimonials = dynamic(() => import("@/components/home/testimonials"), {
  loading: () => <Loader />,
});

export default function About() {
  return (
    <div className="overflow-x-hidden">
      <Banner />
      <Vision />
      <JourneySlider />
      <Leader />
      <Counter />
      <Recognise />
      <Testimonials
        title="Testimonials"
        description="At Beno Supports, we empower organizations with AI driven innovation, secure IT infrastructure, and scalable digital solutions. Here's how our expertise has helped businesses transform and grow successfully."
        items={testimonialsData}
        interval={2500}
        className="mt-0"
      />
      <RecentBlog
        blog={blogs[0]}
        title={[
          { text: "Recent", color: "black" },
          { text: "Blogs", color: "orange" },
        ]}
        description="Ut sem odio, interdum eu fermentum et, porta vitae nisi. Vivamus tincidunt mattis pharetra. Nulla condimentum in nisl in gravida. Donec sed mauris non lacus blandit placerat."
        id="blogs"
      />

      <Blogs blogs={blogs} />
    </div>
  );
}
