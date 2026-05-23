import React, { useState } from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { Search, Eye, Filter, X } from 'lucide-react';

export default function AdminAdmissions() {
  const [selectedApp, setSelectedApp] = useState(null);

  const applications = [
    { id: 'APP-001', name: 'John Doe Jr.', class: 'Grade 3', parent: 'John Doe Sr.', contact: 'john.doe@email.com', date: '2026-04-10', status: 'pending' },
    { id: 'APP-002', name: 'Alina Smith', class: 'KG', parent: 'Martha Smith', contact: 'martha@email.com', date: '2026-04-12', status: 'approved' },
    { id: 'APP-003', name: 'Zayed Khan', class: 'Grade 7', parent: 'Tariq Khan', contact: 'tariq@email.com', date: '2026-04-14', status: 'rejected' },
    { id: 'APP-004', name: 'Emma Wilson', class: 'Grade 1', parent: 'Tom Wilson', contact: 'tom@email.com', date: '2026-04-15', status: 'pending' },
  ];

  const getStatusBadge = (status) => {
    switch(status) {
      case 'approved': return <Badge variant="success">Approved</Badge>;
      case 'rejected': return <Badge variant="danger">Rejected</Badge>;
      default: return <Badge variant="warning">Pending</Badge>;
    }
  };

  return (
    <div className="space-y-6 relative">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-primary mb-2">Admissions Manager</h1>
          <p className="text-text-variant text-sm">Review, approve, and manage incoming student applications.</p>
        </div>
        <div className="flex items-center gap-2">
           <div className="relative">
             <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-variant" />
             <input type="text" placeholder="Search applications..." className="pl-9 pr-4 py-2 text-sm bg-surface border border-outline-variant/30 rounded-sm focus:outline-none focus:border-secondary transition-colors" />
           </div>
           <Button variant="outline" className="px-3 py-2"><Filter className="w-4 h-4" /></Button>
        </div>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-sans text-sm border-collapse">
            <thead>
              <tr className="bg-surface-containerLow border-y border-outline-variant/20 text-text-variant">
                <th className="px-6 py-4 font-medium">App ID</th>
                <th className="px-6 py-4 font-medium">Student Name</th>
                <th className="px-6 py-4 font-medium">Class Applied</th>
                <th className="px-6 py-4 font-medium">Parent Contact</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="border-b border-outline-variant/10 hover:bg-surface-containerLow/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-primary">{app.id}</td>
                  <td className="px-6 py-4 text-primary">{app.name}</td>
                  <td className="px-6 py-4 text-text-variant">{app.class}</td>
                  <td className="px-6 py-4 text-text-variant">
                    <div className="flex flex-col">
                      <span>{app.parent}</span>
                      <span className="text-xs opacity-70">{app.contact}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-text-variant">{app.date}</td>
                  <td className="px-6 py-4">{getStatusBadge(app.status)}</td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" className="px-2 py-1 text-xs" onClick={() => setSelectedApp(app)}>
                      <Eye className="w-4 h-4 mr-1" /> View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Modal View details */}
      {selectedApp && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" onClick={() => setSelectedApp(null)}></div>
          <Card className="relative z-10 w-full max-w-2xl shadow-ambient max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-outline-variant/20 shrink-0">
               <h2 className="font-serif font-bold text-xl text-primary">Application Details: {selectedApp.id}</h2>
               <button onClick={() => setSelectedApp(null)} className="text-text-variant hover:text-primary"><X className="w-5 h-5"/></button>
            </div>
            <div className="p-6 overflow-y-auto space-y-6">
               <div className="flex justify-between items-center bg-surface-containerLow p-4 rounded-sm">
                 <span className="font-medium text-primary">Current Status</span>
                 {getStatusBadge(selectedApp.status)}
               </div>

               <div className="grid grid-cols-2 gap-6">
                 <div>
                   <h4 className="text-xs font-bold uppercase tracking-widest text-text-variant mb-1">Student Details</h4>
                   <p className="text-sm font-medium text-primary">Name: <span className="font-normal text-text-variant">{selectedApp.name}</span></p>
                   <p className="text-sm font-medium text-primary">Applying For: <span className="font-normal text-text-variant">{selectedApp.class}</span></p>
                   <p className="text-sm font-medium text-primary">DOB: <span className="font-normal text-text-variant">05-May-2015</span></p>
                 </div>
                 <div>
                   <h4 className="text-xs font-bold uppercase tracking-widest text-text-variant mb-1">Guardian Details</h4>
                   <p className="text-sm font-medium text-primary">Name: <span className="font-normal text-text-variant">{selectedApp.parent}</span></p>
                   <p className="text-sm font-medium text-primary">Email: <span className="font-normal text-text-variant">{selectedApp.contact}</span></p>
                   <p className="text-sm font-medium text-primary">Phone: <span className="font-normal text-text-variant">+1 234 567 8900</span></p>
                 </div>
               </div>
               
               <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-text-variant mb-1">Additional Notes</h4>
                  <p className="text-sm text-text-variant p-3 bg-surface-containerLow rounded-sm italic">
                    Student transferred from a different district. Requires placement testing.
                  </p>
               </div>
            </div>
            <div className="p-6 border-t border-outline-variant/20 flex justify-end gap-3 shrink-0 bg-surface">
              <Button variant="outline" onClick={() => setSelectedApp(null)}>Close</Button>
              <Button variant="primary" className="bg-error-container text-on-error-container hover:bg-error hover:text-white border-0 shadow-none">Reject</Button>
              <Button variant="primary" className="bg-tertiary-fixed text-tertiary-fixed-variant hover:bg-tertiary hover:text-white border-0 shadow-none">Approve Application</Button>
            </div>
          </Card>
        </div>
      )}

    </div>
  );
}
