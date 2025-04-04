import React, { useEffect, useState } from "react";
import { FaBullseye, FaEye, FaAward } from "react-icons/fa";
import Timeline from "./Timeline";

const Aboutus = () => {

const journeyData = [
  { year: 2015, event: "Founded", details: "Our company was established with a vision to revolutionize agriculture." },
  { year: 2017, event: "First Innovation Award", details: "Recognized for our groundbreaking eco-friendly farming solutions." },
  { year: 2019, event: "Global Expansion", details: "Expanded operations to multiple countries, impacting global farming techniques." },
  { year: 2021, event: "Sustainability Milestone", details: "Achieved 100% sustainable product line." },
  { year: 2023, event: "Industry Leader", details: "Ranked as a top sustainable agriculture brand worldwide." }
];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 300) setVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-20 px-4">
      {/* Page Title */}
      <h2 className="text-5xl font-extrabold text-green-700 mb-10 text-center font-serif">
        About Us
      </h2>

      {/* Company Journey Timeline */}
      <div className="relative w-full max-w-4xl">
        <Timeline />
      </div>

      {/* Achievements Section */}
      <h3 className="text-3xl font-bold text-green-700 mt-16 mb-6 text-center font-serif">
        Our Achievements
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {journeyData.map((item) => (
          <div key={item.year} className="p-6 bg-white shadow-md rounded-lg">
            <FaAward className="text-4xl text-yellow-500 mx-auto mb-3" />
            <h4 className="text-xl font-bold text-green-700 text-center font-serif">
              {item.event}
            </h4>
            <p className="text-gray-600 text-center font-sans">{item.details}</p>
          </div>
        ))}
      </div>

      {/* Vision & Mission Section */}
      <h3 className="text-3xl font-bold text-green-700 mt-16 mb-6 text-center font-serif">
        Our Vision & Mission
      </h3>
      <div className="flex flex-col md:flex-row gap-10 max-w-5xl">
        <div className="flex-1 bg-white shadow-md p-6 rounded-lg text-center">
          <FaEye className="text-5xl text-blue-600 mx-auto mb-4" />
          <h4 className="text-xl font-bold text-green-700 font-serif">Our Vision</h4>
          <p className="text-gray-600 font-sans">
          Build a national food company specializing in producing high quality
protein, driven by utilization of ethical, sustainable and environmental
friendly technologies.
          </p>
        </div>
        <div className="flex-1 bg-white shadow-md p-6 rounded-lg text-center">
          <FaBullseye className="text-5xl text-red-600 mx-auto mb-4" />
          <h4 className="text-xl font-bold text-green-700 font-serif">Our Mission</h4>
          <p className="text-gray-600 font-sans">
          To provide farmers and consumers with top-quality poultry products
through cutting-edge techniques, meticulous care, and sustainable
practices, thereby revolutionizing the poultry farming landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;