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
  title:
    "Digital Experience Design | AI-Driven UI UX and Intelligent CX Strategy",
  description:
    "We create advanced AI-powered digital experiences through UI UX design, predictive insights, branding intelligence and customer journey optimisation.",
  keywords: "AI UX design, digital transformation, AI branding solutions",
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
    title: "AI Powered Sales & CX Operations",
    description:
      "Enhancing conversion workflows and customer experience intelligence to enable consistent performance growth",
    img: "/images/services/de/services1.webp",
    href: "/",
  },
  {
    title: "AI Human Resource Automations",
    description:
      "Transforming resource functions with smart workflows for accuracy driven decision making and seamless productivity",
    img: "/images/services/de/services2.webp",
    href: "/",
  },
  {
    title: "AI Enhanced Insurance Operations",
    description:
      "Boosting policy handling performance using automation and personalised digital experiences with measurable results",
    img: "/images/services/de/services3.webp",
    href: "/",
  },
];

const articlesData: ArticleItem[] = [
  {
    id: 1,
    image: "/images/services/de/article1.webp",
    title: (
      <>
        AI in Q4 <br /> FY'24 <br /> PERFORMANCE
      </>
    ),
    shortDesc:
      "Reinventing operational value using AI analytics with measurable outcomes",
    longDesc:
      "Reinventing operational value using AI analytics with measurable outcomes Reinventing operational value using AI analytics with measurable outcomes Reinventing operational value using AI analytics with measurable outcomes",
  },
  {
    id: 2,
    image: "/images/services/de/article2.webp",
    title: (
      <>
        Everything <br /> begins with <br /> intelligent vision
      </>
    ),
    shortDesc:
      "Shaping future processes that empower innovation with scalable potential",
    longDesc:
      "Shaping future processes that empower innovation with scalable potential Shaping future processes that empower innovation with scalable potential Shaping future processes that empower innovation with scalable potential",
  },
  {
    id: 3,
    image: "/images/services/de/article3.webp",
    title: (
      <>
        Future of <br /> Work <br /> with AI Evolution
      </>
    ),
    shortDesc:
      "Exploring the next era of workforce automation and productivity",
    longDesc:
      "Exploring the next era of workforce automation and productivity Exploring the next era of workforce automation and productivity Exploring the next era of workforce automation and productivity",
  },
  {
    id: 4,
    image: "/images/services/de/article4.webp",
    title: (
      <>
        Powering <br /> Growth with <br /> Cloud & AI
      </>
    ),
    shortDesc:
      "Driving scalable transformation with next generation cloud platforms",
    longDesc:
      "Driving scalable transformation with next generation cloud platforms Driving scalable transformation with next generation cloud platforms Driving scalable transformation with next generation cloud platforms",
  },
  {
    id: 5,
    image: "/images/services/de/article5.webp",
    title: (
      <>
        Discover the <br /> potential of <br /> AI automation
      </>
    ),
    shortDesc: "Unlocking performance and redefining operational vision",
    longDesc:
      "Unlocking performance and redefining operational vision Unlocking performance and redefining operational vision Unlocking performance and redefining operational vision",
  },
  {
    id: 6,
    image: "/images/services/de/article6.webp",
    title: (
      <>
        Achieving <br /> client success <br /> through AI
      </>
    ),
    shortDesc: "Empowering real growth using adaptive intelligence ecosystems",
    longDesc:
      "Empowering real growth using adaptive intelligence ecosystems Empowering real growth using adaptive intelligence ecosystems Empowering real growth using adaptive intelligence ecosystems",
  },
];

const industryData: InsustryItem[] = [
  {
    title: "BFSI",
    description:
      "Empower secure and modern digital banking infrastructures supported by AI powered processing systems.",
    img: "/images/services/de/industry1.webp",
    href: "/",
  },
  {
    title: "Travel & Tourism",
    description:
      "Deliver hyper personalised journeys and improved booking systems backed by automated digital support.",
    img: "/images/services/de/industry2.webp",
    href: "/",
  },
  {
    title: "Health Care",
    description:
      "Optimise patient operations and data accuracy with AI assisted processing solutions and reliable workflow systems.",
    img: "/images/services/de/industry3.webp",
    href: "/",
  },
  {
    title: "Technology",
    description:
      "Scale product innovation and intelligent support capabilities with adaptive AI transformation strategies.",
    img: "/images/services/de/industry4.webp",
    href: "/",
  },
  {
    title: "E-Commerce",
    description:
      "Improve operational automation and experience management with real time AI personalisation and analytics.",
    img: "/images/services/de/industry5.webp",
    href: "/",
  },
  {
    title: "Retail",
    description:
      "Enable automated systems and customer intelligence technologies to improve retention and purchasing experience.",
    img: "/images/services/de/industry6.webp",
    href: "/",
  },
];

const testimonialsData: TestimonialItem[] = [
  {
    name: "Aleen Valzac",
    image: "/images/home/test-user.webp",
    message:
      "An advanced AI transformation experience that improved our operational clarity and delivered measurable progress.",
  },
  {
    name: "John Doe",
    image: "/images/home/test-user.webp",
    message:
      "A seamless collaboration that enabled authentic digital change supported by real strategic intelligence.",
  },
  {
    name: "Sarah Wilson",
    image: "/images/home/test-user.webp",
    message:
      "The team provided impressive expertise that improved our workflow and enhanced our customer confidence significantly.",
  },
];

const faqData: FaqItem[] = [
  {
    title: "What is AI Digital Experience design",
    description:
      "AI digital experience design improves interactions using intelligent systems and personalised technology supported by automation and real performance metrics",
  },
  {
    title: "How does AI enhance customer experience",
    description:
      "AI enhances customer satisfaction with predictive behaviour insights and automated support for scalable business growth and improved connection",
  },
  {
    title: "Why do brands adopt AI experience solutions",
    description:
      "Brands adopt AI experience systems to improve efficiency accuracy and strategy aligned service through intelligent transformation and advanced automation",
  },
  {
    title: "How does AI support decision making",
    description:
      "AI supports decisions through real time analytics and adaptive systems that analyse data delivering precision and performance consistently",
  },
  {
    title: "What industries benefit from AI based services",
    description:
      "Industries like retail finance travel health and technology adopt AI solutions to streamline systems and enhance experience for strong growth",
  },
];

export default function DigitalExperience() {
  return (
    <>
      <Banner
        title="A new way of Digital Experience"
        description="Empowering modern transformation through AI powered design strategies performance intelligence and elevated customer journeys."
        button="Know How"
        href="/"
        bg="/images/services/de/banner-bg.webp"
        titleColor="text-bwhite"
        descriptionColor="text-bwhite"
      />

      <Breadcrumb items={breadcrumbItems} />
      <div className="overflow-x-hidden">
        <About
          title1="AI for Business:"
          title2="Know what's possible"
          description1="Create adaptive digital solutions connecting intelligence automation and seamless processing improving productivity and value consistently using technology driven insights."
          description2="Empower organisations with intelligent strategy decision optimisation growth vision and meaningful innovation aligned with measurable ROI and modern experience demands."
          image="/images/services/de/about.webp"
          id="about"
        />
        <Services
          items={servicesData}
          title={[
            { text: "What", color: "black" },
            { text: "We Do", color: "orange" },
          ]}
          description="Empowering industries with AI powered process transformation strategies intelligent automation customer focused engineering and measurable performance for sustained innovation"
          id="services"
        />

        <Articles
          items={articlesData}
          mainTitle={[
            { text: "Analytics", color: "orange" },
            { text: "Digital Experience", color: "black" },
          ]}
          id="articles"
        />

        <Industries
          items={industryData}
          title={[
            { text: "Industry We", color: "black" },
            { text: "Serve", color: "orange" },
          ]}
          description="Creating intelligent digital ecosystems supporting operational excellence with automated and strategic growth outcomes"
          id="industries"
        />

        <About2
          title1="AI for Business:"
          title2="Know what's possible"
          description1="Redefining productivity and problem solving using connected digital intelligence and smart workflow integrations for enhanced processes."
          description2="Expanding business potential with scalable performance engines, advanced system capabilities, and AI-powered customer experience engineering."
          image="/images/services/de/about2.webp"
          id="about"
          imagePosiotion="left"
          boxTitle="AI Driven Innovation"
          boxSubtitle="Enhancing processes through intelligent systems"
          boxDescription="We leverage artificial intelligence to optimize workflows, increase productivity, and deliver scalable, data-driven solutions that transform customer experiences and business outcomes."
        />

        <Testimonials
          title="Testimonials"
          description="Delivering intelligent results through advanced engineering adaptive experience solutions measurable performance improvements and high value partnership outcomes."
          items={testimonialsData}
          interval={2500}
          id="testimonials"
        />

        <Faq
          items={faqData}
          title={[
            { text: "FAQ", color: "orange" },
            { text: "for Digital Experience", color: "black" },
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
          description="Explore AI powered innovations transforming industries systems and future economies through actionable intelligence and impactful experience solutions."
          id="blogs"
        />

        <Blogs blogs={blogs} />
      </div>
    </>
  );
}
