// components/Watermark.tsx
import React from 'react';


const Watermark = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      {children}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-30 text-white text-xl font-bold">
        <span>
            <img
                              src="/images/logo/water-mark-reso.png" // Replace with your logo's path
                              
                              className="h-5 w-[160px]" // Tailwind class to control the size of the image
                              alt="Company Logo"
                            />
        </span> {/* Add your watermark text */}
      </div>
    </div>
  );
};

export default Watermark;
