import React from 'react';
import { Card, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function News() {
  const newsArticles = [
    {
      id: 1,
      title: 'Pen & Page Wins National Science Olympiad',
      date: 'October 15, 2026',
      excerpt: 'Our Grade 10 team secured the first position at the prestigious National Science Olympiad held last weekend.',
      img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Annual Winter Charity Drive Announced',
      date: 'October 10, 2026',
      excerpt: 'Join us in our annual initiative to collect warm clothes and essential items for the local community shelter.',
      img: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'New Robotics Lab Inauguration',
      date: 'September 28, 2026',
      excerpt: 'Equipped with the latest STEM tools, our new robotics lab was officially opened by the Mayor today.',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Parent-Teacher Meeting Schedule',
      date: 'September 20, 2026',
      excerpt: 'The term 1 PTM is scheduled for next Friday. Please check the portal to book your individual slots.',
      img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 5,
      title: 'Alumni Network Launches Mentorship Program',
      date: 'September 12, 2026',
      excerpt: 'Connect with successful Pen & Page alumni across the globe through our new digital mentorship platform.',
      img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 6,
      title: 'School Play: Shakespeare in the Park',
      date: 'September 05, 2026',
      excerpt: 'Tickets are now on sale for the Drama Club’s highly anticipated outdoor production of A Midsummer Night’s Dream.',
      img: 'https://images.unsplash.com/photo-1507676184212-d0330a151f84?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div className="bg-surface font-sans min-h-screen">
      <div className="bg-primary text-white py-16 px-6 text-center">
        <h1 className="text-display-md font-serif font-bold mb-4">News & Updates</h1>
        <p className="text-white/80 max-w-2xl mx-auto">Stay informed with the latest announcements, achievements, and events from Pen & Page School.</p>
      </div>

      <div className="container mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map(article => (
            <Card key={article.id} className="flex flex-col h-full group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.img} 
                  alt={article.title} 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="flex flex-col flex-grow p-6">
                <span className="text-xs text-secondary font-bold tracking-widest uppercase mb-3">{article.date}</span>
                <h3 className="font-serif text-xl font-bold text-primary mb-3 leading-snug hover:text-secondary cursor-pointer transition-colors">
                  {article.title}
                </h3>
                <p className="text-text-variant text-sm mb-6 flex-grow leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="mt-auto">
                  <Button variant="ghost" className="px-0 py-0 text-sm text-primary hover:text-secondary font-bold">
                    Read More &rarr;
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="outline">Load Older News</Button>
        </div>
      </div>
    </div>
  );
}
