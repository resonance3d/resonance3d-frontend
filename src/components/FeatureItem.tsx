import React from 'react';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => (
  <div className="flex items-center mb-4">
    <div
      className="flex justify-center items-center w-16 h-16 border-4 rounded-full p-4 shadow-lg hover:scale-110 hover:shadow-xl transition-all"
      style={{ border: '4px solid #ff0000' }}
    >
      {icon}
    </div>
    <div className="ml-4">
      <h3 className="text-lg font-semibold text-slate-300">{title}</h3>
      <p className="text-sm text-slate-500">{description}</p>
    </div>
  </div>
);

export default FeatureItem;
