import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../ui/Button';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Curriculum', path: '/curriculum' },
    { name: 'Student Life', path: '/student-life' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
    { name: 'Admin', path: '/admin' }
  ];

  return (
    <nav className={cn(
      'sticky top-0 z-50 transition-all duration-300 w-full font-sans border-b border-outline-variant/10',
      isScrolled ? 'glass shadow-sm py-4' : 'bg-surface py-6'
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <span className="font-serif font-bold text-xl text-primary tracking-tight">Pen & Page</span>
          <span className="text-xs text-secondary tracking-widest uppercase mt-0.5">School</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                location.pathname === link.path ? "text-secondary" : "text-text-variant"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-dark text-white border-t border-white/10 flex flex-col py-4">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="px-6 py-3 font-medium hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
