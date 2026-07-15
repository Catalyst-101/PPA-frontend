import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const campusImage = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop';

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-24 bg-surface px-6"
    >
      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div variants={fadeInUp}>
          <span className="text-secondary tracking-widest text-sm font-bold uppercase mb-2 block">About Us</span>

          <h2 className="text-4xl font-serif font-bold text-primary mb-6">
            Where Learning Begins with Purpose.
          </h2>

          <p className="text-text-variant leading-relaxed mb-6">
            Pen & Page Academia & School is committed to nurturing confident, knowledgeable, and morally strong students in a supportive learning environment. We believe education is not only about academic success, but also about building character, creativity, discipline, and critical thinking. Our goal is to inspire every student to grow into responsible individuals prepared for the challenges of the modern world.
          </p>

          <Link to="/about">
            <Button variant="ghost" className="px-0 py-0 hover:bg-transparent text-secondary hover:text-secondary-fixedDim">
              Read More &rarr;
            </Button>
          </Link>
        </motion.div>

        <motion.div variants={fadeInUp} className="relative">
          <div className="aspect-[4/3] bg-surface-containerHighest rounded-sm overflow-hidden ghost-border relative z-10">
            <img
              src={campusImage}
              alt="Campus View"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-0"></div>
        </motion.div>
      </div>
    </motion.section>
  );
}
