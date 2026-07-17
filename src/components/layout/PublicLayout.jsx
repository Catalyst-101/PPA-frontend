import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import Topbar from './Topbar';
import Navbar from './Navbar';
import API from '../../api/api';

function PublicLayout() {
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
  const addressDisplay = misc?.address || 'Old Bara Road, University Town, Peshawar';

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Topbar />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-primary text-white py-12 text-center mt-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-left mb-8">
          <div>
            <h3 className="font-serif font-bold text-xl text-secondary">Pen & Page</h3>
            <h5 className="font-serif text-md mb-2">Academia & School</h5>
            <p className="text-white/70 text-md">من الظلمات إلى النور</p>
            <p className="text-white/70 text-sm mt-4">Provide quality education to empower the next generation.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/curriculum" className="hover:text-secondary transition-colors">Curriculum</Link></li>
              <li><Link to="/news" className="hover:text-secondary transition-colors">News</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Admissions</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/admissions/apply" className="hover:text-secondary transition-colors">Apply Now</Link></li>
              <li><Link to="/admissions" className="hover:text-secondary transition-colors">Fees Structure</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>{emailDisplay}</li>
              <li>{phoneDisplay}</li>
              <li>{addressDisplay}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-sm text-white/50">
          &copy; {new Date().getFullYear()} Pen & Page School. All rights reserved.
        </div>
      </footer>

      {/* Global Floating WhatsApp Button */}
      <a
        href="https://wa.me/923480230807?text=Hello%20Pen%20%26%20Page%20School%2C%20I%20have%20an%20inquiry%20regarding%20admissions."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center group cursor-pointer"
        aria-label="Contact school on WhatsApp"
      >
        {/* Tooltip */}
        <div className="bg-primary text-white text-xs font-semibold py-2 px-3 rounded-lg shadow-md mr-3 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap border border-white/10 hidden sm:block">
          Chat with us
        </div>

        {/* Pulse effect wrapper */}
        <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 group-hover:scale-110 active:scale-95 transition-all duration-300">
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-75"></span>
          <FaWhatsapp className="w-7 h-7 text-white relative z-10" />
        </div>
      </a>
    </div>
  );
}

export default PublicLayout;
