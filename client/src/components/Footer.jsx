import React from 'react';
import {  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';


import insta1 from "../assets/instagram-1.jpg"
import insta2 from "../assets/instagram-2.jpg"
import insta3 from "../assets/instagram-3.jpg"
import insta4 from "../assets/instagram-4.jpg"
import insta5 from "../assets/instagram-5.jpg"
import insta6 from "../assets/instagram-6.jpg"





const Footer = () => {
  return (
    <footer className=" py-10 mt-32">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Contact Info</h3>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt  className="text-red-600 dark:text-red-400"/>
            <span>123, London Bridge Street, London</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-red-600 dark:text-red-400"/>
            <span>support@leobaba.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-red-600 dark:text-red-400" />
            <span>(+92) 316 496 3275</span>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Company</h3>
          <ul>
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Work With Us</a></li>
            <li><a href="#" className="hover:underline">Our Blog</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Useful Links</h3>
          <ul>
            <li><a href="#" className="hover:underline">Help</a></li>
            <li><a href="#" className="hover:underline">Track My Order</a></li>
            <li><a href="#" className="hover:underline">Men</a></li>
            <li><a href="#" className="hover:underline">Women</a></li>
            <li><a href="#" className="hover:underline">Dresses</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Instagram</h3>
          <div className="grid grid-cols-3 gap-2">
            <img src={insta1} alt="Instagram 1" className="w-full" />
            <img src={insta2} alt="Instagram 2" className="w-full" />
            <img src={insta3} alt="Instagram 3" className="w-full" />
            <img src={insta4} alt="Instagram 4" className="w-full" />
            <img src={insta5} alt="Instagram 5" className="w-full" />
            <img src={insta6} alt="Instagram 6" className="w-full" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


