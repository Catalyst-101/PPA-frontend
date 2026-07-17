import React, { useState } from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { CheckCircle2, AlertCircle, Loader } from 'lucide-react';

export default function ApplyNow() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    class: '',
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
    setLoading(true);
    setError('');
    
    // Simulate API submission delay
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        dob: '',
        gender: '',
        class: '',
        parentName: '',
        phone: '',
        email: '',
        address: '',
        previousSchool: ''
      });
      setLoading(false);
    }, 1000);
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
          <h1 className="text-display-md font-serif font-bold mb-4">Apply Now</h1>
          <p className="text-white/80 max-w-2xl mx-auto">Join Pen & Page School. Applications are now open for the upcoming academic year.</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-5xl px-6 py-16">
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
                <CardContent className="p-5 md:p-8">
                  <h2 className="text-2xl font-serif font-bold text-primary mb-6">Online Admission Form</h2>
                  
                  {error && (
                    <div className="mb-6 p-4 bg-error/10 border border-error/30 rounded-sm flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-error">{error}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-text-variant">Student Full Name *</label>
                        <input required type="text" name="name" value={formData.name} onChange={handleChange}
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
                        <select required name="class" value={formData.class} onChange={handleChange}
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
                      <Button 
                        type="submit" 
                        variant="primary" 
                        className="w-full md:w-auto px-8 flex items-center gap-2"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <Loader className="w-4 h-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          'Submit Application'
                        )}
                      </Button>
                    </div>

                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
