import Loader from "@/app/loading";
import dynamic from "next/dynamic";
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

const Articles = dynamic(() => import("@/components/services/articles"), {
  loading: () => <Loader />,
});

const About2 = dynamic(() => import("@/components/services/about2"), {
  loading: () => <Loader />,
});

const Industries = dynamic(() => import("@/components/services/industries"), {
  loading: () => <Loader />,
});

const Services = dynamic(() => import("@/components/services/services"), {
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
  title: "Digital Transformation Services | AI Automation & Modernization",
  description:
    "We help enterprises modernize IT systems, integrate automation, optimize workflows, and digitize operations using AI, analytics, and cloud technology.",
  keywords:
    "digital transformation company, automation services, enterprise modernization, AI workflow automation",
};

const articlesData: ArticleItem[] = [
  {
    id: 1,
    image: "/images/services/dgt/article1.webp",
    title: (
      <>
        Digital <br /> Transformation <br /> Framework
      </>
    ),
    shortDesc:
      "Strategic roadmap for modernization integrating cloud, automation, and AI driven insights",
    longDesc:
      "Our comprehensive framework accelerates digital evolution through phased implementation of intelligent systems, data integration, and process automation for measurable business impact",
  },
  {
    id: 2,
    image: "/images/services/dgt/article2.webp",
    title: (
      <>
        Legacy System <br /> Modernization <br /> Solutions
      </>
    ),
    shortDesc:
      "Transform outdated infrastructures into agile, cloud native digital ecosystems",
    longDesc:
      "We migrate and modernize legacy systems with secure cloud architectures, API integrations, and scalable platforms that enhance operational efficiency and future-ready capabilities",
  },
  {
    id: 3,
    image: "/images/services/dgt/article3.webp",
    title: (
      <>
        AI Powered <br /> Process <br /> Automation
      </>
    ),
    shortDesc:
      "Intelligent automation that streamlines workflows and eliminates manual bottlenecks",
    longDesc:
      "Implement cognitive automation solutions combining RPA, machine learning, and intelligent workflows to optimize operations, reduce costs, and accelerate digital throughput",
  },
  {
    id: 4,
    image: "/images/services/dgt/article4.webp",
    title: (
      <>
        Data Driven <br /> Transformation <br /> Strategy
      </>
    ),
    shortDesc:
      "Leverage analytics and business intelligence for informed digital decision making",
    longDesc:
      "Our data transformation services unify siloed information into actionable insights through advanced analytics, real time dashboards, and predictive modeling for strategic advantage",
  },
  {
    id: 5,
    image: "/images/services/dgt/article5.webp",
    title: (
      <>
        Cloud <br /> Migration & <br /> Optimization
      </>
    ),
    shortDesc:
      "Seamless transition to cloud environments with continuous performance enhancement",
    longDesc:
      "End to end cloud transformation services including assessment, migration, security implementation, and ongoing optimization for scalable, resilient digital infrastructure",
  },
  {
    id: 6,
    image: "/images/services/dgt/article6.webp",
    title: (
      <>
        Customer Centric <br /> Digital <br /> Experience
      </>
    ),
    shortDesc:
      "Redesign customer journeys with omnichannel digital solutions and personalized engagement",
    longDesc:
      "Transform customer interactions through integrated digital platforms, UX/UI modernization, and personalized automation that drive engagement, loyalty, and conversion growth",
  },
];

const servicesData: ServicesItem[] = [
  {
    title: "Sales & Customer Operations",
    description:
      "Improving performance using AI assisted tools accelerating lead handling and better customer experiences",
    img: "/images/services/dgt/services1.webp",
    href: "/",
  },
  {
    title: "Human Resources Operations",
    description:
      "AI driven automation reduces manual effort improving accuracy engagement and productivity for HR teams",
    img: "/images/services/dgt/services2.webp",
    href: "/",
  },
  {
    title: "Insurance Services",
    description:
      "Enhancing digital touchpoints and claim workflows improving retention and seamless customer satisfaction",
    img: "/images/services/dgt/services3.webp",
    href: "/",
  },
  {
    title: "Finance & Accounting",
    description:
      "Automating validation reconciliation and reporting improving accuracy compliance and operational clarity",
    img: "/images/services/dgt/services4.webp",
    href: "/",
  },
  {
    title: "Health Care Services",
    description:
      "AI backed data systems enable reliable information access enhancing outcomes with seamless coordination",
    img: "/images/services/dgt/services5.webp",
    href: "/",
  },
  {
    title: "Banking and Financial Services",
    description:
      "AI powered lifecycle operations lending fraud analysis and audit automation for secure transactions",
    img: "/images/services/dgt/services6.webp",
    href: "/",
  },
];

const breadcrumbItems = [
  { label: "Services", href: "#services" },
  { label: "Articles", href: "#articles" },
  { label: "Industries", href: "#industries" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ's", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
  { label: "Our Blog", href: "#blogs" },
];

const industryData: InsustryItem[] = [
  {
    title: "BFSI",
    description:
      "Modernizing processes using automation and digital intelligence enhancing risk accuracy speed and trust",
    img: "/images/services/dgt/industry1.webp",
    href: "/",
  },
  {
    title: "Travel & Tourism",
    description:
      "Intelligent automation improves support bookings and experiences ensuring smooth operational efficiency",
    img: "/images/services/dgt/industry2.webp",
    href: "/",
  },
  {
    title: "Health Care",
    description:
      "Smarter workflows optimize accessibility records management diagnostics and service continuity",
    img: "/images/services/dgt/industry3.webp",
    href: "/",
  },
  {
    title: "Technology",
    description:
      "AI driven modernization accelerates delivery performance innovation and sustainable digital growth",
    img: "/images/services/dgt/industry4.webp",
    href: "/",
  },
  {
    title: "E-Commerce",
    description:
      "Automation supports seamless order cycles real-time tracking customer service and business scaling",
    img: "/images/services/dgt/industry5.webp",
    href: "/",
  },
  {
    title: "Retail",
    description:
      "AI powered insights enhance inventory demand forecasting and customer engagement strategies",
    img: "/images/services/dgt/industry6.webp",
    href: "/",
  },
];

const testimonialsData: TestimonialItem[] = [
  {
    name: "Aleen Valzac",
    image: "/images/home/test-user.webp",
    message:
      "Our workflow improved dramatically with automated support enabling faster execution and smooth collaboration making processes more productive than ever",
  },
  {
    name: "John Doe",
    image: "/images/home/test-user.webp",
    message:
      "AI based optimization changed how our teams operate improving delivery speed and decision quality with seamless technology adoption",
  },
  {
    name: "Sarah Wilson",
    image: "/images/home/test-user.webp",
    message:
      "Partnering with them empowered us to streamline operations through digital transformation enhancing agility accuracy and customer trust",
  },
];

const faqData: FaqItem[] = [
  {
    title: "What is retail BPO?",
    description:
      "Retail BPO includes outsourcing customer support sales management and service operations improving workflow speed efficiency and business performance with digital automation",
  },
  {
    title: "What is retail service outsourcing?",
    description:
      "It means partnering with skilled teams managing support delivery order processes and backend operations using automation to reduce workload and enhance accuracy",
  },
  {
    title: "Which BPO services are in demand in retail industry?",
    description:
      "Most used services include AI based support chat order management analytics returns processing and customer experience enhancement for seamless operations",
  },
  {
    title: "How do BPO services benefit the retail industry?",
    description:
      "They improve productivity scalability and customer satisfaction with automation reducing effort cycle time and running costs while boosting long term retention",
  },
  {
    title: "What are some common BPO services provided to retailers?",
    description:
      "Services include product support sales automation logistics tracking intelligence reporting and inventory coordination improving total operational efficiency",
  },
];

export default function DigitalTransformation() {
  return (
    <>
      <Banner
        title="Digital Transformation"
        description="Transform how your business works using AI automation and cloud intelligence improving performance productivity and customer experience for modern growth"
        button="Know How"
        href="/"
        bg="/images/services/dgt/banner-bg.webp"
        titleColor="text-bwhite"
        descriptionColor="text-bwhite"
      />

      <Breadcrumb items={breadcrumbItems} />

      <div className="overflow-x-hidden">
        <About
          title1="AI for Business:"
          title2="Know what's possible"
          description1="Discover how AI automation and smart digital solutions reshape business operations simplifying complex tasks increasing speed and building better productivity for sustainable performance."
          description2="From intelligent analytics to automated decision systems digital transformation empowers future ready success creating smooth connected workflows that elevate value throughout every experience."
          image="/images/services/dgt/about.webp"
          id="about"
        />
        <Services
          items={servicesData}
          title={[
            { text: "What", color: "black" },
            { text: "We Do", color: "orange" },
          ]}
          description="A vast sector needs comprehensive AI driven outsourcing solutions for reliable scalable and modern digital operations enabling enterprises to grow sustainably with intelligent assistance"
          id="services"
        />

        <Articles
          items={articlesData}
          mainTitle={[
            { text: "Analytics", color: "orange" },
            { text: "Digital Transformation", color: "black" },
          ]}
          id="articles"
        />

        <Industries
          items={industryData}
          title={[
            { text: "Industry We", color: "black" },
            { text: "Serve", color: "orange" },
          ]}
          description="We empower diverse industries through digital transformation delivering strategy execution and AI enabled service for seamless operational evolution"
          id="industries"
        />

        <About2
          title1="AI for Business:"
          title2="Know what's possible"
          description1="Unlock new opportunities with digital intelligence, accelerating workflows, team efficiency, and real-time automation to make work simpler, faster, and future-ready."
          description2="We help businesses adopt smarter technology, improve collaboration and productivity, and build intelligent systems that transform operations and enhance overall business outcomes."
          image="/images/services/dgt/about2.webp"
          id="about"
          boxTitle="AI Driven Business Transformation"
          boxSubtitle="Streamlining operations with intelligent systems"
          boxDescription="We implement AI powered solutions to automate processes, enhance team efficiency, and deliver actionable insights that drive growth, innovation, and long-term business success."
        />

        <Testimonials
          title="Testimonials"
          description="Our partners achieved real results using automation and AI powered improvement boosting performance accuracy and operational excellence while transforming customer experiences"
          items={testimonialsData}
          interval={2500}
          id="testimonials"
        />

        <Faq
          items={faqData}
          title={[
            { text: "FAQ", color: "orange" },
            { text: "for Digital Transformation", color: "black" },
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
          description="Explore insights strategies and innovation trends shaping the future of intelligent digital transformation and automation across global industries expanding value and growth opportunities."
          id="blogs"
        />

        <Blogs blogs={blogs} />
      </div>
    </>
  );
}
