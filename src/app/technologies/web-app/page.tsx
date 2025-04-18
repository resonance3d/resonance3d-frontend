import React from "react";
import TechnologiesHero from "@/components/technologiesHero";
import ContactUs from "../components/contactUs";
import Image from "next/image";

const WebMobileBackendDevelopment = () => {
  return (
    <>
      <TechnologiesHero />

      {/* Introduction */}
      <div className=" bg-stone-950 text-white py-6 px-6">
        <div className="container mx-auto flex items-center justify-between space-x-8">
          <div className="flex-1">
            <div className="text-3xl mb-4">💻📱</div>
            <h1 className="text-4xl font-bold mb-4 text-customRed underline underline-offset-8">
              Web & Mobile Development
            </h1>
            <p className="mb-8">
              At Resonance3D, we create end-to-end solutions for businesses with web, mobile, and backend development services. Our team builds seamless and scalable applications that ensure smooth user experiences and robust functionality for your business.
            </p>
            <p className="text-lg">
              We combine modern frameworks, responsive design, mobile-friendly features, and a powerful backend to deliver the best solutions for your business needs.
            </p>
          </div>

          <div className="flex-1">
                        <img
                          src="/images/ai/image-2-girl.jpg"
                          alt="AI Development"
                          
                          className="w-full h-auto object-contain rounded-lg"
                         
                        />
                      </div>
        </div>
      </div>

      {/* Our Development Services */}
      <div className=" bg-stone-950 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-customRed underline underline-offset-8">
            Our Development Services
          </h2>
          <p className="text-lg mb-6">
            Whether you need a responsive website, a mobile app, or a robust backend infrastructure, Resonance3D provides full-stack development services to bring your business ideas to life. We offer high-quality solutions tailored to your goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development Services */}
            <div className="bg-stone-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-customRed">Custom Web Development</h3>
              <p>
                We build custom, scalable, and secure websites that represent your brand and provide an excellent user experience. Whether it&apos;s an e-commerce platform or a content-driven website, we&apos;ve got you covered.
              </p>
            </div>

            <div className="bg-stone-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-customRed">Responsive Web Design</h3>
              <p>
                Our websites are built to be responsive, ensuring they look great and work seamlessly on devices of all sizes—from mobile phones to desktops.
              </p>
            </div>

            <div className="bg-stone-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-customRed">Web Application Development</h3>
              <p>
                We specialize in creating dynamic web applications that provide an interactive experience, from dashboards to user portals, and everything in between.
              </p>
            </div>

            {/* Mobile App Development */}
            <div className="bg-stone-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-customRed">iOS & Android App Development</h3>
              <p>
                We create native mobile applications for both iOS and Android, providing your users with high-quality, performance-optimized apps.
              </p>
            </div>

            <div className="bg-stone-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-customRed">Cross-Platform Mobile Apps</h3>
              <p>
                We use frameworks like React Native to build cross-platform apps that work seamlessly across iOS and Android with a single codebase.
              </p>
            </div>

            <div className="bg-stone-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-customRed">Mobile App Maintenance & Optimization</h3>
              <p>
                We provide ongoing support for your mobile applications, ensuring they remain up-to-date, secure, and optimized for performance.
              </p>
            </div>

            {/* Backend Development Services */}
            <div className="bg-stone-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-customRed">Custom Backend Development</h3>
              <p>
                We design custom backend solutions that power your web and mobile applications, ensuring they are fast, secure, and scalable to meet the growing needs of your business.
              </p>
            </div>

            <div className="bg-stone-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-customRed">API Development</h3>
              <p>
                Our team builds robust and secure APIs that enable your applications to communicate seamlessly with third-party services, mobile apps, and other systems.
              </p>
            </div>

            <div className="bg-stone-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-customRed">Cloud Integration</h3>
              <p>
                We integrate cloud solutions like AWS, Google Cloud, and Azure to ensure your application is scalable, cost-effective, and secure, handling increasing traffic and data loads.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Backend Technologies We Use */}
      <div className=" bg-stone-950 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-customRed underline underline-offset-8">
            Backend Technologies We Use
          </h2>
          <p className="text-lg mb-6">
            Our backend development services use the latest technologies to ensure your web and mobile applications are fast, secure, and reliable. We work with a range of tools and technologies to create scalable solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Backend Technologies */}
            <div className="bg-stone-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-customRed">Node.js</h3>
              <p>
                Node.js enables us to create fast and scalable server-side applications using JavaScript. It is perfect for building real-time applications and APIs.
              </p>
            </div>

            <div className="bg-stone-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-customRed">Django</h3>
              <p>
                Django is a high-level Python framework that allows us to quickly build secure and scalable web applications with an emphasis on clean, maintainable code.
              </p>
            </div>

            <div className="bg-stone-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-customRed">Ruby on Rails</h3>
              <p>
                Ruby on Rails is an open-source framework that enables rapid development of secure and scalable web applications using the Ruby programming language.
              </p>
            </div>

            <div className="bg-stone-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-customRed">Database Management</h3>
              <p>
                We use relational databases (e.g., PostgreSQL, MySQL) and NoSQL databases (e.g., MongoDB, Firebase) depending on your application&apos;s data requirements.
              </p>
            </div>

            <div className="bg-stone-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-customRed">GraphQL</h3>
              <p>
                We use GraphQL to build flexible and efficient APIs that allow clients to request only the data they need, enhancing performance and scalability.
              </p>
            </div>

            <div className="bg-stone-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-customRed">Cloud Services</h3>
              <p>
                We integrate cloud platforms like AWS, Google Cloud, and Azure to provide scalable backend infrastructure and optimize performance and security.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <ContactUs title="for your weba and mobile application" />
    </>
  );
};

export default WebMobileBackendDevelopment;
