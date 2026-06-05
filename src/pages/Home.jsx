import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, BookOpen, Users, Compass, Globe } from 'lucide-react';
import Button from '../components/ui/Button';
import { Card, CardContent, CardTitle } from '../components/ui/Card';

import hero1 from '../assets/images/hero/1.jpeg';
import hero2 from '../assets/images/hero/2.jpeg';
import hero3 from '../assets/images/hero/3.jpeg';
import hero4 from '../assets/images/hero/4.jpeg';
import hero5 from '../assets/images/hero/5.jpeg';
import hero6 from '../assets/images/hero/6.jpeg';
import hero7 from '../assets/images/hero/7.jpeg';

import prog1 from '../assets/images/programs_1/1.jpeg';
import prog2 from '../assets/images/programs_1/2.jpeg';
import prog3 from '../assets/images/hero/3.jpeg';
import prog4 from '../assets/images/hero/4.jpeg';

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const heroImages = [
    hero1,
    hero2,
    hero3,
    hero4,
    hero5,
    hero6,
    hero7
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const programs = [
    {
      title: 'Pre School',
      grades: 'Playgroup, Reception 1, Reception 2',
      desc: 'A caring early learning environment where children begin their educational journey through play, discovery, language development, creativity, and social growth.',
      image: prog1
    },
    {
      title: 'Primary',
      grades: 'Grade 1 to Grade 6',
      desc: 'A strong foundation program for Grades 1 to 6, focused on core academic skills, confidence building, discipline, curiosity, and overall character development.',
      image: prog2
    },
    {
      title: 'Middle',
      grades: 'Grade 7 and Grade 8',
      desc: 'A balanced academic stage for Grades 7 and 8, helping students strengthen concepts, develop independent thinking, and prepare for higher-level studies.',
      image: prog3
    },
    {
      title: 'High',
      grades: 'Grade 9 and Grade 10',
      desc: 'A focused program for Grades 9 and 10, designed to prepare students for board examinations while building responsibility, confidence, and future academic readiness.',
      image: prog4
    }
  ];

  const faqs = [
    { q: 'What are the school timings?', a: 'School operates from 8:00 AM to 2:30 PM, Monday through Friday.' },
    { q: 'Do you offer transport facilities?', a: 'Yes, we have a comprehensive bus network covering most of the city.' },
    {
      q: 'Where is the school campus located?',
      a: 'Our campus is located at Old Bara Road, University Town, Peshawar, providing a secure and accessible environment for students.'
    },
    { q: 'How do I apply for admission?', a: 'You can apply online through our Admissions portal, accessible via the top navigation.' }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-primary to-primary-container text-white text-center px-4 overflow-hidden">

        {/* Background Images */}
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImage ? 'opacity-25' : 'opacity-0'
              }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="relative z-10 max-w-4xl flex flex-col items-center">
          <p className="text-secondary font-serif text-2xl md:text-3xl mb-8 tracking-wider">من الظلمات إلى النور</p>

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
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-surface px-6">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
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
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-surface-containerHighest rounded-sm overflow-hidden ghost-border relative z-10">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop"
                alt="Campus View"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-0"></div>
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="py-24 bg-surface-containerLow px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((prog, idx) => (
              <Card
                key={idx}
                className="group flex flex-col sm:flex-row hover:-translate-y-2 transition-all duration-300 hover:shadow-xl border-t-4 sm:border-t-0 sm:border-l-4 sm:border-primary border-primary relative overflow-hidden h-full"
              >
                <div className="h-56 sm:h-auto sm:w-2/5 shrink-0 overflow-hidden relative">
                  <img
                    src={prog.image}
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
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-surface px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="text-secondary tracking-widest text-sm font-bold uppercase mb-2 block">
              Help Center
            </span>

            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>

            <p className="text-text-variant max-w-2xl mx-auto">
              Helpful information to guide parents and students through their school journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
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
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFAQ === idx
                      ? "max-h-40 pb-5 opacity-100"
                      : "max-h-0 opacity-0"
                      }`}
                  >
                    <p className="text-text-variant text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary text-white rounded-sm p-8 ghost-border">
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
                to="/faqs"
                className="inline-flex items-center text-sm font-medium text-secondary hover:text-white transition-colors"
              >
                Go to FAQs
                <span className="ml-2">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}