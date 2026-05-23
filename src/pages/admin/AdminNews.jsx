import React, { useState } from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Plus, Edit2, Trash2, Search } from 'lucide-react';

export default function AdminNews() {
  const [news, setNews] = useState([
    { id: 1, title: 'Pen & Page Wins National Science Olympiad', date: 'Oct 15, 2026', status: 'Published' },
    { id: 2, title: 'Annual Winter Charity Drive Announced', date: 'Oct 10, 2026', status: 'Draft' },
    { id: 3, title: 'New Robotics Lab Inauguration', date: 'Sep 28, 2026', status: 'Published' },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-primary mb-2">News & Updates Manager</h1>
          <p className="text-text-variant text-sm">Create, edit, and publish school news and events.</p>
        </div>
        <Button className="flex items-center gap-2"><Plus className="w-4 h-4"/> Create Article</Button>
      </div>

      <div className="bg-surface p-4 flex gap-4 ghost-border rounded-sm">
         <div className="relative flex-1">
           <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-variant" />
           <input type="text" placeholder="Search news titles..." className="w-full pl-9 pr-4 py-2 text-sm bg-surface-containerLow border border-outline-variant/30 rounded-sm focus:outline-none focus:border-secondary transition-colors" />
         </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {news.map(item => (
          <Card key={item.id}>
            <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-serif font-bold text-lg text-primary">{item.title}</h3>
                  <span className={`text-[10px] px-2 py-0.5 rounded-sm uppercase tracking-widest font-bold ${item.status === 'Published' ? 'bg-tertiary-fixed text-tertiary-fixed-variant' : 'bg-surface-containerHighest text-text-variant'}`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-text-variant text-sm flex items-center gap-2">
                   <span>Published: {item.date}</span>
                </p>
              </div>
              
              <div className="flex items-center gap-2 shrink-0">
                <Button variant="ghost" className="px-3 py-2 text-primary hover:bg-primary-fixed">
                   <Edit2 className="w-4 h-4" />
                </Button>
                <Button variant="ghost" className="px-3 py-2 text-error-container hover:bg-error-container hover:text-on-error-container">
                   <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
