import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/Card';

import heroImage from '../assets/images/hero/1.jpeg';
import historyImage from '../assets/images/hero/2.jpeg';
import founderImage from '../assets/images/hero/3.jpeg';
import principalImage from '../assets/images/hero/4.jpeg';

export default function About() {
  // Shared, restrained scroll-reveal — one clean fade-up, no extra flourishes
  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="bg-surface font-sans">
      {/* Hero with background image + overlay */}
      <div className="relative py-28 md:py-36 px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Pen & Page School campus"
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
          <h1 className="text-5xl md:text-4xl font-serif font-bold text-white mb-6 leading-tight">
            About Pen & Page
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            Discover our history, our values, and the vision that drives our commitment to excellence.
          </p>
        </motion.div>
      </div>

      {/* Overview & History */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 px-6"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <span className="text-secondary tracking-widest text-sm font-bold uppercase mb-2 block">Our Overview</span>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">A Legacy of Learning</h2>
              <p className="text-text-variant leading-relaxed mb-4">
                Pen & Page School was founded on the belief that education is the most powerful tool to transition society from darkness to light. Our curriculum is designed to challenge students intellectually while nurturing their moral and emotional growth.
              </p>
              <p className="text-text-variant leading-relaxed">
                Over the last decade, our institution has grown from a small learning center into a comprehensive academy known for academic rigor and inclusive community spirit. Our history is written by the success of our students.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative">
              <div className="aspect-square bg-surface-containerHighest rounded-sm overflow-hidden ghost-border flex items-center justify-center">
                <img
                  src={historyImage}
                  alt="School History"
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 bg-surface-containerLow px-6"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardContent className="p-10 text-center flex flex-col items-center justify-center min-h-[300px]">
                  <span className="text-secondary tracking-widest text-sm font-bold uppercase mb-4 block">Mission Statement</span>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-6">To Empower Through Knowledge</h3>
                  <p className="text-text-variant leading-relaxed">
                    We aim to provide a holistic educational environment that fosters critical thinking, intellectual curiosity, and character integrity, equipping students with the tools to navigate an evolving world.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardContent className="p-10 text-center flex flex-col items-center justify-center min-h-[300px]">
                  <span className="text-secondary tracking-widest text-sm font-bold uppercase mb-4 block">Vision Statement</span>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-6">Leaders of Tomorrow</h3>
                  <p className="text-text-variant leading-relaxed">
                    To be globally recognized as an institution that molds principled, innovative, and compassionate leaders who actively contribute to the betterment of society.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Leadership Messages */}
      <section className="py-20 px-6 bg-surface">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Leadership Messages</h2>
            <p className="text-text-variant">Words from the minds guiding Pen & Page School.</p>
          </motion.div>

          <div className="space-y-16">
            {/* Owner/Founder */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col md:flex-row gap-10 items-center"
            >
              <div className="w-full md:w-1/3">
                <div className="aspect-[3/4] bg-surface-containerHighest rounded-sm overflow-hidden ghost-border flex items-center justify-center">
                  <img
                    src={founderImage}
                    alt="Founder"
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">Dr. Al-Hassan</h3>
                <p className="text-secondary font-medium text-sm tracking-widest uppercase mb-6">Founder & Owner</p>
                <div className="relative">
                  <span className="text-6xl text-secondary/20 font-serif absolute -top-6 -left-4">"</span>
                  <p className="text-text-variant text-lg leading-relaxed italic z-10 relative">
                    When we laid the foundation stone of Pen & Page, we envisioned a sanctuary of learning. It is not merely about academic scores, but about character building. Our motto, 'From Darkness to Light,' represents our dedication to helping every child discover their true potential and purpose.
                  </p>
                </div>
              </div>
            </motion.div>

            <hr className="border-outline-variant/30" />

            {/* Principal */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col md:flex-row-reverse gap-10 items-center"
            >
              <div className="w-full md:w-1/3">
                <div className="aspect-[3/4] bg-surface-containerHighest rounded-sm overflow-hidden ghost-border flex items-center justify-center">
                  <img
                    src={principalImage}
                    alt="Principal"
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 text-left md:text-right">
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">Mrs. Sarah Jenkins</h3>
                <p className="text-secondary font-medium text-sm tracking-widest uppercase mb-6">School Principal</p>
                <div className="relative">
                  <span className="text-6xl text-secondary/20 font-serif absolute -top-6 -right-2 md:left-auto md:-right-8">"</span>
                  <p className="text-text-variant text-lg leading-relaxed italic z-10 relative">
                    Our curriculum is built on a framework of inquiry and compassion. Every day, I witness our faculty illuminating young minds and guiding them forward. We are honored to partner with parents in the profound journey of shaping the next generation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}