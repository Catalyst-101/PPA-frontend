import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { cn } from '../components/ui/Button';

export default function Curriculum() {
  const [activeTab, setActiveTab] = useState('early-years');

  const categories = [
    { id: 'early-years', label: 'Early Years (Nursery - KG)' },
    { id: 'primary', label: 'Primary (Grade 1 - 5)' },
    { id: 'secondary', label: 'Secondary (Grade 6 - 10)' }
  ];

  const curriculumData = {
    'early-years': [
      { class: 'Nursery', description: 'Focus on social skills, basic motor skills, and an introduction to alphabets and shapes through play-based learning.' },
      { class: 'Kindergarten (KG)', description: 'Introduction to reading, basic arithmetic, and environmental awareness. Encouraging independence and curiosity.' }
    ],
    'primary': [
      { class: 'Grade 1 & 2', description: 'Foundational literacy and numeracy. Introduction to introductory science and community studies.' },
      { class: 'Grade 3 to 5', description: 'Developing critical thinking. Core subjects include Mathematics, English, General Science, Social Studies, and a second language.' }
    ],
    'secondary': [
      { class: 'Grade 6 to 8', description: 'Transitioning to advanced logic. Specialized subjects: Algebra/Geometry, Physics, Chemistry basics, World History, and Literature.' },
      { class: 'Grade 9 & 10', description: 'Preparation for board examinations. Deep dives into Advanced Mathematics, full Sciences (Physics, Chemistry, Biology), and structured Humanities.' }
    ]
  };

  return (
    <div className="bg-surface font-sans min-h-screen">
      <div className="bg-primary text-white py-16 px-6 text-center">
        <h1 className="text-display-md font-serif font-bold mb-4">Academic Curriculum</h1>
        <p className="text-white/80 max-w-2xl mx-auto">Our structured approach ensures continuous growth from the first steps to secondary graduation.</p>
      </div>

      <div className="container mx-auto max-w-4xl px-6 py-16">
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center border-b border-outline-variant/30 mb-8 gap-4 md:gap-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={cn(
                "pb-4 px-2 text-sm md:text-base font-medium transition-colors relative",
                activeTab === category.id ? "text-secondary" : "text-text-variant hover:text-primary"
              )}
            >
              {category.label}
              {activeTab === category.id && (
                <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-secondary" />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-6">
          {curriculumData[activeTab].map((item, idx) => (
            <Card key={idx}>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-primary mb-3">{item.class}</h3>
                <p className="text-text-variant leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-surface-containerHighest text-xs font-medium text-text-variant rounded-sm">Mathematics</span>
                  <span className="px-3 py-1 bg-surface-containerHighest text-xs font-medium text-text-variant rounded-sm">Language Arts</span>
                  <span className="px-3 py-1 bg-surface-containerHighest text-xs font-medium text-text-variant rounded-sm">Science</span>
                  <span className="px-3 py-1 bg-surface-containerHighest text-xs font-medium text-text-variant rounded-sm">Extracurricular</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}
