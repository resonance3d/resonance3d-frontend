'use client';
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ChooseUsSection from './ChooseUsSection';
import Link from 'next/link';

const slides = [
  {
    image: '/images/3d/car.jpg',
    heading: 'Experience 3D Innovation',
    description: 'Explore the world of 3D design and bring your imagination to life.',
    link: 'technologies/3d-modeling',
  },
  {
    image: '/images/interior/Living-Room/leaving3.jpg',
    heading: 'Interior Design Excellence',
    description: 'Transform spaces with stunning interior designs and visualizations.',
    link: '/portfolio',
  },
  {
    image: '/images/3d/fashion.png',
    heading: 'Fashion Forward Designs',
    description: 'Revolutionize fashion with stunning 3D modeling and creative designs.',
    link: '/portfolio/fashion',
  },
  {
    image: '/images/vr/girl-red.jpg',
    heading: 'Virtual Reality Integration',
    description: 'Step into the future with immersive virtual reality experiences.',
    link: '/technologies/vr',
  },
];

const MainContent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = 5000; // Interval duration in milliseconds
  const [fade, setFade] = useState(false);

  // Automatically handle sliding
  useEffect(() => {
    const autoSlide = setInterval(() => {
      handleNext();
    }, slideInterval);

    return () => clearInterval(autoSlide);
  }, [currentIndex]);

  useEffect(() => {
    setFade(true); // Trigger fade-in on new slide
    const timer = setTimeout(() => setFade(false), 1000); // Ensure fade-in ends after 1 second

    return () => clearTimeout(timer); // Cleanup
  }, [currentIndex]);

  // Navigate to the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  // Navigate to the previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative">
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .fade-in {
            animation: fadeIn 1s ease-in-out forwards;
            animation-delay: 0.1s; /* Small delay for the fade-in effect */
          }
        `}
      </style>

      {/* Carousel */}
      <div className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Text with fade-in effect */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center">
              <div className="px-6">
                <h1
                  className={`text-4xl md:text-6xl font-bold mb-4 text-white ${
                    fade ? 'fade-in' : ''
                  }`}
                >
                  <span>{slide.heading.split(" ")[0]} </span>
                  <span className="text-customRed">
                    {slide.heading.split(" ").slice(1).join(" ")}
                  </span>
                </h1>
                <p
                  className={`text-lg md:text-xl text-gray-200 mb-6 ${
                    fade ? 'fade-in' : ''
                  }`}
                >
                  {slide.description}
                </p>
                <Link
                  href={slide.link}
                  className={`inline-block bg-customRed text-white px-6 py-3 rounded-lg font-semibold hover:bg-customRed transition duration-300 ${
                    fade ? 'fade-in' : ''
                  }`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Icons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white  text-xs lg:text-3xl  p-2 rounded-full bg-black sm:bg-none  bg-opacity-50 hover:bg-opacity-70 transition duration-300"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-xs lg:text-3xl  p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-300"
        >
          <FaArrowRight />
        </button>
      </div>

      <ChooseUsSection />
    </div>
  );
};

export default MainContent;
