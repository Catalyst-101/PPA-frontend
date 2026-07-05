import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { Loader } from 'lucide-react';
import { getFeeStructures, getTransports } from '../../api/api';

export default function FeeStructure() {
  const [feeStructures, setFeeStructures] = useState([]);
  const [transports, setTransports] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

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
          <h1 className="text-display-md font-serif font-bold mb-4">Fee Structure & Transport</h1>
          <p className="text-white/80 max-w-2xl mx-auto">Transparent and competitive fee structure for all classes.</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-5xl px-6 py-16">
        <div className="space-y-12">
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
      </div>
    </div>
  );
}
