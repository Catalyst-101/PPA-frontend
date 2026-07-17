import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '../components/ui/Card';
import { Compass, PartyPopper, Award, ChevronLeft, ChevronRight, X } from 'lucide-react';

import heroImage from '../assets/images/hero/5.jpeg';

export default function StudentLife() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  // State for main gallery page navigation (6 items per page)
  const [galleryPage, setGalleryPage] = useState(0);
  const itemsPerPage = 6;

  const galleryItems = [
    { title: 'Annual Sports Day', category: 'Events', img: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800&auto=format&fit=crop' },
    { title: 'Science Fair', category: 'Academic Excellence', img: 'https://images.unsplash.com/photo-1564473356064-06ec121ba50e?q=80&w=800&auto=format&fit=crop' },
    { title: 'Historical Museum Trip', category: 'School Trips', img: 'https://images.unsplash.com/photo-1549887550-717013583ca9?q=80&w=800&auto=format&fit=crop' },
    { title: 'Art & Design Exhibition', category: 'Events', img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop' },
    { title: 'Student Council Investiture', category: 'Leadership', img: 'https://images.unsplash.com/photo-1534606775317-06df489be432?q=80&w=800&auto=format&fit=crop' },
    { title: 'Botanical Garden Visit', category: 'School Trips', img: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=800&auto=format&fit=crop' },
    // Adding sample extra images to demonstrate pagination functionality
    { title: 'Inter-School Debate', category: 'Academic Excellence', img: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop' },
    { title: 'Drama Club Performance', category: 'Events', img: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=800&auto=format&fit=crop' },
    { title: 'Championship Football Match', category: 'Events', img: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop' },
  ];

  // Derive pages
  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);
  const startIndex = galleryPage * itemsPerPage;
  const currentPageItems = galleryItems.slice(startIndex, startIndex + itemsPerPage);

  const handleGalleryNext = () => {
    setGalleryPage((prev) => (prev + 1) % totalPages);
  };

  const handleGalleryPrev = () => {
    setGalleryPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const highlights = [
    {
      icon: Award,
      label: 'Leadership',
      title: 'Student Governance',
      desc: 'Empowering future visionaries through active positions in our Student Council, peer mentorship networks, and community action committees.'
    },
    {
      icon: Compass,
      label: 'School Trips',
      title: 'Learning Beyond Walls',
      desc: 'Regular educational excursions to museums, historical landmarks, scientific labs, and protected natural reserves.'
    },
    {
      icon: PartyPopper,
      label: 'Events',
      title: 'Community Traditions',
      desc: 'Annual festivals, seasonal dynamic sports days, and global cultural celebrations that unify our diverse student body.'
    }
  ];

  // Keyboard navigation for the pop-up modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return;
      if (e.key === 'ArrowRight') {
        handleModalNext();
      } else if (e.key === 'ArrowLeft') {
        handleModalPrev();
      } else if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex]);

  const handleModalNext = (e) => {
    if (e) e.stopPropagation();
    setActiveImageIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  const handleModalPrev = (e) => {
    if (e) e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const handleClose = () => {
    setActiveImageIndex(null);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="bg-surface font-sans min-h-screen">
      {/* Hero Header */}
      <div className="relative py-28 md:py-36 px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Pen & Page School student life"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/30" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <span className="text-secondary-container tracking-[0.2em] text-sm font-bold uppercase mb-4 block">
            Beyond The Classroom
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-[1.1]">
            Student Life
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            Our campus thrives on a holistic foundation that transforms students into resilient leaders, deep thinkers, and empathetic citizens.
          </p>
        </motion.div>
      </div>

      {/* Pillars Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 px-6"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <Card className="h-full shadow-ambient hover:shadow-lg transition-all duration-300 border border-border/10">
                    <CardContent className="text-center py-12 px-8 flex flex-col h-full justify-between">
                      <div>
                        <div className="p-3.5 bg-secondary/10 text-secondary rounded-xl w-fit mx-auto mb-6">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-secondary tracking-widest text-xs font-bold uppercase mb-3 block">
                          {item.label}
                        </span>
                        <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                          {item.title}
                        </h3>
                        <p className="text-sm text-text-variant leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Media Gallery Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="py-20 px-6 bg-surface-containerLow"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div className="text-center md:text-left">
              <span className="text-secondary tracking-widest text-sm font-bold uppercase mb-2 block">
                Gallery
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                Moments at Pen & Page
              </h2>
            </div>

            {/* Gallery Navigation Controls (Visible even when not zoomed) */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-3">
                <button
                  onClick={handleGalleryPrev}
                  className="p-2.5 rounded-full border border-border/20 text-primary hover:bg-primary/5 hover:border-primary/30 transition-all"
                  aria-label="Previous Gallery Page"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-sm text-text-variant font-medium">
                  {galleryPage + 1} / {totalPages}
                </span>
                <button
                  onClick={handleGalleryNext}
                  className="p-2.5 rounded-full border border-border/20 text-primary hover:bg-primary/5 hover:border-primary/30 transition-all"
                  aria-label="Next Gallery Page"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Paginated Grid Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={galleryPage}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentPageItems.map((item, idx) => {
                // Calculate absolute index in total array
                const absoluteIndex = startIndex + idx;
                return (
                  <motion.div
                    key={absoluteIndex}
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    onClick={() => setActiveImageIndex(absoluteIndex)}
                    className="group relative aspect-square overflow-hidden rounded-sm bg-surface-containerHighest shadow-sm cursor-pointer"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-secondary text-xs uppercase tracking-widest font-bold mb-1">
                        {item.category}
                      </span>
                      <h4 className="text-white font-serif font-bold text-lg">
                        {item.title}
                      </h4>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Pop-up Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10 select-none"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 text-white/75 hover:text-white transition-colors p-2 bg-white/10 hover:bg-white/20 rounded-full z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Arrow Button */}
            <button
              onClick={handleModalPrev}
              className="absolute left-4 md:left-8 text-white/75 hover:text-white transition-colors p-3 bg-white/10 hover:bg-white/20 rounded-full z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Main Modal Area */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[80vh] flex flex-col items-center"
            >
              <img
                src={galleryItems[activeImageIndex].img}
                alt={galleryItems[activeImageIndex].title}
                className="max-w-full max-h-[70vh] object-contain rounded-md shadow-2xl"
              />

              <div className="text-center mt-4 text-white">
                <span className="text-secondary text-xs uppercase tracking-widest font-bold block mb-1">
                  {galleryItems[activeImageIndex].category}
                </span>
                <h3 className="font-serif font-bold text-xl md:text-2xl">
                  {galleryItems[activeImageIndex].title}
                </h3>
              </div>
            </motion.div>

            {/* Next Arrow Button */}
            <button
              onClick={handleModalNext}
              className="absolute right-4 md:right-8 text-white/75 hover:text-white transition-colors p-3 bg-white/10 hover:bg-white/20 rounded-full z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}