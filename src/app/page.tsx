"use client";

import dynamic from "next/dynamic";
import { ArticleItem } from "@/components/services/articles";
import Loader from "./loading";

const Banner = dynamic(() => import("@/components/home/banner"), {
  loading: () => <Loader />,
});

const About = dynamic(() => import("@/components/home/about"), {
  loading: () => <Loader />,
});

const Form = dynamic(() => import("@/components/home/form"), {
  loading: () => <Loader />,
});

const Articles = dynamic(() => import("@/components/services/articles"), {
  loading: () => <Loader />,
});

const Experience = dynamic(() => import("@/components/home/experience"), {
  loading: () => <Loader />,
  ssr: false,
});

const Platforms = dynamic(() => import("@/components/home/platforms"), {
  loading: () => <Loader />,
  ssr: false,
});

const Clients = dynamic(() => import("@/components/home/clients"), {
  loading: () => <Loader />,
  ssr: false,
});

const HomeBlogs = dynamic(() => import("@/components/home/blogs"), {
  loading: () => <Loader />,
  ssr: false,
});

const articleData: ArticleItem[] = [
  {
    id: 1,
    image: "/images/home/bpo-service.webp",
    title: (
      <>
        BPO <br /> Services
      </>
    ),
    shortDesc: "Smart Business Process Outsourcing for Operational Excellence",
    longDesc:
      "Scalable BPO solutions for customer support, back office operations, and data processing driven by AI, automation, and trained experts to improve efficiency and reduce operational cost.",
    link: "/bpo-services",
  },
  {
    id: 2,
    image: "/images/home/hr-service.webp",
    title: (
      <>
        Hr <br />
        Talent <br /> Services
      </>
    ),
    shortDesc:
      "Streamline your hiring, increase productivity, and build a future-ready team with Beno Support's HR & Talent Services.",
    longDesc:
      "At Beno Support, we understand that the strength of any organization lies in its people. Our HR & Talent Services are designed to help businesses of all sizes build a skilled, motivated, and high-performing workforce.",
    link: "/hr-talent-services",
  },
  {
    id: 3,
    image: "/images/home/dgt-service.webp",
    title: (
      <>
        Digital <br /> Transformation
      </>
    ),
    shortDesc: "AI Driven Digital Transformation for Future Ready Enterprises",
    longDesc:
      "Helping businesses modernize legacy systems, adopt automation, and implement data powered decision making to accelerate innovation and become fully future ready.",
    link: "/digital-transformation",
  },
  {
    id: 4,
    image: "/images/home/ics-service.webp",
    title: (
      <>
        IT Consulting <br /> & Support
      </>
    ),
    shortDesc: "Reliable IT Consulting & 24/7 Enterprise Support Services",
    longDesc:
      "Expert IT guidance, system monitoring, helpdesk support, and tech management ensuring uninterrupted business operations with fast issue resolution.",
    link: "/it-consulting-support",
  },
  {
    id: 5,
    image: "/images/home/cyber-service.webp",
    title: (
      <>
        Cyber <br /> Security
      </>
    ),
    shortDesc:
      "Advanced Cybersecurity & Risk Protection for Secure Digital Operations",
    longDesc:
      "Protecting digital assets through proactive monitoring, vulnerability assessment, compliance management, and defense systems to prevent cyber threats and data breaches.",
    link: "/cyber-security",
  },
  {
    id: 6,
    image: "/images/home/cloud-service.webp",
    title: (
      <>
        Cloud <br /> Services
      </>
    ),
    shortDesc:
      "Scalable & Managed Cloud Solutions for High Performance Infrastructure",
    longDesc:
      "End to end cloud deployment, migration, and management services across AWS, Azure, and Google Cloud with optimized architecture for performance and cost control.",
    link: "/cloud-services",
  },
  {
    id: 7,
    image: "/images/home/software-service.webp",
    title: (
      <>
        Software <br /> Services
      </>
    ),
    shortDesc: "Custom Software Development & System Modernization Solutions",
    longDesc:
      "Building tailored applications, SaaS platforms, APIs, and system upgrades using next gen technologies that align with unique business goals.",
    link: "/software-services",
  },
  {
    id: 8,
    image: "/images/home/dge-service.webp",
    title: (
      <>
        Digital <br /> Experience
      </>
    ),
    shortDesc:
      "Enhance your brand's digital presence with Beno Support's Digital Experience Services.",
    longDesc:
      "At Beno Support, we help businesses create powerful and meaningful digital experiences that connect with their audience and drive measurable results.",
    link: "/digital-experience",
  },
];

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Articles items={articleData} />
      <Experience />
      <Platforms />
      <Clients />
      <HomeBlogs />
      <Form />
    </main>
  );
}
