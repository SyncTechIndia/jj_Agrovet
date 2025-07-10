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
          The Journey of J and J Agrovate
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
              J and Agrovet Private Limited is a trusted name in the poultry industry with over a decade of experience, innovation, and sustainable growth. 
              Our journey was initiated by Mr. Sohil Ahmad,
               a passionate entrepreneur with a vision to modernize poultry farming in India.
            </p>
            <p className="text-lg text-yellow-700 font-bold leading-relaxed">
              It all began in 2012, when he founded Sonu Poultry Farm, 
              focusing on poultry trading and own farming. With consistent quality and ethical practices, 
              the venture quickly earned a reputation for reliability and growth.
            </p>
            <p className="text-lg text-yellow-700 font-bold leading-relaxed">
              In 2016, the company expanded into poultry integration, starting with 40,000 bird placements per month. 
              This move marked a shift toward a more systematic and scalable farming model.
            </p>
            <p className="text-lg text-yellow-700 font-bold leading-relaxed">
              Building on this momentum, Jand Agrovet Private Limited was established in 2021, 
              with an increased placement capacity of 1,00,000 birds per month. Under 
              Mr. Sohil Ahmad’s leadership, the company continues to focus on integrated farming, 
              quality production, and strong partnerships with local farmers.
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
