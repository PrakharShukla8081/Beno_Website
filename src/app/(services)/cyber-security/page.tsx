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
  title: "Cybersecurity Services | Threat Protection and Compliance",
  description:
    "Secure your organization with advanced cyber risk solutions threat prevention SOC monitoring penetration testing and compliance security enhancement.",
  keywords:
    "cybersecurity services India SOC cyber defence threat prevention penetration testing",
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
    title: "Sales and Customer Security",
    description:
      "Strengthening secure cloud channels with intelligent protection automation for global enterprise growth",
    img: "/images/services/cyber/services1.webp",
    href: "/",
  },
  {
    title: "Human Resources Cyber Governance",
    description:
      "Empowering safe process accuracy with AI enabled identity monitoring and cyber compliance support",
    img: "/images/services/cyber/services2.webp",
    href: "/",
  },
  {
    title: "Insurance Security Intelligence",
    description:
      "Improving secure claim workflows using automated cyber risk controls with faster incident response",
    img: "/images/services/cyber/services3.webp",
    href: "/",
  },
];

const articlesData: ArticleItem[] = [
  {
    id: 1,
    image: "/images/services/cyber/article1.webp",
    title: (
      <>
        Beno <br /> Q4 FY'24 <br /> CLOUD INSIGHTS
      </>
    ),
    shortDesc:
      "Modern cybersecurity analytics driving safer infrastructure and intelligent digital defence",
    longDesc:
      "AI backed cyber defence intelligence accelerating prevention response and security control resilience with deep protection against evolving risks and digital vulnerabilities",
  },
  {
    id: 2,
    image: "/images/services/cyber/article2.webp",
    title: (
      <>
        Everything <br /> starts with <br /> innovation.
      </>
    ),
    shortDesc:
      "Future ready cyber innovation improves protection through automated threat response",
    longDesc:
      "Digital cyber resilience grows with AI powered automation governance and monitored control strengthening security and enhancing enterprise protection capabilities globally",
  },
  {
    id: 3,
    image: "/images/services/cyber/article3.webp",
    title: (
      <>
        Is there a <br /> Future of <br /> Work with AI?
      </>
    ),
    shortDesc:
      "AI driven cybersecurity improves enterprise safety and modern workplace performance",
    longDesc:
      "Automated cyber intelligence secures collaboration cloud identity access and system trust empowering organizations with scalable real time threat mitigation and defence reinforcement",
  },
];

const industryData: InsustryItem[] = [
  {
    title: "BFSI",
    description:
      "Enhancing secure financial operations automation and intelligent monitoring to ensure real time protected customer systems under complete cyber control.",
    img: "/images/services/cyber/industry1.webp",
    href: "/",
  },
  {
    title: "Travel and Tourism",
    description:
      "Enhancing secure travel digital processing automation and smart identity defence for efficient response speed and trusted customer experience across global networks.",
    img: "/images/services/cyber/industry2.webp",
    href: "/",
  },
  {
    title: "Health Care",
    description:
      "Enhancing medical data protection clinical workflow automation and secure digital patient handling with encrypted high trust cyber defence and monitoring.",
    img: "/images/services/cyber/industry3.webp",
    href: "/",
  },
];

const testimonialsData: TestimonialItem[] = [
  {
    name: "Aleen Valzac",
    image: "/images/home/test-user.webp",
    message:
      "Cyber defence automation and AI powered resilience improved our operational protection accuracy performance and detection response ensuring absolute trust and protection.",
  },
  {
    name: "John Doe",
    image: "/images/home/test-user.webp",
    message:
      "Exceptional digital security execution with proactive monitoring and intelligent defence systems supporting seamless transformation and consistent controlled efficiency across operations.",
  },
  {
    name: "Sarah Wilson",
    image: "/images/home/test-user.webp",
    message:
      "Secure cloud workflow transition and smart real time monitoring enabled reliable protection increasing safety accuracy productivity and complete platform resilience.",
  },
];

const faqData: FaqItem[] = [
  {
    title: "What is cybersecurity?",
    description:
      "Cybersecurity protects digital systems networks applications and confidential information against unauthorized risks threats and cyber attacks using advanced security controls.",
  },
  {
    title: "What is a cybersecurity service provider?",
    description:
      "A cybersecurity service provider supports businesses with advanced digital threat protection automation monitoring risk detection and response strategies to reduce cyber exposure.",
  },
  {
    title: "Which cybersecurity services are most important?",
    description:
      "Threat monitoring cloud security compliance audits vulnerability testing data protection identity access management and SOC based real time defence are highly required services.",
  },
  {
    title: "How do cybersecurity services benefit organizations?",
    description:
      "Cybersecurity solutions reduce cyber risks enhance operational security protect sensitive data assure compliance and improve safeguarded digital transformation for enterprises.",
  },
  {
    title: "What are common cybersecurity compliance standards?",
    description:
      "Compliance standards include ISO 27001 GDPR HIPAA PCI DSS SOC2 and NIST which ensure trusted secure policy framework and operational cyber safety excellence.",
  },
];

export default function CyberSecurity() {
  return (
    <>
      <Banner
        title="Cybersecurity Services"
        description="Protecting your digital ecosystem with advanced AI cyber defence secure cloud monitoring and intelligent cybersecurity automation."
        button="Know How"
        href="/"
        bg="/images/services/cyber/banner-bg.webp"
        titleColor="text-bwhite"
        descriptionColor="text-bwhite"
      />

      <Breadcrumb items={breadcrumbItems} />
      <div className="overflow-x-hidden">
        <About
          title1="AI for Business:"
          title2="Know what's possible"
          description1="Modern cyber intelligence enables secure digital transformation smarter automated prevention and powerful resilient enterprise operations protecting mission critical data globally."
          description2="AI powered cyber automation enhances continuity and strengthens secure performance improving risk visibility defense accuracy and reliability for smart business growth and sustainable data protection."
          image="/images/services/cyber/about.webp"
          id="about"
        />
        <Services
          items={servicesData}
          title={[
            { text: "What", color: "black" },
            { text: "We Do", color: "orange" },
          ]}
          description="Driving secure intelligent cyber operations with cloud enabled automation protection governance safety infrastructure and high precision defence systems for sustained growth"
          id="services"
        />

        <Articles
          items={articlesData}
          mainTitle={[
            { text: "Analytics", color: "orange" },
            { text: "Cyber Security", color: "black" },
          ]}
          id="articles"
        />

        <Industries
          items={industryData}
          title={[
            { text: "Industry We", color: "black" },
            { text: "Serve", color: "orange" },
          ]}
          description="Delivering secure intelligent digital operations and automated cyber protection across domains with enhanced performance and strategic resilience for every enterprise"
          id="industries"
        />

        <Testimonials
          title="Testimonials"
          description="Trusted by leading enterprises worldwide for secure digital transformation through AI powered cyber resilience operational visibility and intelligent real time safety enhancement."
          items={testimonialsData}
          interval={2500}
          id="testimonials"
        />

        <Faq
          items={faqData}
          title={[
            { text: "FAQ", color: "orange" },
            { text: "for IT Support", color: "black" },
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
          description="Ut sem odio interdum eu fermentum et porta vitae nisi vivamus tincidunt mattis pharetra nulla condimentum in nisl in gravida donec sed mauris non blandit placerat."
          id="blogs"
        />

        <Blogs blogs={blogs} />
      </div>
    </>
  );
}
