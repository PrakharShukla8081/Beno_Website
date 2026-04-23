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
  title: "Custom Software Development & AI Solutions",
  description:
    "End to end software engineering services including SaaS development, mobile apps, cloud migration, and AI system integration for scaling enterprises.",
  keywords:
    "Software development company, AI engineering, SaaS platforms, custom mobile apps, enterprise software",
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
    title: "Custom Software & SaaS",
    description:
      "Building scalable, multi tenant SaaS platforms with robust backend architectures and intuitive frontend interfaces.",
    img: "/images/services/software/services1.webp",
    href: "/",
  },
  {
    title: "Mobile App Development",
    description:
      "Creating high performance iOS and Android applications using React Native and Flutter for seamless user experiences.",
    img: "/images/services/software/services2.webp",
    href: "/",
  },
  {
    title: "AI & API Integration",
    description:
      "Enhancing existing software with third party API integrations, machine learning models, and automated workflows.",
    img: "/images/services/software/services3.webp",
    href: "/",
  },
];

const articlesData: ArticleItem[] = [
  {
    id: 1,
    image: "/images/services/software/article1.webp",
    title: (
      <>
        Future <br /> of Code <br /> REPORT
      </>
    ),
    shortDesc: "The shift from static code to AI augmented development cycles.",
    longDesc:
      "We analyze how generative AI is accelerating the software development lifecycle (SDLC). By automating boilerplate code and unit testing, we reduce time to market while increasing code reliability and security.",
  },
  {
    id: 2,
    image: "/images/services/software/article2.webp",
    title: (
      <>
        Innovation <br /> starts with <br /> Architecture.
      </>
    ),
    shortDesc: "Why microservices are essential for scalable SaaS platforms.",
    longDesc:
      "Monolithic applications stifle growth. We design event driven microservices architectures that allow your application to scale independent components, ensuring high availability during peak traffic loads.",
  },
  {
    id: 3,
    image: "/images/services/software/article3.webp",
    title: (
      <>
        Is there a <br /> Future of <br /> SaaS with AI?
      </>
    ),
    shortDesc: "Embedding intelligence into everyday business applications.",
    longDesc:
      "Modern SaaS isn't just about CRUD operations. It's about predictive capabilities. We integrate LLMs and machine learning models to make your software smarter, personalized, and proactive for end users.",
  },
  {
    id: 4,
    image: "/images/services/software/article4.webp",
    title: (
      <>
        Realizing <br /> the Power <br /> of Cloud <br /> Native
      </>
    ),
    shortDesc: "Optimizing costs and performance with serverless computing.",
    longDesc:
      "Leverage the full power of AWS and Azure. Our cloud native development approach utilizes containers and serverless functions to lower infrastructure costs while improving deployment speed and flexibility.",
  },
  {
    id: 5,
    image: "/images/services/software/article5.webp",
    title: (
      <>
        Look into the <br /> potential <br /> of mobile <br /> growth
      </>
    ),
    shortDesc: "Building cross platform experiences that retain users.",
    longDesc:
      "From Flutter to React Native, we build mobile applications that offer native performance with shared codebases. This strategy reduces development time ensuring a consistent experience across iOS and Android.",
  },
  {
    id: 6,
    image: "/images/services/software/article6.webp",
    title: (
      <>
        Achieving <br /> Digital <br /> Excellence
      </>
    ),
    shortDesc: "Turning legacy systems into modern digital assets.",
    longDesc:
      "Don't let technical debt hold you back. We specialize in legacy modernization, refactoring outdated codebases into modern frameworks without disrupting your critical business operations.",
  },
];

const industryData: InsustryItem[] = [
  {
    title: "Fintech",
    description:
      "Create secure intelligent operations with automated cloud scaling and AI powered prediction for enhanced control and precision based decisions.",
    img: "/images/services/software/industry1.webp",
    href: "/",
  },
  {
    title: "Travel and Tourism",
    description:
      "Deliver highly responsive services with automated infrastructure capacity planning improving global customer experience with real time insights.",
    img: "/images/services/software/industry2.webp",
    href: "/",
  },
  {
    title: "Healthcare",
    description:
      "Empower medical systems with secure data management reducing workload errors and enabling advanced resource efficiency through cloud automation.",
    img: "/images/services/software/industry3.webp",
    href: "/",
  },
  {
    title: "Technology",
    description:
      "Accelerate product deployment cycles using modern DevOps and infrastructure orchestration for advanced global scalability and performance.",
    img: "/images/services/software/industry4.webp",
    href: "/",
  },
  {
    title: "E Commerce",
    description:
      "Enable smart automation for faster delivery higher uptime robust security and enterprise level operational precision using scalable cloud stacks.",
    img: "/images/services/software/industry5.webp",
    href: "/",
  },
  {
    title: "Retail",
    description:
      "Use data accuracy automated workflows and predictive analysis for enhanced productivity cost reduction and improved customer experience everywhere.",
    img: "/images/services/software/industry6.webp",
    href: "/",
  },
];

const testimonialsData: TestimonialItem[] = [
  {
    name: "James Carter",
    image: "/images/home/test-user.webp",
    message:
      "Their engineering team transformed our MVP into a fully scalable SaaS product. The integration of AI features gave us a massive competitive edge in the market.",
  },
  {
    name: "Priya Sharma",
    image: "/images/home/test-user.webp",
    message:
      "We needed a mobile app that could handle complex real time data. They delivered a flawless solution on both iOS and Android within a strict timeline.",
  },
  {
    name: "Michael Ross",
    image: "/images/home/test-user.webp",
    message:
      "The legacy modernization project was a huge success. They migrated our old system to the cloud with zero downtime, significantly improving our operational efficiency.",
  },
];

const faqData: FaqItem[] = [
  {
    title: "What is your software development methodology?",
    description:
      "We follow an Agile/Scrum methodology. This ensures iterative delivery, regular feedback loops, and the flexibility to adapt to changing requirements, ensuring the final product perfectly aligns with your business goals.",
  },
  {
    title: "Do you provide source code ownership?",
    description:
      "Yes, absolutely. Upon project completion and final payment, you retain 100% ownership of the source code and intellectual property. We act as your development partner, not the owner of your product.",
  },
  {
    title: "Can you integrate AI into existing software?",
    description:
      "Yes. We specialize in retrofitting existing applications with AI capabilities. Whether it is adding a chatbot, predictive analytics, or automated document processing, we can integrate these features via APIs.",
  },
  {
    title: "How do you ensure software security?",
    description:
      "Security is integrated into our DevSecOps process. We conduct regular code reviews, vulnerability assessments, and adhere to OWASP best practices to ensure your application is secure against modern threats.",
  },
  {
    title: "Do you offer post launch support?",
    description:
      "We offer comprehensive maintenance and support packages. This includes bug fixes, security updates, server monitoring, and feature enhancements to keep your software running smoothly after deployment.",
  },
];

export default function SoftwareServices() {
  return (
    <>
      <Banner
        title="Engineering the Digital Future"
        description="We build robust, scalable, and intelligent software solutions. From custom SaaS platforms to AI-driven mobile apps, we turn complex challenges into elegant code."
        button="Start Building"
        href="/"
        bg="/images/services/software/banner-bg.webp"
        titleColor="text-bwhite"
        descriptionColor="text-bwhite"
      />

      <Breadcrumb items={breadcrumbItems} />
      <div className="overflow-x-hidden">
        <About
          title1="Digital Engineering:"
          title2="Code with Purpose"
          description1="Software is the engine of modern business. We move beyond basic coding to provide strategic software architecture. By combining engineering excellence with deep industry knowledge, we create digital products that drive revenue and user engagement."
          description2="Our approach is rooted in agility and precision. Whether you are a startup building an MVP or an enterprise modernizing a legacy system, our team leverages the latest tech stacks and AI tools to deliver secure, scalable, and future proof solutions."
          image="/images/services/software/about.webp"
          id="about"
        />
        <Services
          items={servicesData}
          title={[
            { text: "What", color: "black" },
            { text: "We Build", color: "orange" },
          ]}
          description="Comprehensive software development services designed to solve business problems through technology and innovation."
          id="services"
        />

        <Articles
          items={articlesData}
          mainTitle={[
            { text: "Insights", color: "orange" },
            { text: "Tech Trends", color: "black" },
          ]}
          id="articles"
        />

        <Industries
          items={industryData}
          title={[
            { text: "Industries We", color: "black" },
            { text: "Transform", color: "orange" },
          ]}
          description=" delivering tailored software solutions that meet the specific regulatory and operational demands of diverse sectors."
          id="industries"
        />

        <About2
          title1="Agile Innovation:"
          title2="Scalable Tech"
          description1="Speed wins in the digital age. We utilize CI/CD pipelines and automated testing to ensure rapid delivery without compromising quality. Our developers work as an extension of your team, ensuring transparency and collaboration at every sprint."
          description2="We are not just builders; we are problem solvers. By integrating Artificial Intelligence and cloud-native technologies, we help you anticipate market shifts and scale your infrastructure effortlessly as your user base grows."
          image="/images/services/software/about2.webp"
          id="about"
          boxTitle="AI Driven Agile Development"
          boxSubtitle="Accelerating innovation through intelligent systems"
          boxDescription="We combine AI and cloud native technologies to optimize development workflows, ensure rapid, scalable delivery, and enable proactive adaptation to changing market demands, enhancing overall business agility."
        />

        <Testimonials
          title="Client Success Stories"
          description="See how our custom software solutions have helped businesses streamline operations and launch successful digital products."
          items={testimonialsData}
          interval={2500}
          id="testimonials"
        />

        <Faq
          items={faqData}
          title={[
            { text: "FAQ", color: "orange" },
            { text: "for Software", color: "black" },
          ]}
          id="faq"
        />

        <ContactForm />

        <RecentBlog
          blog={blogs[0]}
          title={[
            { text: "Recent", color: "black" },
            { text: "Insights", color: "orange" },
          ]}
          description="Stay ahead of the curve with our latest thoughts on software engineering, cloud computing, and digital transformation."
          id="blogs"
        />

        <Blogs blogs={blogs} />
      </div>
    </>
  );
}
