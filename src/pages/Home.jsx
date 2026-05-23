import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, BookOpen, Users, Compass, Globe } from 'lucide-react';
import Button from '../components/ui/Button';
import { Card, CardContent, CardTitle } from '../components/ui/Card';

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const programs = [
    { title: 'Nursery', icon: <Users className="w-6 h-6" />, desc: 'A nurturing environment for our youngest learners.' },
    { title: 'Kindergarten', icon: <Compass className="w-6 h-6" />, desc: 'Play-based learning giving a foundation for life.' },
    { title: 'Primary (1-5)', icon: <BookOpen className="w-6 h-6" />, desc: 'Developing core skills and fostering curiosity.' },
    { title: 'Secondary (6-10)', icon: <Globe className="w-6 h-6" />, desc: 'Academic excellence and character development.' }
  ];

  const faqs = [
    { q: 'What are the school timings?', a: 'School operates from 8:00 AM to 2:30 PM, Monday through Friday.' },
    { q: 'Do you offer transport facilities?', a: 'Yes, we have a comprehensive bus network covering most of the city.' },
    { q: 'How do I apply for admission?', a: 'You can apply online through our Admissions portal, accessible via the top navigation.' }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-primary to-primary-container text-white text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541829070762-3f2ae62f5f14?q=80&w=2000&auto=format&fit=crop')] mix-blend-overlay opacity-20 bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl flex flex-col items-center">
          <p className="text-secondary font-serif text-2xl md:text-3xl mb-8 tracking-wider">من الظلمات إلى النور</p>
          <h1 className="text-display-lg font-serif font-bold leading-tight mb-6">
            Welcome to <br /> Pen & Page School
          </h1>
          <p className="text-body-lg text-white/80 max-w-2xl mb-10">
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
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-surface px-6">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary tracking-widest text-sm font-bold uppercase mb-2 block">Our Heritage</span>
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">Tradition meets Forward Thinking.</h2>
            <p className="text-text-variant leading-relaxed mb-6">
              Established with the vision to transition young minds from darkness to light,
              Pen & Page School stands as a beacon of modern education grounded in strong values.
              Our commitment goes beyond textbooks. We nurture the entire individual.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="border-l-2 border-secondary pl-4">
                <h4 className="font-bold text-primary mb-1">Our Mission</h4>
                <p className="text-sm text-text-variant">Providing holistic education for all-round development.</p>
              </div>
              <div className="border-l-2 border-secondary pl-4">
                <h4 className="font-bold text-primary mb-1">Our Vision</h4>
                <p className="text-sm text-text-variant">To be the leading educational institution globally.</p>
              </div>
            </div>
            <Link to="/about">
              <Button variant="ghost" className="px-0 py-0 hover:bg-transparent text-secondary hover:text-secondary-fixedDim">
                Read Full Story &rarr;
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-surface-containerHighest rounded-sm overflow-hidden ghost-border relative z-10">
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop" alt="Campus View" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-0"></div>
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="py-24 bg-surface-containerLow px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-secondary tracking-widest text-sm font-bold uppercase mb-2 block">Academics</span>
            <h2 className="text-4xl font-serif font-bold text-primary">Our Programs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((prog, idx) => (
              <Card key={idx} className="group">
                <CardContent className="h-full flex flex-col pt-8">
                  <div className="w-12 h-12 rounded-sm bg-primary-fixed text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {prog.icon}
                  </div>
                  <CardTitle className="mb-3">{prog.title}</CardTitle>
                  <p className="text-text-variant text-sm flex-grow mb-6">{prog.desc}</p>
                  <Link to="/curriculum" className="text-secondary text-sm font-medium hover:underline mt-auto">
                    View Details
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-surface px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-text-variant">Everything you need to know about the school.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-surface-lowest ghost-border rounded-sm overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                >
                  <span className="font-serif font-medium text-lg text-primary">{faq.q}</span>
                  <span className="text-secondary">
                    {openFAQ === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFAQ === idx ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="text-text-variant text-sm">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
