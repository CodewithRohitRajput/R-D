import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Schedule = () => {
  const navigate = useNavigate();
  
  // Schedule data with dates and detailed descriptions
  const scheduleItems = [
    {
      id: 1,
      date: 'March 15, 2024',
      time: '09:00 AM - 10:30 AM',
      title: 'Opening Ceremony & Keynote',
      venue: 'Grand Ballroom',
      description: 'Join us for the grand opening of IEEE R&D 2024 featuring a keynote address by Dr. Alice Thompson on "The Future of Quantum Computing". Includes welcome reception and networking breakfast.'
    },
    {
      id: 2,
      date: 'March 15, 2024',
      time: '11:00 AM - 12:30 PM',
      title: 'AI Innovation Workshop',
      venue: 'Hall A',
      description: 'Hands-on workshop exploring cutting-edge AI applications. Participants will work with neural networks and machine learning frameworks. Bring your laptops!'
    },
    {
      id: 3,
      date: 'March 15, 2024',
      time: '02:00 PM - 03:30 PM',
      title: 'Space Tech Symposium',
      venue: 'Orion Theater',
      description: 'Panel discussion with leading aerospace engineers discussing satellite technology, space exploration, and commercial spaceflight opportunities.'
    },
    {
      id: 4,
      date: 'March 16, 2024',
      time: '09:30 AM - 11:00 AM',
      title: 'Robotics Expo',
      venue: 'Innovation Pavilion',
      description: 'Live demonstrations of advanced robotics systems including industrial automation bots, humanoid robots, and AI-driven drones.'
    },
    {
      id: 5,
      date: 'March 16, 2024',
      time: '01:00 PM - 03:00 PM',
      title: 'Cybersecurity Deep Dive',
      venue: 'Cyber Lab',
      description: 'Interactive session covering latest trends in network security, encryption technologies, and ethical hacking techniques. Includes live penetration testing demo.'
    },
    {
      id: 6,
      date: 'March 16, 2024',
      time: '04:00 PM - 06:00 PM',
      title: 'Closing Ceremony',
      venue: 'Grand Ballroom',
      description: 'Final address from IEEE leadership, innovation awards presentation, and networking cocktail hour. Dress code: Business Casual'
    }
  ];

  // Animation variants
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
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

        {/* Schedule Heading */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Event Schedule
          </h1>
          <p className="text-xl text-cyan-300">
            IEEE R&D 2024 | March 15-16 | Silicon Valley Convention Center
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full" />
          </div>
        </motion.div>

        {/* Schedule Container */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          {scheduleItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-gradient-to-br from-cyan-900/20 to-emerald-900/20 rounded-xl p-6 border-2 border-cyan-500/30 backdrop-blur-lg"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Date & Time Header */}
              <div className="mb-4 border-b-2 border-cyan-500/30 pb-2">
                <p className="text-sm text-cyan-400">{item.date}</p>
                <p className="text-lg text-emerald-400 font-medium">{item.time}</p>
              </div>

              {/* Event Details */}
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                {item.title}
              </h3>
              
              <div className="mb-4">
                <p className="text-sm text-cyan-400">📍 Venue:</p>
                <p className="text-cyan-200 font-medium">{item.venue}</p>
              </div>

              <div className="mb-6">
                <p className="text-sm text-cyan-400">📝 Description:</p>
                <p className="text-cyan-200 mt-2 leading-relaxed">{item.description}</p>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm text-cyan-400">Session Active</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;