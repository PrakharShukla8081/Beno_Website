"use client";

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import "aos/dist/aos.css";
import toast from "react-hot-toast";

interface FormErrors {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactDetails = {
    location: "B-23/C1, Block B, Sector 62, Noida, Uttar Pradesh 201309",
    enquiry: {
      email: "info@benosupport.com",
      phone: "+91 0120 423 4429",
      wp: "+91 892-988-4560",
    },
  };

  const inputClass =
    "bg-[#F9F9F9] w-full outline-none px-4 py-2 rounded-md text-sm md:text-base focus:ring-1 focus:ring-borange";

  const contactLinks = [
    {
      icon: <IoMdMail className="w-4 h-4 text-borange" />,
      href: `mailto:${contactDetails.enquiry.email}`,
      text: contactDetails.enquiry.email,
    },
    {
      icon: <IoCallSharp className="w-4 h-4 text-borange" />,
      href: `tel:${contactDetails.enquiry.phone.replace(/\s+/g, "")}`,
      text: contactDetails.enquiry.phone,
    },
    {
      icon: <FaWhatsapp className="w-4 h-4 text-borange" />,
      href: contactDetails.enquiry.wp,
      text: contactDetails.enquiry.wp,
    },
  ];

  const validateForm = (formData: FormData): FormErrors => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\+\-\(\)]{10,}$/;

    const firstName = formData.get("first_name") as string;
    if (!firstName?.trim()) {
      newErrors.first_name = "First name is required";
    } else if (firstName.length < 2) {
      newErrors.first_name = "First name must be at least 2 characters";
    }

    const lastName = formData.get("last_name") as string;
    if (!lastName?.trim()) {
      newErrors.last_name = "Last name is required";
    } else if (lastName.length < 2) {
      newErrors.last_name = "Last name must be at least 2 characters";
    }

    const email = formData.get("email") as string;
    if (!email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const phone = formData.get("phone") as string;
    if (!phone?.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    const message = formData.get("message") as string;
    if (!message?.trim()) {
      newErrors.message = "Message is required";
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleInputChange = (fieldName: keyof FormErrors) => {
    if (errors[fieldName]) {
      setErrors((prev) => ({ ...prev, [fieldName]: undefined }));
    }
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      toast.error("Please fix the errors in the form");
      return;
    }

    const templateParams = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      job_title: "Submission from Industy or Service page",
      organization: "",
      enquiry: "",
      country: "",
      industry: "",
    };

    emailjs
      .send(
        "service_9jx5mpn",
        "template_7772c3m",
        templateParams,
        "sW_3exb124dDLdvXI",
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          formRef.current?.reset();
          setErrors({});
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error);
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/services/bpo/contact-bg.webp')",
      }}
      className="bg-cover bg-no-repeat bg-center mt-8 md:mt-12 lg:mt-16 xl:mt-20"
      data-aos="fade-up"
    >
      <section
        className="container max-w-7xl mx-auto px-4 md:px-8"
        id="contact"
        data-aos="fade-up"
      >
        <div className="relative">
          <div className="absolute inset-y-0 right-0 w-full md:w-3/4 bg-[#E8E8E8] rounded-tl-[50px] lg:rounded-tl-[150px] rounded-br-[50px] lg:rounded-br-[150px] -z-10"></div>

          <div
            className="grid grid-cols-1 md:grid-cols-5 gap-6 p-4 md:p-8 relative z-10"
            data-aos="zoom-in-up"
          >
            <div className="md:col-span-2 flex justify-center">
              <img
                src="/images/services/bpo/contact.webp"
                alt="contact bpo"
                className="w-full max-w-sm object-contain"
                data-aos="fade-right"
              />
            </div>

            <div className="md:col-span-3">
              <div
                className="flex items-center gap-2 mb-4"
                data-aos="fade-down"
              >
                <span className="w-2 h-2 rounded-full bg-borange"></span>
                <h3 className="text-borange font-semibold text-md tracking-wide">
                  CONTACT DETAILS
                </h3>
              </div>

              <h4
                className="text-bblack font-semibold text-2xl md:text-3xl mb-2"
                data-aos="fade-up"
              >
                Let&apos;s Get in Touch!
              </h4>

              <p
                className="text-bblack/80 text-sm md:text-base font-light max-w-md mb-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Partner with us to build intelligent technology solutions.
                Contact our team to start your digital evolution journey.
              </p>

              {/* FORM */}
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="flex flex-col gap-4"
                data-aos="fade-up"
                noValidate
              >
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex-1">
                    <input
                      name="first_name"
                      type="text"
                      placeholder="First Name"
                      required
                      className={inputClass}
                      onChange={() => handleInputChange("first_name")}
                    />
                    {errors.first_name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.first_name}
                      </p>
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      name="last_name"
                      type="text"
                      placeholder="Last Name"
                      required
                      className={inputClass}
                      onChange={() => handleInputChange("last_name")}
                    />
                    {errors.last_name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.last_name}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex-1">
                    <input
                      name="email"
                      type="email"
                      placeholder="Work Email"
                      required
                      className={inputClass}
                      onChange={() => handleInputChange("email")}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone"
                      required
                      className={inputClass}
                      onChange={() => handleInputChange("phone")}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Write your message"
                    rows={4}
                    required
                    className={`${inputClass} resize-none`}
                    onChange={() => handleInputChange("message")}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-borange text-bwhite font-medium px-6 py-2 rounded-full cursor-pointer hover:bg-bblue transition-colors duration-200 w-40 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>

              {/* DETAILS */}
              <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-6">
                <div data-aos="fade-right">
                  <h5 className="text-borange font-medium text-lg">
                    Location:
                  </h5>
                  <span className="w-14 h-0.5 bg-borange block mt-1"></span>

                  <p className="text-bblack text-sm md:text-base mt-2 leading-relaxed">
                    {contactDetails.location}
                  </p>
                </div>

                <div data-aos="fade-left">
                  <h5 className="text-borange font-medium text-lg">Enquiry:</h5>
                  <span className="w-14 h-0.5 bg-borange block mt-1"></span>

                  <div className="flex flex-col mt-4 gap-2">
                    {contactLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="flex items-center gap-2 text-bblack hover:text-borange transition"
                      >
                        {link.icon}
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/* DETAILS END */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
