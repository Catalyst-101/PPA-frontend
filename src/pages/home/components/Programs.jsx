import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardTitle } from '../../../components/ui/Card';

// Local assets (going up three levels to reach src/assets)
import prog1 from '../../../assets/images/programs_1/1.jpeg';
import prog2 from '../../../assets/images/programs_1/2.jpeg';
import hero3 from '../../../assets/images/hero/3.jpeg';
import hero4 from '../../../assets/images/hero/4.jpeg';

export default function Programs() {
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

  const programImages = [prog1, prog2, hero3, hero4];

  // Academic program specifications
  const programs = [
    {
      title: 'Pre School',
      grades: 'Playgroup, Reception 1, Reception 2',
      desc: 'A caring early learning environment where children begin their educational journey through play, discovery, language development, creativity, and social growth.'
    },
    {
      title: 'Primary',
      grades: 'Grade 1 to Grade 6',
      desc: 'A strong foundation program for Grades 1 to 6, focused on core academic skills, confidence building, discipline, curiosity, and overall character development.'
    },
    {
      title: 'Middle',
      grades: 'Grade 7 and Grade 8',
      desc: 'A balanced academic stage for Grades 7 and 8, helping students strengthen concepts, develop independent thinking, and prepare for higher-level studies.'
    },
    {
      title: 'High',
      grades: 'Grade 9 and Grade 10',
      desc: 'A focused program for Grades 9 and 10, designed to prepare students for board examinations while building responsibility, confidence, and future academic readiness.'
    }
  ];

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="py-24 bg-surface-containerLow px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="text-secondary tracking-widest text-sm font-bold uppercase mb-2 block">
            Academics
          </span>

          <h2 className="text-4xl font-serif font-bold text-primary mb-4">
            Our Programs
          </h2>

          <p className="text-text-variant max-w-2xl mx-auto">
            At Pen & Page Academia & School, we offer carefully designed academic
            programs that support students from early learning to matric preparation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((prog, idx) => (
            <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -6 }}>
              <Card
                className="group flex flex-col sm:flex-row hover:-translate-y-2 transition-all duration-300 hover:shadow-xl border-t-4 sm:border-t-0 sm:border-l-4 sm:border-primary border-primary relative overflow-hidden h-full"
              >
                <div className="h-56 sm:h-auto sm:w-2/5 shrink-0 overflow-hidden relative bg-surface-containerLow flex items-center justify-center">
                  <img
                    src={programImages[idx]}
                    alt={prog.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/35"></div>
                </div>
                <CardContent className="h-full flex flex-col pt-8 pb-8 px-6 sm:w-3/5">
                  <div className="mb-4 self-start px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider rounded-sm">
                    {prog.grades}
                  </div>

                  <CardTitle className="mb-4 text-2xl font-serif text-primary">{prog.title}</CardTitle>

                  <p className="text-text-variant text-sm flex-grow mb-8 leading-relaxed">
                    {prog.desc}
                  </p>

                  <Link
                    to="/curriculum"
                    className="text-primary font-medium hover:text-secondary transition-colors inline-flex items-center text-sm mt-auto"
                  >
                    View Details <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
