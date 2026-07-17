import React, { useState, useEffect } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa';

import { Link } from 'react-router-dom';
import API from '../../api/api';

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

  const phoneDisplay = misc?.phone?.number ? `${misc.phone.code} ${misc.phone.number}` : '+92 348 0230807';
  const emailDisplay = misc?.email || 'penandpageacademia@gmail.com';
  const facebookHref = misc?.facebook || '#';
  const twitterHref = misc?.twitter || '#';
  const instagramHref = misc?.instagram || '#';

  return (
    <div className="bg-primary text-white py-2 px-6 text-sm flex justify-between items-center font-sans tracking-wide">

      {/* Left Side */}
      <div className="flex items-center gap-6">

        <a
          href={`tel:${phoneDisplay.replace(/[\s()-]/g, '')}`}
          className="flex items-center gap-2 hover:text-secondary transition-colors"
        >
          <FaPhone className="w-4 h-4" />
          <span>{phoneDisplay}</span>
        </a>

        <a
          href={`mailto:${emailDisplay}`}
          className="hidden sm:flex items-center gap-2 hover:text-secondary transition-colors"
        >
          <FaEnvelope className="w-4 h-4" />
          <span>{emailDisplay}</span>
        </a>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4">

          <a
            href={facebookHref}
            className="hover:text-secondary transition-colors"
          >
            <FaFacebookF className="w-4 h-4" />
          </a>

          <a
            href={twitterHref}
            className="hover:text-secondary transition-colors"
          >
            <FaTwitter className="w-4 h-4" />
          </a>

          <a
            href={instagramHref}
            className="hover:text-secondary transition-colors"
          >
            <FaInstagram className="w-4 h-4" />
          </a>

        </div>

        {/* Admission Button */}
        <Link
          to="/admissions/apply"
          className="bg-secondary text-white shadow-ambient hover:bg-secondary-fixedDim hover:-translate-y-0.5 px-5 py-1 text-sm rounded-md font-semibold transition-all duration-300"
        >
          Apply Now
        </Link>

      </div>
    </div>
  );
}

export default Topbar;