import React from "react";

const WhyUs = () => {
  const points = [
    {
      title: "Expertise in 3D & AR",
      description:
        "Our team has years of experience in creating cutting-edge 3D and AR solutions tailored for diverse industries.",
      icon: "🌟",
    },
    {
      title: "Custom Animation Solutions",
      description:
        "We provide bespoke animation services that bring your ideas to life with precision and creativity.",
      icon: "🎥",
    },
    {
      title: "Future-Ready Technology",
      description:
        "We utilize the latest tools and technologies to deliver high-performance and scalable solutions.",
      icon: "🚀",
    },
    {
      title: "Client-Centric Approach",
      description:
        "We prioritize your needs and ensure every solution aligns with your business objectives.",
      icon: "🤝",
    },
  ];

  return (
    <section className=" py-12 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Why <span className="text-red-600">Choose Us?</span>
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Resonance3D is your partner for innovative 3D, AR, and animation solutions.
          Here’s why our clients trust us.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex flex-col items-center shadow-lg shadow-black p-6 rounded-lg transition-transform transform hover:scale-105 text-gray-400 " style={{ backgroundColor: "#282828"}}
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-xl  text-slate-300 mb-2">
                {point.title}
              </h3>
              <p className="text-center text-slate-500">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
