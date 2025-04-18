import React from 'react';
import { FaCube, FaVrCardboard, FaRobot, FaMagic } from 'react-icons/fa'; // Import icons for the tags

interface TagProps {
  name: string;
  onClick: (tag: string) => void;
  className?: string;
  active?: boolean;
}

const Tag: React.FC<TagProps> = ({ name, onClick, className, active }) => {
  // Dynamically set icon based on tag name
  const getIcon = (name: string) => {
    switch (name) {
      case '3D Modeling':
        return <FaCube className="mr-2" />;
      case 'Augmented Reality':
        return <FaVrCardboard className="mr-2" />;
      case '3D Animation':
        return <FaRobot className="mr-2" />;
      case 'Virtual Reality':
        return <FaMagic className="mr-2" />;
      default:
        return null;
    }
  };

  return (
    <button
      onClick={() => onClick(name)}
      className={`flex items-center px-6 py-3 mb-4 text-white font-medium rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${
        active
          ? 'bg-customRed shadow-lg'
          : 'bg-gray-700 hover:bg-customRed hover:shadow-xl'
      } ${className}`}
    >
      {getIcon(name)}
      {name}
    </button>
  );
};

export default Tag;
