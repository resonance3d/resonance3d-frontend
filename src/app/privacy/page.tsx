import React from "react";
import TechnologiesHero from "@/components/technologiesHero";

const PrivacyPolicy = () => {
  return (
    <>
    <TechnologiesHero />
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-12 px-6">
      <div className="max-w-5xl mx-auto bg-gray-900/80 shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-red-600">
          Privacy Policy
        </h1>
          <p className="text-lg leading-7 mb-4">
          At <span className="font-bold">Resonance3D</span>, we value your trust
          and are committed to safeguarding your personal information. This
          Privacy Policy explains how we collect, use, and protect the
          information you provide to us through our website and services.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">Information We Collect</h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Personal Information:</strong> When you contact us or
            register for our services, we may collect your name, email address,
            phone number, and other relevant details.
          </li>
          <li>
            <strong>Usage Data:</strong> We collect information about how you
            use our website, including pages visited, time spent, and other
            analytics data.
          </li>
          <li>
            <strong>Cookies:</strong> To enhance your experience, we use
            cookies to track preferences and website activity.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-3">How We Use Your Information</h2>
        <p className="mb-4">
          We use the information collected for the following purposes:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>To provide and improve our services and website experience.</li>
          <li>To communicate with you about inquiries, updates, or promotions.</li>
          <li>To analyze website usage for better functionality.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-3">How We Protect Your Data</h2>
        <p className="mb-4">
          We take the security of your data seriously. We implement industry-standard measures to protect your information from unauthorized access, alteration, or disclosure. However, no online service can guarantee absolute security.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-3">Your Rights</h2>
        <p className="mb-4">
          You have the right to access, correct, or delete your personal
          information. If you wish to exercise any of these rights, please
          contact us at <a href="mailto:info@resonance3d.com" className="text-red-400 underline">info@resonance3d.com</a>.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-3">Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy periodically. Any changes will be
          reflected on this page, and the "Last Updated" date will be revised.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-3">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy, feel
          free to contact us at:
        </p>
        <address className="not-italic mb-6">
          <p>Resonance3D</p>
          <p>Email: <a href="mailto:info@resonance3d.com" className="text-red-400 underline">info@resonance3d.com</a></p>
          <p>Phone: +91 8809989996</p>
        </address>
        <p className="text-center text-sm text-gray-400">
          Last Updated: November 23, 2024
        </p>
      </div>
    </div>
    </>
  );
};

export default PrivacyPolicy;
