'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="relative text-white bg-[#000000] overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 opacity-80 z-0"></div>

        {/* Footer Content */}
        <div className="relative z-20 py-16 container mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Left Section (Logo and Description) */}
          <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo with increased size */}
          <div className="flex-shrink-0">


<Link href={'/'}>
  <img
    src="/images/logo/Update_logo_png.png" // Replace with your logo's path
    className="h-[35px] w-auto pb-4" // Tailwind class to control the size of the image
    alt="Company Logo"
  />
</Link>

          </div>
            </div>
            <p className="text-gray-300">
              Leading the world in 3D technology, AR, and immersive digital experiences.
            </p>
            <div className="text-gray-400">
              <p>
                Email: <span className="text-customRed">info@resonance3d.com</span>
              </p>
              <p>
                Phone: <span className="text-customRed">(+91) 880-998-9996</span>
              </p>
            </div>
            <p>
              CIN: <span className="text-customRed">U74900KA2014PTC076434</span> <br />
              GSTIN: <span className="text-customRed">20AAMCR8093D1ZC</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-customRed underline underline-offset-8">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/about" className="hover:text-customRed transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-customRed transition duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-customRed transition duration-300">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-customRed transition duration-300">
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-customRed underline underline-offset-8">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Resonance3D-PvtLtd/61554163118082/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={24} className="hover:text-customRed transition-colors" />
              </a>
              <a href="https://www.youtube.com/@Resonance3D" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={24} className="hover:text-customRed transition-colors" />
              </a>
              <a href="https://www.instagram.com/resonance3d/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} className="hover:text-customRed transition-colors" />
              </a>
              <a href="https://in.linkedin.com/company/resonance3d" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={24} className="hover:text-customRed transition-colors" />
              </a>
              <a href="https://x.com/Resonance3D" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} className="hover:text-customRed transition-colors" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-customRed underline underline-offset-8">Subscribe</h3>
            <form action="#" method="POST" className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 text-white bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-customRed"
              />
              <button
                type="submit"
                className="w-full bg-customRed text-white py-3 rounded-md hover:bg-red-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-black text-center py-4 text-customRed">
          <p className="italic">&copy; 2024 Resonance3D. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
