import React from "react";
import img1 from '../../Images/img1.jpg'
import img2 from '../../Images/img2.jpg'
import img3 from '../../Images/img3.jpg'
import img4 from '../../Images/img4.jpg'
import img5 from '../../Images/img5.jpeg'
import img6 from '../../Images/img6.jpeg';




const Gallery = () => {
  const images = [
    img1,img2,img3,img4,img5,img6,img1,img5,img6
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16 px-6">
      {/* Hero Section */}
      <div className="flex justify-center items-center">
        <div
          className="relative w-full lg:w-4/5 h-96 bg-cover bg-center rounded-3xl shadow-xl overflow-hidden"
          style={{ backgroundImage: "url('https://source.unsplash.com/random/1200x500/?poultry-farm')" }}
        >
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-8 rounded-3xl">
            <h1 className="text-6xl font-bold text-white">Our Gallery</h1>
            <p className="text-xl text-gray-200 mt-4 max-w-2xl">
              Explore our beautiful moments captured through the lens.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Title */}
      <div className="text-center mt-16">
        <h2 className="text-5xl font-bold text-green-700">Gallery Collection</h2>
        <p className="text-lg text-gray-600 mt-4">A glimpse of our poultry farm and its journey.</p>
      </div>

      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 px-4 py-14">
        {images.map((image, index) => (
          <div key={index} className="mb-6 break-inside-avoid">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full rounded-2xl border-4 border-brown-600 border-green-500 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
