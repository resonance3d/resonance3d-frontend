'use client';
import React from "react";

const ContactUsmain = () => {
  return (
    <div
      className="w-full md:w-1/2 text-center bg-[#000000] shadow-lg py-5"
      style={{
        border: '1px solid red', // Red border for contrast
        borderRadius: '15px', // Rounded corners for smooth appearance
        boxShadow: '0px 5px 10px rgb(255, 0, 0)', // Subtle shadow to elevate the box
      }}
    >
      <h2 className="text-3xl font-bold text-white">
        Contact <span className="text-customRed">Us</span>
      </h2>

      <div className="text-black">
        <h3 className="text-xl font-semibold text-customRed">Our Office</h3>
        <p className="text-white mb-2">47, konar pull,</p>
        <p className="text-white">Near kshitij Hospital,</p>
        <p className="text-white mb-2">opposite piaggio showroom,</p>
        <p className="text-white mb-2">Hazaribagh, Jharkhand-825301, India</p>
        <p className="text-white">
          Email&nbsp;:-&nbsp;<span className="text-customRed">&nbsp;info@resonance3d.com</span>
        </p>
        <p className="text-white">
          Phone&nbsp;:-&nbsp;<span className="text-customRed">(​+91) 880-998-9996</span>
        </p>

        <div className="mt-6">
          <a
            href="mailto:info@resonance3d.com"
            className="bg-customRed text-white py-2 px-6 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Email Us
          </a>
        </div>
      </div>

      <div className="mt-8 px-6">
        {/* <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">Find Us on Google Maps</h2> */}
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.738653087329!2d85.37205297628451!3d23.969680078521474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f49b0bcb972439%3A0xe31667c66ba327d2!2sResonance3D%20Pvt.Ltd.!5e0!3m2!1sen!2sin!4v1733136055119!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsmain;
