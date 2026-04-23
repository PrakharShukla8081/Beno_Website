import { Metadata } from "next";
import dynamic from "next/dynamic";
import Loader from "@/app/loading";
import Banner from "@/components/industry/banner";
import Breadcrumb from "@/components/common/breadcrumb";
import { serviceItem } from "@/components/industry/services";
import { processItem } from "@/components/industry/process";
import { FaqItem } from "@/components/common/faq";
import { WhatWedoItem } from "@/components/industry/whatWedo";
import About from "@/components/industry/about";
import { blogs } from "../../../../public/json/blogs";

export const metadata: Metadata = {
  title: "Advanced Technology Solutions | AI Engineering & Digital Innovation",
  description:
    "We deliver cutting edge technology solutions including AI engineering, cloud native development, digital transformation, and enterprise technology platforms for modern businesses.",
  keywords:
    "technology solutions, AI engineering services, cloud native development, digital transformation platforms, enterprise technology solutions, software product engineering, machine learning solutions, cloud architecture services, DevOps automation, microservices development, API platform engineering, data engineering solutions, technology consulting services, digital innovation platforms, technology modernization, enterprise application development, technology infrastructure, cybersecurity solutions, technology integration services, mobile application development, technology strategy consulting, technology implementation services, technology optimization, technology managed services, technology innovation labs, technology research and development, technology scalability solutions, technology performance optimization, technology security services, technology cloud migration, technology digital platforms",
};

const Process = dynamic(() => import("@/components/industry/process"), {
  loading: () => <Loader />,
});

const Services = dynamic(() => import("@/components/industry/services"), {
  loading: () => <Loader />,
});

const Faq = dynamic(() => import("@/components/common/faq"), {
  loading: () => <Loader />,
});

const ContactForm = dynamic(() => import("@/components/common/contactForm"), {
  loading: () => <Loader />,
});

const Blogs = dynamic(() => import("@/components/common/blogs"), {
  loading: () => <Loader />,
});

const RecentBlog = dynamic(() => import("@/components/common/recentBlog"), {
  loading: () => <Loader />,
});

const WhatWedo = dynamic(() => import("@/components/industry/whatWedo"), {
  loading: () => <Loader />,
});

const breadcrumbItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Process", href: "#process" },
  { label: "What We Do", href: "#whatwedo" },
  { label: "FAQ's", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
  { label: "Our Blog", href: "#blogs" },
];

const servicesData: serviceItem[] = [
  {
    title: "AI Engineering Solutions",
    description:
      "Build advanced artificial intelligence systems with machine learning models, natural language processing, and computer vision applications for intelligent automation.",
    img: "/images/industry/technology/services1.webp",
    href: "/",
  },
  {
    title: "Cloud Native Development",
    description:
      "Develop scalable cloud applications with microservices architecture, container orchestration, and serverless computing for modern technology infrastructure.",
    img: "/images/industry/technology/services2.webp",
    href: "/",
  },
  {
    title: "Digital Transformation Platforms",
    description:
      "Create comprehensive digital platforms with API integration, data analytics, and automation capabilities for enterprise technology modernization.",
    img: "/images/industry/technology/services3.webp",
    href: "/",
  },
  {
    title: "Software Product Engineering",
    description:
      "Build enterprise grade software products with agile development methodologies, quality assurance, and scalable architecture for technology solutions.",
    img: "/images/industry/technology/services4.webp",
    href: "/",
  },
  {
    title: "Technology Consulting Services",
    description:
      "Provide strategic technology consulting with architecture design, implementation planning, and digital innovation strategies for business transformation.",
    img: "/images/industry/technology/services5.webp",
    href: "/",
  },
];

const processData: processItem[] = [
  {
    title: "Technology Strategy",
    description:
      "Define digital transformation objectives, assess current technology infrastructure, and develop comprehensive technology roadmaps for business innovation.",
  },
  {
    title: "Architecture & Solution Design",
    description:
      "Design scalable technology architectures with cloud native principles, microservices patterns, and integration capabilities for modern digital platforms.",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Implement advanced machine learning algorithms, neural networks, and AI models for intelligent automation and data driven decision making.",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Build resilient cloud infrastructure with containerization, orchestration platforms, and scalable computing resources for enterprise applications.",
  },
  {
    title: "Software Development",
    description:
      "Develop robust software solutions using agile methodologies, continuous integration, and quality engineering practices for reliable technology products.",
  },
  {
    title: "Integration & API Development",
    description:
      "Create comprehensive API ecosystems, implement system integrations, and ensure seamless data flow across technology platforms and business applications.",
  },
  {
    title: "Security & Compliance",
    description:
      "Ensure cybersecurity measures, implement data protection controls, and establish compliance frameworks for enterprise technology solutions.",
  },
  {
    title: "DevOps & Automation",
    description:
      "Implement continuous integration and deployment pipelines, automate infrastructure management, and establish DevOps practices for efficient operations.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Conduct comprehensive testing including unit testing, integration testing, performance validation, and security testing for technology solution reliability.",
  },
  {
    title: "Deployment & Implementation",
    description:
      "Manage solution deployment, configure production environments, implement monitoring systems, and ensure smooth technology solution rollout.",
  },
  {
    title: "Training & Knowledge Transfer",
    description:
      "Provide comprehensive technology training, create technical documentation, and establish knowledge transfer programs for successful solution adoption.",
  },
  {
    title: "Continuous Improvement",
    description:
      "Establish support protocols, implement monitoring systems, and facilitate continuous technology improvement based on performance data and user feedback.",
  },
];

const faqData: FaqItem[] = [
  {
    title: "How does AI engineering transform technology solutions?",
    description:
      "AI engineering revolutionizes technology through intelligent automation, predictive analytics, natural language processing, and computer vision applications. Our AI solutions typically improve operational efficiency by 40 70%, enable intelligent decision making through data insights, and create innovative capabilities that differentiate technology platforms in competitive markets.",
  },
  {
    title: "What technologies are essential for modern digital platforms?",
    description:
      "Essential technologies include cloud native architectures, microservices patterns, AI and machine learning frameworks, API ecosystems, DevOps automation tools, and cybersecurity solutions. We implement these with focus on scalability, reliability, and innovation to build future ready technology platforms.",
  },
  {
    title: "How can businesses benefit from digital transformation?",
    description:
      "Digital transformation improves operational efficiency, enhances customer experiences, enables data driven decision making, and creates competitive advantages. Our solutions typically deliver 30 60% improvement in operational efficiency, 40 70% faster time to market, and significant innovation capabilities through modern technology implementation.",
  },
  {
    title:
      "What are the key components of successful technology modernization?",
    description:
      "Successful modernization requires cloud native architecture, comprehensive API strategies, robust cybersecurity measures, scalable infrastructure, and agile development practices. Our solutions ensure comprehensive technology transformation while maintaining business continuity and enabling future innovation.",
  },
  {
    title: "How does cloud native development benefit technology solutions?",
    description:
      "Cloud native development improves scalability, enhances reliability, reduces infrastructure costs, and accelerates innovation cycles. Our cloud solutions typically deliver 40 70% reduction in infrastructure costs, 50 80% improvement in scalability, and 60 90% faster deployment cycles for technology applications.",
  },
];

const whatWedoData: WhatWedoItem[] = [
  {
    title: "AI Engineering Solutions",
    description:
      "Implement advanced artificial intelligence systems with machine learning, natural language processing, and computer vision applications",
    img: "/images/industry/technology/industry1.webp",
    href: "/",
  },
  {
    title: "Cloud Platform Development",
    description:
      "Develop scalable cloud applications with microservices architecture, containerization, and serverless computing",
    img: "/images/industry/technology/industry2.webp",
    href: "/",
  },
  {
    title: "Digital Transformation Platforms",
    description:
      "Create comprehensive digital platforms with API integration, data analytics, and automation capabilities",
    img: "/images/industry/technology/industry3.webp",
    href: "/",
  },
];

export default function Technology() {
  return (
    <>
      <Banner
        title="Advanced Technology Solutions and Innovation"
        titleColor="text-bwhite"
        button1="Learn More"
        href1="/contact-us"
        button2="+91 0120 423 4429"
        href2="tel:+9101204234429"
        bg="/images/industry/technology/banner.webp"
      />
      <Breadcrumb items={breadcrumbItems} />
      <div className="overflow-x-hidden">
        <About
          title={[
            { text: "About", color: "orange" },
            { text: "Technology Services", color: "black" },
          ]}
          description1="Beno delivers advanced technology solutions that transform businesses through artificial intelligence, cloud native development, and digital innovation. Our expertise spans AI engineering, comprehensive cloud platforms, enterprise software development, and strategic technology consulting for modern organizations seeking competitive advantage through technology excellence."
          list={[
            { text: "Advanced AI engineering and machine learning solutions" },
            { text: "Cloud native development and scalable architecture" },
            { text: "Comprehensive digital transformation platforms" },
            { text: "Strategic technology consulting and innovation services" },
          ]}
          image="/images/industry/technology/about.webp"
          id="about"
          enableReadMore={false}
        />

        <Services
          items={servicesData}
          title={[
            { text: "Our", color: "black" },
            { text: "Expertise", color: "orange" },
          ]}
          description="From AI engineering to cloud native development, we deliver cutting edge technology solutions that transform business capabilities and drive digital innovation across industries."
          id="services"
        />

        <Process
          items={processData}
          title={[
            { text: "Our", color: "black" },
            { text: "Process", color: "orange" },
          ]}
          description="From technology strategy to AI implementation and continuous improvement, we follow a comprehensive methodology ensuring effective and innovative technology solutions."
          id="process"
        />

        <WhatWedo
          items={whatWedoData}
          title={[
            { text: "What", color: "orange" },
            { text: "We Do", color: "white" },
          ]}
          description="We develop advanced technology solutions combining AI engineering, cloud platforms, and digital transformation to innovate business capabilities and drive competitive advantage."
          id="whatwedo"
        />

        <Faq
          items={faqData}
          title={[
            { text: "FAQ", color: "orange" },
            { text: "for Technology", color: "black" },
          ]}
          id="faq"
        />

        <ContactForm />

        <RecentBlog
          blog={blogs[0]}
          title={[
            { text: "Recent", color: "black" },
            { text: "Blogs", color: "orange" },
          ]}
          description="Stay updated with the latest trends in technology innovation, AI engineering advancements, and digital transformation strategies for business excellence."
          id="blogs"
        />

        <Blogs blogs={blogs} />
      </div>
    </>
  );
}
