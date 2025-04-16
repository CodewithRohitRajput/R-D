import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import bg3 from '../images/bg3.png';

const Schedule = () => {
  const navigate = useNavigate();
  const currentDate = new Date();

  // Schedule data with ISO dates
  const scheduleItems = [
    {
      id: 1,
      date: '2024-04-15',
      time: '09:00 AM - 10:30 AM',
      title: 'CODING PREMIER LEAGUE 2.0',
      venue: 'LT-2',
      description: 'Intense coding competition with multiple rounds'
    },
    {
      id: 2,
      date: '2024-04-18',
      time: '06:00 PM - 08:00 PM',
      title: 'HACK THE SHARKS',
      venue: 'ECL-5',
      description: '24-hour hackathon with industry challenges'
    },
    {
      id: 3,
      date: '2024-04-20', 
      time: '10:00 AM - 12:00 PM',
      title: 'SQUID GAME 2.0',
      venue: 'BBC',
      description: 'Elimination-style coding challenges'
    },
    {
      id: 4,
      date: '2024-04-25',
      time: '03:00 PM - 05:00 PM',
      title: 'DESIGN WORKSHOP',
      venue: 'CR-7',
      description: 'UI/UX design fundamentals session'
    },
    {
      id: 5,
      date: '2024-04-25',
      time: '03:00 PM - 05:00 PM',
      title: 'HACK THE SENSORS',
      venue: 'CR-7',
      description: 'UI/UX design fundamentals session'
    },
    {
      id: 6,
      date: '2024-04-25',
      time: '03:00 PM - 05:00 PM',
      title: 'SPEAKER SESSION',
      venue: 'CR-7',
      description: 'UI/UX design fundamentals session'
    },
  ].map(event => ({
    ...event,
    dateObj: new Date(event.date),
    status: new Date(event.date) > currentDate ? 'upcoming' : 'past'
  }));

  // Sort events chronologically
  const sortedSchedule = [...scheduleItems].sort((a, b) => a.dateObj - b.dateObj);

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
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
    }
  };

  return (
    <div className="min-h-screen relative font-['Orbitron'] text-gray-200 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-fixed z-0 opacity-100"
        style={{ backgroundImage: `url(${bg3})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#001219] via-[#0d1b2a] to-[#1b263b] opacity-70 z-0" />

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
              <div  />
              <img src={logo} alt="IEEE Logo" className="h-16 w-auto" />
            </motion.div>

            <nav className="flex space-x-6">
              {['Home', 'Events', 'Schedule'].map((item, index) => (
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
                    <span className="text-cyan-300 hover:text-emerald-400 transition-colors font-woodstamp text-xl">
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
      <div className="relative z-10 pt-32 px-4">
        <motion.button
          onClick={() => navigate(-1)}
          className="ml-8 mb-8 bg-gradient-to-r from-cyan-600 to-emerald-600 px-6 py-2 rounded-lg font-bold border-2 border-cyan-400/50 hover:border-emerald-400 hover:shadow-[0_0_20px_#00ff88] transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          ← Go Back
        </motion.button>

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
            IEEE R&D 2024 | April 15-25 | JUIT Campus
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full" />
          </div>
        </motion.div>

        {/* Schedule Items */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          {sortedSchedule.map((item, index) => (
            <motion.div
              key={item.id}
              className={`bg-gradient-to-br ${
                item.status === 'past' 
                  ? 'from-cyan-900/10 to-emerald-900/10 opacity-80' 
                  : 'from-cyan-900/20 to-emerald-900/20'
              } rounded-xl p-6 border-2 border-cyan-500/30 backdrop-blur-lg`}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-cyan-400">
                    {item.dateObj.toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                  <p className="text-lg text-emerald-400 font-medium">{item.time}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full animate-pulse ${
                    item.status === 'past' ? 'bg-cyan-500' : 'bg-emerald-500'
                  }`} />
                  <span className="text-sm text-cyan-400">
                    {item.status === 'past' ? 'Completed' : 'Upcoming'}
                  </span>
                </div>
              </div>

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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;