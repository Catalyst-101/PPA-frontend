import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../../components/ui/Button';

// Fallback local imports (going up three levels to reach src/assets)
import hero1 from '../../../assets/images/hero/1.jpeg';
import hero2 from '../../../assets/images/hero/2.jpeg';
import hero3 from '../../../assets/images/hero/3.jpeg';
import hero4 from '../../../assets/images/hero/4.jpeg';
import hero5 from '../../../assets/images/hero/5.jpeg';
import hero6 from '../../../assets/images/hero/6.jpeg';
import hero7 from '../../../assets/images/hero/7.jpeg';

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];

  // Background Hero Slider Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000); // Bumped to 6s for a smoother, less rushed transition

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-[90vh] lg:h-[95vh] flex flex-col items-center justify-center bg-primary text-white text-center px-6 overflow-hidden">
      
      {/* Background Slideshow Layer */}
      <div className="absolute inset-0 z-0 select-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.35, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
          />
        </AnimatePresence>
        
        {/* Dynamic Vignette & Lighting Mask for High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/85 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,var(--tw-gradient-stops))] from-transparent to-primary/95"></div>
      </div>

      {/* Decorative Glow Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[140px] pointer-events-none z-0"></div>

      {/* Hero Content Area */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-5xl flex flex-col items-center gap-6"
      >
        {/* Arabic Calligraphy Phrase */}
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-secondary font-serif text-3xl md:text-5xl tracking-widest leading-normal drop-shadow-[0_4px_12px_rgba(255,191,0,0.2)]"
          dir="rtl"
        >
          مِنَ الظُّلُمَاتِ إِلَى النُّورِ
        </motion.p>

        {/* Scaled & Bold Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black leading-[1.1] tracking-tight max-w-4xl mt-2 drop-shadow-xl">
          Welcome to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-secondary-fixedDim">
            Pen & Page Academia
          </span>
        </h1>

        {/* Enhanced Readable Description */}
        <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed font-light mt-2 px-2 md:px-0">
          Fostering an environment of academic excellence, critical thinking, and character development to illuminate the path for our future leaders.
        </p>

        {/* Action Button Controls */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <Link to="/about">
            <Button 
              variant="primary" 
              className="px-8 py-4 text-base font-bold tracking-wide shadow-lg shadow-secondary/15 hover:shadow-secondary/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore School
            </Button>
          </Link>

          <Link to="/admissions">
            <Button 
              variant="outline" 
              className="px-8 py-4 text-base font-bold tracking-wide text-white border-white/40 hover:text-primary hover:bg-white hover:border-white transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Apply Now
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}