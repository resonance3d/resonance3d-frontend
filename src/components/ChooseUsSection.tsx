'use client';
import React, { useState, useEffect } from 'react';
import InfoBox from './InfoBox';
import { FaCube, FaFilm, FaRocket, FaHandsHelping } from 'react-icons/fa';

const ChooseUsSection: React.FC = () => {
  const features = [
    {
      icon: <FaCube className="text-4xl" style={{ color: '#FF0000' }} />,
      title: 'Expertise',
      description:
        'Years of 3D and AR expertise tailored to your industry needs.',
    },
    {
      icon: <FaFilm className="text-4xl" style={{ color: '#FF0000' }} />,
      title: 'Custom Animations',
      description: 'Bespoke animations crafted with creativity and precision.',
    },
    {
      icon: <FaRocket className="text-4xl" style={{ color: '#FF0000' }} />,
      title: 'Future-Ready Tech',
      description: 'Cutting-edge tools for scalable, high-performance solutions.',
    },
    {
      icon: <FaHandsHelping className="text-4xl" style={{ color: '#FF0000' }} />,
      title: 'Client Focus',
      description: 'We prioritize your business objectives in every project.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically slide to the next pair of icons
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % features.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, [features.length]);

  // Get the current two features for the slide
  const currentFeatures = [
    features[currentIndex],
    features[(currentIndex + 1) % features.length],
  ];

  return (
    <div>
      {/* Desktop View */}
      <div
        className="hidden md:block absolute bg-gradient-to-t from-stone-950 to-[#000] bottom-0 left-1/2 transform -translate-x-1/2 z-10 p-6 sm:p-8 md:p-12 w-11/12 sm:w-10/12 md:w-3/4 rounded-lg shadow-lg border"
        style={{
          marginBottom: '-170px',
          borderRadius: '15px',
          boxShadow: '0px 5px 10px rgb(255, 0, 0)',
          backgroundColor: '#282828',
        }}
      >
        <div className="flex flex-col sm:flex-row items-start justify-between">
          <InfoBox
            title="Why Choose Us?"
            description="Resonance3D is your partner for innovative 3D, AR, and animation solutions. Let’s show you why we’re the best in the business."
          />
          <div className="w-full sm:w-2/3 sm:ml-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  {feature.icon}
                  <div className="ml-4">
                    <h3 className="text-white text-sm font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-xs">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div
        className="md:hidden bg-gradient-to-t from-stone-950 to-[#000] p-4 w-full shadow-lg"
        style={{
          backgroundColor: '#282828',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-lg font-bold mb-2">Why Choose Us?</h2>
          <p className="text-gray-300 text-sm mb-4">
            Resonance3D delivers tailored 3D, AR, and animation solutions to meet your needs.
          </p>

          {/* Sliding Icons */}
          <div className="grid grid-cols-2 gap-4">
            {currentFeatures.map((feature, index) => (
              <div key={index} className="flex items-start">
                {feature.icon}
                <div className="ml-2">
                  <h3 className="text-white text-sm font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-xs">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUsSection;
