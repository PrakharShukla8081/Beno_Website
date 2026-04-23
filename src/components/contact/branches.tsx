"use client";

import React from "react";
import Maintitle from "../common/maintitle";

interface Branch {
  bg: string;
  name: string;
}

interface OfficeDetail {
  icon: string;
  name: string;
  address: string;
  link?: string;
}

const branches: Branch[] = [
  { bg: "/images/contact/branch1.webp", name: "Lucknow" },
  { bg: "/images/contact/branch2.webp", name: "Bihar" },
  { bg: "/images/contact/branch3.webp", name: "Mumbai" },
  { bg: "/images/contact/branch4.webp", name: "Ahmedabad" },
  { bg: "/images/contact/branch5.webp", name: "Bengaluru" },
];

const officeDetails: OfficeDetail[] = [
  {
    icon: "/icons/contact/branch-icon1.webp",
    name: "CORPORATE OFFICE",
    address: "B-23/C1, Block B, Sector 62, Noida, Uttar Pradesh 201309",
  },
  {
    icon: "/icons/contact/branch-icon2.webp",
    name: "REGISTERED OFFICE",
    address:
      "DISTRICT CENTRE, Roots Tower, 706, PLOT NO. 7, Laxmi Nagar, New Delhi, Delhi 11009",
  },
  {
    icon: "/icons/contact/branch-icon3.webp",
    name: "U.S OFFICE",
    address: "6919 W. Broward Blvd, Plantation, FL 33317",
  },
  {
    icon: "/icons/contact/branch-icon4.webp",
    name: "CALL US",
    address: "+91-892-988-4560 | +91 120 4234429",
    link: "tel:+918929884560",
  },
  {
    icon: "/icons/contact/branch-icon5.webp",
    name: "EMAIL US",
    address: "info@benosupport.com",
    link: "mailto:info@benosupport.com",
  },
  {
    icon: "/icons/contact/branch-icon6.webp",
    name: "WhatsApp",
    address: "+91 892-988-4560",
    link: "https://wa.me/918929884560",
  },
];

const Branches: React.FC = () => {
  return (
    <section className="container max-w-7xl mx-auto px-4 md:px-8 mt-8 md:mt-12 lg:mt-16 xl:mt-20">
      <Maintitle
        title={[
          { text: "Our Branch", color: "orange" },
          { text: "Office's", color: "black" },
        ]}
      />

      <div className="flex items-center justify-center flex-wrap gap-4 lg:gap-6 mt-6 md:mt-10 lg:mt-14">
        {branches.map((branch) => (
          <div
            key={branch.name}
            className="p-4 bg-cover bg-top bg-no-repeat h-[320px] lg:h-[400px] w-56 flex justify-center"
            style={{ backgroundImage: `url(${branch.bg})` }}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl text-bwhite text-center">
              {branch.name}
            </h2>
          </div>
        ))}
      </div>

      <div className="flex justify-center lg:justify-start flex-wrap gap-4 lg:gap-6 mt-8 md:mt-10 lg:mt-14">
        {officeDetails.map((office) => {
          const Wrapper = office.link ? "a" : "div";
          return (
            <Wrapper
              key={office.name}
              href={office.link}
              target={office.link ? "_blank" : undefined}
              className="flex items-center gap-4 p-4 bg-[#D9D9D9A8] w-[350px] min-h-28 cursor-pointer hover:bg-[#c4c4c4]"
            >
              <img
                src={office.icon}
                alt={office.name}
                loading="lazy"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h5 className="text-bblack text-lg font-medium">
                  {office.name}
                </h5>
                <p className="text-[#696969] text-sm leading-snug">
                  {office.address}
                </p>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
};

export default Branches;
