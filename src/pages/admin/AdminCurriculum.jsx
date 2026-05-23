import React from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Plus, Settings2, Edit } from 'lucide-react';

export default function AdminCurriculum() {
  const sections = [
    { title: 'Early Years (Nursery - KG)', subjects: 4, lastUpdated: '1 month ago' },
    { title: 'Primary (Grade 1 - 5)', subjects: 6, lastUpdated: '2 weeks ago' },
    { title: 'Secondary (Grade 6 - 10)', subjects: 8, lastUpdated: '3 days ago' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-primary mb-2">Curriculum Builder</h1>
          <p className="text-text-variant text-sm">Manage educational content and subjects across all grades.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {sections.map((sec, idx) => (
          <Card key={idx} className="flex flex-col text-center hover:shadow-ambient transition-shadow">
            <CardContent className="p-8 flex flex-col flex-1 items-center justify-center">
              <div className="w-12 h-12 bg-primary-fixed rounded-sm flex items-center justify-center text-primary mb-4">
                <Settings2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-primary mb-2">{sec.title}</h3>
              <p className="text-sm text-text-variant mb-6">{sec.subjects} Core Subjects Configured</p>
              
              <div className="mt-auto w-full pt-4 border-t border-outline-variant/20 flex flex-col gap-2">
                 <Button variant="outline" className="w-full text-xs py-2 flex justify-center gap-2"><Edit className="w-3 h-3"/> Edit Curriculum</Button>
                 <p className="text-xs text-text-variant/60 mt-1">Last updated: {sec.lastUpdated}</p>
              </div>
            </CardContent>
          </Card>
        ))}
         
         <Card className="flex flex-col text-center border-dashed border-2 border-outline-variant bg-transparent shadow-none hover:bg-surface-containerLow cursor-pointer transition-colors group">
            <CardContent className="p-8 flex flex-col flex-1 items-center justify-center">
              <div className="w-12 h-12 bg-surface-containerHighest rounded-full flex items-center justify-center text-text-variant mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <Plus className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-primary mb-2">Add New Level</h3>
              <p className="text-sm text-text-variant">Create a new academic grouping.</p>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
