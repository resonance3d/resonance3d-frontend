'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaHome, FaServicestack, FaBriefcase, FaBlog, FaPhoneAlt } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(''); // State to track active section

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle active state on click
  const handleLinkClick = (section: string) => {
    setActiveSection(section); // Set the active section
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-black text-white shadow-lg' : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with increased size */}
          <div className="flex-shrink-0">
         

          <Link href={'/'}>
  <img
    src="/images/logo/Update_logo_png.png" 
    className="h-[18px] w-auto md:h-[30px] sm:h-[40px]" // Adjust height for mobile
    alt="Company Logo"
  />
</Link>

          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`flex items-center space-x-2 hover:text-gray-400 ${
                activeSection === 'home' ? 'text-customRed' : ''
              }`}
              onClick={() => handleLinkClick('home')}
            >
              <FaHome /> <span>Home</span>
            </Link>
            <Link
              href="/services"
              className={`flex items-center space-x-2 hover:text-gray-400 ${
                activeSection === 'services' ? 'text-customRed' : ''
              }`}
              onClick={() => handleLinkClick('services')}
            >
              <FaServicestack /> <span>Services</span>
            </Link>
            <Link
              href="/portfolio"
              className={`flex items-center space-x-2 hover:text-gray-400 ${
                activeSection === 'portfolio' ? 'text-customRed' : ''
              }`}
              onClick={() => handleLinkClick('portfolio')}
            >
              <FaBriefcase /> <span>Portfolio</span>
            </Link>
            <Link
              href="/blog"
              className={`flex items-center space-x-2 hover:text-gray-400 ${
                activeSection === 'blogs' ? 'text-customRed' : ''
              }`}
              onClick={() => handleLinkClick('blogs')}
            >
              <FaBlog /> <span>Blogs</span>
            </Link>
            <Link
              href="/contact"
              className={`flex items-center space-x-2 hover:text-gray-400 ${
                activeSection === 'contact' ? 'text-customRed' : ''
              }`}
              onClick={() => handleLinkClick('contact')}
            >
              <FaPhoneAlt /> <span>Contact</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white">
          <Link
            href="/"
            className={`px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 ${
              activeSection === 'home' ? 'bg-gray-700 text-customRed' : ''
            }`}
            onClick={() => {
              handleLinkClick('home');
              setMenuOpen(false); // Close mobile menu on click
            }}
          >
            <FaHome /> <span>Home</span>
          </Link>
          <Link
            href="/services"
            className={`px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 ${
              activeSection === 'services' ? 'bg-gray-700 text-customRed' : ''
            }`}
            onClick={() => {
              handleLinkClick('services');
              setMenuOpen(false);
            }}
          >
            <FaServicestack /> <span>Services</span>
          </Link>
          <Link
            href="/portfolio"
            className={`px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 ${
              activeSection === 'portfolio' ? 'bg-gray-700 text-customRed' : ''
            }`}
            onClick={() => {
              handleLinkClick('portfolio');
              setMenuOpen(false);
            }}
          >
            <FaBriefcase /> <span>Portfolio</span>
          </Link>
          <Link
            href="/blog"
            className={`px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 ${
              activeSection === 'blogs' ? 'bg-gray-700 text-customRed' : ''
            }`}
            onClick={() => {
              handleLinkClick('blogs');
              setMenuOpen(false);
            }}
          >
            <FaBlog /> <span>Blogs</span>
          </Link>
          <Link
            href="/contact"
            className={`px-4 py-2 flex items-center space-x-2 hover:bg-gray-700 ${
              activeSection === 'contact' ? 'bg-gray-700 text-customRed' : ''
            }`}
            onClick={() => {
              handleLinkClick('contact');
              setMenuOpen(false);
            }}
          >
            <FaPhoneAlt /> <span>Contact</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
