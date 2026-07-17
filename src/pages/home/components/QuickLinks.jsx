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

  const links = [
    {
      icon: UserPlus,
      badge: { label: 'ADMISSIONS ACTIVE', variant: 'warning', className: 'text-white' },
      title: 'Register Online',
      desc: 'Submit enrollment applications, upload transcripts, and track processing steps securely in our parent portal.',
      href: '/admissions/apply',
      cta: 'Start Application',
      accent: 'secondary',
      borderClass: 'border-t-secondary',
      blobClass: 'bg-secondary/5',
      iconWrapClass: 'bg-secondary/10 text-secondary-fixedDim group-hover:bg-secondary group-hover:text-white',
      linkClass: 'text-secondary-fixedDim hover:text-secondary',
      barClass: 'bg-secondary'
    },
    {
      icon: Calendar,
      badge: { label: 'SESSION 2026', variant: 'primary', className: 'bg-primary-fixed/20 text-primary-container' },
      title: 'Academic Calendar',
      desc: 'Access examination dates, parent-teacher reviews, school holidays, and annual sports events in a digital grid format.',
      href: '/student-life',
      cta: 'View Events List',
      accent: 'primary',
      borderClass: 'border-t-primary',
      blobClass: 'bg-primary/5',
      iconWrapClass: 'bg-primary/10 text-primary-container group-hover:bg-primary group-hover:text-white',
      linkClass: 'text-primary hover:text-secondary',
      barClass: 'bg-primary'
    },
    {
      icon: GraduationCap,
      badge: { label: 'TUITION & CRITERIA', variant: 'default', className: '' },
      title: 'Admission Portal',
      desc: 'Explore curriculum options, age limits, required legal documentation, and detailed quarterly tuition fee breakdowns.',
      href: '/admissions',
      cta: 'Read Guidelines',
      accent: 'slate',
      borderClass: 'border-t-slate-800',
      blobClass: 'bg-slate-800/5',
      iconWrapClass: 'bg-slate-100 text-slate-850 group-hover:bg-slate-800 group-hover:text-white',
      linkClass: 'text-slate-800 hover:text-secondary',
      barClass: 'bg-slate-800'
    }
  ];

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="relative z-20 px-6 -mt-12 md:-mt-6 max-w-6xl mx-auto w-full pb-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {links.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              className="flex flex-col h-full"
            >
              <Card
                className={`flex flex-col h-full bg-surface-lowest border-t-4 ${item.borderClass} border-outline-variant/10 shadow-md hover:shadow-xl transition-shadow duration-500 relative overflow-hidden group`}
              >
                {/* Corner accent, now scales AND fades for a softer reveal */}
                <div
                  className={`absolute top-0 right-0 w-28 h-28 ${item.blobClass} rounded-bl-full pointer-events-none scale-90 opacity-70 group-hover:scale-150 group-hover:opacity-100 transition-all duration-700 ease-out`}
                />

                <CardContent className="flex flex-col flex-grow p-8 relative">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`p-3 rounded-xl w-fit transition-all duration-300 ${item.iconWrapClass} group-hover:-translate-y-0.5 group-hover:shadow-md`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant={item.badge.variant} className={`text-[10px] ${item.badge.className}`}>
                      {item.badge.label}
                    </Badge>
                  </div>

                  <CardTitle className="text-2xl font-serif text-primary font-bold mb-3 leading-snug">
                    {item.title}
                  </CardTitle>

                  <p className="text-text-variant/80 text-sm leading-relaxed mb-6 flex-grow">
                    {item.desc}
                  </p>

                  <div className="mt-auto">
                    {/* Accent underline that draws in on hover, reinforcing the CTA direction */}
                    <div className="h-px w-full bg-outline-variant/10 relative mb-4 overflow-hidden">
                      <div
                        className={`absolute inset-y-0 left-0 w-0 group-hover:w-full ${item.barClass} transition-all duration-500 ease-out`}
                      />
                    </div>
                    <Link
                      to={item.href}
                      className={`inline-flex items-center font-semibold text-sm transition-colors ${item.linkClass}`}
                    >
                      {item.cta}
                      <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}