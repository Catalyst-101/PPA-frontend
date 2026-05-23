import React from 'react';
import { Card, CardContent } from '../components/ui/Card';

export default function About() {
  return (
    <div className="bg-surface font-sans">
      <div className="bg-primary text-white py-16 px-6 text-center">
        <h1 className="text-display-md font-serif font-bold mb-4">About Pen & Page</h1>
        <p className="text-white/80 max-w-2xl mx-auto">Discover our history, our values, and the vision that drives our commitment to excellence.</p>
      </div>

      {/* Overview & History */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary tracking-widest text-sm font-bold uppercase mb-2 block">Our Overview</span>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">A Legacy of Learning</h2>
              <p className="text-text-variant leading-relaxed mb-4">
                Pen & Page School was founded on the belief that education is the most powerful tool to transition society from darkness to light. Our curriculum is designed to challenge students intellectually while nurturing their moral and emotional growth.
              </p>
              <p className="text-text-variant leading-relaxed">
                Over the last decade, our institution has grown from a small learning center into a comprehensive academy known for academic rigor and inclusive community spirit. Our history is written by the success of our students.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-surface-containerHighest rounded-sm overflow-hidden ghost-border">
                 <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop" alt="School History" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-surface-containerLow px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardContent className="p-10 text-center flex flex-col items-center justify-center min-h-[300px]">
                <span className="text-secondary tracking-widest text-sm font-bold uppercase mb-4 block">Mission Statement</span>
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">To Empower Through Knowledge</h3>
                <p className="text-text-variant leading-relaxed">
                  We aim to provide a holistic educational environment that fosters critical thinking, intellectual curiosity, and character integrity, equipping students with the tools to navigate an evolving world.
                </p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="p-10 text-center flex flex-col items-center justify-center min-h-[300px]">
                 <span className="text-secondary tracking-widest text-sm font-bold uppercase mb-4 block">Vision Statement</span>
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">Leaders of Tomorrow</h3>
                <p className="text-text-variant leading-relaxed">
                  To be globally recognized as an institution that molds principled, innovative, and compassionate leaders who actively contribute to the betterment of society.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="py-20 px-6 bg-surface">
        <div className="container mx-auto max-w-5xl">
           <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Leadership Messages</h2>
            <p className="text-text-variant">Words from the minds guiding Pen & Page School.</p>
          </div>

          <div className="space-y-16">
            {/* Owner/Founder */}
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/3">
                <div className="aspect-[3/4] bg-surface-containerHighest rounded-sm overflow-hidden ghost-border">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" alt="Founder" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500" />
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
            </div>

            <hr className="border-outline-variant/30" />

            {/* Principal */}
            <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
              <div className="w-full md:w-1/3">
                 <div className="aspect-[3/4] bg-surface-containerHighest rounded-sm overflow-hidden ghost-border">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" alt="Principal" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500" />
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
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
