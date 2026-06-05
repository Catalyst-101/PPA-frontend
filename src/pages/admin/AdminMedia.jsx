import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Upload, Trash2, Loader, AlertCircle, Check } from 'lucide-react';
import { getAllMedia, updateMedia, deleteMediaField } from '../../api/api';

const mediaFields = [
  { name: 'video_1', label: 'Main Video', type: 'video' },
  { name: 'hero_1', label: 'Hero Image 1', type: 'image' },
  { name: 'hero_2', label: 'Hero Image 2', type: 'image' },
  { name: 'hero_3', label: 'Hero Image 3', type: 'image' },
  { name: 'hero_4', label: 'Hero Image 4', type: 'image' },
  { name: 'hero_5', label: 'Hero Image 5', type: 'image' },
  { name: 'hero_6', label: 'Hero Image 6', type: 'image' },
  { name: 'hero_7', label: 'Hero Image 7', type: 'image' },
  { name: 'about_1', label: 'About Section Image 1', type: 'image' },
  { name: 'about_2', label: 'About Section Image 2', type: 'image' },
  { name: 'about_3', label: 'About Section Image 3', type: 'image' },
  { name: 'campus', label: 'Campus Image', type: 'image' },
  { name: 'program_1', label: 'Program Image 1', type: 'image' },
  { name: 'program_2', label: 'Program Image 2', type: 'image' },
  { name: 'program_3', label: 'Program Image 3', type: 'image' },
  { name: 'program_4', label: 'Program Image 4', type: 'image' }
];

export default function AdminMedia() {
  const [media, setMedia] = useState({});
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [selectedFiles, setSelectedFiles] = useState({});

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      setLoading(true);
      const response = await getAllMedia();
      if (response.data.success) {
        setMedia(response.data.data);
      }
    } catch (err) {
      setError('Failed to load media');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFiles(prev => ({ ...prev, [fieldName]: file }));
      setError('');
    }
  };

  const handleUpload = async (fieldName) => {
    const file = selectedFiles[fieldName];
    if (!file) {
      setError('Please select a file');
      return;
    }

    try {
      setUploading(true);
      setError('');

      const formData = new FormData();
      formData.append(fieldName, file);

      const response = await updateMedia(formData);
      if (response.data.success) {
        setMedia(response.data.data);
        setSelectedFiles(prev => {
          const newState = { ...prev };
          delete newState[fieldName];
          return newState;
        });
        setSuccess(`${fieldName} uploaded successfully!`);
        setTimeout(() => setSuccess(''), 3000);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to upload media');
      console.error('Error:', err);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (fieldName) => {
    if (!window.confirm(`Delete ${fieldName}?`)) return;

    try {
      setUploading(true);
      const response = await deleteMediaField(fieldName);
      if (response.data.success) {
        setMedia(prev => ({ ...prev, [fieldName]: null }));
        setSuccess(`${fieldName} deleted successfully!`);
        setTimeout(() => setSuccess(''), 3000);
      }
    } catch (err) {
      setError('Failed to delete media');
      console.error('Error:', err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-serif font-bold text-primary mb-2">Media Manager</h1>
        <p className="text-text-variant text-sm">Upload and manage images and videos for your website.</p>
      </div>

      {error && (
        <div className="p-4 bg-error/10 border border-error/30 rounded-sm flex gap-3">
          <AlertCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
          <p className="text-sm text-error">{error}</p>
        </div>
      )}

      {success && (
        <div className="p-4 bg-tertiary-fixed/10 border border-tertiary-fixed/30 rounded-sm flex gap-3">
          <Check className="w-5 h-5 text-tertiary-fixed flex-shrink-0 mt-0.5" />
          <p className="text-sm text-tertiary-fixed">{success}</p>
        </div>
      )}

      {loading ? (
        <Card>
          <CardContent className="p-8 flex items-center justify-center gap-3">
            <Loader className="w-5 h-5 animate-spin text-primary" />
            <p className="text-text-variant">Loading media...</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mediaFields.map((field) => (
            <Card key={field.name} className="hover:shadow-ambient transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-serif font-bold text-lg text-primary mb-1">{field.label}</h3>
                  <p className="text-xs text-text-variant">({field.type})</p>
                </div>

                {media[field.name] && (
                  <div className="relative bg-surface-containerLow rounded-sm overflow-hidden h-40 flex items-center justify-center">
                    {field.type === 'image' ? (
                      <img 
                        src={`http://localhost:5000${media[field.name]}`}
                        alt={field.label}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <video
                        src={`http://localhost:5000${media[field.name]}`}
                        className="w-full h-full object-cover"
                        controls
                      />
                    )}
                  </div>
                )}

                <div className="border-2 border-dashed border-outline-variant/50 rounded-sm p-4 text-center">
                  <input
                    type="file"
                    id={`file-${field.name}`}
                    onChange={(e) => handleFileSelect(e, field.name)}
                    className="hidden"
                    accept={field.type === 'image' ? 'image/*' : 'video/*'}
                  />
                  <label 
                    htmlFor={`file-${field.name}`}
                    className="cursor-pointer block"
                  >
                    {selectedFiles[field.name] ? (
                      <div className="text-sm">
                        <p className="font-medium text-primary">{selectedFiles[field.name].name}</p>
                        <p className="text-xs text-text-variant mt-1">
                          {(selectedFiles[field.name].size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    ) : (
                      <div>
                        <Upload className="w-6 h-6 mx-auto mb-2 text-secondary" />
                        <p className="text-sm text-text-variant">Click to select a file</p>
                      </div>
                    )}
                  </label>
                </div>

                <div className="flex gap-2">
                  {selectedFiles[field.name] && (
                    <Button
                      onClick={() => handleUpload(field.name)}
                      disabled={uploading}
                      className="flex-1 flex items-center justify-center gap-2"
                    >
                      {uploading ? (
                        <>
                          <Loader className="w-4 h-4 animate-spin" />
                          Uploading...
                        </>
                      ) : (
                        <>
                          <Upload className="w-4 h-4" />
                          Upload
                        </>
                      )}
                    </Button>
                  )}
                  {media[field.name] && (
                    <Button
                      variant="outline"
                      onClick={() => handleDelete(field.name)}
                      disabled={uploading}
                      className="px-4 text-error border-error/30 hover:bg-error/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
