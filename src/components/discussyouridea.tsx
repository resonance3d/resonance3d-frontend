"use client";

import React, { useState } from 'react';
import ContactUsmain from './contactUS';

const DiscussYourIdea = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
    file: null as File | null,  // Explicitly defining the file type as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      message: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file && file.size > 5000000) {
      alert("File is too large. Max size is 5MB.");
      return;
    }
    setFormData({
      ...formData,
      file: file,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          message: '',
          file: null,
        });
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    }
  };
  

  return (
    <>
    <div className=" text-white bg-[#0b090a] py-8">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0 md:space-x-4">
        
       

        {/* Vertical Line Separator */}
        <div className="h-auto w-1 bg-white mx-4 md:mx-0"></div>
        {/* Contact Us Section */}
          <ContactUsmain />
         {/* Discuss Your Idea Section */}
         <div className="w-full md:w-1/2 p-6  bg-[#000000]" style={{           border: '1px solid red', // Red border for contrast
                borderRadius: '15px', // Rounded corners for smooth appearance
                boxShadow: '0px 5px 10px rgb(255, 0, 0)', // Subtle shadow to elevate the box
              }}
            >
          <h2 className="text-3xl font-bold mb-4">Discuss <span className='text-customRed'>Your Idea</span></h2>
          <p className="text-lg mb-6">Let us bring your ideas to life with the latest technology!</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 mt-2 text-white rounded-md bg-gray-700 focus:outline-customRed outline-none" 
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium" >Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 mt-2  rounded-md text-white bg-gray-700 focus:outline-customRed outline-none" 
                  // style={{           border: '1px solid red', // Red border for contrast
                    //borderRadius: '7px', // Rounded corners for smooth appearance
                   //backgroundColor: "#1f2937"
                 // }}
              
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 mt-2  rounded-md text-white  bg-gray-700 focus:outline-customRed outline-none"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mt-2  rounded-md text-white  bg-gray-700 focus:outline-customRed outline-none" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleTextAreaChange}
                className="w-full px-4 py-2 mt-2  rounded-md text-white  bg-gray-700 focus:outline-customRed outline-none"
                rows={4}
              />
            </div>

            <div>
              <label htmlFor="file" className="block text-sm font-medium">Upload a file (optional)</label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
                className="w-full mt-2"
                
              />
            </div>
            <div>
              <button type="submit" className="w-full bg-customRed py-3 text-white font-semibold rounded-md shadow-md  focus:outline-none focus:ring-2 focus:ring-customRed">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default DiscussYourIdea;
