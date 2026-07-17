import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    { q: 'What are the school timings?', a: 'School operates from 8:00 AM to 2:30 PM, Monday through Friday.' },
    { q: 'Do you offer transport facilities?', a: 'Yes, we have a comprehensive bus network covering most of the city.' },
    {
      q: 'Where is the school campus located?',
      a: 'Our campus is located at Old Bara Road, University Town, Peshawar, providing a secure and accessible environment for students.'
    },
    { q: 'How do I apply for admission?', a: 'You can apply online through our Admissions portal, accessible via the top navigation.' }
  ];

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

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="py-24 bg-surface px-6"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div variants={fadeInUp} className="text-center mb-14">
          <span className="text-secondary tracking-widest text-sm font-bold uppercase mb-2 block">
            Help Center
          </span>

          <h2 className="text-4xl font-serif font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-text-variant max-w-2xl mx-auto">
            Helpful information to guide parents and students through their school journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-surface-lowest ghost-border rounded-sm overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <button
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                >
                  <span className="font-serif font-medium text-lg text-primary">
                    {faq.q}
                  </span>

                  <span className="text-secondary ml-4">
                    {openFAQ === idx ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </span>
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === idx ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-text-variant text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="bg-primary text-white rounded-sm p-8 ghost-border">
            <span className="text-secondary tracking-widest text-xs font-bold uppercase mb-3 block">
              More Questions?
            </span>

            <h3 className="text-2xl font-serif font-bold mb-4">
              Visit Our FAQ Center
            </h3>

            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Explore the complete FAQ page for detailed information about admissions,
              academics, fees, school policies, and student support.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center text-sm font-medium text-secondary hover:text-white transition-colors"
            >
              Contact Us
              <span className="ml-2">&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
