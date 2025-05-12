import React from "react";
import TechnologiesHero from "@/components/technologiesHero";
import SingleGifView from "../components/3dview";
import ContactUs from "../components/contactUs";

const ThreeDModeling = () => {
  return (
    <>
      <TechnologiesHero />

      <div className=" bg-stone-950 text-white py-6 px-6">
        <div className="container mx-auto flex items-center justify-between space-x-8">
          {/* Left Section: Content about the GIF */}
          <div className="flex-1">
            <div className="text-3xl mb-4">🎥</div>
            <h1 className="text-4xl font-bold mb-4 text-customRed underline underline-offset-8">
              3D Modeling &amp; Animation
            </h1>
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

      {/* E-commerce Section */}
      <div className=" bg-stone-950 text-white py-6 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-8">
          {/* Left Section: Image */}
          <div className="flex-1">
           <img
                           src="/images/3d/e-com.jpg"
                           alt="AI Development"
                           
                           className="w-full h-auto object-contain rounded-lg"
                          
                         />
          </div>

          {/* Right Section: Content */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 underline underline-offset-8 decoration-customRed text-customRed">
              Transforming the <span className="text-white">E-commerce Experience</span>
            </h2>
            <ol className="list-disc list-inside space-y-4">
              <li>
                <strong className="text-customRed">Interactive Product Models:</strong> Display products as fully interactive 3D models, enabling customers to rotate, zoom, and inspect every detail of an item before purchasing.
              </li>
              <li>
                <strong className="text-customRed">Augmented Reality (AR) Integration:</strong> Allow customers to visualize products in their real-world environments, such as seeing how a couch fits in their living room or how a gadget looks on their desk.
              </li>
              <li>
                <strong className="text-customRed">Personalization and Customization:</strong> Provide real-time customization features, letting customers choose colors, materials, and configurations to match their preferences.
              </li>
              <li>
                <strong className="text-customRed">Streamlined Decision-Making:</strong> Help customers make informed decisions with interactive comparisons and visual representations of product dimensions and features.
              </li>
              <li>
                <strong className="text-customRed">Reduced Returns and Improved Confidence:</strong> Minimize product returns by giving customers a clear and accurate understanding of the product before they buy.
              </li>
              <li>
                <strong className="text-customRed">Cross-Selling Opportunities:</strong> Showcase complementary products in the 3D space, encouraging customers to explore related items and increase their cart value.
              </li>
              <li>
                <strong className="text-customRed">Mobile Optimization:</strong> Ensure seamless experiences across devices, allowing customers to interact with 3D models and AR features on their smartphones and tablets.
              </li>
            </ol>
            <p className="mt-6">
              By integrating 3D and AR technologies into your e-commerce platform, Resonance3D not only enhances the shopping journey but also builds customer trust and loyalty. Stand out in the competitive market with experiences that captivate and convert.
            </p>
          </div>
        </div>
      </div>

      {/* Fashion Industry Section */}
      <div className="bg-stone-950 text-white py-8 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-8">
          {/* Left Section: Content */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 underline underline-offset-8 decoration-customRed text-customRed">
              Transforming the <span className="text-white">Fashion Industry</span>
            </h2>
            <ol className="list-disc list-inside space-y-4">
              <li>
                <strong className="text-customRed">Virtual Try-Ons:</strong> Enable customers to try on outfits digitally, providing a personalized shopping experience.
              </li>
              <li>
                <strong className="text-customRed">Detailed 3D Designs:</strong> Create lifelike 3D models of apparel with accurate textures, patterns, and fits.
              </li>
              <li>
                <strong className="text-customRed">Augmented Reality (AR):</strong> Bring fashion to life with AR, letting users visualize clothing in their environments.
              </li>
              <li>
                <strong className="text-customRed">Sustainable Design:</strong> Reduce waste by prototyping virtually before producing physical samples.
              </li>
              <li>
                <strong className="text-customRed">Enhanced Marketing:</strong> Use interactive visuals for advertisements and online stores to boost engagement and sales.
              </li>
            </ol>
          </div>

          {/* Right Section: Image */}
          <div className="flex-1">
            <img
                            src="/images/3d/fashion-1.jpg"
                            alt="AI Development"
                            
                            className="w-full h-auto object-contain rounded-lg"
                           
                          />
          </div>
        </div>
      </div>

      {/* Engineering Industry Section */}
      <div className=" bg-stone-950 text-white py-8 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-8">
          {/* Left Section: Image */}
          <div className="flex-1">
            <img
                            src="/images/3d/man-3d.jpg"
                            alt="AI Development"
                            
                            className="w-full h-auto object-contain rounded-lg"
                           
                          />
          </div>

          {/* Right Section: Content */}
          <div className="flex-1 ml-4">
            <h2 className="text-3xl font-bold mb-4 underline underline-offset-8 decoration-customRed text-customRed">
              Revolutionizing the <span className="text-white">Engineering Industry</span>
            </h2>
            <p className="text-lg mb-6">
              Resonance3D transforms the engineering sector with state-of-the-art 3D visualization and simulation solutions, driving innovation and operational efficiency. Here&apos;s how we make an impact:
            </p>
            <ol className="list-disc list-inside space-y-4">
              <li>
                <strong className="text-customRed">Advanced Prototyping:</strong> Develop interactive 3D prototypes for design validation and iterative improvements, reducing time and costs.
              </li>
              <li>
                <strong className="text-customRed">Virtual Simulations:</strong> Conduct realistic simulations for stress analysis, performance testing, and safety evaluations in a controlled environment.
              </li>
              <li>
                <strong className="text-customRed">Streamlined Collaboration:</strong> Enable cross-functional teams to collaborate on detailed 3D models, ensuring precision and reducing errors.
              </li>
              <li>
                <strong className="text-customRed">Enhanced Training Modules:</strong> Provide immersive virtual training for engineers to learn equipment operations and complex processes safely.
              </li>
              <li>
                <strong className="text-customRed">Efficient Project Presentations:</strong> Showcase engineering projects to stakeholders with high-quality, interactive 3D visualizations.
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Real Estate & Interior Industry Section */}
      <div className=" bg-stone-950 text-white py-8 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-8">
          {/* Left Section: Content */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 underline underline-offset-8 decoration-customRed text-customRed">
              Elevating the <span className="text-white">Real Estate &amp; Interior Industry</span>
            </h2>
            <p className="text-lg mb-6">
              Resonance3D transforms how properties and interiors are visualized, marketed, and sold. Through advanced 3D modeling and interactive experiences, we provide a unique, immersive way to explore homes and commercial spaces. Here&apos;s how we help:
            </p>
            <ol className="list-disc list-inside space-y-4">
              <li>
                <strong className="text-customRed">Virtual Property Tours:</strong> Let potential buyers explore real estate listings through interactive 3D walkthroughs, providing a realistic feel of the property.
              </li>
              <li>
                <strong className="text-customRed">Augmented Reality (AR):</strong> Allow customers to visualize furniture and decor in their homes using AR, ensuring the right fit and style.
              </li>
              <li>
                <strong className="text-customRed">Interior Design Visualizations:</strong> Create realistic 3D interior designs, helping clients visualize spaces before making decisions on decor or layout.
              </li>
              <li>
                <strong className="text-customRed">Interactive Floor Plans:</strong> Enable customers to view detailed, interactive floor plans, making it easier to understand the property&apos;s layout.
              </li>
              <li>
                <strong className="text-customRed">Faster Decision-Making:</strong> Help clients make confident, informed decisions with highly detailed, immersive 3D visualizations of properties.
              </li>
            </ol>
          </div>

          {/* Right Section: Image */}
          <div className="flex-1">
            <img
                            src="/images/interior/bedroom/image2.jpg"
                            alt="AI Development"
                          
                           
                            className="w-full h-auto object-contain rounded-lg"
                           
                          />
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <ContactUs title=" for your 3d modeling" />
    </>
  );
};

export default ThreeDModeling;
