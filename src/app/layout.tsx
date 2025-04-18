'use client';

import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../style/globals.css';
import Head from 'next/head';  // Import next/head for managing head metadata

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Resonance3D',
      url: 'https://resonance3d.com',
      logo: 'https://resonance3d.com/images/logo/logo.jpg',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-880-998-9996', // Replace with actual phone number
        contactType: 'Customer Service and Software Service',
        areaServed: 'India',
        availableLanguage: 'English',
      },
      sameAs: [
        'https://x.com/Resonance3D', // Add your social media URLs
        'https://www.facebook.com/people/Resonance3D-PvtLtd/61554163118082/',
        'https://www.youtube.com/@Resonance3D',
        'https://www.instagram.com/resonance3d/',
      ],
    });
    document.head.appendChild(script);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Resonance3D" />
        <meta name="keywords" content="3D animation, AR, Augmented Reality, VR, Virtual Reality, 3D modeling, interactive experiences, product visualization, animation services, immersive technology, digital art, virtual tours, interactive media, architecture, game development, 3D visualization, 3D rendering, immersive experiences, visual effects, VR experiences, AR apps, animated content" />
        <meta name="description" content="At Resonance3D, we specialize in cutting-edge 3D animation, Augmented Reality (AR), Virtual Reality (VR), and 3D modeling services. Transform your ideas into engaging, interactive, and immersive visual experiences that captivate your audience and bring your projects to life." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Resonance3D - Pioneering 3D, AR, Animation, and Immersive Experiences" />
        <meta property="og:description" content="At Resonance3D, we specialize in cutting-edge 3D animation, Augmented Reality (AR), Virtual Reality (VR), and 3D modeling services. Transform your ideas into engaging, interactive, and immersive visual experiences that captivate your audience and bring your projects to life." />
        <meta property="og:image" content="https://resonance3d.com/images/logo/logo.jpg" />
        <meta property="og:url" content="https://resonance3d.com" />
        <meta property="og:site_name" content="Resonance3D" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Resonance3D" />
        <meta name="twitter:title" content="Resonance3D - Pioneering 3D, AR, Animation, and Immersive Experiences" />
        <meta name="twitter:description" content="At Resonance3D, we specialize in cutting-edge 3D animation, Augmented Reality (AR), Virtual Reality (VR), and 3D modeling services. Transform your ideas into engaging, interactive, and immersive visual experiences." />
        <meta name="twitter:image" content="https://resonance3d.com/images/logo/logo.jpg" />
        <meta property="og:locale" content="en_US" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="google-site-verification" content="your-google-site-verification-code" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="canonical" href="https://resonance3d.com" />

         {/* Preconnect to Google Fonts and fonts.gstatic.com */}
         <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Fonts */}
        <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
