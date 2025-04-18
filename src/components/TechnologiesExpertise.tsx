import React from "react";
import Link from "next/link"; // Import Link from next/link

const TechnologiesExpertise = () => {
  const technologies = [
    {
      name: "3D Modeling & Animation",
      description:
        "Creating stunning 3D assets and animations that bring ideas to life with precision and artistry.",
      icon: "🎥",
      link: "/technologies/3d-modeling", // Example link
    },
    {
      name: "Augmented Reality (AR)",
      description:
        "Innovative AR solutions for industries ranging from education to retail, enhancing user engagement.",
      icon: "📱",
      link: "/technologies/ar", // Example link
    },
    {
      name: "Virtual Reality (VR)",
      description:
        "Immersive VR experiences that captivate and transform digital storytelling.",
      icon: "🎮",
      link: "/technologies/vr", // Example link
    },
    {
      name: "Real-Time Rendering",
      description:
        "High-performance rendering for interactive experiences across platforms and devices.",
      icon: "⚡",
      link: "/technologies/rendering", // Example link
    },
    {
      name: "Artificial Intelligence (AI)",
      description:
        "Leveraging AI to optimize processes and enhance creative outputs in 3D and AR workflows.",
      icon: "🤖",
      link: "/technologies/ai", // Example link
    },
    {
      name: "Web & App Development",
      description:
        "Cutting-edge web and mobile applications to seamlessly integrate advanced technologies.",
      icon: "💻",
      link: "/technologies/web-app", // Example link
    },
  ];

  return (
    <section className="py-12 bg-[#0b090a]" id="explore-technologies">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Technologies <span className="text-customRed">We Master</span>
        </h2>
        <p className="text-center text-white mb-12">
          At Resonance3D, we specialize in a wide range of cutting-edge
          technologies to deliver innovative solutions tailored to your needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {technologies.map((tech, index) => (
            <Link
              key={index}
              href={tech.link} // Use the href for Next.js navigation
              className="block flex-col items-center shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105 shadow-rose-800"
              style={{
                border: "1px solid red", // Red border for contrast
                borderRadius: "15px", // Rounded corners for smooth appearance
                boxShadow: "0px 5px 10px rgb(255, 0, 0)", // Subtle shadow to elevate the box
                textDecoration: "none", // Remove default link styling
                background: '#000000',
              }}
            >
              <div className="text-5xl mb-4 text-center">{tech.icon}</div>
              <div className=" ">
                <p className="text-xl text-white mb-2 text-center hover:text-blue-700 "> {tech.name} <br />
                  <span className="text-base">{tech.description}</span></p>
              
              <p className="text-center text-white "></p>
              </div>
             
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesExpertise;
