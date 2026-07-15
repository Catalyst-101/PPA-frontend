import React from 'react';

// Modular Subcomponents
import Hero from './components/Hero';
import AffiliationsMarquee from './components/AffiliationsMarquee';
import About from './components/About';
import AdCarousel from './components/AdCarousel';
import QuickLinks from './components/QuickLinks';
import NewsCarousel3D from './components/NewsCarousel3D';
import Programs from './components/Programs';
import LMSPromotion from './components/LMSPromotion';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

export default function Home() {
  return (
    <div className="flex flex-col bg-surface overflow-x-hidden min-h-screen">
      {/* 1. Hero Slideshow Section */}
      <Hero />

      {/* 2. Infinite Loop Affiliations Marquee */}
      <AffiliationsMarquee />

      {/* 3. About School Overview Section */}
      <About />

      {/* 4. Auto-Playing Banners Carousel */}
      <AdCarousel />

      {/* 5. 1x3 Grid Action Cards */}
      <QuickLinks />

      {/* 6. 3D Rotating Events Carousel */}
      <NewsCarousel3D />

      {/* 7. Curriculum Programs Section */}
      <Programs />

      {/* 8. App/LMS Presentation Layout */}
      <LMSPromotion />

      {/* 9. FAQs Accordion Hub */}
      <FAQ />

      {/* 10. CTA */}
      <CTA />
    </div>
  );
}
