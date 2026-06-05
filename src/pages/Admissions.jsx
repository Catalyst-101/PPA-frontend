import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { CheckCircle2 } from 'lucide-react';

export default function Admissions() {
  const [activeTab, setActiveTab] = useState('apply');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    gender: '',
    classApplying: '',
    parentName: '',
    phone: '',
    email: '',
    address: '',
    previousSchool: ''
  });

  const classesList = [
    'Playgroup', 'Reception 1', 'Reception 2',
    'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
    'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log("Submitting:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-surface font-sans min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-primary text-white py-24 px-6 text-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2021/08/24/86128-592652156_tiny.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h1 className="text-display-md font-serif font-bold mb-4">Admissions</h1>
          <p className="text-white/80 max-w-2xl mx-auto">Join Pen & Page School. Applications are now open for the upcoming academic year.</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-surface-containerLow border-b border-outline-variant/30 sticky top-0 z-20">
        <div className="container mx-auto max-w-5xl px-6 flex flex-wrap justify-center gap-x-8 gap-y-2">
          {['apply', 'fee', 'uniform'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-2 font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-primary text-primary'
                  : 'border-transparent text-text-variant hover:text-primary hover:border-secondary/50'
              }`}
            >
              {tab === 'apply' && 'Apply Now'}
              {tab === 'fee' && 'Fee Structure'}
              {tab === 'uniform' && 'Uniform'}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto max-w-5xl px-6 py-16">
        
        {/* APPLY NOW TAB */}
        {activeTab === 'apply' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Info Sidebar */}
            <div className="md:col-span-1 space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif font-bold text-xl text-primary mb-4">Admission Process</h3>
                  <ol className="list-decimal pl-4 space-y-3 text-sm text-text-variant">
                    <li>Submit the online application form.</li>
                    <li>Attend the interactive session/interview.</li>
                    <li>Receive placement notification.</li>
                    <li>Complete fee payment.</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif font-bold text-xl text-primary mb-4">Need Help?</h3>
                  <p className="text-sm text-text-variant mb-4">
                    If you have any questions about the admission process or fee structure, please feel free to reach out to our admissions office.
                  </p>
                  <Button variant="outline" className="w-full text-primary border-primary">Contact Us</Button>
                </CardContent>
              </Card>
            </div>

            {/* Form Container */}
            <div className="md:col-span-2">
              {isSubmitted ? (
                <Card className="bg-secondary/10 border-secondary/20">
                  <CardContent className="flex flex-col items-center justify-center text-center py-16">
                    <CheckCircle2 className="w-16 h-16 text-secondary mb-6" />
                    <h2 className="text-2xl font-serif font-bold text-primary mb-2">Application Submitted!</h2>
                    <p className="text-text-variant mb-6">
                      Thank you for applying to Pen & Page School. Our admissions team will review your application and contact you soon.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>Submit another application</Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-serif font-bold text-primary mb-6">Online Admission Form</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-text-variant">Student Full Name *</label>
                          <input required type="text" name="studentName" value={formData.studentName} onChange={handleChange}
                            className="w-full border-b border-outline bg-transparent py-2 px-1 focus:outline-none focus:border-secondary focus:bg-surface-containerHighest transition-colors" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-text-variant">Date of Birth *</label>
                          <input required type="date" name="dob" value={formData.dob} onChange={handleChange}
                            className="w-full border-b border-outline bg-transparent py-2 px-1 focus:outline-none focus:border-secondary transition-colors" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-text-variant">Gender *</label>
                          <select required name="gender" value={formData.gender} onChange={handleChange}
                            className="w-full border-b border-outline bg-surface py-2 px-1 focus:outline-none focus:border-secondary transition-colors">
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-text-variant">Class Applying For *</label>
                          <select required name="classApplying" value={formData.classApplying} onChange={handleChange}
                            className="w-full border-b border-outline bg-surface py-2 px-1 focus:outline-none focus:border-secondary transition-colors">
                            <option value="">Select Class</option>
                            {classesList.map(grade => (
                              <option key={grade} value={grade.toLowerCase()}>{grade}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <hr className="border-outline-variant/30" />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-text-variant">Parent/Guardian Name *</label>
                          <input required type="text" name="parentName" value={formData.parentName} onChange={handleChange}
                            className="w-full border-b border-outline bg-transparent py-2 px-1 focus:outline-none focus:border-secondary transition-colors" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-text-variant">Phone Number *</label>
                          <input required type="tel" name="phone" value={formData.phone} onChange={handleChange}
                            className="w-full border-b border-outline bg-transparent py-2 px-1 focus:outline-none focus:border-secondary transition-colors" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-text-variant">Email Address *</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleChange}
                          className="w-full border-b border-outline bg-transparent py-2 px-1 focus:outline-none focus:border-secondary transition-colors" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-text-variant">Residential Address *</label>
                        <textarea required name="address" rows="2" value={formData.address} onChange={handleChange}
                          className="w-full border-b border-outline bg-transparent py-2 px-1 focus:outline-none focus:border-secondary transition-colors"></textarea>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-text-variant">Previous School (Optional)</label>
                        <input type="text" name="previousSchool" value={formData.previousSchool} onChange={handleChange}
                          className="w-full border-b border-outline bg-transparent py-2 px-1 focus:outline-none focus:border-secondary transition-colors" />
                      </div>

                      <div className="pt-4 flex justify-end">
                        <Button type="submit" variant="primary" className="w-full md:w-auto px-8">Submit Application</Button>
                      </div>

                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}

        {/* FEE STRUCTURE TAB */}
        {activeTab === 'fee' && (
          <div className="space-y-12 animate-fade-in">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Fee Structure</h2>
              <Card>
                <CardContent className="p-0 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                      <thead>
                        <tr className="bg-surface-containerHighest text-primary border-b border-outline-variant/30">
                          <th className="p-4 font-semibold whitespace-nowrap">Class</th>
                          <th className="p-4 font-semibold whitespace-nowrap">Monthly Tuition Fee</th>
                          <th className="p-4 font-semibold whitespace-nowrap">Admission Fee</th>
                          <th className="p-4 font-semibold whitespace-nowrap">Registration Fee</th>
                          <th className="p-4 font-semibold whitespace-nowrap">Miscellaneous Fee</th>
                          <th className="p-4 font-semibold whitespace-nowrap">Annual Charges</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-outline-variant/30 text-text-variant">
                        {classesList.map((cls, index) => (
                          <tr key={index} className="hover:bg-surface-containerLow/50 transition-colors">
                            <td className="p-4 font-medium text-primary whitespace-nowrap">{cls}</td>
                            <td className="p-4 whitespace-nowrap">Rs. ___</td>
                            <td className="p-4 text-secondary font-medium whitespace-nowrap">Waived Off</td>
                            <td className="p-4 whitespace-nowrap">Rs. ___</td>
                            <td className="p-4 whitespace-nowrap">Rs. ___</td>
                            <td className="p-4 whitespace-nowrap">Rs. ___</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="font-serif font-bold text-2xl text-primary mb-6">Transport Services</h3>
              <Card>
                <CardContent className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-l-4 border-l-primary">
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">School Van Service</h4>
                    <p className="text-text-variant">Safe and reliable transport for students.</p>
                  </div>
                  <div className="flex flex-wrap gap-8">
                    <div>
                      <p className="text-sm text-text-variant mb-1">Monthly Fee</p>
                      <p className="text-2xl font-bold text-secondary">Rs. 4,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-text-variant mb-1">Coverage</p>
                      <p className="text-2xl font-bold text-primary">Max 5 km radius</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* UNIFORM TAB */}
        {activeTab === 'uniform' && (
          <div className="text-center py-24 animate-fade-in">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Uniform Guidelines</h2>
            <p className="text-text-variant max-w-lg mx-auto">
              Our complete uniform guidelines and requirements will be updated here shortly. Please contact the administration office for immediate inquiries.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
