'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname from next/navigation
import Tag from './tags'; // Import the Tag component

interface ServiceSectionProps {
  className?: string; // Optional className prop
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ className }) => {
  // Define the available services with corresponding YouTube video URLs (4 different YouTube videos)
  const services = [
    { name: '3D Animation', videoSrc: 'https://www.youtube.com/embed/J8tP1E14VeE?si=1wQyZYOOGgWsclnY' },
    { name: '3D Modeling', videoSrc: "https://www.youtube.com/embed/syzCatBSOZU?si=9O4fhuA7F3aCDdzQ" },
    { name: 'Augmented Reality', videoSrc: 'https://youtube.com/embed/Aq6xt0f1nHM' }, 
    { name: 'Virtual Reality', videoSrc: 'https://www.youtube.com/embed/Rb6y8DHHwOg?si=NdXG7Ixr160IK7JX' },
  ];

  // State to manage the current video source and whether the button should be shown
  const [selectedVideo, setSelectedVideo] = useState<string>(services[0].videoSrc);
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  // Handle when a tag is clicked
  const handleTagClick = (tag: string) => {
    const service = services.find((service) => service.name === tag);
    if (service) {
      setSelectedVideo(service.videoSrc);
      setIsVideoFinished(false); // Reset button visibility when a new video is selected
    }
  };

  // Handle the video ending
  const handleVideoEnd = () => {
    setIsVideoFinished(true); // Show the button once the video finishes
  };

  return (
    <div className= 'bg-[#0b090a] p-8'>
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6 text-white">
        Our <span className="text-customRed">Services</span>
      </h2>

      {/* Display Tags */}
      <div className="flex justify-center space-x-4 space-y-4 mb-6 flex-wrap md:mb-8 md:py-10">
        {services.map((service, index) => (
          <Tag
            key={index}
            name={service.name}
            onClick={handleTagClick}
            className="mb-2 md:mb-0 px-4 py-2 text-center text-white rounded-lg bg-customRed hover:bg-customRed focus:outline-none"
            active={selectedVideo.includes(service.name)} // Highlight active tag
          />
        ))}
      </div>

      {/* Display the YouTube video */}
      <div className="flex justify-center mb-6 md:mb-0">
        <div className="w-full max-w-4xl">
          <iframe
            width="100%"
            height="315"
            src={selectedVideo}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={handleVideoEnd}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Show the red button after the video finishes */}
      {isVideoFinished && (
        <div className="flex justify-center mt-4 md:mt-6">
          <button
            className="text-white px-6 py-3 rounded-lg hover:bg-red-600 focus:outline-none"
            style={{ backgroundColor: '#ff0000' }}
            onClick={() => setIsVideoFinished(false)}
          >
            Select Another Service
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceSection;
