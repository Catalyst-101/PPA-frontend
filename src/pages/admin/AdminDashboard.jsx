import React from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { Users, FileText, CheckCircle2, Clock } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { title: 'Total Applications', value: '142', icon: <Users className="w-5 h-5 text-primary" />, change: '+12% this month' },
    { title: 'Pending Review', value: '28', icon: <Clock className="w-5 h-5 text-secondary" />, change: 'Needs attention' },
    { title: 'Approved', value: '105', icon: <CheckCircle2 className="w-5 h-5 text-tertiary-fixed-variant" />, change: 'For current term' },
    { title: 'Published News', value: '45', icon: <FileText className="w-5 h-5 text-primary-fixed-variant" />, change: '+3 this week' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-serif font-bold text-primary mb-2">Dashboard Overview</h1>
        <p className="text-text-variant text-sm">Welcome back to the Pen & Page administrative portal.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="hover:shadow-none hover:-translate-y-0">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-sm bg-surface-containerLow flex items-center justify-center">
                  {stat.icon}
                </div>
              </div>
              <div>
                <h3 className="text-text-variant text-sm font-medium mb-1">{stat.title}</h3>
                <p className="text-3xl font-serif font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-xs text-text-variant/70">{stat.change}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardContent className="p-6">
             <h3 className="font-serif font-bold text-lg text-primary mb-4">Recent Activity</h3>
             <div className="space-y-4">
               {[1,2,3,4].map(idx => (
                 <div key={idx} className="flex items-center gap-4 text-sm pb-4 border-b border-outline-variant/20 last:border-0 last:pb-0">
                   <div className="w-2 h-2 rounded-full bg-secondary"></div>
                   <div className="flex-1">
                     <p className="text-primary font-medium">New admission submitted for Grade {idx + 2}</p>
                     <p className="text-xs text-text-variant">2 hours ago</p>
                   </div>
                 </div>
               ))}
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
