import React, { useEffect, useState } from "react";
import { FaBullseye, FaEye, FaAward, FaPhone, FaEnvelope } from "react-icons/fa";
import Timeline from "./Timeline";


// Dynamic import of core team images
const teamImages = import.meta.glob('../../Images/coreTeam/*.jpeg', { eager: true });

// Team members data with placeholders
const teamMembers = [
    {
    id: 1,
    name: "Mr. Suhel Ahmad  ",
    position: "Director",
    mobile: "+91 8874902905",
    email: " jandjagrovet@gmail.com",
    thought: "Our vision is to deliver safe, healthy, and affordable poultry products. We believe poultry farming is not just about producing food—it's about nourishing communities, empowering farmers, and ensuring sustainability for future generations. We are committed to innovation at every stage, from modern hatchery practices to eco-friendly feed solutions, ensuring that each step of our journey adds real value to society. Together with our dedicated team, we strive to build a responsible, resilient, and future-ready poultry ecosystem.",
    image: teamImages['../../Images/coreTeam/suhel.jpeg']?.default || ''
  },
   {
    id: 2,
    name: "Mr.Kumail Ahmad",
    position: "Director",
    mobile: "+91 9839422423 ",
    email: " kumalhmd@gmail.com",
    thought: "Our journey in poultry farming is not only about sustaining what we have built, but also about innovating for the future. We embrace modern technologies, strengthen partnerships with farmers, and ensure that our products consistently meet the highest standards of nutrition and safety.",
    image: teamImages['../../Images/coreTeam/director2.jpeg']?.default || ''
  },
  {
    id: 3,
    name: "MD. Irfan ",
    position: "General Manager",
    mobile: "+91 7052638609 ",
    email: " mdirfanmaklipur@gmail.com",
    thought: "Our strength lies in the dedication of our people and the precision of our operations. As General Manager, my priority is to ensure that every stage of our poultry production—from hatchery to market—runs smoothly, safely, and efficiently. We are committed to maintaining strict biosecurity, adopting modern farming practices, and continuously training our workforce to meet the highest industry standards. Our goal is not only to deliver healthy, high-quality poultry products, but also to build lasting trust with our customers and empower our farmers.",
    image: teamImages['../../Images/coreTeam/irfaan.jpeg']?.default || '',
    //  bio: "Visionary leader with 15+ years in sustainable agriculture",
    color: "from-violet-500 to-purple-600"
  },
  {
    id: 4,
    name: "Mr. Kamaluddin Khan ",
    position: "Admin Manager",
    mobile: "+91 86014 15108",
    email: "kamaluddin7@gmail.com",
    thought: "Ensuring smooth operations and fostering a culture of efficiency and teamwork.",
    image: teamImages['../../Images/coreTeam/kamaluddin.jpeg']?.default || ''
  },
  {
    id: 5,
    name: "Mr. Shamseer Ahamad ",
    position: "HOD – Accounts",
    mobile: "+91 91293 41068",
    email: "shamseerahmad789@gmail.com",
    thought: "Our mission is to ensure financial integrity and operational efficiency by effectively controlling costs, optimizing revenues, and embracing modern accounting practices. We are committed to transparency, regulatory compliance, and proactive risk management, while actively supporting innovation and sustainability across the organization. Through strategic financial leadership, we aim to strengthen profitability, enable sustainable growth, and deliver lasting value to our farmers, customers, and stakeholders.",
    image: teamImages['../../Images/coreTeam/shamsheer.jpeg']?.default || ''

  },
  {
    id: 6,
    name: "Mr.Mohammad Amjad",
    position: "Sales Head Broiler",
    mobile: "+91 9450531326",
    email: "Amzad.khan994@gmail.com",
    thought: "Driving sales excellence while building lasting relationships with our valued customers.",
    image: teamImages['../../Images/coreTeam/sales_head.jpeg']?.default || ''
  },

  {
    id: 7,
    name: "Mohd. Taukeer Ahamad ",
    position: "HOD – Finance (Feed Mill)",
    mobile: "+91 85760 74749",
    email: "mohdtaukeer01@gmail.com",
    thought: "Optimizing financial strategies to ensure sustainable growth and operational excellence.",
    image: teamImages['../../Images/coreTeam/tukeer.jpeg']?.default || ''
  }
];

const Aboutus = () => {

const journeyData = [
  // { year: 2015, event: "Founded", details: "Our company was established with a vision to revolutionize agriculture." },
  // { year: 2017, event: "First Innovation Award", details: "Recognized for our groundbreaking eco-friendly farming solutions." },
  // { year: 2019, event: "Global Expansion", details: "Expanded operations to multiple countries, impacting global farming techniques." },
  // { year: 2021, event: "Sustainability Milestone", details: "Achieved 100% sustainable product line." },
  // { year: 2023, event: "Industry Leader", details: "Ranked as a top sustainable agriculture brand worldwide." }
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
      {/* <h3 className="text-3xl font-bold text-green-700 mt-16 mb-6 text-center font-serif">
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
      </div> */}

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

  {/* Our Team Section */}
      <div className="bg-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-green-700">
            Meet Our Team
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
            The passionate innovators driving our mission to revolutionize sustainable agriculture
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-fit"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/400/8B4513/FFFFFF?text=${member.name}`;
                    }}
                  />
                  
                  {/* Bottom Border Effect on Hover */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-700 via-green-600 to-green-500 group-hover:w-full transition-all duration-500"></div>
                </div>

                {/* Info Section */}
                <div className="p-6 relative">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2 transition-colors duration-300 group-hover:text-green-700">
                    {member.name}
                  </h3>
                  <p className="text-green-700 font-semibold mb-3 text-sm uppercase tracking-wide">
                    {member.position}
                  </p>
                  
                  {/* Thought/Quote */}
                  <div className="text-gray-600 text-sm italic leading-relaxed max-h-20 overflow-hidden group-hover:max-h-96 transition-all duration-500">
                    "{member.thought}"
                  </div>
                  
                  {/* Contact Details - Shows on Hover */}
                  <div className="space-y-2 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500">
                    <div className="pt-4 border-t border-slate-200">
                      <div className="flex items-start gap-2 text-slate-700 mb-2">
                        <span className="font-semibold text-green-700 min-w-fit">Phone:</span>
                        <a href={`tel:${member.mobile}`} className="hover:text-green-700 transition-colors">
                          {member.mobile}
                        </a>
                      </div>
                      <div className="flex items-start gap-2 text-slate-700">
                        <span className="font-semibold text-green-700 min-w-fit">Email:</span>
                        <a href={`mailto:${member.email}`} className="hover:text-green-700 transition-colors break-all">
                          {member.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Aboutus;