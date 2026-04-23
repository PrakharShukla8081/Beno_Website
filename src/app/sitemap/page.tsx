import Banner from "@/components/industry/banner";
import dynamic from "next/dynamic";
import Link from "next/link";
import Loader from "../loading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap | Beno Support",
  description: "Beno Support...",
};

const Cta = dynamic(() => import("@/components/common/cta"), {
  loading: () => <Loader />,
});

const NAVIGATION_ITEMS = [
  { label: "About Us", href: "/about-us" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact-us" },
];

const SERVICES_ITEMS = [
  { label: "BPO Services", href: "/bpo-services" },
  { label: "Digital Transformation", href: "/digital-transformation" },
  { label: "IT Consulting & Support", href: "/it-consulting-support" },
  { label: "Cyber Security", href: "/cyber-security" },
  { label: "Cloud Services", href: "/cloud-services" },
  { label: "Software Services", href: "/software-services" },
  { label: "HR & Talent Services", href: "/hr-talent-services" },
  { label: "Digital Experience", href: "/digital-experience" },
];

const INDUSTRIES_ITEMS = [
  { label: "BFSI", href: "/bfsi" },
  { label: "IT", href: "/it" },
  { label: "ITES", href: "/ites" },
  { label: "Retail", href: "/retail" },
  { label: "Education", href: "/education" },
  { label: "Logistics", href: "/logistics" },
  { label: "Technology", href: "/technology" },
  { label: "Healthcare", href: "/healthcare" },
  { label: "eCommerce", href: "/ecommerce" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Tour & Travels", href: "/tour-and-travels" },
];

export default function Sitemap() {
  return (
    <div className="overflow-x-hidden">
      <Banner
        title="Sitemap"
        titleColor="text-bwhite"
        bg="/images/sitemap/banner.webp"
        bannerContentAlignment="left"
        className="min-h-[30vh] md:min-h-[40vh]"
      />

      <div className="bg-[#14212B] mt-4 md:mt-8 lg:mt-12">
        <div className="container max-w-7xl mx-auto px-4 md:px-8 py-1.5 md:py-3">
          <h5 className="text-md md:text-lg lg:text-xl text-bwhite">
            Main Pages
          </h5>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 md:px-8 mt-3 md:mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4 gap-4">
          {NAVIGATION_ITEMS.map((s, index) => (
            <Link
              key={index}
              href={s.href}
              className="text-bblack hover:text-borange"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-[#14212B] mt-4 md:mt-8 lg:mt-12">
        <div className="container max-w-7xl mx-auto px-4 md:px-8 py-1.5 md:py-3">
          <h5 className="text-md md:text-lg lg:text-xl text-bwhite">
            Services
          </h5>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 md:px-8 mt-3 md:mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4 gap-4">
          {SERVICES_ITEMS.map((s, index) => (
            <Link
              key={index}
              href={s.href}
              className="text-bblack hover:text-borange"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-[#14212B] mt-4 md:mt-8 lg:mt-12">
        <div className="container max-w-7xl mx-auto px-4 md:px-8 py-1.5 md:py-3">
          <h5 className="text-md md:text-lg lg:text-xl text-bwhite">
            Industries
          </h5>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 md:px-8 mt-3 md:mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4 gap-4">
          {INDUSTRIES_ITEMS.map((s, index) => (
            <Link
              key={index}
              href={s.href}
              className="text-bblack hover:text-borange"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-[#14212B] mt-4 md:mt-8 lg:mt-12">
        <div className="container max-w-7xl mx-auto px-4 md:px-8 py-1.5 md:py-3">
          <h5 className="text-md md:text-lg lg:text-xl text-bwhite">
            Terms and Privacy
          </h5>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 md:px-8 mt-3 md:mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4 gap-4">
          {[
            { label: "Terms & Conditions", href: "/terms-and-conditions" },
            { label: "Privacy Policy", href: "/privacy-policy" },
          ].map((s, index) => (
            <Link
              key={index}
              href={s.href}
              className="text-bblack hover:text-borange"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>

      <Cta />
    </div>
  );
}
