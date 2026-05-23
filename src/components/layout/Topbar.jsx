import React from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa';

import { Link } from 'react-router-dom';

function Topbar() {
  return (
    <div className="bg-primary text-white py-2 px-6 text-sm flex justify-between items-center font-sans tracking-wide">

      {/* Left Side */}
      <div className="flex items-center gap-6">

        <a
          href="tel:+923480230807"
          className="flex items-center gap-2 hover:text-secondary transition-colors"
        >
          <FaPhone className="w-4 h-4" />
          <span>+92 (348) 0230807</span>
        </a>

        <a
          href="mailto:penandpageacademia@gmail.com"
          className="flex items-center gap-2 hover:text-secondary transition-colors"
        >
          <FaEnvelope className="w-4 h-4" />
          <span>penandpageacademia@gmail.com</span>
        </a>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        {/* Social Icons */}
        <div className="flex items-center gap-4">

          <a
            href="#"
            className="hover:text-secondary transition-colors"
          >
            <FaFacebookF className="w-4 h-4" />
          </a>

          <a
            href="#"
            className="hover:text-secondary transition-colors"
          >
            <FaTwitter className="w-4 h-4" />
          </a>

          <a
            href="#"
            className="hover:text-secondary transition-colors"
          >
            <FaInstagram className="w-4 h-4" />
          </a>

        </div>

        {/* Admission Button */}
        <Link
          to="/admissions"
          className="bg-secondary text-primary px-4 py-1.5 font-semibold hover:bg-white hover:text-primary transition-all duration-300 shadow-md"
        >
          Apply Now
        </Link>

      </div>
    </div>
  );
}

export default Topbar;