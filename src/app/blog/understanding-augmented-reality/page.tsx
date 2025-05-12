import React from "react";
import TechnologiesHero from "@/components/technologiesHero";
import Image from "next/image";
import Share from "../components/share";
import Link from "next/link";
import LatestPosts from "../components/letestpost";

const latestPosts = [
    {
      title: "The Future of 3d Technology",
      description: "Discover how Augmented Reality is shaping industries worldwide.",
      link: "/blog/the-future-of-3d-technology",
      image: "/images/3d/man-3d.jpg",
    },
    {
      title: "3D Modeling Tips for Beginners",
      description: "Kickstart your 3D modeling journey with these essential tips.",
      link: "/blog/3d-modeling-for-beginners",
      image: "/images/3d/future.jpg",
    },
    {
      title: "AR in Retail: Revolutionizing Shopping",
      description: "Learn how AR is enhancing customer experiences in retail.",
      link: "/blog/exploring-the-future-of-ar-in-retail",
      image: "/images/ar/ar-retail.jpg",
    },
  ];

const UnderstandingAR: React.FC = () => {
      const shareUrl = "https://resonance3d.com/blog/understanding-augmented-reality";
  const shareText = "Check out this article on the future of 3D technology!"
  return (
    <>
    <TechnologiesHero />
      <div className="bg-black py-8">

      <div className="container mx-auto bg-[#0B090A] py-8">
    <div className="container mx-auto p-8 text-white bg-[#161a1d]  space-y-10  shadow-2xl rounded-2xl py-5 max-w-[800px]">
        <div className="mb-8">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Understanding Augmented Reality: A Gateway to the Future
      </h1>
       <div className="relative w-full h-[800px] mx-auto">
       <Image
        src="/images/ar/ar.jpg"
        alt="3D man illustration"
        className="w-full h-full object-contain"
      />
                </div>
          
      <p className="mb-4 text-lg leading-relaxed">
        At Resonance3D, we are passionate about exploring and sharing innovations that redefine
        how we interact with the world. One such groundbreaking technology is Augmented Reality
        (AR). AR bridges the gap between the digital and physical realms, enhancing our everyday
        experiences with interactive digital overlays.
      </p>

      <h2 className="text-3xl font-semibold mb-4">What is Augmented Reality?</h2>
      <p className="mb-4 leading-relaxed">
        Augmented Reality (AR) is a technology that superimposes computer-generated content onto
        the real world, enabling users to view and interact with digital objects in their physical
        environment. Unlike Virtual Reality (VR), which immerses users in a completely digital
        space, AR enhances the real world by adding contextual and interactive digital elements.
      </p>

      <h2 className="text-3xl font-semibold mb-4">How Does AR Work?</h2>
      <p className="mb-4 leading-relaxed">
        AR relies on several key components:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <b>Sensors and Cameras:</b> Devices capture the real-world environment and detect
          surfaces, objects, and markers.
        </li>
        <li>
          <b>AR Software:</b> Processes the sensor data and generates digital content aligned with
          the real-world view.
        </li>
        <li>
          <b>Display:</b> AR experiences are viewed through screens, headsets, or smart glasses.
        </li>
        <li>
          <b>Processing Power:</b> Ensures smooth rendering of AR content in real-time.
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Applications of AR</h2>
      <p className="mb-4 leading-relaxed">
        AR is transforming industries and unlocking new possibilities. Here are some prominent
        applications:
      </p>
      <ul className="list-disc list-inside mb-8 space-y-2">
        <li>
          <b>Retail:</b> Virtual try-ons and product visualization improve the shopping experience.
        </li>
        <li>
          <b>Healthcare:</b> AR aids in surgeries, diagnostics, and medical training by providing
          real-time visuals and guidance.
        </li>
        <li>
          <b>Education:</b> Interactive AR models enhance learning by bringing abstract concepts to
          life.
        </li>
        <li>
          <b>Gaming and Entertainment:</b> AR games and experiences merge digital fun with the
          real world.
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">AR in Action</h2>
      <p className="mb-4 leading-relaxed">
        To better understand AR, check out our exclusive YouTube video showcasing a real-world
        example of Augmented Reality in action:
      </p>
      <div className="mb-8 aspect-w-16 aspect-h-9">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Aq6xt0f1nHM?si=v5zJnihhrTX2A6jw"
          title="Augmented Reality Example"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <h2 className="text-3xl font-semibold mb-4">The Future of AR</h2>
      <p className="mb-4 leading-relaxed">
        As AR technology evolves, its applications will expand, revolutionizing industries and
        enhancing human experiences. At Resonance3D, we are excited to contribute to this journey,
        pushing the boundaries of what’s possible with AR.
      </p>

      
    </div>
    <hr />
      <div className="pb-4">
      <Share url={shareUrl} text={shareText} />
      </div>
      
      <hr className="pt-4" />
      <Link href={'/contact'} className="text-center text-xl font-medium  hover:underline cursor-pointer hover:text-blue-600"> Join us in exploring the limitless potential of AR. The future is now!</Link>
    </div>
    <div className="mt-12">
          <LatestPosts posts={latestPosts} />
        </div>
    </div>
    </div>
    </>
  );
};

export default UnderstandingAR;
