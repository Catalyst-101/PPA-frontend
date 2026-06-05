import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Save, Loader2, Info, MapPin, Share2, Clock } from 'lucide-react';
import API from '../../api/api';

const InputField = ({ label, name, type = 'text', required = false, placeholder = '', formData, handleInputChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-text-variant mb-1">
      {label} {required && <span className="text-error">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={formData[name] || ''}
      onChange={handleInputChange}
      required={required}
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-outline-variant/50 rounded-sm focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary bg-surface transition-colors"
    />
  </div>
);

export default function AdminSettings() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    whatsapp: '',
    address: '',
    facebook: '',
    instagram: '',
    twitter: '',
    youtube: '',
    googleMaps: '',
    officeTimings: ''
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      const response = await API.get('/miscellaneous/get');
      if (response.data.success && response.data.data) {
        const data = response.data.data;
        setFormData({
          email: data.email || '',
          phone: data.phone?.number ? `0${data.phone.number}` : '',
          whatsapp: data.whatsapp?.number ? `0${data.whatsapp.number}` : '',
          address: data.address || '',
          facebook: data.facebook || '',
          instagram: data.instagram || '',
          twitter: data.twitter || '',
          youtube: data.youtube || '',
          googleMaps: data.googleMaps || '',
          officeTimings: data.officeTimings || ''
        });
      }
    } catch (error) {
      console.error('Failed to fetch settings', error);
      setMessage({ type: 'error', text: 'Failed to fetch school information.' });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const cleanPhoneNumber = (number) => {
    if (!number) return null;
    let clean = number.replace(/\D/g, ''); // Remove non-numeric
    if (clean.startsWith('0')) {
      clean = clean.substring(1);
    }
    return clean ? Number(clean) : null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ type: '', text: '' });

    // Format phone and whatsapp
    const phoneNumber = cleanPhoneNumber(formData.phone);
    const whatsappNumber = cleanPhoneNumber(formData.whatsapp);

    if (!phoneNumber) {
      setMessage({ type: 'error', text: 'Please provide a valid phone number.' });
      setSaving(false);
      return;
    }

    const payload = {
      email: formData.email,
      address: formData.address,
      facebook: formData.facebook || '',
      instagram: formData.instagram || '',
      twitter: formData.twitter || '',
      youtube: formData.youtube || '',
      googleMaps: formData.googleMaps || '',
      officeTimings: formData.officeTimings || '',
      phone: {
        code: '+92',
        number: phoneNumber
      }
    };

    if (whatsappNumber) {
      payload.whatsapp = {
        code: '+92',
        number: whatsappNumber
      };
    } else {
      payload.whatsapp = {
        code: '+92',
        number: phoneNumber // Fallback to phone if whatsapp is empty but required in schema
      };
    }

    try {
      const response = await API.put('/miscellaneous/update', payload);
      if (response.data.success) {
        setMessage({ type: 'success', text: 'School information updated successfully.' });
      } else {
        setMessage({ type: 'error', text: response.data.message || 'Failed to update.' });
      }
    } catch (error) {
      console.error('Failed to update settings', error);
      setMessage({ type: 'error', text: 'An error occurred while saving the information.' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }



  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-serif font-bold text-primary mb-2">School Settings</h1>
        <p className="text-text-variant text-sm">Manage contact details, social links, and other miscellaneous school information.</p>
      </div>

      {message.text && (
        <div className={`p-4 rounded-sm ${message.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* General Information */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4 text-primary">
                <Info className="w-5 h-5" />
                <h3 className="font-serif font-bold text-lg">General Information</h3>
              </div>
              <InputField label="School Email" name="email" type="email" required placeholder="contact@school.com" formData={formData} handleInputChange={handleInputChange} />
              <InputField label="Phone Number" name="phone" type="tel" required placeholder="e.g. 0348 1234567" formData={formData} handleInputChange={handleInputChange} />
              <InputField label="WhatsApp Number" name="whatsapp" type="tel" placeholder="e.g. 0348 1234567" formData={formData} handleInputChange={handleInputChange} />
              <div className="mb-4">
                <label className="block text-sm font-medium text-text-variant mb-1">
                  Office Timings
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Clock className="h-4 w-4 text-outline" />
                  </div>
                  <input
                    type="text"
                    name="officeTimings"
                    value={formData.officeTimings}
                    onChange={handleInputChange}
                    placeholder="e.g. Mon - Fri, 8:00 AM - 2:00 PM"
                    className="w-full pl-10 pr-3 py-2 border border-outline-variant/50 rounded-sm focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary bg-surface transition-colors"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location & Address */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4 text-primary">
                <MapPin className="w-5 h-5" />
                <h3 className="font-serif font-bold text-lg">Location</h3>
              </div>
              <InputField label="Address" name="address" required placeholder="Full school address" formData={formData} handleInputChange={handleInputChange} />
              <InputField label="Google Maps Link" name="googleMaps" type="url" placeholder="https://maps.google.com/..." formData={formData} handleInputChange={handleInputChange} />
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="lg:col-span-2">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4 text-primary">
                <Share2 className="w-5 h-5" />
                <h3 className="font-serif font-bold text-lg">Social Media Links</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                <InputField label="Facebook Profile" name="facebook" type="url" placeholder="https://facebook.com/..." formData={formData} handleInputChange={handleInputChange} />
                <InputField label="Instagram Profile" name="instagram" type="url" placeholder="https://instagram.com/..." formData={formData} handleInputChange={handleInputChange} />
                <InputField label="Twitter Profile" name="twitter" type="url" placeholder="https://twitter.com/..." formData={formData} handleInputChange={handleInputChange} />
                <InputField label="YouTube Channel" name="youtube" type="url" placeholder="https://youtube.com/..." formData={formData} handleInputChange={handleInputChange} />
              </div>
            </CardContent>
          </Card>

        </div>

        <div className="mt-6 flex justify-end">
          <Button type="submit" disabled={saving}>
            {saving ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                Saving...
              </>
            ) : (
              <>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
