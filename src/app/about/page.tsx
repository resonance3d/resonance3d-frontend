// src/pages/about.tsx
import React from 'react';
import TechnologiesHero from '@/components/technologiesHero';


const About = () => {
  return (
    <div>
      <TechnologiesHero />
      {/* About Page Content */}
      <div className="max-w-screen-lg mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-4 text-center text-red-600">About Resonance3D</h1>
        <p className="text-lg text-gray-700 mb-6">
          At <span className="font-bold text-red-600">Resonance3D</span>, we’re not just a team of creative thinkers – we’re storytellers, innovators, and tech enthusiasts driven by the power of cutting-edge technologies. We specialize in creating immersive and engaging 3D, AR, and animation experiences that redefine the way people perceive the world around them.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our mission is simple: to bring your vision to life with the latest in 3D rendering, augmented reality, and animation technology. Whether it’s for marketing, product design, entertainment, or educational purposes, our team strives to create memorable, impactful experiences that engage and inspire.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Do</h2>
        <p className="text-lg text-gray-700 mb-6">
          <span className="font-bold text-red-600">Resonance3D</span> offers a wide range of services designed to cater to businesses and creatives across various industries. Here’s a glimpse of what we do:
        </p>

        <ul className="list-disc pl-5 text-lg text-gray-700 mb-6">
          <li><strong>3D Modeling and Rendering:</strong> We craft realistic 3D models and high-quality renders for everything from architectural visualizations to product designs.</li>
          <li><strong>Augmented Reality (AR) Experiences:</strong> We design AR experiences that bring digital content to life in the real world, offering a new layer of interaction for your audience.</li>
          <li><strong>Animation and Motion Graphics:</strong> Our team brings ideas to life with fluid, dynamic animation and motion graphics that captivate audiences and elevate your brand.</li>
          <li><strong>Virtual Tours and Environments:</strong> We build virtual environments that allow users to explore spaces interactively, whether for real estate, museums, or exhibitions.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
        <p className="text-lg text-gray-700 mb-6">
          At Resonance3D, we believe that the right blend of technology, creativity, and strategy is key to delivering results that stand out. Here’s why our clients choose us:
        </p>

        <ul className="list-disc pl-5 text-lg text-gray-700 mb-6">
          <li><strong>Innovative Solutions:</strong> We use the latest technologies to bring fresh, innovative ideas to life, making sure you’re always ahead of the curve.</li>
          <li><strong>Tailored Approach:</strong> Every project is unique, and we take the time to understand your specific needs, ensuring that the end result aligns with your vision and goals.</li>
          <li><strong>Collaborative Process:</strong> We work closely with our clients every step of the way, ensuring clear communication and a collaborative environment.</li>
          <li><strong>Quality and Precision:</strong> We are committed to delivering high-quality, accurate, and polished work, no matter the scale or complexity of the project.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Us in Shaping the Future</h2>
        <p className="text-lg text-gray-700 mb-6">
          Whether you’re a business looking to boost engagement with interactive content or an individual with an idea to bring to life, we’re here to make it happen. Our work doesn’t just capture attention – it creates lasting impressions. Let’s collaborate and shape the future of digital experiences together.
        </p>

        <p className="text-lg text-center text-gray-700 mb-6">
          <span className="font-bold text-red-600">Resonance3D</span> is more than a studio. It’s a place where technology meets creativity, and together, we create magic.
        </p>
      </div>

      {/* Footer */}

    </div>
  );
};

export default About;
