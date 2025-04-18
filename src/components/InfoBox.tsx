import React from 'react';

interface InfoBoxProps {
  title: string;
  description: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, description }) => (
  <div
    className="w-full sm:w-1/3 p-6 bg-black rounded-lg shadow-lg mb-6 sm:mb-0 border"
    style={{
      borderRadius: '15px', // Rounded corners for smooth appearance
      boxShadow: '0px 5px 10px rgb(255, 0, 0)', // Subtle shadow to elevate the box
    }}
  >
    <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
      Why <span style={{ color: '#FF0000' }}>Choose Us?</span>
    </h2>
    <p className="text-white mt-2 text-center text-sm sm:text-base">{description}</p>
  </div>
);

export default InfoBox;
