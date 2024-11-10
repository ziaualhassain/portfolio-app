import { useState } from 'react';

export default function ContactCard() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with your actual Google Form URL
    const googleFormUrl = 'https://docs.google.com/forms/d/e/your_form_id/formResponse';

    // Prepare the data to send to Google Forms
    const formDataToSend = new FormData();
    formDataToSend.append('entry.1234567890', formData.name);   // entry.1234567890 should be replaced with actual Google Form entry IDs
    formDataToSend.append('entry.0987654321', formData.email);  // Same for email and message
    formDataToSend.append('entry.1122334455', formData.message);

    try {
      // Send data to Google Forms
      await fetch(googleFormUrl, {
        method: 'POST',
        body: formDataToSend,
      });
      alert('Your message has been sent!');
      setFormData({ name: '', email: '', message: '' });  // Reset the form
    } catch (error) {
      alert('Error submitting form');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
