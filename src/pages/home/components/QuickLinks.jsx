import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserPlus, Calendar, GraduationCap, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardTitle } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';

export default function QuickLinks() {
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
      viewport={{ once: true, amount: 0.2 }}
      className="relative z-20 px-6 -mt-12 md:-mt-6 max-w-6xl mx-auto w-full pb-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Card 1: Register Online */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="flex flex-col h-full"
        >
          <Card className="flex flex-col h-full bg-surface-lowest border-t-4 border-t-secondary border-outline-variant/10 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-full pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
            <CardContent className="flex flex-col flex-grow p-8">
              <div className="p-3 bg-secondary/10 text-secondary-fixedDim rounded-xl w-fit mb-6 transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                <UserPlus className="w-6 h-6" />
              </div>
              <Badge variant="warning" className="w-fit mb-2 text-[10px] text-white">ADMISSIONS ACTIVE</Badge>
              <CardTitle className="text-2xl font-serif text-primary font-bold mb-4">Register Online</CardTitle>
              <p className="text-text-variant/80 text-sm leading-relaxed mb-6 flex-grow">
                Submit enrollment applications, upload transcripts, and track processing steps securely in our parent portal.
              </p>
              <Link to="/admissions/apply" className="inline-flex items-center text-secondary-fixedDim font-semibold text-sm hover:text-secondary group/link mt-auto">
                Start Application
                <ArrowUpRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </Link>
            </CardContent>
          </Card>
        </motion.div>

        {/* Card 2: Academic Calendar */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="flex flex-col h-full"
        >
          <Card className="flex flex-col h-full bg-surface-lowest border-t-4 border-t-primary border-outline-variant/10 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
            <CardContent className="flex flex-col flex-grow p-8">
              <div className="p-3 bg-primary/10 text-primary-container rounded-xl w-fit mb-6 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <Calendar className="w-6 h-6" />
              </div>
              <Badge variant="primary" className="w-fit mb-2 text-[10px] bg-primary-fixed/20 text-primary-container">SESSION 2026</Badge>
              <CardTitle className="text-2xl font-serif text-primary font-bold mb-4">Academic Calendar</CardTitle>
              <p className="text-text-variant/80 text-sm leading-relaxed mb-6 flex-grow">
                Access examination dates, parent-teacher reviews, school holidays, and annual sports events in a digital grid format.
              </p>
              <Link to="/student-life" className="inline-flex items-center text-primary font-semibold text-sm hover:text-secondary group/link mt-auto">
                View Events List
                <ArrowUpRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </Link>
            </CardContent>
          </Card>
        </motion.div>

        {/* Card 3: Admission Portal */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="flex flex-col h-full"
        >
          <Card className="flex flex-col h-full bg-surface-lowest border-t-4 border-t-slate-800 border-outline-variant/10 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-slate-800/5 rounded-bl-full pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
            <CardContent className="flex flex-col flex-grow p-8">
              <div className="p-3 bg-slate-100 text-slate-850 rounded-xl w-fit mb-6 transition-colors duration-300 group-hover:bg-slate-800 group-hover:text-white">
                <GraduationCap className="w-6 h-6" />
              </div>
              <Badge variant="default" className="w-fit mb-2 text-[10px]">TUITION & CRITERIA</Badge>
              <CardTitle className="text-2xl font-serif text-primary font-bold mb-4">Admission Portal</CardTitle>
              <p className="text-text-variant/80 text-sm leading-relaxed mb-6 flex-grow">
                Explore curriculum options, age limits, required legal documentation, and detailed quarterly tuition fee breakdowns.
              </p>
              <Link to="/admissions/fee-structure" className="inline-flex items-center text-slate-800 font-semibold text-sm hover:text-secondary group/link mt-auto">
                Read Guidelines
                <ArrowUpRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </Link>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </motion.section>
  );
}
