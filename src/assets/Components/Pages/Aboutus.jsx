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
    image: teamImages['../../Images/coreTeam/suhel.jpeg']?.default || ''
  },
  {
    id: 2,
    name: "MD. Irfan ",
    position: "General Manager",
    mobile: "+91 7052638609 ",
    email: " mdirfanmaklipur@gmail.com",
    image: teamImages['../../Images/coreTeam/irfaan.jpeg']?.default || '',
     bio: "Visionary leader with 15+ years in sustainable agriculture",
    color: "from-violet-500 to-purple-600"
  },
  {
    id: 2,
    name: "Mr. Kamaluddin Khan ",
    position: "Admin Manager",
    mobile: "+91 86014 15108",
    email: "kamaluddin7@gmail.com",
    image: teamImages['../../Images/coreTeam/kamaluddin.jpeg']?.default || ''
  },
  {
    id: 3,
    name: "Mr. Shamseer Ahamad ",
    position: "HOD – Accounts",
    mobile: "+91 91293 41068",
    email: "shamseerahmad789@gmail.com",
    image: teamImages['../../Images/coreTeam/sales_head.jpeg']?.default || ''
  },
  {
    id: 4,
    name: "Shamsheer",
    position: "Position 4",
    mobile: "+91 12345 67893",
    email: "shamsheer@company.com",
    image: teamImages['../../Images/coreTeam/shamsheer.jpeg']?.default || ''
  },

  {
    id: 6,
    name: "Mohd. Taukeer Ahamad ",
    position: "HOD – Finance (Feed Mill)",
    mobile: "+91 85760 74749",
    email: "mohdtaukeer01@gmail.com",
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
      <div className="bg-slate-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-slate-800">
            Meet Our Team
          </h2>
          <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto text-lg">
            The passionate innovators driving our mission to revolutionize sustainable agriculture
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
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
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-500 group-hover:w-full transition-all duration-500"></div>
                </div>

                {/* Info Section */}
                <div className="p-6 relative">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2 transition-colors duration-300 group-hover:text-amber-700">
                    {member.name}
                  </h3>
                  <p className="text-amber-700 font-semibold mb-3 text-sm uppercase tracking-wide">
                    {member.position}
                  </p>
                  <p className="text-slate-600 text-sm mb-4">
                    {member.bio}
                  </p>
                  
                  {/* Contact Details - Shows on Hover */}
                  <div className="space-y-2 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500">
                    <div className="pt-4 border-t border-slate-200">
                      <div className="flex items-start gap-2 text-slate-700 mb-2">
                        <span className="font-semibold text-amber-700 min-w-fit">Phone:</span>
                        <a href={`tel:${member.mobile}`} className="hover:text-amber-700 transition-colors">
                          {member.mobile}
                        </a>
                      </div>
                      <div className="flex items-start gap-2 text-slate-700">
                        <span className="font-semibold text-amber-700 min-w-fit">Email:</span>
                        <a href={`mailto:${member.email}`} className="hover:text-amber-700 transition-colors break-all">
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