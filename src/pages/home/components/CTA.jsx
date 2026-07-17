import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';

export default function FinalCTASection() {
  return (
    <section className="w-full bg-surface py-8 border-t border-outline-variant/10 select-none">
      <div className="w-full px-0">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full bg-primary overflow-hidden shadow-xl border-y border-outline-variant/10 py-12 px-6 sm:px-12 md:px-24 lg:px-[120px] flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Background Effects */}
          <div className="absolute inset-y-0 right-0 w-96 bg-gradient-to-l from-secondary/15 via-secondary/5 to-transparent pointer-events-none" />
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />

          {/* Content Block (Padded from Left) */}
          <div className="relative z-10 flex-1 text-center md:text-left md:pl-30">
            <span className="text-secondary tracking-widest text-xs font-bold uppercase mb-2 block">
              Admissions Open 2026 — 2027
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
              Begin Your Child's <br className="hidden sm:inline" />
              Journey of Excellence
            </h2>

            <p className="mt-3 max-w-2xl text-white/75 text-sm sm:text-base leading-relaxed">
              Join a community dedicated to developing confident learners,
              <br className="hidden lg:inline" />
              critical thinkers, and future leaders through academic excellence,
              <br className="hidden lg:inline" />
              innovation, and strong moral values.
            </p>
          </div>

          {/* CTA Block (Padded from Right) */}
          <div className="relative z-10 shrink-0 md:pr-40 w-full md:w-auto flex justify-center md:justify-end">
            <Link to="/admissions/apply" className="w-full sm:w-auto">
              <Button
                variant="primary"
                className="w-full sm:w-auto px-12 md:px-16 py-4 text-base font-bold tracking-wide text-white border-white/40 hover:text-primary hover:bg-white hover:border-white transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Apply Now
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}