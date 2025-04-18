'use client';
import React from 'react';

const TrustedPartners = () => {
  return (
    <div className="bg-black shadow-lg">
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Our Trusted <span className="text-customRed">Partners</span>
        </h2>
        <p className="text-white mb-12">
          We are proud to work with these innovative companies to bring the best to our customers.
        </p>

        {/* Partner logos grid inside a single box */}
        <div className="rounded-lg p-8" style={{           border: '1px solid red', // Red border for contrast
            borderRadius: '15px', // Rounded corners for smooth appearance
            boxShadow: '0px 5px 10px rgb(255, 0, 0)', // Subtle shadow to elevate the box
             }}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Logo 1 - NVIDIA */}
            <div className="flex justify-center items-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="64"
                width="64"
                viewBox="0 0 64 64"
                className="h-16 w-auto object-contain hover:opacity-80 transition-opacity duration-300"
              >
                <circle cx="32" cy="32" r="32" fill="#76B900" />
                <text x="50%" y="50%" textAnchor="middle" stroke="#51c500" strokeWidth="2px" dy=".3em" fill="white">
                  NVIDIA
                </text>
              </svg>
            </div>

            {/* Logo 2 - AMD */}
            <div className="flex justify-center items-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="64"
                width="64"
                viewBox="0 0 64 64"
                className="h-16 w-auto object-contain hover:opacity-80 transition-opacity duration-300"
              >
                <circle cx="32" cy="32" r="32" fill="#AA0000" />
                <text x="50%" y="50%" textAnchor="middle" stroke="#000" strokeWidth="2px" dy=".3em" fill="white">
                  AMD
                </text>
              </svg>
            </div>

            {/* Logo 3 - Intel */}
            <div className="flex justify-center items-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="64"
                width="64"
                viewBox="0 0 64 64"
                className="h-16 w-auto object-contain hover:opacity-80 transition-opacity duration-300"
              >
                <circle cx="32" cy="32" r="32" fill="#0071C5" />
                <text x="50%" y="50%" textAnchor="middle" stroke="#005689" strokeWidth="2px" dy=".3em" fill="white">
                  Intel
                </text>
              </svg>
            </div>

            {/* Logo 4 - Apple */}
            <div className="flex justify-center items-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="64"
                width="64"
                viewBox="0 0 64 64"
                className="h-16 w-auto object-contain hover:opacity-80 transition-opacity duration-300"
              >
                <circle cx="32" cy="32" r="32" fill="#000000" />
                <text x="50%" y="50%" textAnchor="middle" stroke="#ffffff" strokeWidth="2px" dy=".3em" fill="white">
                  Apple
                </text>
              </svg>
            </div>

            {/* Logo 5 - Google */}
            <div className="flex justify-center items-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="64"
                width="64"
                viewBox="0 0 64 64"
                className="h-16 w-auto object-contain hover:opacity-80 transition-opacity duration-300"
              >
                <circle cx="32" cy="32" r="32" fill="#4285F4" />
                <text x="50%" y="50%" textAnchor="middle" stroke="#000000" strokeWidth="2px" dy=".3em" fill="white">
                  Google
                </text>
              </svg>
            </div>

            {/* Add more logos as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;
