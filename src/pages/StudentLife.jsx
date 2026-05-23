import React from 'react';
import { Card, CardContent } from '../components/ui/Card';

export default function StudentLife() {
  const galleryItems = [
    { title: 'Annual Sports Day', category: 'Events', img: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800&auto=format&fit=crop' },
    { title: 'Science Fair', category: 'Extracurricular', img: 'https://images.unsplash.com/photo-1564473356064-06ec121ba50e?q=80&w=800&auto=format&fit=crop' },
    { title: 'Historical Museum Trip', category: 'School Trips', img: 'https://images.unsplash.com/photo-1549887550-717013583ca9?q=80&w=800&auto=format&fit=crop' },
    { title: 'Art & Design Exhibition', category: 'Events', img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop' },
    { title: 'Debate Club Championship', category: 'Extracurricular', img: 'https://images.unsplash.com/photo-1534606775317-06df489be432?q=80&w=800&auto=format&fit=crop' },
    { title: 'Botanical Garden Visit', category: 'School Trips', img: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <div className="bg-surface font-sans min-h-screen">
      <div className="bg-primary text-white py-16 px-6 text-center">
        <h1 className="text-display-md font-serif font-bold mb-4">Student Life</h1>
        <p className="text-white/80 max-w-2xl mx-auto">Beyond the classroom, our students engage in a vibrant community that builds character, creativity, and resilience.</p>
      </div>

      <div className="container mx-auto max-w-6xl px-6 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardContent className="text-center py-10">
              <span className="text-secondary tracking-widest text-sm font-bold uppercase mb-4 block">Extracurricular</span>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">Clubs & Societies</h3>
              <p className="text-sm text-text-variant">Over 20 active clubs ranging from Robotics and Coding to Drama and Model UN.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center py-10">
              <span className="text-secondary tracking-widest text-sm font-bold uppercase mb-4 block">School Trips</span>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">Learning Beyond Walls</h3>
              <p className="text-sm text-text-variant">Regular educational excursions to museums, historical sites, and nature reserves.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center py-10">
              <span className="text-secondary tracking-widest text-sm font-bold uppercase mb-4 block">Events</span>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">Community Traditions</h3>
              <p className="text-sm text-text-variant">Annual festivals, sports days, and cultural celebrations that bring our community together.</p>
            </CardContent>
          </Card>
        </div>

        {/* Gallery */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold text-primary">Moments at Pen & Page</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div key={idx} className="group relative aspect-square overflow-hidden rounded-sm ghost-border bg-surface-containerHighest">
              <img 
                src={item.img} 
                alt={item.title} 
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-secondary text-xs uppercase tracking-widest font-bold mb-1">{item.category}</span>
                <h4 className="text-white font-serif font-bold text-lg">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
