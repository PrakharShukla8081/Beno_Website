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
  title: "IT Industry Solutions | Software Development & Managed Support",
  description:
    "We help IT companies scale with software development, managed IT support, DevOps, cybersecurity, AI automation, and cloud consulting services.",
  keywords:
    "IT outsourcing India, managed IT support, DevOps services, AI development services, IT consulting solutions, cloud migration support, enterprise software development, IT helpdesk outsourcing, RPA automation services, network management solutions, cyber security managed services, IT infrastructure support, API integration services, IT outsourcing for startups, enterprise digital transformation, helpdesk and ticketing support, IT support for SMEs, SaaS development outsourcing, AI chatbot development, mobile app development support, backend support outsourcing, digital workplace setup, IT project support services, cloud administration outsourcing.",
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
    title: "Custom Development",
    description:
      "We build tailored AI powered software solutions using cutting edge frameworks. Our custom development integrates machine learning models, cloud native architecture, and scalable APIs to solve unique business challenges with precision and efficiency.",
    img: "/images/industry/it/services1.webp",
    href: "/",
  },
  {
    title: "Engineering & Technology Services",
    description:
      "Leverage our full stack engineering expertise spanning AI/ML implementation, IoT systems, DevOps automation, and cloud infrastructure. We architect robust technology ecosystems that drive innovation, optimize performance, and future proof your digital operations.",
    img: "/images/industry/it/services2.webp",
    href: "/",
  },
  {
    title: "Digital & Transformation",
    description:
      "Accelerate your digital journey with AI driven transformation strategies. We modernize legacy systems, implement intelligent automation, and deploy data centric solutions that enhance agility, reduce operational costs, and unlock new revenue streams.",
    img: "/images/industry/it/services3.webp",
    href: "/",
  },
  {
    title: "Digital Experience",
    description:
      "Create immersive, AI enhanced customer experiences through intuitive interfaces, personalization engines, and real time analytics. Our solutions integrate conversational AI, predictive analytics, and omnichannel engagement to elevate user satisfaction and loyalty.",
    img: "/images/industry/it/services4.webp",
    href: "/",
  },
];

const processData: processItem[] = [
  {
    title: "Web Application Development",
    description:
      "Crafted bespoke web solutions tailored to your unique business requirements for enhanced digital presence.",
  },
  {
    title: "Custom Solution Development",
    description:
      "Tailored software solutions designed to address specific challenges and optimize business processes efficiently.",
  },
  {
    title: "eCommerce Development",
    description:
      "Build robust eCommerce platforms for seamless online shopping experiences and enhanced customer engagement.",
  },
  {
    title: "Blockchain Development",
    description:
      "Implement cutting edge blockchain solutions for secure transactions, transparent processes, and decentralized applications.",
  },
  {
    title: "AI Application Development",
    description:
      "Develop AI powered applications to automate tasks, analyze data, and enhance decision making processes for businesses.",
  },
  {
    title: "Mobile App Development",
    description:
      "Design and develop innovative mobile applications for various platforms to engage users and drive business growth.",
  },
  {
    title: "Gaming Application",
    description:
      "Create captivating gaming experiences with immersive graphics and interactive gameplay for diverse audiences.",
  },
  {
    title: "Logistics Application",
    description:
      "Streamline logistics operations with customized applications for efficient tracking, management, and optimization of supply chains.",
  },
  {
    title: "Job Portal Development",
    description:
      "Build user friendly job portals to connect employers with qualified candidates seamlessly.",
  },
  {
    title: "Bank Application Development",
    description:
      "Develop secure and user friendly banking applications to facilitate transactions, manage accounts, and enhance customer satisfaction.",
  },
  {
    title: "Digital Marketing Services",
    description:
      "Offer comprehensive digital marketing strategies and services to boost online visibility, leads, and conversions effectively.",
  },
  {
    title: "Insurance Application",
    description:
      "Develop robust insurance applications to streamline processes, manage policies, and enhance customer experience.",
  },
];

const faqData: FaqItem[] = [
  {
    title: "What are AI driven IT services?",
    description:
      "AI driven IT services integrate artificial intelligence and machine learning to automate operations, optimize processes, and deliver intelligent solutions. This includes predictive analytics, intelligent automation, AI powered cybersecurity, and cognitive computing systems that transform traditional IT into proactive, adaptive technology ecosystems.",
  },
  {
    title: "How does AI enhance custom software development?",
    description:
      "AI revolutionizes custom development by enabling intelligent features like predictive algorithms, natural language processing, and automated testing. Our AI enhanced development delivers smarter applications that learn from user behavior, automate complex tasks, and provide data driven insights, significantly reducing development time while increasing functionality.",
  },
  {
    title: "Which AI technologies are most valuable for businesses today?",
    description:
      "Key AI technologies driving business value include machine learning for predictive analytics, computer vision for image recognition, natural language processing for conversational AI, robotic process automation for workflow optimization, and generative AI for content creation. We strategically implement these technologies based on specific business objectives and industry requirements.",
  },
  {
    title: "How do AI powered IT services improve operational efficiency?",
    description:
      "AI driven IT services automate routine tasks, predict system failures before they occur, optimize resource allocation, and provide intelligent insights for decision making. This reduces manual intervention by up to 70%, minimizes downtime through predictive maintenance, and accelerates problem resolution with AI powered diagnostics and automated troubleshooting.",
  },
  {
    title: "What are the security considerations for AI implementation?",
    description:
      "AI implementation requires robust security protocols including data encryption, access controls, model security against adversarial attacks, and compliance with privacy regulations. We implement comprehensive AI security frameworks that protect sensitive data, ensure ethical AI practices, and maintain transparency in AI decision making processes throughout deployment.",
  },
];

const whatWedoData: WhatWedoItem[] = [
  {
    title: "Frontend Design",
    description:
      "Building responsive AI enhanced interfaces with intuitive UX/UI for maximum engagement",
    img: "/images/industry/it/industry1.webp",
    href: "/",
  },
  {
    title: "Server Side Development",
    description:
      "Developing scalable cloud APIs with AI integration for real time data processing",
    img: "/images/industry/it/industry2.webp",
    href: "/",
  },
  {
    title: "Mobility",
    description:
      "Creating cross platform mobile apps with seamless AI features and offline capabilities",
    img: "/images/industry/it/industry3.webp",
    href: "/",
  },
];

export default function IT() {
  return (
    <>
      <Banner
        title="Information Technology Services"
        button1="Learn More"
        href1="/contact-us"
        button2="+91 0120 423 4429"
        href2="tel:+9101204234429"
        bg="/images/industry/it/banner-bg.webp"
        titleColor="text-bwhite"
      />
      <Breadcrumb items={breadcrumbItems} />
      <div className="overflow-x-hidden">
        <About
          title={[
            { text: "About", color: "orange" },
            { text: "IT Services", color: "black" },
          ]}
          description1="In today's competitive landscape, organizations seek to boost performance and cut costs with digital IT services. With decades of experience across sectors, we tailor solutions to meet unique needs. Our approach optimizes efficiency, embraces cloud scalability, and leverages advanced tech like AI and data analytics. Flexible delivery models, robust security, and a commitment to innovation ensure tangible results. We provide end to end solutions for private and public sectors, empowering clients to thrive in a dynamic business world."
          list={[
            { text: "Customer Experience Transformation" },
            { text: "Human Capital Management" },
            { text: "Digital Technology Integration" },
            { text: "Business Process & ERP's" },
          ]}
          image="/images/industry/it/about.webp"
          id="about"
          enableReadMore={false}
        />
        <Services
          items={servicesData}
          title={[
            { text: "Our", color: "black" },
            { text: "Expertise", color: "orange" },
          ]}
          description="From full stack development to intelligent automation, we provide comprehensive technology services that ensure reliability and scalability."
          id="services"
        />

        <Process
          items={processData}
          title={[
            { text: "Beno Tailored", color: "black" },
            { text: "Solutions", color: "orange" },
          ]}
          description="From scalable architecture to intelligent automation, we develop bespoke technology solutions that deliver measurable business outcomes."
          id="process"
        />

        <WhatWedo
          items={whatWedoData}
          title={[
            { text: "What", color: "orange" },
            { text: "We Do", color: "white" },
          ]}
          description="We deliver comprehensive IT services from AI development to cloud solutions, enabling enterprises to thrive through technology innovation."
          id="whatwedo"
        />

        <Faq
          items={faqData}
          title={[
            { text: "FAQ", color: "orange" },
            { text: "for IT", color: "black" },
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
          description="Ut sem odio, interdum eu fermentum et, porta vitae nisi. Vivamus tincidunt mattis pharetra. Nulla condimentum in nisl in gravida. Donec sed mauris non lacus blandit placerat."
          id="blogs"
        />

        <Blogs blogs={blogs} />
      </div>
    </>
  );
}
