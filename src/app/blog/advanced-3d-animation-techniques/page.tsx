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

const Advanced3DAnimation: React.FC = () => {
  const shareUrl = "https://resonance3d.com/blog/advanced-3d-animation-techniques";
  const shareText =
    "Explore advanced 3D animation techniques and watch our detailed staircase animation video. Learn how we bring designs to life at Resonance3D!";

  return (
    <>
      <TechnologiesHero />
      <div className="bg-black py-8">
        <div className="container mx-auto bg-[#0B090A] py-8">
          <div className="container mx-auto p-8 text-white bg-[#161a1d] space-y-10 shadow-2xl rounded-2xl py-5 max-w-[800px]">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-6 text-center">
                Advanced 3D Animation Techniques: Bringing Designs to Life
              </h1>
              <div className="relative w-full h-[800px] mx-auto">
              <img
        src="/images/animation/bathroom-a.jpg"
        alt="3D man illustration"
        className="w-full h-full object-contain"
      />
              </div>
          
              <p className="mb-4 text-lg leading-relaxed">
                At Resonance3D, we push the boundaries of creativity and technology to create
                stunning 3D animations. In this blog, we dive into the advanced techniques that
                make our animations stand out, focusing on a detailed example of a staircase
                animation. Through this, we’ll show how we bring even the smallest details to life.
              </p>

              <h2 className="text-3xl font-semibold mb-4">What Are Advanced 3D Animation Techniques?</h2>
              <p className="mb-4 leading-relaxed">
                Advanced 3D animation techniques involve the application of sophisticated tools and
                processes to create lifelike, high-quality animations. These techniques focus on
                precision, realism, and attention to detail, which are essential for projects that
                demand excellence in visual storytelling, such as architectural visualizations,
                character animations, and product design.
              </p>

              <h2 className="text-3xl font-semibold mb-4">Key Advanced Techniques We Use</h2>
              <p className="mb-4 leading-relaxed">
                At Resonance3D, we use a range of advanced techniques that help us achieve photorealistic
                results:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>
                  <b>Subsurface Scattering:</b> This technique simulates how light interacts with materials
                  like skin, wax, or marble, allowing for realistic rendering of translucent objects.
                </li>
                <li>
                  <b>Procedural Animation:</b> We use algorithms and simulations to create complex, organic
                  animations, such as flowing water or moving clouds, without keyframing every frame.
                </li>
                <li>
                  <b>Motion Capture:</b> By using motion capture data, we create realistic human and animal
                  movements, enhancing the authenticity of character animations.
                </li>
                <li>
                  <b>Physically-Based Rendering (PBR):</b> PBR ensures that light behaves realistically when
                  interacting with materials, creating more natural and believable results in our animations.
                </li>
              </ul>

              <h2 className="text-3xl font-semibold mb-4">Case Study: Our Staircase Animation</h2>
              <p className="mb-4 leading-relaxed">
                In our latest project, we created a highly detailed 3D animation of a staircase, focusing
                on the precision of each step and the lighting interactions that bring the scene to life. The
                goal was to demonstrate how advanced techniques can enhance even the simplest of objects, such
                as a staircase, by paying attention to the smallest details.
              </p>

              <p className="mb-4 leading-relaxed">
                Watch the full video below to see the entire process, from the initial 3D modeling to the
                final animation, showing how each stage adds depth and realism to the scene.
              </p>

              <div className="mb-8 aspect-w-16 aspect-h-9">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/2I_pzkpmjDQ?si=ckMnWFT7Adn2X02p"
                  title="3D Staircase Animation"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <h2 className="text-3xl font-semibold mb-4">The Importance of Detailing in Animation</h2>
              <p className="mb-4 leading-relaxed">
                Detailing is one of the most important aspects of advanced 3D animation. In our staircase
                animation, we paid special attention to the textures, lighting, and subtle movements of
                each element. The goal was to make the scene feel as realistic as possible, making the viewer
                feel as though they could step into the scene and interact with the environment.
              </p>

              <h2 className="text-3xl font-semibold mb-4">The Future of 3D Animation</h2>
              <p className="mb-4 leading-relaxed">
                The future of 3D animation is exciting, with advancements in real-time rendering, virtual
                reality, and AI-driven animation techniques. As technology evolves, we are continually refining
                our process and experimenting with new tools to deliver even more impressive animations.
              </p>
            </div>
            <hr />
            <div className="pb-4">
              <Share url={shareUrl} text={shareText} />
            </div>
            <hr className="pt-4" />
            <Link
              href="/contact"
              className="text-center text-xl font-medium hover:underline cursor-pointer hover:text-blue-600"
            >
              Ready to bring your designs to life with advanced animation techniques? Contact us today!
            </Link>
          </div>
          <div className="mt-12">
            <LatestPosts posts={latestPosts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Advanced3DAnimation;
