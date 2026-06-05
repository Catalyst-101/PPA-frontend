import React, { useState, useEffect } from 'react';
import Button from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { CheckCircle2, AlertCircle, Loader } from 'lucide-react';
import { submitContact, getFeeStructures, getTransports } from '../api/api';

export default function Admissions() {
  const [activeTab, setActiveTab] = useState('apply');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [feeStructures, setFeeStructures] = useState([]);
  const [transports, setTransports] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  
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

  // Fetch fee structures and transports on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingData(true);
        const [feesRes, transportsRes] = await Promise.all([
          getFeeStructures(),
          getTransports()
        ]);
        
        if (feesRes.data.success) {
          setFeeStructures(feesRes.data.data);
        }
        
        if (transportsRes.data.success) {
          setTransports(transportsRes.data.data);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoadingData(false);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await submitContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: `Admission Application\nStudent Name: ${formData.name}\nDOB: ${formData.dob}\nGender: ${formData.gender}\nClass: ${formData.class}\nParent Name: ${formData.parentName}\nAddress: ${formData.address}\nPrevious School: ${formData.previousSchool}`
      });

      if (response.data.success) {
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
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit application. Please try again.');
      console.error('Submit error:', err);
    } finally {
      setLoading(false);
    }
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
        )}

        {/* FEE STRUCTURE TAB */}
        {activeTab === 'fee' && (
          <div className="space-y-12 animate-fade-in">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Fee Structure</h2>
              {loadingData ? (
                <Card>
                  <CardContent className="p-8 flex items-center justify-center gap-3">
                    <Loader className="w-5 h-5 animate-spin text-primary" />
                    <p className="text-text-variant">Loading fee structure...</p>
                  </CardContent>
                </Card>
              ) : feeStructures.length > 0 ? (
                <Card>
                  <CardContent className="p-0 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                          <tr className="bg-surface-containerHighest text-primary border-b border-outline-variant/30">
                            <th className="p-4 font-semibold whitespace-nowrap">Class</th>
                            <th className="p-4 font-semibold whitespace-nowrap">Monthly Tuition</th>
                            <th className="p-4 font-semibold whitespace-nowrap">Admission Fee</th>
                            <th className="p-4 font-semibold whitespace-nowrap">Registration Fee</th>
                            <th className="p-4 font-semibold whitespace-nowrap">Miscellaneous Fee</th>
                            <th className="p-4 font-semibold whitespace-nowrap">Annual Charges</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant/30 text-text-variant">
                          {feeStructures.map((fee, index) => (
                            <tr key={index} className="hover:bg-surface-containerLow/50 transition-colors">
                              <td className="p-4 font-medium text-primary whitespace-nowrap">{fee.class}</td>
                              <td className="p-4 whitespace-nowrap">Rs. {fee.m_fee || '---'}</td>
                              <td className="p-4 text-secondary font-medium whitespace-nowrap">Rs. {fee.a_fee || 'Waived Off'}</td>
                              <td className="p-4 whitespace-nowrap">Rs. {fee.r_fee || '---'}</td>
                              <td className="p-4 whitespace-nowrap">Rs. {fee.ms_fee || '---'}</td>
                              <td className="p-4 whitespace-nowrap">Rs. {fee.a_charges || '---'}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-text-variant">No fee structure data available</p>
                  </CardContent>
                </Card>
              )}
            </div>

            <div>
              <h3 className="font-serif font-bold text-2xl text-primary mb-6">Transport Services</h3>
              {loadingData ? (
                <Card>
                  <CardContent className="p-8 flex items-center justify-center gap-3">
                    <Loader className="w-5 h-5 animate-spin text-primary" />
                    <p className="text-text-variant">Loading transport info...</p>
                  </CardContent>
                </Card>
              ) : transports.length > 0 ? (
                <div className="space-y-4">
                  {transports.map((transport, index) => (
                    <Card key={index}>
                      <CardContent className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-l-4 border-l-primary">
                        <div>
                          <h4 className="text-xl font-bold text-primary mb-2">{transport.title}</h4>
                          <p className="text-text-variant">{transport.description || 'Safe and reliable service'}</p>
                        </div>
                        <div className="flex flex-wrap gap-8">
                          {transport.fee && (
                            <div>
                              <p className="text-sm text-text-variant mb-1">Monthly Fee</p>
                              <p className="text-2xl font-bold text-secondary">Rs. {transport.fee}</p>
                            </div>
                          )}
                          {transport.coverage && (
                            <div>
                              <p className="text-sm text-text-variant mb-1">Coverage</p>
                              <p className="text-2xl font-bold text-primary">{transport.coverage}</p>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-text-variant">No transport services available</p>
                  </CardContent>
                </Card>
              )}
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
