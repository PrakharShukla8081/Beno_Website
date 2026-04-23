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
  title: "AI Driven HR Outsourcing & Talent Solutions",
  description:
    "Next gen Recruitment Process Outsourcing (RPO), AI staffing, payroll automation, and strategic workforce management solutions for modern enterprises.",
  keywords:
    "HR outsourcing AI, RPO services, talent acquisition, automated payroll, workforce analytics",
};

const articlesData: ArticleItem[] = [
  {
    id: 1,
    image: "/images/services/hr/article1.webp",
    title: (
      <>
        Future <br /> Workforce <br /> PLANNING
      </>
    ),
    shortDesc:
      "Predicting talent gaps before they impact your operational efficiency.",
    longDesc:
      "We utilize predictive analytics to forecast skill requirements and labor shortages. This proactive approach ensures your organization is always staffed with the right talent at the right time.",
  },
  {
    id: 2,
    image: "/images/services/hr/article2.webp",
    title: (
      <>
        Everything <br /> starts with <br /> CULTURE.
      </>
    ),
    shortDesc:
      "Building resilient teams that thrive in remote and hybrid environments.",
    longDesc:
      "Culture is the backbone of retention. We help you design onboarding and engagement strategies that foster belonging and productivity, regardless of where your employees are located.",
  },
  {
    id: 3,
    image: "/images/services/hr/article3.webp",
    title: (
      <>
        Is there a <br /> Future of <br /> Work with AI?
      </>
    ),
    shortDesc:
      "Integrating artificial intelligence into the recruitment lifecycle.",
    longDesc:
      "AI is not replacing recruiters but empowering them. From resume parsing to sentiment analysis in interviews, we leverage technology to remove bias and speed up hiring cycles.",
  },
  {
    id: 4,
    image: "/images/services/hr/article4.webp",
    title: (
      <>
        Realizing <br /> the Power <br /> of People <br /> Analytics
      </>
    ),
    shortDesc: "Turning raw employee data into actionable business insights.",
    longDesc:
      "Move beyond basic reporting. Our advanced people analytics provide deep visibility into attrition risks, performance metrics, and leadership development opportunities.",
  },
  {
    id: 5,
    image: "/images/services/hr/article5.webp",
    title: (
      <>
        Unlock the <br /> potential <br /> of global <br /> talent
      </>
    ),
    shortDesc: "Sourcing specialized skills from a borderless talent pool.",
    longDesc:
      "Geography is no longer a limit. We handle the complexities of international hiring, compliance, and payroll so you can access the best minds globally without administrative friction.",
  },
  {
    id: 6,
    image: "/images/services/hr/article6.webp",
    title: (
      <>
        Achieving <br /> Client's <br /> Ambitions
      </>
    ),
    shortDesc:
      "Aligning HR strategy directly with your corporate revenue goals.",
    longDesc:
      "We do not just fill seats we build teams that drive growth. Our strategic alignment ensures every hire contributes directly to your company's long term vision and success.",
  },
];

const servicesData: ServicesItem[] = [
  {
    title: "Talent Acquisition (RPO)",
    description:
      "End to end recruitment process outsourcing using AI tools to source, screen, and onboard top tier candidates faster.",
    img: "/images/services/hr/services1.webp",
    href: "/",
  },
  {
    title: "HR Operations & Payroll",
    description:
      "Streamlining payroll processing and compliance management to reduce errors and ensure timely compensation.",
    img: "/images/services/hr/services2.webp",
    href: "/",
  },
  {
    title: "Workforce Analytics",
    description:
      "Leveraging data driven insights to optimize employee performance, retention rates, and overall organizational health.",
    img: "/images/services/hr/services3.webp",
    href: "/",
  },
  {
    title: "Employee Benefits Admin",
    description:
      "Managing complex benefits packages efficiently to improve employee satisfaction and reduce administrative burden.",
    img: "/images/services/hr/services4.webp",
    href: "/",
  },
  {
    title: "Learning & Development",
    description:
      "Creating upskilling pathways and training modules that align employee growth with business technology needs.",
    img: "/images/services/hr/services5.webp",
    href: "/",
  },
  {
    title: "Compliance & Risk Mgmt",
    description:
      "Navigating labor laws and regulatory requirements to protect your business from legal risks and penalties.",
    img: "/images/services/hr/services6.webp",
    href: "/",
  },
  {
    title: "Executive Search",
    description:
      "Specialized headhunting services for C Suite and senior leadership roles using discreet and targeted methodologies.",
    img: "/images/services/hr/services7.webp",
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
      "Sourcing high compliance talent for banking and fintech, ensuring candidates meet strict regulatory and skill standards.",
    img: "/images/services/hr/industry1.webp",
    href: "/",
  },
  {
    title: "Technology & SaaS",
    description:
      "Rapid deployment of developers and technical staff using AI assessments to verify coding skills and culture fit.",
    img: "/images/services/hr/industry2.webp",
    href: "/",
  },
  {
    title: "Health Care",
    description:
      "Managing credentialing and staffing for medical professionals with precision to maintain patient care standards.",
    img: "/images/services/hr/industry3.webp",
    href: "/",
  },
];

const testimonialsData: TestimonialItem[] = [
  {
    name: "Elena Rostova",
    image: "/images/home/test-user.webp",
    message:
      "The AI driven sourcing tools reduced our time to hire by 40%. Their team understood our technical requirements perfectly and delivered candidates who were productive from day one.",
  },
  {
    name: "Mark Henderson",
    image: "/images/home/test-user.webp",
    message:
      "Outsourcing our payroll and benefits administration was the best decision for our scaling startup. We now have enterprise level HR compliance without the overhead costs.",
  },
  {
    name: "Sarah Jenkins",
    image: "/images/home/test-user.webp",
    message:
      "Their RPO solution is seamless. They act as a true extension of our internal team, providing data and insights that have completely transformed our talent acquisition strategy.",
  },
];

const faqData: FaqItem[] = [
  {
    title: "What is AI driven RPO?",
    description:
      "AI driven Recruitment Process Outsourcing (RPO) utilizes artificial intelligence to automate sourcing, screening, and scheduling. This allows human recruiters to focus on engagement and closing, significantly speeding up the hiring cycle while improving candidate quality.",
  },
  {
    title: "How do you ensure data privacy in HR outsourcing?",
    description:
      "We adhere to strict global data protection regulations including GDPR and CCPA. Our systems utilize enterprise grade encryption for all employee and candidate data, ensuring complete confidentiality and security throughout the HR lifecycle.",
  },
  {
    title: "Can you handle bulk hiring for seasonal demands?",
    description:
      "Yes, our scalable infrastructure is designed for volume. We use automated workflows and broad talent networks to ramp up staffing quickly for seasonal peaks, ensuring you have the workforce ready exactly when you need it.",
  },
  {
    title: "How does outsourcing HR benefit a tech company?",
    description:
      "Tech companies face rapid scaling challenges. Outsourcing HR allows you to access specialized technical talent pools instantly and automates repetitive administrative tasks, letting your core team focus on product development and innovation.",
  },
  {
    title: "What payroll platforms do you support?",
    description:
      "We are platform agnostic and can integrate with most major HRIS and payroll systems. Whether you use proprietary software or popular cloud solutions, our team ensures seamless data synchronization and accurate processing.",
  },
];

export default function HrTalentServices() {
  return (
    <>
      <Banner
        title="Smart Talent Strategies for Digital Growth"
        description="Empowering organizations with AI enhanced HR solutions. We bridge the gap between human potential and technological efficiency to build future ready workforces."
        button="Explore Solutions"
        href="/"
        bg="/images/services/hr/banner-bg.webp"
        titleColor="text-bwhite"
        descriptionColor="text-bwhite"
      />
      <Breadcrumb items={breadcrumbItems} />
      <div className="overflow-x-hidden">
        <About
          title1="Future Ready HR:"
          title2="Powered by Intellect"
          description1="The traditional approach to human resources is evolving. We combine emotional intelligence with artificial intelligence to create HR frameworks that are agile, responsive, and data centric. By automating routine tasks, we free up your leadership to focus on culture and strategy."
          description2="From predictive hiring models to automated onboarding workflows, our technology stack ensures precision. We help you navigate the complexities of modern workforce management, ensuring that your talent strategy is as innovative as your business products."
          image="/images/services/hr/about.webp"
          id="about"
        />
        <Services
          items={servicesData}
          title={[
            { text: "What", color: "black" },
            { text: "We Deliver", color: "orange" },
          ]}
          description="Comprehensive HR and talent solutions designed to streamline operations, reduce overhead, and secure the best talent in the market."
          id="services"
        />
        <Articles
          items={articlesData}
          mainTitle={[
            { text: "Insights", color: "orange" },
            { text: "HR & Talent ", color: "black" },
          ]}
          id="articles"
        />
        <Industries
          items={industryData}
          title={[
            { text: "Industries We", color: "black" },
            { text: "Empower", color: "orange" },
          ]}
          description="Delivering specialized talent and HR compliance solutions tailored to the unique demands of high growth sectors."
          id="industries"
        />
        <About2
          title1="Human Centric:"
          title2="Tech Enabled"
          description1="While technology drives efficiency, people drive innovation. Our approach strikes the perfect balance. We use advanced tools to source and manage talent, but rely on human insight to assess cultural fit and leadership potential."
          description2="We partner with you to build a resilient organization. Whether managing a distributed workforce or implementing diversity initiatives, our solutions foster an inclusive environment where top talent thrives and grows."
          image="/images/services/hr/about2.webp"
          id="about"
          imagePosiotion="left"
          boxTitle="Human-Centered Technology"
          boxSubtitle="Empowering talent with intelligent systems"
          boxDescription="We combine advanced HR technologies with human insight to optimize workforce management, enhance employee experience, and drive organizational growth through smart, people-focused solutions."
        />

        <Testimonials
          title="Client Success Stories"
          description="Hear from industry leaders who have transformed their workforce strategy and operational efficiency with our HR solutions."
          items={testimonialsData}
          interval={2500}
          id="testimonials"
        />
        <Faq
          items={faqData}
          title={[
            { text: "FAQ", color: "orange" },
            { text: "for HR & Talent", color: "black" },
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
          description="Stay ahead of the curve with our latest analysis on workforce trends, HR technology, and organizational development."
          id="blogs"
        />
        <Blogs blogs={blogs} />
      </div>
    </>
  );
}
