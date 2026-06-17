import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import breeder from "../../images2/BMS.jpg";
import hatchary from "../../images2/HMS.jpeg";
import feedmill from "../../images2/FM2.jpeg";
import cbf from "../../images2/cbf.png";

/* ===================== DATA ===================== */

const services = [
 {
  id: 1,
  title: "Breeder Farms",
  description:
    "At J AND J AGROVET PVT LIMIITED, our breeder farms are at the core of our poultry integration system. These farms are carefully managed to produce high-quality, disease-free hatching eggs that directly influence the strength, health, and productivity of our broiler birds.",

  sections: [
    {
      heading: "Scientific Management, Superior Results",
      points: [
        "Modern scientific breeder management practices",
        "Monitoring by trained farm professionals and veterinarians",
        "Optimal flock health and strict biosecurity",
        "High fertility and hatchability rates",
        "Consistent and uniform egg production",
        "Environment-controlled housing for stress-free bird management",
        "Strict vaccination and nutrition protocols for robust parent stock",
      ],
    },
    {
      heading: "From Egg to Chick — Quality at Every Step",
      points: [
        "Daily egg quality checks",
        "Safe storage in temperature-controlled environments",
        "Careful handling and transport to hatcheries",
        "Uniform, healthy day-old chick production",
        "Better performance and profitability for farmers",
      ],
    },
    {
      heading: "Why Our Breeder Farms Stand Out",
      points: [
        "Genetically superior parent stock",
        "High-performance feed and professional farm management",
        "Disease surveillance and laboratory support",
        "Dedicated breeding houses with controlled lighting and ventilation",
        "Strong focus on biosecurity, traceability, and bird welfare",
      ],
    },
  ],

  image: breeder,
},
{
  id: 2,
  title: "Hatchery",
  description:
    "At J AND J AGROVET PVT LIMIITED, our hatchery management system is designed to ensure maximum hatchability, chick uniformity, and biosecurity. Our hatcheries play a vital role in converting high-quality hatching eggs into strong, disease-free day-old chicks.",

  sections: [
    {
      heading: "Technology-Driven Precision",
      points: [
        "Fully automated and climate-controlled hatchery units",
        "Modern setters and hatchers for optimal incubation",
        "Automated temperature and humidity control systems",
        "CO₂ monitoring and advanced air circulation",
        "Backup power systems for uninterrupted operations",
        "Continuous monitoring by trained technical staff",
      ],
    },
    {
      heading: "Strict Hygiene & Biosecurity",
      points: [
        "Sanitization of eggs before incubation",
        "Controlled access to different hatchery zones",
        "Regular fumigation and disinfection routines",
        "Routine chick health checks by qualified veterinarians",
        "Low mortality rates and improved chick safety",
      ],
    },
    {
      heading: "High-Quality Day-Old Chicks",
      points: [
        "Chicks graded based on size and activity",
        "Vaccinated as per standard schedules",
        "Packed in ventilated chick boxes",
        "Delivered to farms within hours to reduce transport stress",
      ],
    },
    {
      heading: "Key Highlights",
      points: [
        "24x7 monitoring by hatchery specialists",
        "Traceable batch systems for quality control",
        "Vaccination and sexing services available",
        "Strong focus on uniformity, livability, and performance",
      ],
    },
  ],

  image: hatchary,
},

{
  id: 3,
  title: "Feed Mill",
  description:
    "At J AND J AGROVET PVT LIMIITED, we understand that feed is the foundation of poultry health and productivity. Our state-of-the-art feed mill produces nutritionally balanced, high-quality feed tailored to every stage of bird development.",

  sections: [
    {
      heading: "Precision Manufacturing, Consistent Quality",
      points: [
        "Modern machinery with automated grinding, mixing, and pelleting systems",
        "Accurate and uniform nutrient distribution in every batch",
        "Reduced feed wastage and improved digestibility",
        "High standards of sanitation and hygiene across the production process",
        "Responsibly sourced and tested raw materials",
      ],
    },
    {
      heading: "Scientifically Formulated Feed",
      points: [
        "Feed formulations developed with animal nutrition experts",
        "Customized formulas based on bird age, weight, and breed",
        "Adjusted formulations for environmental conditions and growth targets",
        "Balanced proteins, amino acids, energy sources, vitamins, and minerals",
        "Use of additives and probiotics as per veterinary guidance",
      ],
    },
    {
      heading: "Quality Control & Testing",
      points: [
        "Raw material analysis before production",
        "Moisture content monitoring and control",
        "Toxin (aflatoxin) testing in in-house laboratory",
        "Pellet durability and texture inspection",
        "Batch sample retention for traceability and accountability",
      ],
    },
    {
      heading: "Efficient Supply & Inventory",
      points: [
        "Timely dispatch of feed to farms",
        "Real-time inventory tracking system",
        "Bulk and bag packaging options",
        "Optimized feed logistics for freshness and minimal transit time",
      ],
    },
    {
      heading: "Key Highlights",
      points: [
        "Semi / fully automatic production lines",
        "Capacity customized to monthly placement requirements",
        "Dust control, temperature control, and pest prevention systems",
        "Batch coding, traceability, and quality logs",
        "Improved FCR (Feed Conversion Ratio) and bird health",
      ],
    },
  ],

  image: feedmill,
},


  {
    id: 4,
    title: "Contract Broiler Farming",
    description:
      "A partnership model that empowers farmers with stable income and reduced financial risk.",
    sections: [
      {
        heading: "What is Contract Broiler Farming?",
        points: [
          "Supply of chicks, feed, medicines & technical support",
          "Farmer provides shed, labor & daily care",
          "Buy-back of birds at market-linked rates",
          "Low risk with assured earnings",
        ],
      },
      {
        heading: "Key Features of Grower Contract (GC)",
        points: [
          "Assured monthly chick placement",
          "Quality chicks, feed & preventive medicines",
          "Fixed growing charges with performance bonus",
          "24x7 veterinary & technical support",
          "Market assurance & insurance support",
        ],
      },
      {
        heading: "Why Farmers Choose Us",
        points: [
          "Transparent records & timely payments",
          "Technical training & farm guidance",
          "Long-term partnership opportunities",
        ],
      },
      {
        heading: "Earning Potential",
        points: [
          "₹7.50 – ₹9.00 per kg growing charges",
          "Incentives for low mortality & better FCR",
          "₹35,000–₹45,000 per 5,000 bird cycle",
        ],
      },
      {
        heading: "How to Join",
        points: [
          "Minimum 3,000 bird capacity shed",
          "Field officer site inspection",
          "Sign Grower Contract (GC)",
          "Start risk-free poultry income",
        ],
      },
    ],
    image: cbf,
  },
];

/* ===================== COMPONENT ===================== */

function Products() {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState(services[0]);
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    if (location.state?.serviceId) {
      const service = services.find(s => s.id === location.state.serviceId);
      if (service) {
        setSelectedService(service);
        setOpenSection(null);
      }
    }
  }, [location.state]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-20">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg p-8 my-8">

        {/* Title */}
        <h2 className="text-4xl font-bold text-green-700 text-center mb-8">
          Our Products & Services
        </h2>

        {/* Menu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => {
                setSelectedService(service);
                setOpenSection(null);
              }}
              className={`p-6 border rounded-lg shadow-md cursor-pointer transition-all duration-300 text-center
                ${
                  selectedService.id === service.id
                    ? "bg-green-700 text-white ring-4 ring-green-300 scale-105"
                    : "bg-white hover:bg-green-100"
                }`}
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={selectedService.image}
            alt={selectedService.title}
            className="w-full md:w-1/2 h-72 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
          />

          <div className="p-6 text-center md:text-left w-full">
            <h3 className="text-3xl font-bold text-green-700">
              {selectedService.title}
            </h3>

            <p className="text-gray-700 mt-3 text-lg">
              {selectedService.description}
            </p>

            <p className="mt-3 italic text-green-600 font-medium">
              “We don’t just deliver products — we deliver performance, trust, and growth.”
            </p>

            {/* SECTION-WISE ACCORDION */}
            {selectedService.sections ? (
              selectedService.sections.map((section, idx) => (
                <div key={idx} className="mt-4 border rounded-lg">
                  <button
                    onClick={() =>
                      setOpenSection(openSection === idx ? null : idx)
                    }
                    className="w-full text-left px-4 py-3 font-semibold text-green-700 bg-green-50 hover:bg-green-100"
                  >
                    {section.heading}
                  </button>

                  {openSection === idx && (
                    <ul className="px-6 py-3 space-y-2 text-gray-600">
                      {section.points.map((point, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-green-600">✔</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            ) : (
              <ul className="mt-4 space-y-2 text-gray-600">
                {selectedService.points.map((point, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-green-600">✔</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* KPI STRIP */}
            {selectedService.title === "Contract Broiler Farming" && (
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-green-700">₹9/kg</p>
                  <p className="text-sm text-gray-600">Max GC</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-green-700">5,000+</p>
                  <p className="text-sm text-gray-600">Bird Batch</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-green-700">Low Risk</p>
                  <p className="text-sm text-gray-600">Assured Buyback</p>
                </div>
              </div>
            )}

            {/* CTA */}
            {/* <div className="mt-8">
              <button className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition">
                Contact Us to Get Started
              </button>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
