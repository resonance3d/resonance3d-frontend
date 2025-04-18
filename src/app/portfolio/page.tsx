'use client';
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import TechnologiesHero from "@/components/technologiesHero";

const portfolioItems = [
  { title: "Interior Design", image: "/images/interior/Bedroom/image1.jpg", tags: ["Interior"], link: "/portfolio/interior" },
  { title: " Fashion Design", image: "/images/fashion/image-12.jpg", tags: ["Fashion"], link: "/portfolio/fashion"},
  { title: "High-Quality Rendering", image: "/images/Render/image6.jpg", tags: ["Rendering"], link: "/portfolio/rendering" },
  { title: "Animation Demo", videoUrl: "https://www.youtube.com/embed/YonF6aZ_R74", tags: ["Animation"], link: "/portfolio/animation" },
  { title: "Realistic 3D Model", videoUrl: "https://www.youtube.com/embed/2I_pzkpmjDQ", tags: ["3D Modeling"], link: "/portfolio/3d-modeling" },
  { title: "Interactive AR-VR Demo", videoUrl: "https://www.youtube.com/embed/YonF6aZ_R74", tags: ["AR-VR"], link: "/portfolio/ar-vr" },
];

// Tag Colors
const tagColors: { [key: string]: string } = {
  Interior: "bg-blue-500 text-white",
  Fashion: "bg-pink-500 text-white",
  Rendering: "bg-green-500 text-white",
  Animation: "bg-yellow-500 text-gray-900",
  "AR-VR": "bg-red-500 text-white",
  "3D Modeling": "bg-purple-500 text-white",
};

const PortfolioPage: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <TechnologiesHero />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6 py-10">
          <motion.h2
            className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.h2>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                onClick={() => router.push(item.link)}
              >
                {/* Image or Video */}
                {item.image ? (
                  <div className="relative h-56 w-full overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    {/* Hover Overlay for Image */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center opacity-0 hover:opacity-100 hover:bg-opacity-50 transition-all duration-300">
                      <p 
                        className="text-white text-lg font-semibold cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(item.link); // ✅ Redirect to correct category
                        }}
                      >
                        View All
                      </p>
                    </div>
                  </div>
                ) : item.videoUrl ? (
                  <div className="relative w-full h-56">
                    <iframe
                      src={item.videoUrl}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                    {/* Hover Overlay for Video */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 hover:bg-opacity-50 transition-all duration-300">
                      <p 
                        className="text-white text-lg font-semibold mb-2 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(item.link); // ✅ Redirect to correct category
                        }}
                      >
                        View All
                      </p>
                      <p 
                        className="text-white text-lg font-semibold cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(item.videoUrl, "_blank"); // ✅ Open video in new tab
                        }}
                      >
                        Watch Video
                      </p>
                    </div>
                  </div>
                ) : null}

                {/* Card Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-xs font-medium px-3 py-1 rounded-full ${tagColors[tag] || "bg-gray-300 text-gray-800"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
