import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Plus, Edit2, Trash2, Search, Loader, ChevronDown } from 'lucide-react';
import { getFAQs, addFAQ, updateFAQ, deleteFAQ } from '../../api/api';

export default function AdminFAQ() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ question: '', answer: '' });

  // Fetch FAQs on mount
  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = async () => {
    try {
      setLoading(true);
      const response = await getFAQs();
      if (response.data.success) {
        setFaqs(response.data.data);
      }
    } catch (err) {
      setError('Failed to load FAQs');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddFAQ = async () => {
    if (!formData.question.trim() || !formData.answer.trim()) {
      setError('Please fill in both question and answer');
      return;
    }

    try {
      setSaving(true);
      setError('');

      if (editingId) {
        const response = await updateFAQ(editingId, formData);
        if (response.data.success) {
          setFaqs(faqs.map(f => f._id === editingId ? { ...f, ...formData } : f));
        }
      } else {
        const response = await addFAQ(formData);
        if (response.data.success) {
          setFaqs([...faqs, response.data.data]);
        }
      }

      setFormData({ question: '', answer: '' });
      setEditingId(null);
      setShowForm(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save FAQ');
      console.error('Error:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleEditFAQ = (faq) => {
    setFormData({ question: faq.question, answer: faq.answer });
    setEditingId(faq._id);
    setShowForm(true);
  };

  const handleDeleteFAQ = async (id) => {
    if (!window.confirm('Are you sure you want to delete this FAQ?')) return;

    try {
      setSaving(true);
      const response = await deleteFAQ(id);
      if (response.data.success) {
        setFaqs(faqs.filter(f => f._id !== id));
      }
    } catch (err) {
      setError('Failed to delete FAQ');
      console.error('Error:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({ question: '', answer: '' });
  };

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-primary mb-2">FAQ Manager</h1>
          <p className="text-text-variant text-sm">Manage frequently asked questions for students and parents.</p>
        </div>
        <Button 
          onClick={() => setShowForm(true)} 
          className="flex items-center gap-2"
          disabled={showForm}
        >
          <Plus className="w-4 h-4" /> Add FAQ
        </Button>
      </div>

      {error && (
        <div className="p-4 bg-error/10 border border-error/30 rounded-sm">
          <p className="text-sm text-error">{error}</p>
        </div>
      )}

      {/* Add/Edit Form */}
      {showForm && (
        <Card className="border-2 border-secondary/20 bg-secondary/5">
          <CardContent className="p-6 space-y-4">
            <h3 className="font-serif font-bold text-lg text-primary">
              {editingId ? 'Edit FAQ' : 'Add New FAQ'}
            </h3>
            
            <div>
              <label className="block text-sm font-medium text-text-variant mb-2">
                Question *
              </label>
              <input
                type="text"
                value={formData.question}
                onChange={(e) => setFormData({...formData, question: e.target.value})}
                placeholder="Enter FAQ question"
                className="w-full px-3 py-2 border border-outline-variant/50 rounded-sm focus:outline-none focus:ring-1 focus:ring-secondary bg-surface"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-variant mb-2">
                Answer *
              </label>
              <textarea
                value={formData.answer}
                onChange={(e) => setFormData({...formData, answer: e.target.value})}
                placeholder="Enter FAQ answer"
                rows="4"
                className="w-full px-3 py-2 border border-outline-variant/50 rounded-sm focus:outline-none focus:ring-1 focus:ring-secondary bg-surface resize-none"
              />
            </div>

            <div className="flex gap-2 justify-end">
              <Button 
                variant="outline" 
                onClick={handleCancel}
                disabled={saving}
              >
                Cancel
              </Button>
              <Button 
                onClick={handleAddFAQ}
                disabled={saving}
                className="flex items-center gap-2"
              >
                {saving ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  editingId ? 'Update FAQ' : 'Add FAQ'
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Search */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-variant" />
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-sm bg-surface border border-outline-variant/30 rounded-sm focus:outline-none focus:border-secondary transition-colors"
        />
      </div>

      {/* FAQs List */}
      {loading ? (
        <Card>
          <CardContent className="p-8 flex items-center justify-center gap-3">
            <Loader className="w-5 h-5 animate-spin text-primary" />
            <p className="text-text-variant">Loading FAQs...</p>
          </CardContent>
        </Card>
      ) : filteredFAQs.length > 0 ? (
        <div className="space-y-2">
          {filteredFAQs.map((faq) => (
            <Card key={faq._id} className="hover:shadow-ambient transition-shadow">
              <CardContent className="p-0">
                <div 
                  className="p-6 flex items-start justify-between cursor-pointer hover:bg-surface-containerLow/50 transition-colors"
                  onClick={() => setExpandedId(expandedId === faq._id ? null : faq._id)}
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-primary flex items-center gap-2">
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform ${expandedId === faq._id ? 'rotate-180' : ''}`}
                      />
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex gap-2 ml-4" onClick={(e) => e.stopPropagation()}>
                    <Button 
                      variant="ghost" 
                      className="px-3 py-2 text-secondary hover:bg-secondary-fixed"
                      onClick={() => handleEditFAQ(faq)}
                      disabled={saving}
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="px-3 py-2 text-error hover:bg-error/10"
                      onClick={() => handleDeleteFAQ(faq._id)}
                      disabled={saving}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {expandedId === faq._id && (
                  <div className="px-6 py-4 bg-surface-containerLow/50 border-t border-outline-variant/20">
                    <p className="text-text-variant text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-text-variant">
              {searchTerm ? 'No FAQs match your search' : 'No FAQs yet. Add your first FAQ!'}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
