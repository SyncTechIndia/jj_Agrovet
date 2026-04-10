import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Dynamic import of all images
const images = import.meta.glob('../../Images/gallery/**/*.{png,jpg,jpeg}', { eager: true });

// Process images into categorized array
const processImages = () => {
  const imageArray = [];
  let id = 1;

  Object.keys(images).forEach((path) => {
    const src = images[path].default;
    let category = 'general';
    let title = '';

    if (path.includes('/breeder/')) 
      {
      category = 'breeder';
      const filename = path.split('/').pop().replace(/\.[^/.]+$/, '');
      title = `Breeder ${filename}`;
    } else if (path.includes('/hatechery/')) {
      category = 'hatechery';
      const filename = path.split('/').pop().replace(/\.[^/.]+$/, '');
      title = `Hatchery ${filename}`;
    } else if (path.includes('/team/')) {
      category = 'team';
      const filename = path.split('/').pop().replace(/\.[^/.]+$/, '');
      title = `Team ${filename}`;
    } else {
      const filename = path.split('/').pop().replace(/\.[^/.]+$/, '');
      title = `Gallery ${filename}`;
    }

    imageArray.push({
      id: id++,
      src,
      category,
      title
    });
  });

  return imageArray;
};

const galleryItems = processImages();

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Filter categories
  const filters = [
    { id: "all", label: "All", icon: "🏢" },
    { id: "breeder", label: "Hatchery", icon: "🥚" },
    { id: "hatechery", label: "Breeder", icon: "🐔" },
    { id: "team", label: "Team", icon: "👥" },
    { id: "general", label: "General", icon: "📷" },
  ];

  // Filter logic
  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-gray-50">
      {/* Hero Section */}
      <motion.div 
        className="relative w-full pt-24 pb-16 overflow-hidden bg-gradient-to-br from-gray-50 via-orange-50 to-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ color: '#A95C00' }}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Gallery
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore our journey and witness excellence in poultry farming
          </motion.p>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 py-16">
        {/* Filter Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter, index) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg ${
                  activeFilter === filter.id
                    ? "text-white scale-105 shadow-xl"
                    : "bg-white text-gray-700 hover:bg-orange-50 hover:scale-105"
                }`}
                style={activeFilter === filter.id ? { background: 'linear-gradient(to right, #A95C00, #8B4513)' } : {}}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl">{filter.icon}</span>
                {filter.label}
                {activeFilter === filter.id && (
                  <motion.span 
                    className="bg-white px-3 py-1 rounded-full text-sm font-bold"
                    style={{ color: '#A95C00' }}
                    layoutId="activeCount"
                  >
                    {filteredItems.length}
                  </motion.span>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                layout
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      
                      {/* Category Badge */}
                      <div className="mt-3">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase text-white" style={{ backgroundColor: '#A95C00' }}>
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">📷</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No items found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {filters.slice(1).map((filter) => {
            const count = galleryItems.filter(item => item.category === filter.id).length;
            return (
              <div key={filter.id} className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                <div className="text-4xl mb-2">{filter.icon}</div>
                <div className="text-3xl font-bold mb-1" style={{ color: '#A95C00' }}>{count}</div>
                <div className="text-gray-600 font-semibold">{filter.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;