import React from "react";
interface ContactUsProps {
    title: string
}
const ContactUs: React.FC<ContactUsProps> = ({ title}) => {
  return (

<div className="bg-stone-950 text-white py-6 px-6">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4 text-customRed">Let;s Collaborate!</h2>
    <p className="text-lg mb-8">
      We&#39;re excited to bring your ideas to life with cutting-edge <span className="text-customRed font-bold">{title}</span>. Whether you&#39;re in real estate, fashion, furniture, or any other industry, we&#39;re here to help make your projects stand out.
    </p>
    <p className="mb-6">
      Reach out to us, and let&#39;s create something amazing together!
    </p>
    <div className="mb-6">
      <p className="text-lg font-semibold">Contact us directly:</p>
      <div className="space-y-4">
        <a
          href="mailto:info@resonance3d.com" // Replace with your actual contact email
          className="inline-block bg-customRed text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105"
        >
          Email Us
        </a>
        <div>
          <p className="text-lg font-semibold">WhatsApp:</p>
          <a
            href="https://wa.me/8809989996" // 
            className="text-customRed text-lg font-semibold"
          >
            +91 880-998-9996
          </a>
        </div>
        <div>
          <p className="text-lg font-semibold">Mobile:</p>
          <a
            href="tel:+918809989996" // Replace with your mobile number
            className="text-customRed text-lg font-semibold"
          >
            +91 880-998-9996
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default ContactUs;