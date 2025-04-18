import React from "react";
import Link from "next/link";
import TechnologiesHero from "@/components/technologiesHero";

const Experienced3DDeveloperPage: React.FC = () => {

  return (
    <>
    <TechnologiesHero />
    <div className="bg-[#0B090A] text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Experienced 3D Developer - Job Details</h1>

        <div className="max-w-3xl mx-auto bg-[#161a1d] p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold mb-6">About the Role</h2>
          <p className="mb-4">
            At Resonance3D, we are seeking a highly skilled and experienced 3D Developer to join our team. This role requires proficiency in industry-standard software such as Maya, Blender, CLO, and other 3D development tools. You will be working on exciting projects, creating 3D models, animations, and interactive AR experiences that push the boundaries of what is possible in the world of 3D.
          </p>

          <h2 className="text-2xl font-semibold mb-6">Responsibilities</h2>
          <ul className="list-disc list-inside space-y-3 mb-6">
            <li>Develop high-quality 3D models, animations, and simulations for various projects, including AR/VR applications, games, and simulations.</li>
            <li>Collaborate closely with other designers, developers, and project managers to ensure project goals and deadlines are met.</li>
            <li>Work on interactive 3D experiences that blend real-world and digital content seamlessly.</li>
            <li>Optimize and improve 3D models and animations for performance across different platforms.</li>
            <li>Stay updated with the latest trends in 3D development and apply them to enhance project outcomes.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-6">Required Skills and Qualifications</h2>
          <ul className="list-disc list-inside space-y-3 mb-6">
            <li>Proven experience as a 3D Developer or similar role with a strong portfolio showcasing 3D modeling and animation skills.</li>
            <li>Proficiency in industry-standard software such as Maya, Blender, CLO, ZBrush, and similar 3D tools.</li>
            <li>Solid understanding of 3D design principles, including modeling, texturing, shading, lighting, and rendering.</li>
            <li>Experience with animation, rigging, and simulation techniques.</li>
            <li>Knowledge of optimization techniques for 3D content to ensure smooth performance in real-time environments.</li>
            <li>Ability to work well under pressure and meet deadlines in a fast-paced environment.</li>
            <li>Strong communication skills and the ability to collaborate with cross-functional teams.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-6">Preferred Skills</h2>
          <ul className="list-disc list-inside space-y-3 mb-6">
            <li>Experience with AR/VR development.</li>
            <li>Familiarity with Unreal Engine, Unity, or other game engines.</li>
            <li>Knowledge of scripting languages for automation (e.g., Python, MEL scripting).</li>
            <li>Experience working in a collaborative team environment with version control systems (e.g., Git).</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-6">What We Offer</h2>
          <ul className="list-disc list-inside space-y-3 mb-6">
            <li>Competitive salary based on experience.</li>
            <li>Opportunity to work on cutting-edge 3D, AR, and VR projects.</li>
            <li>Collaborative and creative work environment with a talented team of designers and developers.</li>
            <li>Access to ongoing learning and development opportunities to enhance your skills.</li>
            <li>Flexible working hours and the option to work remotely.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-6">How to Apply</h2>
          <p className="mb-6">
            If you are passionate about 3D development and eager to work on groundbreaking projects, we would love to hear from you! Please submit your updated resume along with a portfolio showcasing your 3D work to the link below.
          </p>

          <Link
          href="https://wa.me/8809989996?text=Hi%20there!%20I%20want%20to%20know%20more%20about%20Resonance3D."
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 gap-6 rounded-full border bg-white text-gray-800 border-gray-300 hover:bg-customRed hover:text-white transition"
        >
          Apply via WhatsApp
        </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Experienced3DDeveloperPage;
