import React from "react";

interface HeroSectionProps {
  backgroundImage: string;
  title: React.ReactNode;
  subtitle: string;
  pageHeadline: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  title,
  subtitle,
  pageHeadline,
}) => {
  return (
    <>
    <div className="relative">
      {/* Fullscreen Image with Content */}
      <div
        className="h-[50vh] w-full bg-cover bg-center relative"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          
        }}
      >
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        {/* Content on the image */}
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-2xl mb-4">{subtitle}</p>
          <h5 className="text-3xl md:text-3xl font-bold mt-4 text-customRed">{pageHeadline}</h5>
        </div>
      </div>
    </div>
    </>
  );
};

export default HeroSection;
