'use client';
import React, { useState } from 'react';
import HeroSection from '@/components/herosection';

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(false);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          company: 'Resonance3D',
          message: formData.message,
        }),
      });

      const result = await response.json();
      
      if (response.ok) {
        setFormSubmitted(true);  // Show success message
      } else {
        setErrorMessage(result.message || 'Something went wrong.');
      }
    } catch (error) {
      setErrorMessage('Failed to send message.');
      console.error('Error:', error);
    }
  };

  return (
    <>
      <HeroSection
        backgroundImage="/images/ai/car.jpg" 
        title="Welcome to Resonance 3D"
        subtitle="Delivering immersive 3D, AR, and VR experiences"
        pageHeadline="Feel free to reach us"
      />
      <div className="min-h-screen bg-stone-950 flex flex-col py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          {/* Left Section - Office Info */}
          <div className="p-8" style={{ border: '1px solid red', borderRadius: '15px', boxShadow: '0px 5px 10px rgb(255, 0, 0)' }}>
            <h1 className="text-3xl font-bold text-center text-white mb-6">Our <span className="text-customRed">Office</span></h1>
            {/* Office Info Content */}
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-white">Visit Us</h2>
              <p className="text-white mt-2">We are located in the heart of the city, easily accessible from all parts of the town...</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-white">Contact <span className="text-customRed">Details</span></h2>
              <p className="text-white">Email: <span className="text-customRed">info@resonance3d.com</span></p>
              <p className="text-white">Phone: <span className="text-customRed">(+91) 880-998-9996</span></p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-white">Location</h2>
            <p className="text-white mb-2">47, konar pull,</p>
            <p className="text-white mb-2">Near kshitij Hospital,</p>
            <p className="text-white mb-2">opposite piaggio showroom,</p>
            <p className="text-white mb-2">Hazaribagh, Jharkhand-825301, India</p>
            <p className='text-white'> Email&nbsp;:- &nbsp;<span className='text-customRed'> &nbsp;info@resonance3d.com</span></p>
            <p className='text-white'> Phone&nbsp;:- &nbsp;<span className='text-customRed'>(+91) 880-998-9996</span> </p>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="p-8 rounded-lg shadow-xl" style={{ border: '1px solid red', borderRadius: '15px', boxShadow: '0px 5px 10px rgb(255, 0, 0)' }}>
            <h1 className="text-3xl font-bold text-center text-white mb-6">Contact <span className="text-customRed">Us</span></h1>
            {formSubmitted ? (
              <div className="text-center text-green-500">
                <p>Your message has been sent successfully!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6">
                  {/* First Name Field */}
                  <div>
                    <label htmlFor="firstName" className="block text-lg font-medium text-white">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="w-full px-4 py-2 mt-2 rounded-md text-white bg-gray-700 focus:outline-customRed outline-none"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Last Name Field */}
                  <div>
                    <label htmlFor="lastName" className="block text-lg font-medium text-white">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="w-full px-4 py-2 mt-2 rounded-md text-white bg-gray-700 focus:outline-customRed outline-none"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-lg font-medium text-white">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full px-4 py-2 mt-2 rounded-md text-white bg-gray-700 focus:outline-customRed outline-none"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-lg font-medium text-white">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="w-full px-4 py-2 mt-2 rounded-md text-white bg-gray-700 focus:outline-customRed outline-none"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-lg font-medium text-white">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      className="w-full px-4 py-2 mt-2 rounded-md text-white bg-gray-700 focus:outline-customRed outline-none"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center mt-6">
                    <button
                      type="submit"
                      className="bg-customRed text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-customRed"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            )}
            {errorMessage && <div className="text-center text-red-500 mt-4">{errorMessage}</div>}
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-8 px-6">
          <h2 className="text-2xl font-bold text-center text-white mb-4">Find Us on Google Maps</h2>
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
    </>
  );
};

export default ContactUsPage;
