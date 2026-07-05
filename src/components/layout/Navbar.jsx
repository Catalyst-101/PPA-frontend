import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../ui/Button';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const admissionsDropdown = [
    { name: 'Apply Now', path: '/admissions/apply' },
    { name: 'Fee Structure', path: '/admissions/fee-structure' },
    { name: 'Uniform', path: '/admissions/uniform' }
  ];

  const curriculumDropdown = [
    { name: 'Playgroup', path: '/curriculum/playgroup' },
    { name: 'Reception 1', path: '/curriculum/reception-1' },
    { name: 'Reception 2', path: '/curriculum/reception-2' },
    { name: 'Grade 1', path: '/curriculum/grade-1' },
    { name: 'Grade 2', path: '/curriculum/grade-2' },
    { name: 'Grade 3', path: '/curriculum/grade-3' },
    { name: 'Grade 4', path: '/curriculum/grade-4' },
    { name: 'Grade 5', path: '/curriculum/grade-5' },
    { name: 'Grade 6', path: '/curriculum/grade-6' },
    { name: 'Grade 7', path: '/curriculum/grade-7' },
    { name: 'Grade 8', path: '/curriculum/grade-8' },
    { name: 'Grade 9', path: '/curriculum/grade-9' },
    { name: 'Grade 10', path: '/curriculum/grade-10' }
  ];

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Student Life', path: '/student-life' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
    { name: 'Admin', path: '/admin' }
  ];

  const isPathActive = (paths) => {
    return paths.some(p => location.pathname.startsWith(p));
  };

  return (
    <nav className={cn(
      'sticky top-0 z-50 transition-all duration-300 w-full font-sans border-b border-outline-variant/10',
      isScrolled ? 'glass shadow-sm py-4' : 'bg-surface py-6'
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <span className="font-serif font-extrabold text-2xl text-primary tracking-tight">
            Pen & Page
          </span>

          <span className="text-xs font-bold text-secondary tracking-[0.4em] uppercase mt-1">
            Academia & School
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {mainLinks.map((link) => (
            link.name === 'Admin' ? (
              <a
                key={link.name}
                href="http://localhost:5174/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-md font-medium transition-colors hover:text-secondary relative text-text-variant"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-md font-medium transition-colors hover:text-secondary relative",
                  location.pathname === link.path ? "text-secondary" : "text-text-variant"
                )}
              >
                {link.name}
              </Link>
            )
          ))}

          {/* Admissions Dropdown */}
          <div className="relative group">
            <button
              className={cn(
                "text-md font-medium transition-colors hover:text-secondary flex items-center gap-1",
                isPathActive(['/admissions']) ? "text-secondary" : "text-text-variant"
              )}
            >
              Admissions
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 mt-0 w-48 bg-surface border border-outline-variant/30 rounded-sm shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
              {admissionsDropdown.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "block px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-containerLow",
                    location.pathname === item.path ? "text-secondary bg-surface-containerLow" : "text-text-variant"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Curriculum Dropdown */}
          <div className="relative group">
            <button
              className={cn(
                "text-md font-medium transition-colors hover:text-secondary flex items-center gap-1",
                isPathActive(['/curriculum']) ? "text-secondary" : "text-text-variant"
              )}
            >
              Curriculum
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 mt-0 w-48 bg-surface border border-outline-variant/30 rounded-sm shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50 max-h-96 overflow-y-auto">
              {curriculumDropdown.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "block px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-containerLow",
                    location.pathname === item.path ? "text-secondary bg-surface-containerLow" : "text-text-variant"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-dark text-white border-t border-white/10 flex flex-col py-4 max-h-96 overflow-y-auto">
          {mainLinks.map((link) => (
            link.name === 'Admin' ? (
              <a
                key={link.name}
                href="http://localhost:5174/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 font-medium hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="px-6 py-3 font-medium hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            )
          ))}

          {/* Mobile Admissions */}
          <button
            onClick={() => setOpenDropdown(openDropdown === 'admissions' ? null : 'admissions')}
            className="px-6 py-3 font-medium hover:bg-white/10 transition-colors flex items-center justify-between"
          >
            Admissions
            <ChevronDown className={cn("w-4 h-4 transition-transform", openDropdown === 'admissions' ? 'rotate-180' : '')} />
          </button>
          {openDropdown === 'admissions' && (
            <div className="bg-white/5 border-l-2 border-white/20">
              {admissionsDropdown.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-9 py-2 text-sm hover:bg-white/10 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}

          {/* Mobile Curriculum */}
          <button
            onClick={() => setOpenDropdown(openDropdown === 'curriculum' ? null : 'curriculum')}
            className="px-6 py-3 font-medium hover:bg-white/10 transition-colors flex items-center justify-between"
          >
            Curriculum
            <ChevronDown className={cn("w-4 h-4 transition-transform", openDropdown === 'curriculum' ? 'rotate-180' : '')} />
          </button>
          {openDropdown === 'curriculum' && (
            <div className="bg-white/5 border-l-2 border-white/20">
              {curriculumDropdown.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-9 py-2 text-sm hover:bg-white/10 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
