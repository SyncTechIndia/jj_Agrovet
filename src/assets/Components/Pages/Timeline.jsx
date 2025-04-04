import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const journeyData = [
  { year: "2012", event: "Company was started The name of SONU POULTRY", details: "" },
  { year: "2015", event: "Deals in Trading and Own Farming till.", details: "" },
  { year: "2016", event: "Sonu Poultry introduced in Integration from 2016 with Fourty thousand placement per month.", details: "" },
  { year: "2021", event: "From 2021 start J AND J Agrovet Private Limited with one lac placement per month.", details: " " }
];

const colors = ["bg-green-600", "bg-amber-700"];

const Timeline = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center overflow-hidden mt-24 z-0">
      {journeyData.map((item, index) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="relative w-full flex items-center mb-12 z-0"
        >
          {/* Card with Alternating Year Box */}
          <div className="w-full flex justify-center relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative bg-white shadow-2xl rounded-lg p-6 w-[34rem] border border-green-500 hover:shadow-green-400 transition-all flex items-center z-0"
            >
              {/* Year Box - Alternates Left and Right with Animation */}
              <motion.div 
                initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                whileHover={{ scale: 1.1 }}
                className={`absolute top-0 h-full w-24 text-white flex items-center justify-center shadow-md text-3xl font-extrabold ${colors[index % 2]} ${index % 2 === 0 ? 'right-0 rounded-r-lg' : 'left-0 rounded-l-lg'} z-0`}
              >
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.4 }}
                >
                  {item.year}
                </motion.h3>
              </motion.div>
              
              <div className={`${index % 2 === 0 ? 'pr-28' : 'pl-28'} text-center`}>
                <p className="text-lg font-semibold text-gray-900">{item.event}</p>
                <p className="text-gray-600 mt-2">{item.details}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
