import React, { useState } from "react";
import breeder from "../../images2/poultry.jpg/"
import hatchary from "../../images2/hatchary.jpg/"
import feedmill from "../../images2/poultryfeedjpg.jpg/"
//import hatchary from "../../images2/hatchary.jpg/"

const services = [
  {
    id: 1,
    title: "Breeder Farms",
    description: "Our breeder farms are designed to produce high-quality hatching eggs that contribute to the superior performance of our broilers.",
    image:breeder,
  },
  {
    id: 2,
    title: "Hatchery",
    description: "The hatchery is a crucial part of our poultry operations, ensuring the production of high-quality chicks.",
    image:hatchary,
  },
  {
    id: 3,
    title: "Feed Mill",
    description: "Quality feed is the backbone of poultry farming, and our feed mill ensures the production of nutritionally balanced feed for breeders, broilers, and layers. ",
    image:feedmill,
  },
  {
    id: 4,
    title: "Contract Broiler Farming",
    description: "Our broiler farming operations focus on raising healthy birds with high meat yield, ensuring efficiency and sustainability. ",
    image:breeder,
  },
];

function Products() {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg p-8 mt-16">
        {/* Title */}
        <h2 className="text-4xl font-bold text-green-700 text-center mb-8">
          Our Products & Services
        </h2>

        {/* Card Menu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {services.map((service) => (
            <div
              key={service.id}
              className={`p-6 border rounded-lg shadow-md cursor-pointer transition-all duration-300 text-center ${
                selectedService.id === service.id
                  ? "bg-green-700 text-white"
                  : "bg-white hover:bg-green-100"
              }`}
              onClick={() => setSelectedService(service)}
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>

        {/* Service Details */}
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={selectedService.image}
            alt={selectedService.title}
            className="w-full md:w-1/2 h-72 object-cover rounded-lg"
          />
          <div className="p-6 text-center md:text-left">
            <h3 className="text-3xl font-bold text-green-700">
              {selectedService.title}
            </h3>
            <p className="text-gray-700 mt-3 text-lg">{selectedService.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
