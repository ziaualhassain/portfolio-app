import React, { useState } from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import axios from 'axios';

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
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [subject,setSubject] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(name,email,subject)
    const data = {
      Name : name,
      Email : email,
      Subject : subject
    }
    axios.post("https://api.sheetbest.com/sheets/d5b83fc0-609c-45ec-be0f-23232321fadb",data).then((response)=>{
      console.log(response)
      setName('')
      setEmail('')
      setSubject('')
    })
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
            <input type="text" id="name" name="name" required
              onChange={(e)=>setName(e.target.value)}
              value={name}
              className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" id="email" name="email" required
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
              className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
            <input
              type="text" id="subject"  name="subject" required
              onChange={(e)=>setSubject(e.target.value)}
              value={subject}
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
