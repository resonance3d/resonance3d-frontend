'use client';
import React, { useEffect, useState } from "react";
import QRCode from 'react-qr-code'
const ARExperience = () => {
  const [modelSrc, setModelSrc] = useState<string>("/models/red.glb"); // Default color (green)
  const [selectedColor, setSelectedColor] = useState<string>("red"); // Track selected color

  useEffect(() => {
    // Dynamically load the <model-viewer> script as a module
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@google/model-viewer@latest/dist/model-viewer.min.js";
    script.type = "module";  // Make sure it's loaded as an ES module
    script.async = true;

    // Append the script to the head of the document
    document.head.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  
  // Handle color selection and change the model based on the selected color
  const handleColorChange = (color: "green" | "white" | "red" | "yellow") => {
    setSelectedColor(color);
    setModelSrc(`/models/${color}.glb`); // Change model source based on color
  };

  const arPageUrl = `https://resonance3d.com/ar-expriance/${selectedColor}`; // URL for AR experience with selected color

  return (
    <div className="flex flex-col md:flex-row justify-center items-center sm:py-36 bg-[#0b090a]">
      {/* Left Side: 3D Model Section */}
      <div className="w-full md:w-1/2 p-4 text-center space-y-6 py-16">
        <h2 className="text-2xl font-bold mb-4 text-white py-4">
          Explore the <span className="text-customRed">3D Model</span>
        </h2>
        <p className="mb-4 text-white">
          Interact with the 3D model to see the details of our AR experience:
        </p>
        <div className="w-full h-64 md:h-96 rounded-lg bg-[#0b090a]">
          {/* @ts-expect-error: model-viewer is not a recognized JSX element, ignored temporarily */}
          <model-viewer
            src={modelSrc} // Dynamically change the model source
            alt="3D Model of AR Experience"
            camera-controls
            auto-rotate
            ar
            poster
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "12px",
            }}
          >
            {/* @ts-expect-error: model-viewer is not a recognized JSX element, ignored temporarily */}
          </model-viewer>
        </div>
      </div>

      {/* Right Side: Color Tags */}
      <div className="w-full md:w-1/2 p-4 text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Choose a <span className="text-customRed">Color</span>
        </h2>
        <p className="mb-4 text-white">Select a color to change the model:</p>

        <div className="flex justify-center space-x-4">
          {/* Color tags */}
          <button
            onClick={() => handleColorChange("green")}
            className="text-white bg-green-900 px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Green
          </button>
          <button
            onClick={() => handleColorChange("white")}
            className="text-black bg-white px-4 py-2 rounded-lg hover:bg-white"
          >
            White
          </button>
          <button
            onClick={() => handleColorChange("red")}
            className="text-white bg-red-800 px-4 py-2 rounded-lg hover:bg-red-800"
          >
            Red
          </button>
          <button
            onClick={() => handleColorChange("yellow")}
            className="text-white bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-600"
          >
            Yellow
          </button>
        </div>

        {/* QR Code Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white mb-4">Scan the QR code to experience AR:</h3>
          <div className="flex justify-center">
            <QRCode
              value={arPageUrl}  // Dynamic URL with selected color
              size={200}
              fgColor="#ffffff"
              bgColor="#000000"
              level="H" // High error correction level for reliability
            />
          </div>
          <p className="text-white mt-4">Scan the QR code with your mobile device to view the AR experience with the selected color.</p>
        </div>
      </div>
    </div>
  );
};

export default ARExperience;
