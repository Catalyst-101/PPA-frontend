import React, { useState, useEffect } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import API from "../../api/api";

function Topbar() {
  const [misc, setMisc] = useState(null);

  useEffect(() => {
    const fetchMisc = async () => {
      try {
        const response = await API.get("/miscellaneous/get");
        if (response.data.success) {
          setMisc(response.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch miscellaneous data", error);
      }
    };

    fetchMisc();
  }, []);

  const phoneDisplay = misc?.phone?.number
    ? `${misc.phone.code} ${misc.phone.number}`
    : "+92 348 0230807";

  const phoneNumber = phoneDisplay.replace(/[\s()-]/g, "");

  const emailDisplay =
    misc?.email || "penandpageacademia@gmail.com";

  const facebookHref = misc?.facebook || "#";
  const instagramHref = misc?.instagram || "#";
  const linkedinHref = misc?.linkedin || "#";
  const tiktokHref = misc?.tiktok || "#";

  return (
    <div className="bg-primary text-white py-2 px-4 lg:px-6 text-sm flex justify-between items-center font-sans tracking-wide">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        {/* Phone */}
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center gap-2 hover:text-secondary transition-colors"
        >
          <FaPhone className="w-4 h-4" />

          {/* Show text only on desktop */}
          <span className="hidden lg:inline">{phoneDisplay}</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${phoneNumber.replace("+", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-secondary transition-colors"
        >
          <FaWhatsapp className="w-4 h-4" />

          {/* Show number only on desktop */}
          <span className="hidden lg:inline">{phoneDisplay}</span>
        </a>

        {/* Email */}
        <a
          href={`mailto:${emailDisplay}`}
          className="flex items-center gap-2 hover:text-secondary transition-colors"
        >
          <FaEnvelope className="w-4 h-4" />

          {/* Show text only on desktop */}
          <span className="hidden lg:inline">{emailDisplay}</span>
        </a>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href={facebookHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
          >
            <FaFacebookF className="w-4 h-4" />
          </a>

          <a
            href={instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
          >
            <FaInstagram className="w-4 h-4" />
          </a>

          <a
            href={tiktokHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
          >
            <FaTiktok className="w-4 h-4" />
          </a>

          <a
            href={linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
          >
            <FaLinkedinIn className="w-4 h-4" />
          </a>
        </div>

        {/* Apply Button - Hidden on Mobile */}
        <Link
          to="/admissions/apply"
          className="hidden sm:block bg-secondary text-white shadow-ambient hover:bg-secondary-fixedDim hover:-translate-y-0.5 px-5 py-1 text-sm rounded-md font-semibold transition-all duration-300"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}

export default Topbar;