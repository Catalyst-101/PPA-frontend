import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const curriculumDataMap = {
  'playgroup': {
    class: 'Playgroup',
    description: 'Focus on social skills, basic motor skills, and an introduction to alphabets and shapes through play-based learning.',
    section: 'Early Years (Nursery - KG)',
    order: 1
  },
  'reception-1': {
    class: 'Reception 1',
    description: 'Introduction to reading, basic arithmetic, and environmental awareness. Encouraging independence and curiosity.',
    section: 'Early Years (Nursery - KG)',
    order: 2
  },
  'reception-2': {
    class: 'Reception 2',
    description: 'Introduction to reading, basic arithmetic, and environmental awareness. Encouraging independence and curiosity.',
    section: 'Early Years (Nursery - KG)',
    order: 3
  },
  'grade-1': {
    class: 'Grade 1',
    description: 'Foundational literacy and numeracy. Introduction to introductory science and community studies.',
    section: 'Primary (Grade 1 - 5)',
    order: 4
  },
  'grade-2': {
    class: 'Grade 2',
    description: 'Developing foundational skills in literacy and numeracy with introduction to science and community studies.',
    section: 'Primary (Grade 1 - 5)',
    order: 5
  },
  'grade-3': {
    class: 'Grade 3',
    description: 'Developing critical thinking. Core subjects include Mathematics, English, General Science, Social Studies, and a second language.',
    section: 'Primary (Grade 1 - 5)',
    order: 6
  },
  'grade-4': {
    class: 'Grade 4',
    description: 'Developing critical thinking. Core subjects include Mathematics, English, General Science, Social Studies, and a second language.',
    section: 'Primary (Grade 1 - 5)',
    order: 7
  },
  'grade-5': {
    class: 'Grade 5',
    description: 'Developing critical thinking. Core subjects include Mathematics, English, General Science, Social Studies, and a second language.',
    section: 'Primary (Grade 1 - 5)',
    order: 8
  },
  'grade-6': {
    class: 'Grade 6',
    description: 'Transitioning to advanced logic. Specialized subjects: Algebra/Geometry, Physics, Chemistry basics, World History, and Literature.',
    section: 'Secondary (Grade 6 - 10)',
    order: 9
  },
  'grade-7': {
    class: 'Grade 7',
    description: 'Transitioning to advanced logic. Specialized subjects: Algebra/Geometry, Physics, Chemistry basics, World History, and Literature.',
    section: 'Secondary (Grade 6 - 10)',
    order: 10
  },
  'grade-8': {
    class: 'Grade 8',
    description: 'Transitioning to advanced logic. Specialized subjects: Algebra/Geometry, Physics, Chemistry basics, World History, and Literature.',
    section: 'Secondary (Grade 6 - 10)',
    order: 11
  },
  'grade-9': {
    class: 'Grade 9',
    description: 'Preparation for board examinations. Deep dives into Advanced Mathematics, full Sciences (Physics, Chemistry, Biology), and structured Humanities.',
    section: 'Secondary (Grade 6 - 10)',
    order: 12
  },
  'grade-10': {
    class: 'Grade 10',
    description: 'Preparation for board examinations. Deep dives into Advanced Mathematics, full Sciences (Physics, Chemistry, Biology), and structured Humanities.',
    section: 'Secondary (Grade 6 - 10)',
    order: 13
  }
};

const allClasses = [
  'playgroup', 'reception-1', 'reception-2', 'grade-1', 'grade-2', 'grade-3', 'grade-4', 'grade-5',
  'grade-6', 'grade-7', 'grade-8', 'grade-9', 'grade-10'
];

export default function ClassCurriculum() {
  const { classSlug } = useParams();
  const navigate = useNavigate();
  
  const curriculum = curriculumDataMap[classSlug];
  
  if (!curriculum) {
    return (
      <div className="bg-surface font-sans min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold text-primary mb-4">Class Not Found</h1>
          <p className="text-text-variant mb-6">The curriculum for this class is not available.</p>
          <Button onClick={() => navigate('/')}>Go Home</Button>
        </div>
      </div>
    );
  }

  const currentIndex = allClasses.indexOf(classSlug);
  const previousClass = currentIndex > 0 ? allClasses[currentIndex - 1] : null;
  const nextClass = currentIndex < allClasses.length - 1 ? allClasses[currentIndex + 1] : null;

  const getPreviousClassDisplay = () => {
    if (!previousClass) return null;
    const prev = curriculumDataMap[previousClass];
    return prev?.class;
  };

  const getNextClassDisplay = () => {
    if (!nextClass) return null;
    const next = curriculumDataMap[nextClass];
    return next?.class;
  };

  return (
    <div className="bg-surface font-sans min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16 px-6 text-center">
        <h1 className="text-display-md font-serif font-bold mb-4">Academic Curriculum</h1>
        <p className="text-white/80 max-w-2xl mx-auto">Our structured approach ensures continuous growth from the first steps to secondary graduation.</p>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-6 py-16">
        <Card>
          <CardContent className="p-8">
            <div className="mb-4">
              <p className="text-secondary text-sm font-medium uppercase tracking-widest mb-2">{curriculum.section}</p>
            </div>
            
            <h3 className="font-serif text-3xl font-bold text-primary mb-6">{curriculum.class}</h3>
            
            <p className="text-text-variant leading-relaxed mb-8">
              {curriculum.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-surface-containerHighest text-xs font-medium text-text-variant rounded-sm">Mathematics</span>
              <span className="px-3 py-1 bg-surface-containerHighest text-xs font-medium text-text-variant rounded-sm">Language Arts</span>
              <span className="px-3 py-1 bg-surface-containerHighest text-xs font-medium text-text-variant rounded-sm">Science</span>
              <span className="px-3 py-1 bg-surface-containerHighest text-xs font-medium text-text-variant rounded-sm">Extracurricular</span>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          {previousClass ? (
            <Button
              variant="outline"
              onClick={() => navigate(`/curriculum/${previousClass}`)}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              {getPreviousClassDisplay()}
            </Button>
          ) : (
            <div></div>
          )}
          
          {nextClass ? (
            <Button
              variant="outline"
              onClick={() => navigate(`/curriculum/${nextClass}`)}
              className="flex items-center gap-2"
            >
              {getNextClassDisplay()}
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
