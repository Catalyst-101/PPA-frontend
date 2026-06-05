import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Plus, Edit2, Trash2, Loader, AlertCircle } from 'lucide-react';
import { getFeeStructures, addFeeStructure, updateFeeStructure } from '../../api/api';

const InputField = ({ label, name, type = 'text', value, onChange, placeholder = '' }) => (
  <div className="space-y-1">
    <label className="block text-sm font-medium text-text-variant">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-outline-variant/50 rounded-sm focus:outline-none focus:ring-1 focus:ring-secondary bg-surface"
    />
  </div>
);

export default function AdminFeeStructure() {
  const [fees, setFees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    class: '',
    monthlyTuition: '',
    admissionFee: '',
    registrationFee: '',
    miscellaneousFee: '',
    annualCharges: ''
  });

  const classes = [
    'Playgroup', 'Reception 1', 'Reception 2',
    'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
    'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'
  ];

  useEffect(() => {
    fetchFeeStructures();
  }, []);

  const fetchFeeStructures = async () => {
    try {
      setLoading(true);
      const response = await getFeeStructures();
      if (response.data.success) {
        setFees(response.data.data);
      }
    } catch (err) {
      setError('Failed to load fee structures');
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
  if (!formData.class.trim()) {
    setError('Please select a class');
    return;
  }

  const payload = {
    class: formData.class,
    m_fee: Number(formData.monthlyTuition),
    a_fee: Number(formData.admissionFee) || 0,
    r_fee: Number(formData.registrationFee),
    ms_fee: Number(formData.miscellaneousFee),
    a_charges: Number(formData.annualCharges)
  };

  try {
    setSaving(true);
    setError('');

    if (editingId) {
      const response = await updateFeeStructure(editingId, payload);

      if (response.data.success) {
        await fetchFeeStructures();
      }
    } else {
      const response = await addFeeStructure(payload);

      if (response.data.success) {
        await fetchFeeStructures();
      }
    }

    resetForm();
  } catch (err) {
    setError(err.response?.data?.message || 'Failed to save fee structure');
    console.error('Error:', err);
  } finally {
    setSaving(false);
  }
};

  const handleEdit = (fee) => {
  setFormData({
    class: fee.class,
    monthlyTuition: fee.m_fee || '',
    admissionFee: fee.a_fee || '',
    registrationFee: fee.r_fee || '',
    miscellaneousFee: fee.ms_fee || '',
    annualCharges: fee.a_charges || ''
  });

  setEditingId(fee._id);
};

  const resetForm = () => {
    setFormData({
      class: '',
      monthlyTuition: '',
      admissionFee: '',
      registrationFee: '',
      miscellaneousFee: '',
      annualCharges: ''
    });
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-serif font-bold text-primary mb-2">Fee Structure Manager</h1>
        <p className="text-text-variant text-sm">Manage and update fee structures for all classes.</p>
      </div>

      {error && (
        <div className="p-4 bg-error/10 border border-error/30 rounded-sm flex gap-3">
          <AlertCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
          <p className="text-sm text-error">{error}</p>
        </div>
      )}

      {/* Form */}
      <Card className="border-2 border-secondary/20 bg-secondary/5">
        <CardContent className="p-6 space-y-4">
          <h3 className="font-serif font-bold text-lg text-primary">
            {editingId ? 'Edit Fee Structure' : 'Add New Fee Structure'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-text-variant">Class *</label>
              <select
                name="class"
                value={formData.class}
                onChange={handleInputChange}
                disabled={editingId !== null}
                className="w-full px-3 py-2 border border-outline-variant/50 rounded-sm focus:outline-none focus:ring-1 focus:ring-secondary bg-surface disabled:bg-surface-containerLow disabled:cursor-not-allowed"
              >
                <option value="">Select Class</option>
                {classes.map(cls => (
                  <option key={cls} value={cls}>{cls}</option>
                ))}
              </select>
            </div>

            <InputField 
              label="Monthly Tuition (Rs.)"
              name="monthlyTuition"
              type="number"
              value={formData.monthlyTuition}
              onChange={handleInputChange}
              placeholder="e.g., 5000"
            />

            <InputField 
              label="Admission Fee (Rs.)"
              name="admissionFee"
              type="number"
              value={formData.admissionFee}
              onChange={handleInputChange}
              placeholder="e.g., 2000"
            />

            <InputField 
              label="Registration Fee (Rs.)"
              name="registrationFee"
              type="number"
              value={formData.registrationFee}
              onChange={handleInputChange}
              placeholder="e.g., 1500"
            />

            <InputField 
              label="Miscellaneous Fee (Rs.)"
              name="miscellaneousFee"
              type="number"
              value={formData.miscellaneousFee}
              onChange={handleInputChange}
              placeholder="e.g., 500"
            />

            <InputField 
              label="Annual Charges (Rs.)"
              name="annualCharges"
              type="number"
              value={formData.annualCharges}
              onChange={handleInputChange}
              placeholder="e.g., 10000"
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

      {/* Table */}
      {loading ? (
        <Card>
          <CardContent className="p-8 flex items-center justify-center gap-3">
            <Loader className="w-5 h-5 animate-spin text-primary" />
            <p className="text-text-variant">Loading fee structures...</p>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-0 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-surface-containerHighest border-b border-outline-variant/30">
                  <th className="p-4 font-semibold text-primary">Class</th>
                  <th className="p-4 font-semibold text-primary">Monthly Tuition</th>
                  <th className="p-4 font-semibold text-primary">Admission Fee</th>
                  <th className="p-4 font-semibold text-primary">Registration</th>
                  <th className="p-4 font-semibold text-primary">Miscellaneous</th>
                  <th className="p-4 font-semibold text-primary">Annual Charges</th>
                  <th className="p-4 font-semibold text-primary">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/30">
                {fees.length > 0 ? (
                  fees.map((fee) => (
                    <tr key={fee._id} className="hover:bg-surface-containerLow/50 transition-colors">
                      <td className="p-4 font-medium text-primary">{fee.class}</td>
                      <td className="p-4 text-text-variant">Rs. {fee.m_fee || '---'}</td>
                      <td className="p-4 text-text-variant">Rs. {fee.a_fee || '---'}</td>
                      <td className="p-4 text-text-variant">Rs. {fee.r_fee || '---'}</td>
                      <td className="p-4 text-text-variant">Rs. {fee.ms_fee || '---'}</td>
                      <td className="p-4 text-text-variant">Rs. {fee.a_charges || '---'}</td>
                      <td className="p-4">
                        <Button 
                          variant="ghost" 
                          className="px-3 py-2 text-secondary hover:bg-secondary-fixed"
                          onClick={() => handleEdit(fee)}
                          disabled={saving}
                        >
                          <Edit2 className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="p-8 text-center text-text-variant">
                      No fee structures added yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
