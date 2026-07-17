import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../../components/ui/Button';

export default function AdCarousel() {
  const [[adPage, adDirection], setAdPage] = useState([0, 0]);
  const [isAdHovered, setIsAdHovered] = useState(false);

  const adBanners = [
    {
      id: 1,
      title: "Admissions Open 2026-27",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Sports Gala 2026",
      image: "https://images.unsplash.com/photo-1580191947416-62d35a55e71d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Parent Portal Update",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "STEM & Robotics",
      image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=1200&auto=format&fit=crop",
    }
  ];

  useEffect(() => {
    if (isAdHovered) return;
    const adTimer = setInterval(() => {
      paginateAd(1);
    }, 5500);
    return () => clearInterval(adTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adPage, isAdHovered]);

  const activeAdIndex = (adPage % adBanners.length + adBanners.length) % adBanners.length;

  const paginateAd = (newDirection) => {
    setAdPage([adPage + newDirection, newDirection]);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
    })
  };

  return (
    <section
      className="relative w-full min-h-[400px] sm:min-h-[550px] lg:min-h-[750px] lg:h-[85vh] bg-black overflow-hidden select-none"
      onMouseEnter={() => setIsAdHovered(true)}
      onMouseLeave={() => setIsAdHovered(false)}
    >
      {/* Images Carousel Container */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence initial={false} custom={adDirection} mode="popLayout">
          <motion.div
            key={adPage}
            custom={adDirection}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ 
              x: { type: "spring", stiffness: 180, damping: 24 }, 
              opacity: { duration: 0.3 } 
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={adBanners[activeAdIndex].image}
              alt={adBanners[activeAdIndex].title}
              className="w-full h-full object-cover"
            />
            {/* Soft dark overlay for image transitions and control visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => paginateAd(-1)}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border border-white/20 bg-black/30 text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => paginateAd(1)}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border border-white/20 bg-black/30 text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel Indicators at Bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-25 flex gap-3 bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
        {adBanners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              const direction = idx > activeAdIndex ? 1 : -1;
              setAdPage([idx, direction]);
            }}
            className={cn(
              "h-2.5 rounded-full transition-all duration-500",
              idx === activeAdIndex ? "w-8 bg-white" : "w-2.5 bg-white/40 hover:bg-white"
            )}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}