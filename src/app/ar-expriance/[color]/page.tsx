'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const ARExperiencePage = () => {
  const { color } = useParams<{ color: string }>(); // Type the params as { color: string }
  const [modelSrc, setModelSrc] = useState<string>('');

  useEffect(() => {
    // Dynamically load the model-viewer script
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@google/model-viewer@latest/dist/model-viewer.min.js";
    script.type = "module"; // Make sure it's loaded as an ES module
    script.async = true;

    // Append the script to the document head
    document.head.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array to load the script once

  useEffect(() => {
    // Check if color is a string and valid, then set the model source
    if (typeof color === 'string' && ['green', 'white', 'red', 'yellow'].includes(color)) {
      setModelSrc(`/models/${color}.glb`);
    }
  }, [color]);

  // Validate color to prevent invalid routes
  if (!['green', 'white', 'red', 'yellow'].includes(color || '')) {
    return <div>Color not found!</div>; // Handle invalid color
  }

  return (
    <div className="flex justify-center items-center p-4 bg-[#0b090a]">
      <div className="w-full max-w-2xl text-center space-y-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-4">
          Explore the <span className="text-customRed">3D Model</span>
        </h2>
        <p className="text-white mb-4">
          Interact with the 3D model to see the details of our AR experience.
        </p>
        <div className="w-full h-96 rounded-lg bg-[#0b090a]">
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
    </div>
  );
};

export default ARExperiencePage;
