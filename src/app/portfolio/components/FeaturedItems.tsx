"use client";
import { useState } from "react";
import Watermark from "@/components/Watermark";

interface Item {
  id: number;
  name: string;
  image?: string;
  videoUrl?: string;
  sketchfabUrl?: string;
  subcategory?: string;
}

const categoryTexts: Record<string, { title: string; description: string }> = {
  fashion: { title: "Our Expertise in Fashion Design", description: "At the intersection of art and technology, we use CLO 3D to create photorealistic garments that showcase the future of fashion." },
  interior: { title: "Our Mastery in Interior Design", description: "Bringing spaces to life with cutting-edge 3D visualization, we craft immersive interior designs that blend aesthetics with functionality." },
  "3d-modeling": { title: "Precision in 3D Modeling", description: "From concept to reality, our 3D modeling expertise transforms ideas into high-quality digital assets for various industries." },
  animation: { title: "Bringing Motion to Life", description: "Our animation services offer high-quality character animations, VFX, and motion graphics to tell captivating stories." },
  "ar-vr": { title: "Immersive AR/VR Experiences", description: "We specialize in Augmented and Virtual Reality experiences, creating interactive digital environments for businesses and entertainment." },
  rendering: { title: "High-End 3D Rendering", description: "We provide photorealistic rendering solutions for architecture, product visualization, and immersive digital experiences." },
};

const FeaturedItems = ({ category, items }: { category: string; items: Item[] }) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // 🟢 Subcategory logic (only for Interior)
  const subcategories =
    category === "interior"
      ? ["All", ...new Set(items.map((item) => item.subcategory || "").filter(Boolean))]
      : [];

  // 🟢 Filtering logic
  let filteredItems = items;
  if (category === "interior") {
    if (selectedSubcategory !== "All") {
      filteredItems = items.filter((item) => item.subcategory === selectedSubcategory);
    } else if (!showAll) {
      // Show only 2 images per subcategory in "All"
      const subcategoryGroups: Record<string, Item[]> = {};
      items.forEach((item) => {
        const sub = item.subcategory || "Other";
        if (!subcategoryGroups[sub]) subcategoryGroups[sub] = [];
        if (subcategoryGroups[sub].length < 2) {
          subcategoryGroups[sub].push(item);
        }
      });
      filteredItems = Object.values(subcategoryGroups).flat();
    }
  }

  return (
    <section className="container mx-auto px-6 py-8">
      <div className="py-16 px-6">
        {/* 🔹 Dynamic Heading */}
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          {categoryTexts[category]?.title || "Our Work"}
        </h2>

        {/* 🔹 Dynamic Description */}
        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-8">
          {categoryTexts[category]?.description || ""}
        </p>

        {/* 🟢 Show Subcategory Menu for Interior */}
        {subcategories.length > 0 && (
          <div className="flex justify-center space-x-4 mb-10">
            {subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => {
                  setSelectedSubcategory(sub);
                  setShowAll(false);
                }}
                className={`px-4 py-2 rounded-lg text-lg font-semibold transition-all duration-300 ${
                  selectedSubcategory === sub ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-900"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* 🔹 Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="border rounded-lg shadow-md overflow-hidden">
              <div className="relative h-auto">
                {/* 🟢 1. Sketchfab Model */}
                {item.sketchfabUrl ? (
                  <div className="sketchfab-embed-wrapper">
                    <iframe
                      title={item.name}
                      src={item.sketchfabUrl}
                      className="w-full h-48 sm:h-56 md:h-64 lg:h-72"
                      frameBorder="0"
                      allow="autoplay; fullscreen; xr-spatial-tracking"
                      allowFullScreen
                    />
                  </div>
                ) : item.videoUrl ? (
                  /* 🟢 2. YouTube Video */
                  <iframe
                    src={item.videoUrl}
                    title={item.name}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72"
                    allowFullScreen
                  />
                ) : (
                  /* 🟢 3. Image */
                  <Watermark>
                    <img src={item.image} alt={item.name} className="w-auto h-auto max-w-full max-h-full" />
                  </Watermark>
                )}
              </div>

              {/* 🔹 Card Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* 🟢 Show "Show All" button ONLY in "Interior" and ONLY in "All" mode */}
        {category === "interior" && selectedSubcategory === "All" && !showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 bg-gray-900 text-white text-lg rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300"
            >
              Show All
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedItems;
