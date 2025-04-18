import React from 'react';
import TechnologiesHero from '@/components/technologiesHero';

const Disclaimer = () => {

  return (
    <>
    <TechnologiesHero />
    <div className="p-8 max-w-screen-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>
      <p className="text-lg">
        The information provided on this website, <strong>Resonance3D.com</strong>, is for general informational purposes
        only. While we strive to keep the information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is strictly at your own risk.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Intellectual Property Rights</h2>
      <p>
        All content displayed on this website, including text, images, graphics, logos, videos, and other multimedia
        materials, is the property of <strong>Resonance3D</strong> or its licensors and is protected by copyright laws.
        Unauthorized use or reproduction of this content without prior written permission from <strong>Resonance3D</strong> is strictly prohibited.
      </p>

      <h2 className="text-2xl font-semibold mt-6">External Links</h2>
      <p>
        This website may contain links to external websites that are not controlled or operated by <strong>Resonance3D</strong>. We have no control over the nature, content, or availability of those external sites. The inclusion of any links does not imply a recommendation or endorsement of the views expressed within them.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Limitation of Liability</h2>
      <p>
        In no event shall <strong>Resonance3D</strong>, its directors, employees, partners, or affiliates be held liable for
        any loss or damage, including but not limited to direct, indirect, incidental, special, consequential, or punitive damages arising from or in connection with the use of this website or the services offered.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Changes to the Disclaimer</h2>
      <p>
        <strong>Resonance3D</strong> reserves the right to modify, update, or change this disclaimer at any time without
        prior notice. Any changes will be posted on this page, and the Last &ldquo;Updated&ldquo; date at the top of the page will be
        revised accordingly.
      </p>

      <p className="mt-6">
        By using this website and any services provided, you agree to the terms outlined in this disclaimer.
      </p>
    </div>
    </>
  );
};

export default Disclaimer;

