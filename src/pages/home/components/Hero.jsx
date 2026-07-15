import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-primary to-primary-container text-white text-center px-4 overflow-hidden">
      {/* Background Images */}
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-25' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl flex flex-col items-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-secondary font-serif text-2xl md:text-3xl mb-8 tracking-wider"
        >
          من الظلمات إلى النور
        </motion.p>

        <h1 className="text-xl font-serif font-bold leading-tight mb-6">
          Welcome to <br /> Pen & Page Academia & School
        </h1>

        <p className="text-display-sm text-white/80 max-w-2xl mb-10">
          Fostering an environment of academic excellence, critical thinking, and character development to illuminate the path for our future leaders.
        </p>

        <div className="flex gap-4">
          <Link to="/about">
            <Button variant="primary">Explore School</Button>
          </Link>

          <Link to="/admissions">
            <Button variant="outline" className="text-white border-white hover:text-primary hover:bg-white hover:border-white">
              Apply Now
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
