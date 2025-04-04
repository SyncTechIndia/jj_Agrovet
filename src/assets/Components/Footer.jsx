import React from "react";
import fot_logo from '../Images/fot_logo.png';
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white mt-7 py-10 px-6 md:px-16 rounded-t-full mx-2 md:mx-4">
      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        
        {/* Logo Centered */}
        <div className="md:col-span-3 flex justify-center">
          <img src={fot_logo} alt="Logo" className="w-24 h-24 rounded-full" />
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold underline mb-2">Quick Links</h2>
          <ul className="space-y-2 text-lg">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">About</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold underline mb-2">Contact</h2>
          <ul className="space-y-2 text-lg">
            <li>7777888999</li>
            <li>demo@synctechindia.com</li>
            <li>Pune, India</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-bold underline mb-2">Socials</h2>
          <ul className="space-y-2 text-lg">
            <li className="flex items-center space-x-2">
              <FaInstagram />
              <a href="#" className="hover:text-yellow-400">Instagram</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaLinkedin />
              <a href="#" className="hover:text-yellow-400">LinkedIn</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaTwitter />
              <a href="#" className="hover:text-yellow-400">Twitter</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-yellow-200 text-green-900 text-center text-lg font-semibold py-3 mt-6 rounded-t-3xl rounded-l-[90px] rounded-r-[90px]">
        Design and Developed by Synctech India Pvt. Ltd
      </div>
    </footer>
  );
};

export default Footer;
