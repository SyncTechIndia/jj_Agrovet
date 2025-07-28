import React from "react";
import fot_logo from '../Images/fot_logo.png';
import fot_logo1 from '../Images/brand.png';
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const links = [
  {name : 'Home', path: '/' },
  {name : 'About Us', path: '/about'},
  { name: 'product', path: '/services' },
];


const Footer = () => {
  return (
    <footer className="bg-green-800 text-white mt-7 py-10 px-6 md:px-16 rounded-t-full mx-2 md:mx-4">
      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        
        {/* Logo Centered */}
        <div className="md:col-span-3 flex justify-center">
  <div className="w-32 h-26 bg-white rounded-full flex items-center justify-center">
    <img src={fot_logo1} alt="Logo" className="w-25 h-20 rounded-full" />
  </div>
</div>



{/* const links = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
]; */}

        {/* Quick Links */}
        {/* <div>
          <h2 className="text-xl font-bold underline mb-2">Quick Links</h2>
          <ul className="space-y-2 text-lg">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact Us</a></li>
          </ul>
        </div> */}

{/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-300 border-b border-blue-800/50 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-blue-300 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold underline mb-2">Contact</h2>
          <ul className="space-y-2 text-lg">
            <li>8601415108</li>
            <li>jandjagrovet@gmail.com</li>
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
