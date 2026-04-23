"use client";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Maintitle from "../common/maintitle";
import toast from "react-hot-toast";

interface ResumeFormProps {
  jobTitle: string;
  jobCategory: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  contact?: string;
  experience?: string;
  userType?: string;
  resume?: string;
}

const ResumeForm: React.FC<ResumeFormProps> = ({ jobTitle, jobCategory }) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    const formData = formRef.current ? new FormData(formRef.current) : null;

    if (!formData) return newErrors;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const contactRegex = /^[\d\s\+\-\(\)]{10,}$/;

    // Full Name validation
    const fullName = formData.get("fullName") as string;
    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (fullName.length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    }

    // Email validation
    const email = formData.get("email") as string;
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Contact validation
    const contact = formData.get("contact") as string;
    if (!contact.trim()) {
      newErrors.contact = "Contact details are required";
    } else if (!contactRegex.test(contact.replace(/\s/g, ""))) {
      newErrors.contact = "Please enter a valid contact number";
    }

    // Experience validation
    const experience = formData.get("experience") as string;
    const experienceNum = parseInt(experience);
    if (!experience.trim()) {
      newErrors.experience = "Experience is required";
    } else if (isNaN(experienceNum)) {
      newErrors.experience = "Experience must be a number";
    } else if (experienceNum < 0) {
      newErrors.experience = "Experience cannot be negative";
    } else if (experienceNum > 50) {
      newErrors.experience = "Experience cannot exceed 50 years";
    }

    // User Type validation (if provided)
    const userType = formData.get("userType") as string;
    if (userType && userType.trim().length > 50) {
      newErrors.userType = "User type cannot exceed 50 characters";
    }

    // Resume validation
    if (!file) {
      newErrors.resume = "Resume is required";
    } else if (file.type !== "application/pdf") {
      newErrors.resume = "Only PDF files are allowed";
    } else if (file.size > 5 * 1024 * 1024) {
      // 5MB limit
      newErrors.resume = "File size must be less than 5MB";
    }

    return newErrors;
  };

  const handleInputChange = (fieldName: keyof FormErrors) => {
    if (errors[fieldName]) {
      setErrors((prev) => ({ ...prev, [fieldName]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    // Clear previous file error
    if (errors.resume) {
      setErrors((prev) => ({ ...prev, resume: undefined }));
    }

    // File validation
    if (selectedFile.type !== "application/pdf") {
      setErrors((prev) => ({ ...prev, resume: "Only PDF files are allowed" }));
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        resume: "File size must be less than 5MB",
      }));
      return;
    }

    setFile(selectedFile);
  };

  const uploadToCloudinary = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "resume");
    formData.append("folder", "resumes");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dz09mn22c/upload",
      {
        method: "POST",
        body: formData,
      },
    );

    if (!res.ok) {
      throw new Error("Failed to upload file");
    }

    const data = await res.json();
    return data.secure_url;
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors in the form");
      return;
    }

    if (!file) {
      toast.error("Please upload your resume.");
      return;
    }

    try {
      setUploading(true);
      const resumeUrl = await uploadToCloudinary(file);

      const formData = new FormData(formRef.current);
      const templateParams = {
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        contact: formData.get("contact"),
        experience: formData.get("experience"),
        userType: formData.get("userType"),
        jobTitle: formData.get("jobTitle"),
        jobCategory: formData.get("jobCategory"),
        resume: resumeUrl,
      };

      await emailjs.send(
        "service_9jx5mpn",
        "template_pss2owm",
        templateParams,
        "sW_3exb124dDLdvXI",
      );

      toast.success("Application submitted successfully!");
      formRef.current.reset();
      setFile(null);
      setErrors({});
    } catch (error) {
      console.error(error);
      toast.error("Error sending resume. Try again!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="py-8 md:py-12 lg:py-14 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/career/resume-form-bg.webp')",
      }}
      noValidate
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <Maintitle title={[{ text: "Post Your Resume", color: "white" }]} />

        <input type="hidden" name="jobTitle" value={jobTitle} />
        <input type="hidden" name="jobCategory" value={jobCategory} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              className="bg-white/90 w-full py-3 px-4 rounded-md outline-none text-bblack placeholder-gray-600 border-0 border-b-transparent focus:border-b-[3px] focus:border-borange"
              onChange={() => handleInputChange("fullName")}
            />
            {errors.fullName && (
              <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              required
              className="bg-white/90 w-full py-3 px-4 rounded-md outline-none text-bblack placeholder-gray-600 border-0 border-b-transparent focus:border-b-[3px] focus:border-borange"
              onChange={() => handleInputChange("email")}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="contact"
              placeholder="Contact Details"
              required
              className="bg-white/90 w-full py-3 px-4 rounded-md outline-none text-bblack placeholder-gray-600 border-0 border-b-transparent focus:border-b-[3px] focus:border-borange"
              onChange={() => handleInputChange("contact")}
            />
            {errors.contact && (
              <p className="text-red-400 text-sm mt-1">{errors.contact}</p>
            )}
          </div>

          <div>
            <input
              type="number"
              name="experience"
              placeholder="Experience in Years"
              required
              min="0"
              max="50"
              className="bg-white/90 w-full py-3 px-4 rounded-md outline-none text-bblack placeholder-gray-600 border-0 border-b-transparent focus:border-b-[3px] focus:border-borange"
              onChange={() => handleInputChange("experience")}
            />
            {errors.experience && (
              <p className="text-red-400 text-sm mt-1">{errors.experience}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="userType"
              placeholder="Linkedin Profile Url"
              className="bg-white/90 w-full py-3 px-4 rounded-md outline-none text-bblack placeholder-gray-600 border-0 border-b-transparent focus:border-b-[3px] focus:border-borange"
              onChange={() => handleInputChange("userType")}
            />
            {errors.userType && (
              <p className="text-red-400 text-sm mt-1">{errors.userType}</p>
            )}
          </div>

          <div>
            <label className="block w-full cursor-pointer">
              <div className="bg-white/90 w-full py-3 px-4 rounded-md text-gray-600 flex justify-between items-center border border-gray-200 hover:border-orange-400 transition">
                <span>{file ? file.name : "Choose Resume"}</span>
              </div>

              <input
                type="file"
                name="resume"
                accept=".pdf"
                required
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

            {errors.resume && (
              <p className="text-red-400 text-sm mt-1">{errors.resume}</p>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            disabled={uploading}
            className="text-bwhite py-3 px-10 hover:bg-bblue rounded-full text-xl cursor-pointer bg-borange transition-all duration-150 ease-in disabled:opacity-50"
          >
            {uploading ? "Uploading..." : "Submit Resume"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ResumeForm;
