import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h1>
      
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-600">Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-600">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-600">Message</label>
                <textarea className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Send Message</button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-4">Feel free to reach out to us through any of the following methods:</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="material-icons text-blue-500 mr-2">phone</span>
                <span className="text-gray-600">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <span className="material-icons text-blue-500 mr-2">email</span>
                <span className="text-gray-600">info@example.com</span>
              </li>
              <li className="flex items-center">
                <span className="material-icons text-blue-500 mr-2">location_on</span>
                <span className="text-gray-600">123 Main Street, Anytown, USA</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;