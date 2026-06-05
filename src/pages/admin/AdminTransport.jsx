import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Plus, Edit2, Trash2, Loader, AlertCircle } from 'lucide-react';
import { getTransports, addTransport, updateTransport } from '../../api/api';

const InputField = ({ label, name, type = 'text', value, onChange, placeholder = '', required = false }) => (
  <div className="space-y-1">
    <label className="block text-sm font-medium text-text-variant">
      {label} {required && <span className="text-error">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full px-3 py-2 border border-outline-variant/50 rounded-sm focus:outline-none focus:ring-1 focus:ring-secondary bg-surface"
    />
  </div>
);

const TextareaField = ({ label, name, value, onChange, placeholder = '', required = false, rows = 3 }) => (
  <div className="space-y-1">
    <label className="block text-sm font-medium text-text-variant">
      {label} {required && <span className="text-error">*</span>}
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      rows={rows}
      className="w-full px-3 py-2 border border-outline-variant/50 rounded-sm focus:outline-none focus:ring-1 focus:ring-secondary bg-surface resize-none"
    />
  </div>
);

export default function AdminTransport() {
  const [transports, setTransports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    fee: '',
    coverage: ''
  });

  useEffect(() => {
    fetchTransports();
  }, []);

  const fetchTransports = async () => {
    try {
      setLoading(true);
      const response = await getTransports();
      if (response.data.success) {
        setTransports(response.data.data);
      }
    } catch (err) {
      setError('Failed to load transports');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.title.trim()) {
      setError('Please enter transport title');
      return;
    }

    try {
      setSaving(true);
      setError('');

      if (editingId) {
        const response = await updateTransport(editingId, formData);
        if (response.data.success) {
          setTransports(transports.map(t => t._id === editingId ? response.data.data : t));
        }
      } else {
        const response = await addTransport(formData);
        if (response.data.success) {
          setTransports([...transports, response.data.data]);
        }
      }

      resetForm();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save transport');
      console.error('Error:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (transport) => {
    setFormData({
      title: transport.title,
      description: transport.description || '',
      fee: transport.fee || '',
      coverage: transport.coverage || ''
    });
    setEditingId(transport._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this transport?')) return;

    try {
      setSaving(true);
      setTransports(transports.filter(t => t._id !== id));
    } catch (err) {
      setError('Failed to delete transport');
      console.error('Error:', err);
    } finally {
      setSaving(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      fee: '',
      coverage: ''
    });
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-primary mb-2">Transport Manager</h1>
          <p className="text-text-variant text-sm">Manage school transport routes and fees.</p>
        </div>
        <Button 
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2"
          disabled={showForm}
        >
          <Plus className="w-4 h-4" /> Add Transport
        </Button>
      </div>

      {error && (
        <div className="p-4 bg-error/10 border border-error/30 rounded-sm flex gap-3">
          <AlertCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
          <p className="text-sm text-error">{error}</p>
        </div>
      )}

      {showForm && (
        <Card className="border-2 border-secondary/20 bg-secondary/5">
          <CardContent className="p-6 space-y-4">
            <h3 className="font-serif font-bold text-lg text-primary">
              {editingId ? 'Edit Transport' : 'Add New Transport'}
            </h3>

            <InputField 
              label="Transport Title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g., School Van Service"
              required
            />

            <TextareaField 
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe the transport service..."
              rows={3}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField 
                label="Monthly Fee (Rs.)"
                name="fee"
                type="number"
                value={formData.fee}
                onChange={handleInputChange}
                placeholder="e.g., 4000"
              />

              <InputField 
                label="Coverage Area"
                name="coverage"
                value={formData.coverage}
                onChange={handleInputChange}
                placeholder="e.g., Max 5 km radius"
              />
            </div>

            <div className="flex gap-2 justify-end pt-4">
              <Button 
                variant="outline" 
                onClick={resetForm}
                disabled={saving}
              >
                Cancel
              </Button>
              <Button 
                onClick={handleSubmit}
                disabled={saving}
                className="flex items-center gap-2"
              >
                {saving ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  editingId ? 'Update' : 'Add'
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {loading ? (
        <Card>
          <CardContent className="p-8 flex items-center justify-center gap-3">
            <Loader className="w-5 h-5 animate-spin text-primary" />
            <p className="text-text-variant">Loading transports...</p>
          </CardContent>
        </Card>
      ) : transports.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {transports.map((transport) => (
            <Card key={transport._id} className="border-l-4 border-l-primary hover:shadow-ambient transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif font-bold text-lg text-primary">{transport.title}</h3>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      className="px-2 py-2 text-secondary hover:bg-secondary-fixed"
                      onClick={() => handleEdit(transport)}
                      disabled={saving}
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="px-2 py-2 text-error hover:bg-error/10"
                      onClick={() => handleDelete(transport._id)}
                      disabled={saving}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {transport.description && (
                  <p className="text-text-variant text-sm mb-4">{transport.description}</p>
                )}

                <div className="space-y-3 pt-4 border-t border-outline-variant/20">
                  {transport.fee && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-text-variant">Monthly Fee:</span>
                      <span className="font-bold text-secondary">Rs. {transport.fee}</span>
                    </div>
                  )}
                  {transport.coverage && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-text-variant">Coverage:</span>
                      <span className="font-bold text-primary">{transport.coverage}</span>
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
            <p className="text-text-variant">No transport services added yet</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}