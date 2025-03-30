import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import gallery1 from '../images/gallery_1.jpg'

// Beginner-friendly image data - just add/remove URLs here!
const galleryImages = [
  { id: 1, src: gallery1 },
  { id: 1, src: gallery1 },
  { id: 1, src: gallery1 },
  { id: 1, src: gallery1 },
  { id: 1, src: gallery1 },
  { id: 1, src: gallery1 },
  { id: 1, src: gallery1 },
  { id: 1, src: gallery1 },
  { id: 1, src: gallery1 },
  { id: 1, src: gallery1 },
];

const Gallery = () => {
  const navigate = useNavigate();

  // Navbar animation
  const navbarVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 120,
        delay: 0.2
      }
    }
  };

  // Image hover animation
  const imageHover = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-fixed bg-cover bg-gradient-to-br from-[#001219] via-[#0d1b2a] to-[#1b263b] font-['Orbitron'] text-gray-200 overflow-hidden">
      
      {/* Navbar */}
      <motion.header 
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
        className="fixed w-full top-0 z-50"
      >
        <div className="absolute inset-0 h-24">
          <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
            <path 
              d="M0 60L48 72C96 84 192 108 288 108C384 108 480 84 576 60C672 36 768 12 864 12C960 12 1056 36 1152 48C1248 60 1344 60 1392 60L1440 60V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V60Z" 
              className="fill-[hsl(192,80%,15%)]"
            />
          </svg>
        </div>

        <div className="relative px-8 py-4 backdrop-blur-xl">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-lg animate-pulse-slow" />
              <h1 className="text-2xl bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent font-bold">
                R&D'25
              </h1>
            </motion.div>

            <nav className="flex space-x-6">
              {['Home', 'Events', 'Gallery', 'Schedule'].map((item, index) => (
                <motion.div
                  key={item}
                  className="relative"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    to={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                    className="px-4 py-2 text-sm font-medium relative block"
                  >
                    <span className="text-cyan-300 hover:text-emerald-400 transition-colors text-xl">
                      {item}
                    </span>
                    <motion.div 
                      className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-emerald-400"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="pt-32 px-4">
        {/* Go Back Button */}
        <motion.button
          onClick={() => navigate(-1)}
          className="ml-8 mb-8 bg-gradient-to-r from-cyan-600 to-emerald-600 px-6 py-2 rounded-lg font-bold border-2 border-cyan-400/50 hover:border-emerald-400 hover:shadow-[0_0_20px_#00ff88] transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          ← Go Back
        </motion.button>

        {/* Gallery Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Gallery
          </h1>
          <p className="text-cyan-300 text-lg md:text-xl">
            "Capturing Moments of Innovation and Technology"
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full" />
          </div>
        </motion.div>

        {/* Image Grid */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="relative group overflow-hidden rounded-xl aspect-square"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover="hover"
                variants={imageHover}
              >
                <img
                  src={image.src}
                  alt={`Gallery ${image.id}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 to-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;