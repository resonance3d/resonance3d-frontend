import React from "react";
import Link from "next/link";

const Rendeinghome = () => {
  return (
    <>
      <div className="min-h-screen bg-stone-950 text-white flex flex-col justify-center items-center px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-customRed">
            We're Creating Something Amazing
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Our team is currently working on some exciting features that will enhance your experience. We're dedicated to delivering high-quality content and a seamless user interface. Stay tuned for more!
          </p>

          {/* Render Section */}
          <div className="mb-8">
            <div className="w-24 h-24 rounded-full bg-customRed mx-auto mb-4"></div>
            <p className="text-md text-gray-300">Please wait as we prepare your personalized experience...</p>
          </div>

          {/* Content Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-customRed mb-4">Feature 1: High-Quality Visuals</h3>
              <p className="text-gray-400">
                Our platform will provide immersive 3D, AR, and VR experiences that are designed to bring your projects to life. Expect realistic, dynamic visuals and interactive designs.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-customRed mb-4">Feature 2: Seamless User Experience</h3>
              <p className="text-gray-400">
                We've worked hard to ensure a smooth user interface that makes interacting with our content intuitive and engaging. Expect effortless navigation and easy access to all features.
              </p>
            </div>
          </div>

          <p className="text-md sm:text-lg text-gray-400 mb-6">
            We're actively working on bringing new features to enhance your experience. Stay tuned for updates, and feel free to check out our <Link href={'/portfolio'} className="text-customRed underline">Portfolio</Link> for a preview of what’s to come.
          </p>

          {/* Back to Home Button */}
          <div>
            <Link href="/" passHref>
              <button className="bg-customRed text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-red-600">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rendeinghome;
