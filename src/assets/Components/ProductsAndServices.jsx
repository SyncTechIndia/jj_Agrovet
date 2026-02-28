import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HomeIcon, BuildingOfficeIcon } from "@heroicons/react/24/solid";
import { GiChicken } from "react-icons/gi"; 
import { FaEgg } from "react-icons/fa"; 

const services = [
  { id: 1, title: "Breeder Farms", icon: <HomeIcon className="w-12 h-12 text-green-700" /> },
  { id: 2, title: "Hatchery", icon: <FaEgg className="w-12 h-12 text-green-700" /> },
  { id: 3, title: "Feed Mill", icon: <BuildingOfficeIcon className="w-12 h-12 text-green-700" /> },
  { id: 4, title: "Contract Broiler Farming", icon: <GiChicken className="w-12 h-12 text-green-700" /> },
];

function ServicesSection() {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    navigate('/product', { state: { serviceId } });
  };

  return (
    <div className="py-10 px-4 bg-white">
      <h2 className="text-2xl font-semibold text-center mb-6">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            onClick={() => handleServiceClick(service.id)}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ boxShadow: "0px 10px 20px rgba(34, 197, 94, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center 
                      bg-blue-50 rounded-xl shadow-md p-6 text-center cursor-pointer transition-all hover:text-lg"
          >
            {service.icon}
            <h3 className="mt-3 text-gray-700 font-medium transition-all hover:text-xl">{service.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
