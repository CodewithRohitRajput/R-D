import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Events = () => {
  const navigate = useNavigate();
  const events = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Tech Innovation Summit ${i + 1}`,
    description: `Join us for an exciting exploration of cutting-edge technologies in ${["AI", "Quantum Computing", "Space Tech", "Robotics", "Cybersecurity"][i % 5]} with industry leaders.`,
    date: `2024-0${(i % 9) + 1}-${15 + i}`,
    venue: `Venue ${(i % 3) + 1}, Tech Convention Center`,
    image: `https://source.unsplash.com/random/800x600/?tech,event${i+1}`
  }));

  // Navbar animation variants
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

        {/* Events Heading and Quote */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Our Events
          </h1>
          <p className="text-cyan-300 text-lg md:text-xl">
            "Where Innovation Meets Execution"
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full" />
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="bg-gradient-to-br from-cyan-900/20 to-emerald-900/20 rounded-xl p-6 border-2 border-cyan-500/30 backdrop-blur-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Image Section */}
              <motion.div 
                className="relative group mb-6 overflow-hidden rounded-lg"
                whileHover="hover"
              >
                <motion.img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-48 object-cover"
                  variants={{
                    hover: { 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 to-emerald-900/40" />
                <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-lg pointer-events-none" />
              </motion.div>

              {/* Event Details */}
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                {event.name}
              </h3>
              <p className="text-cyan-200 mb-4">{event.description}</p>
              
              {/* Date & Venue */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-cyan-400">📅 Date:</p>
                  <p className="text-cyan-200">{event.date}</p>
                </div>
                <div>
                  <p className="text-sm text-cyan-400">🏟️ Venue:</p>
                  <p className="text-cyan-200">{event.venue}</p>
                </div>
              </div>

              {/* Register Button */}
              <motion.button
                className="w-full bg-gradient-to-r from-cyan-600 to-emerald-600 py-3 rounded-lg font-bold border-2 border-cyan-400/50 hover:border-emerald-400 hover:shadow-[0_0_20px_#00ff88] transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <span className="relative z-10">🚀 Register Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300"/>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;