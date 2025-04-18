import React from "react";
import Link from "next/link"; // Import Link from next/link

const TechnologiesHero = () => {
  return (
    <section className="relative bg-[#000000] text-white py-16 md:py-24">
      {/* Content */}
      <div className="container relative mx-auto px-4 sm:px-2 lg:px-2 text-center">
        <h1 className="text-2xl sm:text-2xl md:text-5xl font-extrabold mb-4 sm:mb-6">
          Pioneering the <span className="text-customRed">Future</span> of Technology
        </h1>
        <p className="text-sm sm:text-lg md:text-xl mb-6 sm:mb-8">
          Leveraging cutting-edge technologies to deliver <br /> innovative and immersive experiences.
        </p>
        <Link
          href="/#explore-technologies"
          className="bg-customRed text-white px-5 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:bg-red-600 transition"
        >
          Explore Our Expertise      
        </Link>
      </div>
    </section>
  );
};

export default TechnologiesHero;
