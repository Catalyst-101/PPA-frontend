import React from 'react';

export default function Uniform() {
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
          <h1 className="text-display-md font-serif font-bold mb-4">Uniform Guidelines</h1>
          <p className="text-white/80 max-w-2xl mx-auto">Complete uniform guidelines and requirements for Pen & Page students.</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-5xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">Uniform Guidelines</h2>
          <p className="text-text-variant max-w-lg mx-auto">
            Our complete uniform guidelines and requirements will be updated here shortly. Please contact the administration office for immediate inquiries.
          </p>
        </div>
      </div>
    </div>
  );
}
