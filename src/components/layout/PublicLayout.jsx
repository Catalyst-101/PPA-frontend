import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from './Topbar';
import Navbar from './Navbar';

function PublicLayout() {
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
            <h3 className="font-serif font-bold text-xl mb-4 text-secondary">Pen & Page</h3>
            <p className="text-white/70 text-sm">من الظلمات إلى النور</p>
            <p className="text-white/70 text-sm mt-4">Provide quality education to empower the next generation.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="/about" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="/curriculum" className="hover:text-secondary transition-colors">Curriculum</a></li>
              <li><a href="/news" className="hover:text-secondary transition-colors">News</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Admissions</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="/admissions" className="hover:text-secondary transition-colors">Apply Now</a></li>
              <li><a href="/admissions" className="hover:text-secondary transition-colors">Fees Structure</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Info@penandpage.edu</li>
              <li>+1 (234) 567-890</li>
              <li>123 Education Lane, Knowledge City</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-sm text-white/50">
          &copy; {new Date().getFullYear()} Pen & Page School. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default PublicLayout;
