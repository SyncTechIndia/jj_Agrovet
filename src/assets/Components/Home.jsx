import React from "react";
import { motion } from "framer-motion";
import hen from "../images2/hen.jpg";
import ProductsAndServices from './ProductsAndServices'
import Aboutus from "./Aboutus";
import Footer from "./Footer"

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex flex-col items-center justify-center bg-white w-full pt-20 md:pt-24"
      >
        {/* Mobile Layout - Vertical Stack */}
        <div className="flex flex-col md:flex-row w-full h-full items-center justify-center">
          
          {/* Image Section - Top on mobile, right on desktop */}
          <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2 mb-6 md:mb-0">
            <motion.div
              className="overflow-hidden shadow-lg rounded-full border-4 border-orange-400
                        w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 
                        flex items-center justify-center bg-white"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src={hen}
                alt="Agrovet"
                className="w-full h-full object-cover rounded-full"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </motion.div>
          </div>

          {/* Text Section - Bottom on mobile, left on desktop */}
          <div className="w-full md:w-2/3 bg-green-800 text-center flex flex-col justify-center items-center
                         rounded-t-[50px] md:rounded-tl-none md:rounded-tr-[250px] md:rounded-br-[250px] 
                         order-2 md:order-1 py-8 px-0 md:p-10 min-h-[50vh] md:min-h-[60vh]"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 1, delay: 0.3 }} 
              className="text-center"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#fdf1c8] font-['League_Spartan'] leading-tight mb-2">
                J & J<br />Agrovate
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-[#fdf1c8] font-light font-['League_Spartan'] mb-8 uppercase tracking-wide">
                Your Trust is our Capital
              </p>
              <motion.button 
                className="px-8 py-3 font-bold text-white bg-[#b06216] rounded-full hover:bg-[#cc7a29] 
                          transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105
                          text-sm sm:text-base uppercase tracking-wider"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      <ProductsAndServices/>
      <Aboutus/>
    </>
  );
};

export default Home;