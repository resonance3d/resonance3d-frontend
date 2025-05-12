'use client';
import React from "react";
import Image from "next/image";
import TechnologiesHero from "@/components/technologiesHero";
import SingleGifView from "../components/3dview";
import ContactUs from "../components/contactUs";


const ARTechnology = () => {
  return (
    <>
      <TechnologiesHero />

      {/* AR Technology Introduction */}
      <div className=" bg-stone-950 text-white  px-6">
        <div className="container mx-auto flex items-center justify-between space-x-8">
          <div className="flex-1">
            <div className="text-3xl mb-4">🎥</div>
            <h1 className="text-4xl font-bold mb-4 text-customRed underline underline-offset-8">
              Augmented Reality (AR) Solutions
            </h1>
            <p className="mb-8">
              Augmented Reality (AR) enhances the real world by overlaying digital content, offering interactive and immersive experiences. From virtual try-ons to 3D product visualizations, AR is revolutionizing industries by providing innovative ways for businesses to engage with customers and present their offerings.
            </p>
            <p className="text-lg">
              At Resonance3D, we specialize in creating cutting-edge AR solutions tailored to industries like E-commerce, Education, Furniture, Fashion, Automobile, and more, enabling businesses to enhance customer experience and increase engagement.
            </p>
          </div>

          <div className="flex-1">
            <SingleGifView />
          </div>
        </div>
      </div>

      {/* E-commerce */}
      <div className="bg-stone-950 text-white  px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 underline underline-offset-8 decoration-customRed text-customRed">
              Transforming the <span className="text-white">E-commerce Industry</span>
            </h2>
            <p className="text-lg mb-6">
              AR is reshaping the E-commerce industry by allowing customers to visualize products in their own environment before making a purchase. This immersive shopping experience can boost customer confidence and reduce returns.
            </p>
            <ol className="list-disc list-inside space-y-4">
              <li>
                <strong className="text-customRed">Virtual Product Try-Ons:</strong> Customers can try on clothes, shoes, and accessories virtually, ensuring a better fit and style choice before buying.
              </li>
              <li>
                <strong className="text-customRed">AR Product Visualization:</strong> Allow customers to view products, like furniture or electronics, in their space using AR before purchasing.
              </li>
              <li>
                <strong className="text-customRed">Interactive Shopping Experience:</strong> E-commerce platforms can provide a more engaging and interactive experience by incorporating AR features such as 360-degree views of products.
              </li>
            </ol>
          </div>

          <div className="flex-1">
            <img
              src="/images/ar/ar-retail.jpg"
              alt="Education AR"
            
                className="w-full h-auto object-contain rounded-lg"
            />
          </div>
  
        </div>
      </div>

      {/* Education */}
      <div className=" bg-stone-950 text-white py-10  px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 underline underline-offset-8 decoration-customRed text-customRed">
              Revolutionizing <span className="text-white">Education</span> with AR
            </h2>
            <p className="text-lg mb-6">
              AR is changing the educational experience by making learning more interactive and engaging. Students can visualize complex concepts and interact with virtual simulations, making learning both fun and effective.
            </p>
            <ol className="list-disc list-inside space-y-4">
              <li>
                <strong className="text-customRed">Immersive Learning:</strong> AR enables students to experience subjects like history, science, and geography in a hands-on, immersive way by visualizing historical events or scientific phenomena in 3D.
              </li>
              <li>
                <strong className="text-customRed">Interactive Textbooks:</strong> With AR, textbooks can come to life with additional content such as 3D models, animations, and videos that help deepen understanding.
              </li>
              <li>
                <strong className="text-customRed">Remote Learning Enhancements:</strong> AR can provide interactive lessons for students in remote locations, enhancing the learning process and bridging the gap between students and educators.
              </li>
            </ol>
          </div>

          <div className="flex-1">
            <img
              src="/images/3d/image-heart.jpg"
              alt="Education AR"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Furniture Industry */}
      <div className=" bg-stone-950 text-white px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 underline underline-offset-8 decoration-customRed text-customRed">
              Revolutionizing the <span className="text-white">Furniture Industry</span>
            </h2>
            <p className="text-lg mb-6">
              AR allows customers to virtually place furniture in their homes, ensuring a perfect fit and style before making a purchase. It reduces uncertainty and helps customers make better decisions.
            </p>
            <ol className="list-disc list-inside space-y-4">
              <li>
                <strong className="text-customRed">Virtual Furniture Placement:</strong> Let customers place virtual furniture in their space using AR to visualize its scale and appearance in their home.
              </li>
              <li>
                <strong className="text-customRed">Real-Time Customization:</strong> Allow customers to modify furniture designs, colors, and materials in real-time before making a purchase.
              </li>
            </ol>
          </div>

          <div className="flex-1">
            <img
              src="/images/interior/kitchen/image7.jpg"
              alt="Furniture AR"
              className="w-full h-auto object-contain rounded-lg"
             
              />
          </div>
        </div>
      </div>

      {/* Types of AR */}
      <div className=" bg-stone-950 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-customRed underline underline-offset-8">
            Types of Augmented Reality (AR)
          </h2>
          <p className="text-lg mb-6">
            Augmented Reality can be categorized into several types, each with distinct capabilities that can be applied to different industries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-stone-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-customRed">Marker-Based AR</h3>
              <p>
                Marker-based AR requires a visual marker, such as a QR code or image, to trigger the AR experience. It is commonly used in print ads and product packaging to display 3D models when scanned.
              </p>
            </div>

            <div className="bg-stone-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-customRed">Markerless AR</h3>
              <p>
                Markerless AR does not require a visual marker and instead uses sensors and GPS to trigger AR experiences based on real-world surroundings. This type is often used in navigation and interactive shopping apps.
              </p>
            </div>

            <div className="bg-stone-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-customRed">Projection-Based AR</h3>
              <p>
                Projection-based AR projects light onto physical surfaces to create interactive experiences. It can be used for presentations, virtual product displays, and interactive installations.
              </p>
            </div>

            <div className="bg-stone-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-customRed">Superimposition-Based AR</h3>
              <p>
                This type of AR superimposes digital information onto a real-world environment in real-time. It’s widely used in industries like healthcare (for surgical planning) and automotive (for augmented repair instructions).
              </p>
            </div>

            <div className="bg-stone-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-customRed">Location-Based AR</h3>
              <p>
                Location-based AR uses GPS and other location-based data to provide AR experiences related to a specific location. It&#39;s popular in tourism apps, where users can access historical information or nearby points of interest.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-stone-950 text-white py-6 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-customRed">Experience the Power of AR</h2>
        <div className="flex justify-center">
  <iframe
    className="w-70 h-48"
    src="https://www.youtube.com/embed/Aq6xt0f1nHM"
    title="VR Experience Showcase"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

      </div>

      <ContactUs title="to make your world real"/>
    </>
  );
};

export default ARTechnology;
