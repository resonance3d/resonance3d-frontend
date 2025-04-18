'use client';
// pages/services.tsx
import React from "react";
import TechnologiesHero from "@/components/technologiesHero";
import TechnologiesExpertise from "@/components/TechnologiesExpertise";
import SingleGifView from "../technologies/components/3dview";
import Link from "next/link";

const ServicesPage = () => {
  
  return (
    <>
      <TechnologiesHero />
      <TechnologiesExpertise />
        <div className="bg-stone-950">

        
      <main className="container mx-auto max-w-[1380px] py-5 ">
        <div className="bg-[#161a1d] shadow-lg rounded-lg text-white px-6">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between space-y-8 sm:space-y-0 sm:space-x-8">
            {/* Left Section: Content about the GIF */}
            <div className="flex-1">
              <div className="text-3xl mb-4">🎥</div>
              <Link href={'/technologies/3d-modeling'}>
                <h1 className="text-4xl font-bold mb-4 text-white underline underline-offset-8">
                  3D Modeling & Animation
                </h1>
              </Link>
              <p className="mb-8">
                Creating stunning 3D assets and animations that bring ideas to life with precision and artistry.
              </p>
              <p className="text-lg">
                At Resonance3D, we specialize in crafting realistic 3D models, lifelike animations, and engaging visual effects tailored to your unique needs. Our expertise ensures that your projects are brought to life with cutting-edge technology and unparalleled creativity.
              </p>
            </div>

            {/* Right Section: The GIF View */}
            <div className="flex-1">
              <SingleGifView />
            </div>
          </div>
        </div>

        <div className=" bg-[#161a1d] text-white px-6">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between space-y-8 sm:space-y-0 sm:space-x-8">
            <div className="flex-1">
              <div className="text-3xl mb-4">🎥</div>
              <Link href={'/technologies/ar'}>
                <h1 className="text-4xl font-bold mb-4 text-white underline underline-offset-8">
                  Augmented Reality (AR) Solutions
                </h1>
              </Link>
              <p className="mb-8">
                Augmented Reality (AR) enhances the real world by overlaying digital content, offering interactive and immersive experiences. From virtual try-ons to 3D product visualizations, AR is revolutionizing industries by providing innovative ways for businesses to engage with customers and present their offerings.
              </p>
              <p className="text-lg">
                At Resonance3D, we specialize in creating cutting-edge AR solutions tailored to industries like E-commerce, Education, Furniture, Fashion, Automobile, and more, enabling businesses to enhance customer experience and increase engagement.
              </p>
            </div>

            <div className="flex-1">
            <img
                src="/images/vr/gaming-vr-2.jpg" 
                alt="VR Introduction"
                
                
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* VR Technology Introduction */}
        <div className=" bg-[#161a1d] text-white py-12 px-6">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between space-y-8 sm:space-y-0 sm:space-x-8">
            <div className="flex-1">
              <div className="text-3xl mb-4">🕶️</div>
              <Link href={'/technologies/vr'}>
                <h1 className="text-4xl font-bold mb-4 text-white underline underline-offset-8">
                  Virtual Reality (VR) Solutions
                </h1>
              </Link>
              <p className="mb-8">
                Virtual Reality (VR) immerses users in a completely simulated environment, offering an experience that mimics or even surpasses reality. VR has the potential to transform industries, from entertainment to education, healthcare, and real estate, by creating highly engaging and interactive environments.
              </p>
              <p className="text-lg">
                Our VR solutions cater to a variety of sectors including entertainment, real estate, healthcare, training, and more. By leveraging VR technology, businesses can provide immersive experiences that captivate their audiences and elevate engagement.
              </p>
            </div>

            <div className="flex-1">
              <img
                src="/images/vr/girl-office.jpg"
                alt="VR Introduction"
               
               
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className=" bg-[#161a1d] text-white py-12 px-6 border-b-4 border-customRed">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between space-y-8 sm:space-y-0 sm:space-x-8">
            <div className="flex-1">
              <div className="text-3xl mb-4">🤖🧠</div>
              <Link href={'/technologies/ai'}>
                <h1 className="text-4xl font-bold mb-4 text-white underline underline-offset-8">
                  AI & Machine Learning Development
                </h1>
              </Link>
              <p className="mb-8">
                At Resonance3D, we leverage the power of Artificial Intelligence (AI) and Machine Learning (ML) to create cutting-edge solutions that enhance your business performance. From intelligent automation to predictive analytics, our AI and ML services are designed to help businesses unlock new levels of efficiency and innovation.
              </p>
              <p className="text-lg">
                Whether you're looking to implement AI-driven customer support, recommendation systems, or enhance decision-making with predictive analytics, we have the expertise to build customized AI and ML solutions tailored to your needs.
              </p>
            </div>

            <div className="flex-1">
              <img
                src="/images/ai/image-2-girl.jpg"
                alt="AI Development"
              
                
                className="w-full h-auto object-contain rounded-lg"
               
              />
            </div>
          </div>
        </div>

        <div className=" bg-[#161a1d] text-white py-12 px-6 shadow-lg rounded-lg">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between space-y-8 sm:space-y-0 sm:space-x-8">
            <div className="flex-1">
              <div className="text-3xl mb-4">💻📱</div>
              <Link href={'/technologies/web-app'}>
                <h1 className="text-4xl font-bold mb-4 text-white underline underline-offset-8">
                  Web & Mobile Development
                </h1>
              </Link>
              <p className="mb-8">
                At Resonance3D, we create end-to-end solutions for businesses with web, mobile, and backend development services. Our team builds seamless and scalable applications that ensure smooth user experiences and robust functionality for your business.
              </p>
              <p className="text-lg">
                We combine modern frameworks, responsive design, mobile-friendly features, and a powerful backend to deliver the best solutions for your business needs.
              </p>
            </div>

            <div className="flex-1">
              <img
                src="/images/3d/web.jpg"
                alt="Web, Mobile & Backend Development"
               
                
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
      </div>
    </>
  );
};

export default ServicesPage;
