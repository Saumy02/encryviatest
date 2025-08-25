// src/pages/Contact.jsx
// 📞 Contact page jahan users aapse contact kar sakte hain
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-80px-300px)] flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center text-purple-400">Contact Us</h1>
      <p className="text-lg md:text-xl text-center mb-6">
        We'd love to hear from you! Please fill out the form below or reach us directly.
      </p>

      {/* 📝 Yahan aap apna Contact Form ya details add kar sakte hain */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="your@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold py-2 px-4 rounded-md hover:from-purple-700 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-400">Or connect with us:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="mailto:contact@encryvia.com" className="text-purple-400 hover:text-purple-300">Email</a>
          <a href="tel:+911234567890" className="text-purple-400 hover:text-purple-300">Phone</a>
          {/* Add social media links here if needed */}
        </div>
      </div>
    </div>
  );
};

export default Contact;