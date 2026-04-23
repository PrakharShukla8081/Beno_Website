import dynamic from "next/dynamic";
import Loader from "@/app/loading";
import Banner from "@/components/services/banner";
import Breadcrumb from "@/components/common/breadcrumb";
import { ServicesItem } from "@/components/services/services";
import { ArticleItem } from "@/components/services/articles";
import { InsustryItem } from "@/components/services/industries";
import { TestimonialItem } from "@/components/home/testimonials";
import { FaqItem } from "@/components/common/faq";
import { Metadata } from "next";
import About from "@/components/services/about";
import { blogs } from "../../../../public/json/blogs";

const Articles = dynamic(() => import("@/components/services/articles"), {
  loading: () => <Loader />,
});

const About2 = dynamic(() => import("@/components/services/about2"), {
  loading: () => <Loader />,
});

const Services = dynamic(() => import("@/components/services/services"), {
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
    "AI Powered BPO Services | Next Generation Business Process Outsourcing",
  description:
    "Transform operations with AI driven BPO solutions. Intelligent customer support, automated back office, and data driven process optimization for modern enterprises.",
  keywords:
    "AI BPO services, intelligent process automation, cognitive outsourcing, digital transformation BPO, smart business process outsourcing",
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
    title: "Intelligent Customer Operations",
    description:
      "AI powered customer service with predictive analytics and automated response systems for superior engagement",
    img: "/images/services/bpo/services1.webp",
    href: "/",
  },
  {
    title: "Smart HR Process Automation",
    description:
      "AI driven recruitment, employee analytics and automated HR operations with precision and efficiency",
    img: "/images/services/bpo/services2.webp",
    href: "/",
  },
  {
    title: "Insurance Process Intelligence",
    description:
      "Cognitive claims processing, risk assessment automation and AI enhanced customer service solutions",
    img: "/images/services/bpo/services3.webp",
    href: "/",
  },
  {
    title: "AI Finance & Accounting",
    description:
      "Automated financial reporting, intelligent bookkeeping and predictive analytics for financial planning",
    img: "/images/services/bpo/services4.webp",
    href: "/",
  },
  {
    title: "Healthcare Process Optimization",
    description:
      "Medical billing automation, patient data management and AI enhanced healthcare administration services",
    img: "/images/services/bpo/services5.webp",
    href: "/",
  },
  {
    title: "Banking Technology Solutions",
    description:
      "AI powered fraud detection, automated loan processing and intelligent customer banking operations",
    img: "/images/services/bpo/services6.webp",
    href: "/",
  },
  {
    title: "Retail Process Intelligence",
    description:
      "Inventory automation, customer behavior analytics and AI driven supply chain optimization solutions",
    img: "/images/services/bpo/services7.webp",
    href: "/",
  },
];

const articlesData: ArticleItem[] = [
  {
    id: 1,
    image: "/images/services/bpo/article1.webp",
    title: (
      <>
        AI Revolution <br /> in Modern <br /> BPO Services
      </>
    ),
    shortDesc:
      "Transforming traditional outsourcing with artificial intelligence",
    longDesc:
      "Discover how AI technologies are revolutionizing business process outsourcing, enabling smarter operations and enhanced customer experiences.",
  },
  {
    id: 2,
    image: "/images/services/bpo/article2.webp",
    title: (
      <>
        Cognitive <br /> Automation <br /> Solutions
      </>
    ),
    shortDesc: "Intelligent process automation for business excellence",
    longDesc:
      "Explore cognitive automation technologies that transform manual processes into intelligent automated workflows.",
  },
  {
    id: 3,
    image: "/images/services/bpo/article3.webp",
    title: (
      <>
        Data Driven <br /> Decision <br /> Making
      </>
    ),
    shortDesc: "Leveraging analytics for strategic business outcomes",
    longDesc:
      "Learn how data analytics and AI enable informed decision making and predictive insights in business operations.",
  },
  {
    id: 4,
    image: "/images/services/bpo/article4.webp",
    title: (
      <>
        Cloud Based <br /> BPO <br /> Infrastructure
      </>
    ),
    shortDesc: "Scalable solutions for modern business requirements",
    longDesc:
      "Understanding cloud computing's role in creating flexible and scalable business process outsourcing frameworks.",
  },
  {
    id: 5,
    image: "/images/services/bpo/article5.webp",
    title: (
      <>
        Digital <br /> Transformation <br /> Journey
      </>
    ),
    shortDesc: "Modernizing operations with technology integration",
    longDesc:
      "Insights into successful digital transformation strategies for traditional business process operations.",
  },
  {
    id: 6,
    image: "/images/services/bpo/article6.webp",
    title: (
      <>
        Future of <br /> Intelligent <br /> Outsourcing
      </>
    ),
    shortDesc: "Next generation technologies shaping BPO evolution",
    longDesc:
      "Exploring emerging technologies and their impact on the future landscape of business process outsourcing.",
  },
];

const industryData: InsustryItem[] = [
  {
    title: "Banking & Finance",
    description:
      "AI enhanced financial services with automated transaction processing and intelligent risk management solutions.",
    img: "/images/services/bpo/industry1.webp",
    href: "/",
  },
  {
    title: "Travel Technology",
    description:
      "Intelligent booking systems, automated customer service and AI driven travel experience optimization.",
    img: "/images/services/bpo/industry2.webp",
    href: "/",
  },
  {
    title: "Healthcare Technology",
    description:
      "Digital health solutions, automated patient management and intelligent healthcare administration services.",
    img: "/images/services/bpo/industry3.webp",
    href: "/",
  },
  {
    title: "Technology Sector",
    description:
      "IT process automation, technical support intelligence and AI driven software development operations.",
    img: "/images/services/bpo/industry4.webp",
    href: "/",
  },
  {
    title: "E Commerce",
    description:
      "Automated order processing, intelligent customer engagement and AI optimized supply chain management.",
    img: "/images/services/bpo/industry5.webp",
    href: "/",
  },
  {
    title: "Retail Innovation",
    description:
      "Smart inventory management, customer behavior analytics and automated retail operations solutions.",
    img: "/images/services/bpo/industry6.webp",
    href: "/",
  },
  {
    title: "Insurance Technology",
    description:
      "AI powered claims processing, automated underwriting and intelligent risk assessment solutions.",
    img: "/images/services/bpo/industry7.webp",
    href: "/",
  },
];

const testimonialsData: TestimonialItem[] = [
  {
    name: "Michael Chen",
    image: "/images/home/test-user.webp",
    message:
      "Their AI driven BPO solutions transformed our customer service operations. The intelligent automation reduced processing time by 65% while improving accuracy significantly.",
  },
  {
    name: "Sarah Johnson",
    image: "/images/home/test-user.webp",
    message:
      "The cognitive automation implementation exceeded expectations. Our back office operations are now more efficient and data driven than ever before.",
  },
  {
    name: "David Rodriguez",
    image: "/images/home/test-user.webp",
    message:
      "Partnering with them brought technological excellence to our outsourcing strategy. The AI integration has been seamless and highly effective.",
  },
];

const faqData: FaqItem[] = [
  {
    title: "What is AI powered BPO?",
    description:
      "AI powered BPO integrates artificial intelligence, machine learning and cognitive automation into traditional business process outsourcing, creating intelligent systems that learn, adapt and optimize operations continuously for superior outcomes.",
  },
  {
    title: "How does technology enhance BPO services?",
    description:
      "Technology transforms BPO through intelligent automation, predictive analytics, real time monitoring and AI driven decision making, resulting in increased efficiency, accuracy and scalability across all business processes.",
  },
  {
    title: "Which AI technologies are used in modern BPO?",
    description:
      "Modern BPO utilizes natural language processing, machine learning algorithms, robotic process automation, predictive analytics, computer vision and cognitive computing to create intelligent business process solutions.",
  },
  {
    title: "How do intelligent BPO services benefit businesses?",
    description:
      "Intelligent BPO services deliver cost optimization, process efficiency, enhanced accuracy, scalability, data driven insights and competitive advantage through technology enabled business process transformation.",
  },
  {
    title: "What processes can be automated with AI in BPO?",
    description:
      "AI can automate customer service interactions, data entry and processing, document analysis, quality assurance, predictive maintenance, fraud detection and numerous other repetitive or complex business processes.",
  },
];

export default function Bpo() {
  return (
    <>
      <Banner
        title="Business Process Outsourcing"
        description="Transform your operations with AI driven BPO solutions. We integrate intelligent automation and data analytics to optimize processes."
        button="Explore Solutions"
        href="/contact-us"
        bg="/images/services/bpo/banner-bg.webp"
      />

      <Breadcrumb items={breadcrumbItems} />
      <div className="overflow-x-hidden">
        <About
          title1="AI Powered Transformation:"
          title2="Intelligent Process Solutions"
          description1="Modern BPO transcends traditional outsourcing through artificial intelligence and cognitive technologies. Our intelligent systems analyze patterns, automate complex processes and deliver insights that drive business excellence and competitive advantage."
          description2="We deploy machine learning algorithms and predictive analytics to create adaptive business processes. These intelligent solutions continuously optimize operations, enhance decision making and deliver measurable improvements in efficiency and customer satisfaction."
          image="/images/services/bpo/about.webp"
          id="about"
        />

        <Services
          items={servicesData}
          title={[
            { text: "Intelligent", color: "black" },
            { text: "Solutions", color: "orange" },
          ]}
          description="Our AI enhanced BPO services combine technological innovation with operational excellence to deliver transformative results across business functions"
          id="services"
        />

        <Articles
          items={articlesData}
          mainTitle={[
            { text: "Cognitive", color: "orange" },
            { text: "Insights", color: "black" },
          ]}
          id="articles"
        />

        <Industries
          items={industryData}
          title={[
            { text: "Industry Specific", color: "black" },
            { text: "Intelligence", color: "orange" },
          ]}
          description="We deliver customized intelligent BPO solutions designed for specific industry challenges and opportunities"
          id="industries"
        />

        <About2
          title1="Technology Integration:"
          title2="Digital Transformation Excellence"
          description1="Our approach combines advanced technologies with deep domain expertise. We implement AI-driven solutions that seamlessly integrate with existing systems, ensuring smooth digital transformation and immediate value realization."
          description2="Through continuous innovation and technology adoption, we create future-ready business processes. Our solutions evolve with technological advancements, ensuring clients maintain competitive advantage in rapidly changing markets."
          image="/images/services/bpo/about2.webp"
          id="about"
          boxTitle="Technology Modernization"
          boxSubtitle="Transforming businesses through intelligent automation"
          boxDescription="We integrate advanced digital technologies including AI, automation, and data intelligence to streamline processes, improve operational efficiency, and accelerate digital transformation."
        />

        <Testimonials
          title="Client Success Stories"
          description="Organizations across industries have transformed their operations through our intelligent BPO solutions, achieving significant improvements in efficiency, accuracy and customer satisfaction."
          items={testimonialsData}
          interval={2500}
          id="testimonials"
        />

        <Faq
          items={faqData}
          title={[
            { text: "Intelligent BPO", color: "orange" },
            { text: "FAQs", color: "black" },
          ]}
          id="faq"
        />

        <ContactForm />

        <RecentBlog
          blog={blogs[0]}
          title={[
            { text: "Latest", color: "black" },
            { text: "Insights", color: "orange" },
          ]}
          description="Explore thought leadership and industry perspectives on intelligent business process transformation and technological innovation"
          id="blogs"
        />

        <Blogs blogs={blogs} />
      </div>
    </>
  );
}
