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
      className="h-screen flex items-center justify-center bg-cover bg-center w-full"
    >
      <div className="flex flex-col md:flex-row w-full h-full items-center justify-center">
        
        {/* Text Section - First on big screens */}
        <div 
          className="w-full md:w-2/3 bg-green-800 p-10 text-center flex flex-col justify-center items-center 
                     rounded-tl-[250px] rounded-tr-[250px] 
                     md:rounded-tr-[250px] md:rounded-br-[250px] md:rounded-tl-none order-2 md:order-1"
        >
          <motion.div initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 1 }} className="text-center">
            <h2 className="text-[3rem] sm:text-[4rem] md:text-[5rem] font-bold text-[#fdf1c8] font-['League_Spartan']">
              J and J<br />AGROVET
            </h2>
            <p className="text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] text-[#fdf1c8] font-light font-['League_Spartan']">
              Your Trust is our capital
            </p>
            <button className="mt-6 px-8 py-3 font-bold text-white bg-[#b06216] rounded-lg hover:bg-[#cc7a29]">
              About
            </button>
          </motion.div>
        </div>

        {/* Image Section - On the right on big screens */}
        <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">
  <motion.div 
    className="overflow-hidden shadow-2xl rounded-full 
               w-40 h-40 md:w-80 md:h-80 flex items-center justify-center bg-white"
    initial={{ scale: 0.8 }} 
    animate={{ scale: 1 }} 
    transition={{ duration: 0.8 }}
  >
    <motion.img 
      src={hen}
      alt="Agrovet"
      className="w-full h-full object-cover rounded-full shadow-lg"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    />
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
