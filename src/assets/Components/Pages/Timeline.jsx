import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const journeyData = [
  { year: "2012", event: "The Beginning - Sonu Poultry Farm", details: "Founded by Mr. Suhel Ahmad, focusing on poultry trading and own farming with a strong emphasis on quality and ethical practices." },
  { year: "2016", event: "Expansion into Poultry Integration", details: "Business expanded with 40,000 bird placements per month, marking a transition to a more structured and scalable model." },
  { year: "2021", event: "J and J Agrovet Private Limited", details: "Officially established, increasing capacity to 1,00,000 birds per month, driving integrated farming and strong partnerships with local farmers." },
  { year: "Today", event: "A Decade of Excellence", details: "A trusted name in the Indian poultry industry, built on innovation, sustainable growth, and commitment to a progressive poultry ecosystem." }
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
              className="group relative bg-white shadow-2xl rounded-lg p-6 w-[34rem] border border-green-500 hover:shadow-green-400 transition-all flex items-center z-0"
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
                <p className="text-xl font-bold text-green-700 mb-2">{item.event}</p>
                <p className="text-gray-700 mt-2 leading-relaxed max-h-0 opacity-0 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500">{item.details}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
