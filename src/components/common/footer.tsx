"use client";

import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { blogs } from "../../../public/json/blogs";
import he from "he";
interface NavItem {
  name: string;
  href: string;
}

interface NewsItem {
  img: string;
  description: string;
  date: string;
}

interface SocialItem {
  icon: React.ElementType;
  href: string;
}

const services: NavItem[] = [
  { name: "BPO Services", href: "/bpo-services" },
  { name: "Digital Transformation", href: "/digital-transformation" },
  { name: "IT Consulting & Support", href: "/it-consulting-support" },
  { name: "Cyber Security", href: "/cyber-security" },
  { name: "Cloud Services", href: "/cloud-services" },
  { name: "Software Services", href: "/software-services" },
  { name: "HR & Talent Services", href: "/hr-talent-services" },
  // { name: "Digital Experience", href: "/digital-experience" },
];

const industries: NavItem[] = [
  { name: "BFSI", href: "/bfsi" },
  { name: "IT", href: "/it" },
  { name: "ITES", href: "/ites" },
  { name: "Retail", href: "/retail" },
  { name: "Education", href: "/education" },
  { name: "Logistics", href: "/logistics" },
  { name: "Technology", href: "/technology" },
  // { name: "Healthcare", href: "/healthcare" },
  // { name: "eCommerce", href: "/ecommerce" },
  // { name: "Manufacturing", href: "/manufacturing" },
  // { name: "Tour & Travels", href: "/tour-and-travels" },
];

const socialLinks: SocialItem[] = [
  { icon: FaXTwitter, href: "https://x.com/benosupport" },
  { icon: FaFacebookF, href: "https://www.facebook.com/benosupport/" },
  { icon: FaInstagram, href: "https://www.instagram.com/beno.support/" },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/bensupport-technologies/",
  },
  { icon: FaYoutube, href: "https://www.youtube.com/@benosupport" },
];

const Footer: React.FC = React.memo(() => {
  const renderNavLinks = (items: NavItem[]) => (
    <div className="flex flex-col gap-3 text-bwhite/90 ml-4">
      {items.map(({ name, href }) => (
        <Link
          key={name}
          href={href}
          className="hover:text-white transition-all duration-300 text-sm relative"
        >
          <span className="inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            {name}
          </span>
        </Link>
      ))}
    </div>
  );

  return (
    <footer>
      <div className="bg-[#14212B] py-8 md:py-12">
        <div className="container mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-8">
            <div>
              <Link
                href="/"
                className="inline-block mb-4 transition-opacity duration-300 hover:opacity-90 focus:outline-none"
              >
                <img
                  src="/images/footer/footer-logo.webp"
                  alt="Company Logo"
                  width={180}
                  height={40}
                  className="w-40 lg:w-44"
                />
              </Link>
              <p className="text-bwhite/90 text-sm leading-relaxed">
                Beno Support delivers solutions across AI, Software, Cloud,
                Cybersecurity, BPO tooling, and Digital Experience platforms
                using a modern, scalable, and secure tech ecosystem.
              </p>
            </div>

            <div>
              <h3 className="text-bwhite font-medium text-lg mb-4">Services</h3>
              {renderNavLinks(services)}
            </div>

            <div>
              <h3 className="text-bwhite font-medium text-lg mb-4">
                Industries
              </h3>
              {renderNavLinks(industries)}
            </div>

            <div>
              <h3 className="text-bwhite font-medium text-lg mb-4">
                Recent News
              </h3>
              <div className="flex flex-col gap-4 text-bwhite/90">
                {blogs
                  .slice(0, 3)
                  .map(({ image, description, date, id }, idx) => (
                    <Link
                      key={idx}
                      href={`/blog/${id}`}
                      className="flex items-start gap-3 transition-all duration-300 group hover:-translate-y-1 hover:shadow-md rounded-md"
                    >
                      <img
                        src={image}
                        alt="recent-news"
                        className="w-12 h-12 lg:w-14 lg:h-14 object-cover rounded-full flex-shrink-0 transition-transform duration-300"
                      />
                      <div>
                        <p
                          className="text-sm leading-snug transition-colors duration-300 group-hover:text-white"
                          dangerouslySetInnerHTML={{
                            __html: he.decode(description.slice(0, 60) + "..."),
                          }}
                        ></p>
                        <p className="text-xs text-bwhite/70 mt-1">{date}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#E86820] py-4 md:py-3 border-t border-bwhite">
        <div className="container mx-auto max-w-7xl px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">
            {/* Terms */}
            <div className="flex items-center gap-2 text-bwhite/80 text-sm order-2 lg:order-1">
              <Link
                href="/terms-and-conditions"
                className="text-bwhite hover:underline"
              >
                Terms & Conditions
              </Link>
              <span>|</span>
              <Link
                href="/privacy-policy"
                className="text-bwhite hover:underline"
              >
                Privacy Policy
              </Link>

              <span>|</span>
              <Link href="/sitemap" className="text-bwhite hover:underline">
                Sitemap
              </Link>
            </div>

            <p className="text-bwhite/80 text-sm text-center order-1 lg:order-2 lg:text-left">
              ©2025 BenoSupport, All Rights Reserved
            </p>

            <div className="flex items-center gap-2 order-3">
              {socialLinks.map(({ icon: Icon, href }, idx) => (
                <Link
                  key={idx}
                  href={href}
                  target="_blank"
                  className="flex items-center justify-center p-2 bg-borange text-bwhite text-sm rounded-sm transition-all duration-300 hover:bg-[#14212B]"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
