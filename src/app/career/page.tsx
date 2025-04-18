import React from "react";
import Link from "next/link";
import TechnologiesHero from "@/components/technologiesHero";
const CareerPage: React.FC = () => {
  return (
   <>
      <TechnologiesHero />
      <div className="bg-[#0B090A] text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-8">Join the Resonance3D Team</h1>
        <p className="text-lg mb-12">
          At Resonance3D, we are always looking for talented individuals who share our passion for 3D, AR, and animation. Whether you're looking to advance your career, gain hands-on experience, or learn new skills, we have something for you!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Experienced 3D Developer Section */}
          <div className="bg-[#161a1d] p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">Experienced 3D Developer</h2>
            <p className="mb-4">
              We are looking for an experienced 3D developer proficient in tools like Maya, Blender, CLO, and more. If you're passionate about creating innovative 3D models, animations, and interactive experiences, this is the place for you!
            </p>
            <Link href="/career/exprianced" className="text-blue-500 font-medium hover:underline">Apply Now</Link>
          </div>

          {/* Internship Opportunity Section */}
          <div className="bg-[#161a1d] p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">Internship Opportunities</h2>
            <p className="mb-4">
              Kickstart your career with our 3D development internship program. Work with industry professionals and gain hands-on experience that will set you up for success in the world of 3D and animation.
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

          {/* 3D Development Classes Section */}
          <div className="bg-[#161a1d] p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">3D Development Classes</h2>
            <p className="mb-4">
              Interested in learning 3D development? We offer classes at a very small fee where you can master the skills needed to succeed in the 3D world. From modeling to animation, we cover it all!
            </p>
            <Link href="https://wa.me/8809989996?text=Hi%20there!%20I%20want%20to%20know%20more%20about%20Resonance3D." className="text-blue-500 font-medium hover:underline">WhatsApp Us</Link>
          </div>
        </div>
      </div>
    </div>

   </>
  );
};

export default CareerPage;
