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

  const mainLinksBefore = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' }
  ];

  const mainLinksAfter = [
    { name: 'Student Life', path: '/student-life' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' }
  ];

  const isPathActive = (paths) => {
    return paths.some((p) => location.pathname.startsWith(p));
  };

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 transition-all duration-300 w-full font-sans border-b border-outline-variant/10',
        isScrolled ? 'glass shadow-sm py-4' : 'bg-surface py-6'
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex flex-col flex-shrink-0">
          <span className="font-serif font-extrabold text-2xl text-primary tracking-tight whitespace-nowrap">
            Pen &amp; Page
          </span>

          <span className="text-xs font-bold text-secondary tracking-[0.25em] uppercase mt-1 min-[950px]:whitespace-nowrap">
            Academia &amp; School
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden min-[950px]:flex space-x-8 items-center">

          {mainLinksBefore.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-md font-medium transition-colors hover:text-secondary',
                location.pathname === link.path
                  ? 'text-secondary'
                  : 'text-text-variant'
              )}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/admissions"
            className={cn(
              'text-md font-medium transition-colors hover:text-secondary',
              isPathActive(['/admissions'])
                ? 'text-secondary'
                : 'text-text-variant'
            )}
          >
            Admissions
          </Link>

          {/* Curriculum Dropdown */}
          <div className="relative group">
            <button
              className={cn(
                'text-md font-medium transition-colors hover:text-secondary flex items-center gap-1.5 py-2',
                isPathActive(['/curriculum'])
                  ? 'text-secondary'
                  : 'text-text-variant'
              )}
            >
              Curriculum
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
            </button>

            <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-52 bg-surface border border-outline-variant/30 rounded-xl shadow-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 py-2.5 z-50 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-outline-variant/20 scrollbar-track-transparent">
              {curriculumDropdown.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    'block px-5 py-2.5 text-sm font-medium transition-colors duration-200 hover:bg-surface-containerLow',
                    location.pathname === item.path
                      ? 'text-secondary bg-surface-containerLow'
                      : 'text-text-variant'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {mainLinksAfter.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-md font-medium transition-colors hover:text-secondary',
                location.pathname === link.path
                  ? 'text-secondary'
                  : 'text-text-variant'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="min-[950px]:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="min-[950px]:hidden absolute top-full left-0 w-full glass-dark text-white border-t border-white/10 flex flex-col py-4 max-h-[80vh] overflow-y-auto shadow-2xl">

          {mainLinksBefore.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="px-6 py-3.5 font-semibold tracking-wide hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/admissions"
            className="px-6 py-3.5 font-semibold tracking-wide hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Admissions
          </Link>

          <div>
            <button
              onClick={() =>
                setOpenDropdown(
                  openDropdown === 'curriculum' ? null : 'curriculum'
                )
              }
              className="w-full px-6 py-3.5 font-semibold tracking-wide hover:bg-white/10 transition-colors flex items-center justify-between"
            >
              Curriculum
              <ChevronDown
                className={cn(
                  'w-4 h-4 transition-transform duration-300',
                  openDropdown === 'curriculum' ? 'rotate-180' : ''
                )}
              />
            </button>

            {openDropdown === 'curriculum' && (
              <div className="bg-white/5 border-l-2 border-white/20">
                {curriculumDropdown.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-10 py-2.5 text-sm font-medium hover:bg-white/10 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {mainLinksAfter.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="px-6 py-3.5 font-semibold tracking-wide hover:bg-white/10 transition-colors"
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