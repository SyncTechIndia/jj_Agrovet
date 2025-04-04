import React from "react";
import { motion } from "framer-motion";
import hen from "../images2/poultry.jpg";

function Aboutus() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center bg-cover bg-center m-0 p-0 w-full"
    >
      <div className="w-full">
        <motion.h5
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-green-800 text-white w-1/2 p-2 rounded-r-3xl font-bold"
        >
          Journey Started in 2001
        </motion.h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-6 w-full">
          {/* Text Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="px-6"
          >
            <h2 className="text-4xl font-bold text-green-800 text-left mb-4">
              About J and J Agrovet
            </h2>
            <p className="text-lg text-yellow-700 font-bold leading-relaxed">
              Company was started in 2012 as the name of SONU POULTRY FARM.
              Deals in Trading and Own Farming till 2015. Sonu Poultry introduced
              in Integration from 2016 with forty thousand placements per month.
              From 2021, J AND J Agrovet Private Limited started with one lakh
              placements per month.
            </p>
          </motion.div>
          {/* Image Section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
            className="bg-green-800 rounded-l-full flex justify-center items-center overflow-hidden w-full"
          >
            <motion.img
              src={hen}
              alt="Agrovet"
              className="w-full h-full max-h-[350px] object-cover rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Aboutus;
