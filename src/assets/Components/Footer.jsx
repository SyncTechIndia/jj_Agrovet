import React from "react";
// import fot_logo from '../Images/fot_logo.png';
import fot_logo1 from '../Images/brand.png';
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/services' },
];

const socialLinks = [
  { name: 'Instagram', icon: FaInstagram, url: '#', color: 'hover:text-pink-400' },
  { name: 'LinkedIn', icon: FaLinkedin, url: '#', color: 'hover:text-blue-400' },
  { name: 'Twitter', icon: FaTwitter, url: '#', color: 'hover:text-sky-400' },
];

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white mt-16 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative container mx-auto max-w-7xl px-6 md:px-12 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-1 flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-28 h-28 bg-white rounded-2xl shadow-xl flex items-center justify-center mb-4 transform hover:scale-105 transition-transform duration-300">
              <img src={fot_logo1} alt="Logo" className="w-24 h-20 object-contain" />
            </div>
            <p className="text-green-100 text-center md:text-left text-sm leading-relaxed max-w-xs">
              Providing quality agricultural and veterinary solutions for a better tomorrow.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 text-yellow-300 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-yellow-300 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className="text-green-100 hover:text-yellow-300 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-yellow-300 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-yellow-300 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <FaPhone className="text-yellow-300 mt-1 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:8601415108" className="text-green-100 hover:text-yellow-300 transition-colors">
                  8601415108
                </a>
              </li>
              <li className="flex items-start group">
                <FaEnvelope className="text-yellow-300 mt-1 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:jandjagrovet@gmail.com" className="text-green-100 hover:text-yellow-300 transition-colors break-all">
                  jandjagrovet@gmail.com
                </a>
              </li>
              <li className="flex items-start group">
                <FaMapMarkerAlt className="text-yellow-300 mt-1 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-green-100">Pune, India</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 text-yellow-300 relative inline-block">
              Follow Us
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-yellow-300 rounded-full"></span>
            </h3>
            <div className="space-y-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className={`flex items-center text-green-100 ${social.color} transition-all duration-200 group`}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-green-700/50 flex items-center justify-center mr-3 group-hover:bg-green-600/50 transition-colors">
                      <Icon className="text-lg" />
                    </div>
                    <span>{social.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-green-600 to-transparent mb-8"></div>

        {/* Footer Bottom */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 text-green-900 py-4 px-8 rounded-full inline-block shadow-lg"> */}
            <p className="text-sm md:text-base font-semibold">
              Design and Developed by{" "}
              <span className="font-bold">Synctech India IT Solutions</span>
            </p>
          {/* </div> */}
          <p className="text-green-300 text-sm mt-4">
            © {new Date().getFullYear()} J&J Agrovet. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;