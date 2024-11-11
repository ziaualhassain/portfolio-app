import React, { useState } from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="mt-6 flex space-x-6 justify-center">
      <a href="https://www.instagram.com/ziaualhassain" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-blue-500 text-3xl hover:text-blue-700 transition duration-300" />
      </a>
      <a href="https://twitter.com/ziaualhassain" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-blue-500 text-3xl hover:text-blue-700 transition duration-300" />
      </a>
      <a href="https://www.linkedin.com/in/ziaualhassain/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-blue-500 text-3xl hover:text-blue-700 transition duration-300" />
      </a>
      <a href="https://github.com/ziaualhassain" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-blue-500 text-3xl hover:text-blue-700 transition duration-300" />
      </a>
    </div>
  );
};

const ContactCard = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: ''
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the form data from the state
    const data = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
    };

    console.log("Form Data:", data);  // Log the form data to ensure it's correct

    // Send POST request to Google Apps Script Web App
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyBrDutxbrttVG4bL8g4Dxx7EsRL6tD1NMc7JTHoIIJoRUrsXVsniy91Mk4t7KNn3cTGw/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      console.log("Response Status:", response.status);  // Log the response status
      console.log("Response Body:", result);  // Log the response body

      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your form.');
    }
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center p-10">
      {/* Card Container */}
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden p-8">
        
        {/* Card Header */}
        <div className="text-center py-4">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
        </div>

        {/* Card Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4 text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Social Media Links */}
        <SocialLinks />
      </div>
    </div>
  );
};

export default ContactCard;
