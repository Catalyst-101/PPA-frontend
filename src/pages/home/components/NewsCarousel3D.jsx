import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Award, Info } from 'lucide-react';
import { cn } from '../../../components/ui/Button';

export default function NewsCarousel3D() {
  const [newsActiveIndex, setNewsActiveIndex] = useState(2); // Starts in the middle of 5 items
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  const newsItems = [
    {
      id: 1,
      tag: "AWARDS",
      date: "July 12, 2026",
      title: "BISE Regional Spelling Bee Champions",
      desc: "Pen & Page middle school students secured the 1st position in the Peshawar spelling bee championship, competing against 30 regional schools.",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      tag: "INNOVATION",
      date: "July 08, 2026",
      title: "State-of-the-Art VEX Robotics Lab",
      desc: "A fully equipped VEX Robotics and AI experimental workspace has been launched to foster deep scientific curiosity among high school grades.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      tag: "CREATIVITY",
      date: "July 02, 2026",
      title: "Annual Art Gallery: Colors of Hope",
      desc: "Our student council hosted an exhibition showcasing original sketches, acrylic paintings, and pottery created by Grade 1 to 10 artists.",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 4,
      tag: "ACADEMICS",
      date: "June 25, 2026",
      title: "Outstanding Matric Board Results",
      desc: "Pen & Page is proud to announce that 95% of our high school cohort achieved Grade A+ in the BISE Peshawar board examinations.",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 5,
      tag: "COMMUNITY",
      date: "June 18, 2026",
      title: "Eco-Eagles Launch Campus Reforestation",
      desc: "The student-led Eco Club planted over 300 indigenous pine saplings around the campus boundary in partnership with the local forest department.",
      image: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=600&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNewsDrag = (event, info) => {
    const swipeThreshold = 55;
    if (info.offset.x > swipeThreshold) {
      setNewsActiveIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
    } else if (info.offset.x < -swipeThreshold) {
      setNewsActiveIndex((prev) => (prev + 1) % newsItems.length);
    }
  };

  const isMobile = windowWidth < 768;
  
  // Compact multipliers to allow 5 cards to fit nicely on the screen without spilling out
  const newsOffsetMultiplier = isMobile ? 55 : 70;

  return (
    <section className="py-20 px-6 bg-surface-containerLow overflow-hidden border-y border-outline-variant/10 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent opacity-60 z-0"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-secondary tracking-widest text-sm font-bold uppercase mb-2 block">
            Latest Updates
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
            News & Campus Events
          </h2>
          <p className="text-text-variant/80 max-w-xl mx-auto text-sm md:text-base">
            Discover academic milestones, student creations, and major achievements within the Pen & Page community.
          </p>
        </motion.div>

        {/* 3D Carousel container */}
        <div className="relative flex items-center justify-center h-[540px] w-full overflow-visible py-10 select-none">
          {newsItems.map((item, idx) => {
            let offset = idx - newsActiveIndex;
            if (offset < -Math.floor(newsItems.length / 2)) {
              offset += newsItems.length;
            } else if (offset > Math.floor(newsItems.length / 2)) {
              offset -= newsItems.length;
            }

            const isActive = offset === 0;
            const absOffset = Math.abs(offset);

            return (
              <motion.div
                key={item.id}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleNewsDrag}
                animate={{
                  x: offset === 0 ? "0%" : `${offset * newsOffsetMultiplier}%`,
                  scale: offset === 0 ? 1.03 : absOffset === 1 ? 0.88 : 0.74,
                  opacity: offset === 0 ? 1 : absOffset === 1 ? 0.75 : absOffset === 2 ? 0.35 : 0,
                  rotateY: offset * -20,
                  rotateZ: offset * 1.5,
                  z: offset === 0 ? 120 : absOffset === 1 ? 60 : 0,
                  zIndex: 20 - absOffset
                }}
                whileHover={
                  isActive 
                    ? { 
                        scale: 1.06, 
                        y: -12, 
                        boxShadow: "0 25px 50px -12px rgba(0, 17, 58, 0.25)" 
                      } 
                    : { 
                        scale: absOffset === 1 ? 0.92 : 0.78 
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 22
                }}
                onClick={() => {
                  if (offset !== 0) setNewsActiveIndex(idx);
                }}
                className={cn(
                  "absolute w-full max-w-[320px] md:max-w-[370px] h-[420px] bg-surface-lowest rounded-2xl border border-outline-variant/15 flex flex-col justify-between overflow-hidden cursor-pointer select-none transition-all duration-300 group",
                  isActive ? "border-secondary/50 ring-2 ring-secondary/10" : "hover:border-outline-variant/40"
                )}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1200px"
                }}
              >
                {/* Top Image Section */}
                <div className="relative h-44 w-full bg-surface-containerHighest shrink-0 pointer-events-none overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  <span className="absolute top-4 left-4 bg-primary text-white text-[9px] tracking-widest font-bold uppercase py-1 px-3.5 rounded-full shadow-md transition-colors duration-300 group-hover:bg-secondary">
                    {item.tag}
                  </span>
                </div>

                {/* Text Details Area */}
                <div className="p-6 flex-grow flex flex-col justify-between bg-surface-lowest">
                  <div className="pointer-events-none">
                    <span className="text-[10px] text-text-variant/60 font-semibold uppercase tracking-wider block mb-1">
                      {item.date}
                    </span>
                    <h3 className="font-serif text-base md:text-lg font-bold text-primary mb-2 line-clamp-2 leading-snug transition-colors duration-300 group-hover:text-secondary">
                      {item.title}
                    </h3>
                    <p className="text-xs text-text-variant/85 leading-relaxed line-clamp-3 font-sans">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-outline-variant/5">
                    <Link to="/news" className="inline-flex items-center gap-1.5 text-xs text-primary font-bold hover:text-secondary group/read">
                      Read Article
                      <ArrowRight className="w-3.5 h-3.5 group-hover/read:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Dot & Arrow Controls */}
        <div className="flex flex-col items-center gap-4 -mt-2">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setNewsActiveIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length)}
              className="p-2.5 rounded-full bg-white text-primary border border-outline-variant/15 hover:border-secondary hover:text-secondary hover:scale-105 active:scale-95 transition-all shadow-sm"
              aria-label="Previous News"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex gap-2">
              {newsItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setNewsActiveIndex(idx)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    idx === newsActiveIndex ? "w-6 bg-secondary" : "w-2 bg-outline-variant/60 hover:bg-outline-variant"
                  )}
                  aria-label={`Go to news ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setNewsActiveIndex((prev) => (prev + 1) % newsItems.length)}
              className="p-2.5 rounded-full bg-white text-primary border border-outline-variant/15 hover:border-secondary hover:text-secondary hover:scale-105 active:scale-95 transition-all shadow-sm"
              aria-label="Next News"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-text-variant/50 italic flex items-center gap-1 select-none">
            <Info className="w-3 h-3 text-secondary/70" />
            Drag cards horizontally, or click background cards to swap focus.
          </p>
        </div>

      </div>
    </section>
  );
}