import dynamic from "next/dynamic";
import Loader from "@/app/loading";
import { ArticleItem } from "@/components/services/articles";
import Banner from "@/components/services/banner";
import Breadcrumb from "@/components/common/breadcrumb";
import { FaqItem } from "@/components/common/faq";
import { InsustryItem } from "@/components/services/industries";
import { ServicesItem } from "@/components/services/services";
import { TestimonialItem } from "@/components/home/testimonials";
import { Metadata } from "next";
import About from "@/components/services/about";
import { blogs } from "../../../../public/json/blogs";

const Services = dynamic(() => import("@/components/services/services"), {
  loading: () => <Loader />,
});

const Articles = dynamic(() => import("@/components/services/articles"), {
  loading: () => <Loader />,
});

const About2 = dynamic(() => import("@/components/services/about2"), {
  loading: () => <Loader />,
});

const Industries = dynamic(() => import("@/components/services/industries"), {
  loading: () => <Loader />,
});

const Testimonials = dynamic(() => import("@/components/home/testimonials"), {
  loading: () => <Loader />,
});

const Faq = dynamic(() => import("@/components/common/faq"), {
  loading: () => <Loader />,
});

const ContactForm = dynamic(() => import("@/components/common/contactForm"), {
  loading: () => <Loader />,
});

const RecentBlog = dynamic(() => import("@/components/common/recentBlog"), {
  loading: () => <Loader />,
});

const Blogs = dynamic(() => import("@/components/common/blogs"), {
  loading: () => <Loader />,
});

export const metadata: Metadata = {
  title:
    "Cloud Services | Cloud Migration DevOps Automation AI Powered Infrastructure",
  description:
    "Modern cloud solutions including cloud migration, deployment automation, DevOps workflows, Kubernetes orchestration, and multi cloud management with AI driven optimization.",
  keywords:
    "cloud migration services India, DevOps consulting, Kubernetes deployment, AI cloud automation",
};

const breadcrumbItems = [
  { label: "Services", href: "#services" },
  { label: "Articles", href: "#articles" },
  { label: "Industries", href: "#industries" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ's", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
  { label: "Our Blog", href: "#blogs" },
];

const servicesData: ServicesItem[] = [
  {
    title: "Cloud Architecture Design",
    description:
      "Optimizing enterprise workflows to enhance control productivity and infrastructure performance",
    img: "/images/services/cloud/services1.webp",
    href: "/",
  },
  {
    title: "AI Assisted DevOps Automation",
    description:
      "Integrating intelligent automated pipelines delivering speed accuracy reliability",
    img: "/images/services/cloud/services2.webp",
    href: "/",
  },
  {
    title: "Multi Cloud Migration",
    description:
      "Transforming infrastructure for global scaling resilience and secure performance delivery",
    img: "/images/services/bpo/services3.webp",
    href: "/",
  },
];

const articlesData: ArticleItem[] = [
  {
    id: 1,
    image: "/images/services/cloud/article1.webp",
    title: (
      <>
        Intelligent <br /> Cloud <br /> Analytics
      </>
    ),
    shortDesc:
      "Explore how AI and smart cloud scaling accelerate enterprise productivity",
    longDesc:
      "Unlock efficiency and real time scaling for digital transformation by integrating intelligent cloud analytics and automated systems for seamless performance.",
  },
  {
    id: 2,
    image: "/images/services/cloud/article2.webp",
    title: (
      <>
        Redefining <br /> Cloud <br /> Innovation
      </>
    ),
    shortDesc:
      "Discover future shaping cloud solutions and business accelerating technologies",
    longDesc:
      "AI assisted workload analysis and cloud automation create measurable improvements in agility, performance, reliability and long lasting enterprise scalability.",
  },
  {
    id: 3,
    image: "/images/services/cloud/article3.webp",
    title: (
      <>
        AI and <br /> Cloud <br /> Together
      </>
    ),
    shortDesc:
      "Transform scalability reliability and growth through modern infrastructure",
    longDesc:
      "AI driven automation and secure deployment workflows ensure fast delivery cycles and optimized operational costs with predictive resource management.",
  },
  {
    id: 4,
    image: "/images/services/cloud/article4.webp",
    title: (
      <>
        Build for <br /> Future <br /> Cloud Era
      </>
    ),
    shortDesc:
      "Adopt the most advanced architecture powered by intelligent automation",
    longDesc:
      "Modernize business infrastructure and gain total control with cloud orchestration and automated resource workloads backed by performance optimization.",
  },
  {
    id: 5,
    image: "/images/services/cloud/article5.webp",
    title: (
      <>
        Cloud <br /> Powered <br /> Scalability
      </>
    ),
    shortDesc:
      "Achieve real growth through multi cloud performance optimization",
    longDesc:
      "Maximize efficiency and availability using AI based resource prediction and automated infrastructure tuning for resilient performance scaling globally.",
  },
  {
    id: 6,
    image: "/images/services/cloud/article6.webp",
    title: (
      <>
        Intelligent <br /> Business <br /> Evolution
      </>
    ),
    shortDesc:
      "The cloud ecosystem reshaped by AI powered digital workflow automation",
    longDesc:
      "Experience elevated performance reliability with smart automated deployments and centralized observability to scale infrastructure efficiency.",
  },
];

const industryData: InsustryItem[] = [
  {
    title: "Fintech",
    description:
      "Create secure intelligent operations with automated cloud scaling and AI powered prediction for enhanced control and precision based decisions.",
    img: "/images/services/cloud/industry1.webp",
    href: "/",
  },
  {
    title: "Travel and Tourism",
    description:
      "Deliver highly responsive services with automated infrastructure capacity planning improving global customer experience with real time insights.",
    img: "/images/services/cloud/industry2.webp",
    href: "/",
  },
  {
    title: "Healthcare",
    description:
      "Empower medical systems with secure data management reducing workload errors and enabling advanced resource efficiency through cloud automation.",
    img: "/images/services/cloud/industry3.webp",
    href: "/",
  },
  {
    title: "Technology",
    description:
      "Accelerate product deployment cycles using modern DevOps and infrastructure orchestration for advanced global scalability and performance.",
    img: "/images/services/cloud/industry4.webp",
    href: "/",
  },
  {
    title: "E Commerce",
    description:
      "Enable smart automation for faster delivery higher uptime robust security and enterprise level operational precision using scalable cloud stacks.",
    img: "/images/services/cloud/industry5.webp",
    href: "/",
  },
  {
    title: "Retail",
    description:
      "Use data accuracy automated workflows and predictive analysis for enhanced productivity cost reduction and improved customer experience everywhere.",
    img: "/images/services/cloud/industry6.webp",
    href: "/",
  },
];

const testimonialsData: TestimonialItem[] = [
  {
    name: "Aleen Valzac",
    image: "/images/home/test-user.webp",
    message:
      "Outstanding cloud migration support modern infrastructure automation and real time improvements in performance and reliability beyond expectations.",
  },
  {
    name: "John Doe",
    image: "/images/home/test-user.webp",
    message:
      "The team executed seamless cloud deployment with exceptional efficiency improving delivery performance and strengthening overall reliability.",
  },
  {
    name: "Sarah Wilson",
    image: "/images/home/test-user.webp",
    message:
      "The best transformation experience remarkable support strategic scalability and truly future ready cloud automation solutions.",
  },
];

const faqData: FaqItem[] = [
  {
    title: "What are cloud migration services",
    description:
      "Cloud migration means shifting applications infrastructure and data to cloud platforms improving performance flexibility reliability and cost efficiency for business scalability.",
  },
  {
    title: "What is DevOps automation",
    description:
      "DevOps automation uses automated delivery pipelines and intelligent workflows that speed deployment reduce errors and improve development and operations productivity.",
  },
  {
    title: "Why Kubernetes is important",
    description:
      "Kubernetes orchestrates application workloads automatically scaling updates rollouts and resource scheduling effectively creating improved stability and resilience.",
  },
  {
    title: "How AI improves cloud operations",
    description:
      "AI predicts resource usage optimizes workloads automates monitoring and improves infrastructure budgeting by identifying performance challenges before they occur.",
  },
  {
    title: "What are multi cloud benefits",
    description:
      "Multi cloud infrastructure improves security reduces risk enhances flexibility provides global availability and allows optimized performance based on business goals.",
  },
];

export default function CloudServices() {
  return (
    <>
      <Banner
        title="Next Generation Cloud Transformation"
        description="Empowering enterprises with intelligent cloud automation AI powered orchestration."
        button="Know How"
        href="/"
        bg="/images/services/cloud/banner-bg.webp"
        titleColor="text-bwhite"
        descriptionColor="text-bwhite"
      />

      <Breadcrumb items={breadcrumbItems} />
      <div className="overflow-x-hidden">
        <About
          title1="AI for Business"
          title2="Unlock limitless outcomes"
          description1="Modernize infrastructure streamline workflows and improve operational efficiency with intelligent cloud automation and optimized digital transformation powered by advanced AI insights."
          description2="Empower scalable infrastructure flexible delivery and smart resource optimization using cloud innovation automation and predictive performance engineering tailored for global success."
          image="/images/services/cloud/about.webp"
          id="about"
        />
        <Services
          items={servicesData}
          title={[
            { text: "What", color: "black" },
            { text: "We Do", color: "orange" },
          ]}
          description="Powering enterprises with advanced solutions modern automation intelligent transformation and resilient scalable infrastructure built for the future"
          id="services"
        />

        <Articles
          items={articlesData}
          mainTitle={[
            { text: "Analytics", color: "orange" },
            { text: "Cloud Services", color: "black" },
          ]}
          id="articles"
        />

        <Industries
          items={industryData}
          title={[
            { text: "Industry We", color: "black" },
            { text: "Serve", color: "orange" },
          ]}
          description="Transforming industries through automated innovation secure cloud scaling and intelligent workflow efficiency for measurable business growth"
          id="industries"
        />

        <About2
          title1="AI for Business"
          title2="Unlock limitless outcomes"
          description1="Modernize infrastructure, streamline workflows, and improve operational efficiency with intelligent cloud automation and optimized digital transformation powered by advanced AI insights."
          description2="Empower scalable infrastructure, flexible delivery, and smart resource optimization using cloud innovation, automation, and predictive performance engineering tailored for global success."
          image="/images/services/cloud/about2.webp"
          id="about"
          boxTitle="AI Powered Optimization"
          boxSubtitle="Transform operations with intelligent automation"
          boxDescription="Leverage artificial intelligence to automate workflows, enhance decision-making, and drive scalable business performance through predictive insights and cloud-powered innovation."
        />

        <Testimonials
          title="Testimonials"
          description="Trusted by enterprises worldwide delivering intelligent automation cloud modernization and advanced scalable solutions engineered for impactful performance."
          items={testimonialsData}
          interval={2500}
          id="testimonials"
        />

        <Faq
          items={faqData}
          title={[
            { text: "FAQ", color: "orange" },
            { text: "for Cloud Services", color: "black" },
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
          description="Explore powerful insights on cloud modernization intelligent automation DevOps innovation and next generation scalable infrastructure engineered to drive digital transformation"
          id="blogs"
        />

        <Blogs blogs={blogs} />
      </div>
    </>
  );
}
