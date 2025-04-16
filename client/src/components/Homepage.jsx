import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import sight from '../images/sight.png';
import sps from '../images/sps.png';
import wie from '../images/wie.png';
import bg3 from '../images/bg3.png';
import introVideo from '../videos/intro.mp4';
import Footer from './Footer';
import hackathon from '../images/hackathon.png';
import squid from '../images/Squid-game.png';
import speaker from '../images/Speaker.png';
import img1 from '../images/img_g1.JPG';
import img2 from '../images/img_g2.JPG';
import img3 from '../images/img3.JPG';
import img4 from '../images/img4.JPG';
import img5 from '../images/img5.JPG';
import img6 from '../images/img6.JPG';
import logo from '../images/logo.png';

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);
  const navRoutes = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Schedule', path: '/schedule' }
  ];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed, trying with muted");
        videoRef.current.muted = true;
        videoRef.current.play();
      });
    }
  }, []);

  const matrixRain = {
    initial: { y: -100 },
    animate: { 
      y: "100vh",
      transition: {
        repeat: Infinity,
        duration: 15,
        ease: "linear"
      }
    }
  };

  const imageHover = {
    hover: {
      scale: 1.05,
      filter: 'drop-shadow(0 0 15px rgba(0, 255, 136, 0.7))',
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="relative">
      {isLoading ? (
        <div className="fixed inset-0 z-50 bg-black">
          <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            onEnded={() => setIsLoading(false)}
          >
            <source src={introVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <button
            onClick={() => setIsLoading(false)}
            className="absolute top-4 right-4 z-50 px-4 py-2 bg-black/50 rounded-lg text-emerald-400 hover:bg-emerald-400/20 transition-all duration-300"
          >
            Skip Intro
          </button>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col relative font-['Orbitron'] text-gray-200">
          {/* Background Elements */}
          <div 
            className="absolute inset-0 bg-cover bg-fixed z-0 opacity-100"
            style={{ backgroundImage: `url(${bg3})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#001219] via-[#0d1b2a] to-[#1b263b] opacity-70 z-0" />
          <div className="absolute inset-0 overflow-hidden opacity-20 z-0">
            {[...Array(20)].map((_, i) => (
              <motion.div 
                key={i}
                style={{ left: `${Math.random() * 100}%` }}
                className="absolute text-green-500 text-opacity-50 text-xl"
                variants={matrixRain}
                initial="initial"
                animate="animate"
              >
                {Math.random().toString(36).substring(2)}
              </motion.div>
            ))}
          </div>

          {/* Main Content */}
          <div className="flex-1 z-10">
            {/* Header */}
            <motion.header 
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ type: 'spring', stiffness: 120 }}
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
      <motion.div className="flex items-center space-x-4" whileHover={{ scale: 1.05 }}>
        <div className="" />
        {/* Replace text with logo */}
        <img 
          src={logo} 
          alt="IEEE Logo" 
          className="h-20 w-auto" // Adjust height as needed
        />
      </motion.div>

      <nav className="flex space-x-6">
        {navRoutes.map((route, index) => (
          <motion.div
            key={route.path}
            className="relative"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            <Link to={route.path} className="px-4 py-2 text-sm font-medium relative block">
              <span className="text-cyan-300 hover:text-emerald-400 transition-colors text-xl animate-pulse font-woodstamp">
                {route.name}
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

            {/* Hero Section */}
            <motion.section 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="relative z-10 container mx-auto px-4 py-24 md:py-48 text-center"
            >
              <div className="max-w-7xl mx-auto relative group">
                <div className="absolute inset-0 rounded-3xl overflow-hidden z-0">
                  <div className="absolute inset-0 bg-grid-[#00ff8811] [mask-image:linear-gradient(to_bottom,transparent_20%,black_80%)]" />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5"
                    animate={{
                      clipPath: [
                        'polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)',
                        'polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)',
                      ]
                    }}
                    transition={{ duration: 12, repeat: Infinity }}
                  />
                </div>

                <div className="relative bg-gradient-to-br from-black/90 to-cyan-950/30 p-8 md:p-16 rounded-[3rem] border-2 border-cyan-500/30 backdrop-blur-md shadow-[0_0_60px_#00ff8822] hover:shadow-[0_0_90px_#00ff8833] transition-all duration-500">
                  <div className="relative space-y-8 z-10">
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8">
                        <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent relative font-woodstamp">
                          <motion.span
                            className="block"
                            animate={{
                              textShadow: [
                                '0 0 10px #00ff88',
                                '0 0 20px #00ff88',
                                '0 0 10px #00ff88'
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{ 
                              textStroke: '1px #00ff88',
                              WebkitTextStroke: '1px #00ff88'
                            }}
                          >
                            IEEE R&D'25
                          </motion.span>
                        </span>
                      </h1>

                      <motion.p
                        className="text-xl md:text-3xl font-medium text-cyan-300 max-w-2xl mx-auto tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <span className="inline-block pr-2 border-r-2 border-emerald-400 animate-typing font-woodstamp">
                         
                        </span>
                      </motion.p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <motion.button
                        className="relative bg-gradient-to-r animate-bounce from-cyan-600 to-emerald-600 px-12 py-4 rounded-xl text-2xl font-bold border-2 border-cyan-400/50 hover:border-emerald-400 transition-all duration-300 group"
                        whileHover={{ scale: 1.05 }}
                      >
                        <a
                          href="https://docs.google.com/forms/d/e/1FAIpQLSecsCiKVtyFy0d22774I-2J86jwR5McVk4Cz262fqkZloQ8yA/viewform?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative z-10 flex items-center gap-2 font-woodstamp"
                        >
                          Register
                        </a>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                      </motion.button>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  className="absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-xl opacity-30"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
              </div>
            </motion.section>

            {/* Events Section */}
<section id="branches" className="relative z-10 container mx-auto px-4 py-32">
  <motion.h2 
    className="text-5xl text-center mb-24 bg-gradient-to-r from-cyan-400 font-woodstamp to-emerald-400 bg-clip-text text-transparent font-bold [text-shadow:_0_0_30px_#00ff8877]"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    Our Events
  </motion.h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 font-woodstamp">
    {[
      { 
        title: "HACK THE SHARKS", 
        image: hackathon,
        description: "24-hour intense hackathon challenging developers to create innovative solutions for real-world problems"
      },
      { 
        title: "TECH SQUID", 
        image: squid,
        description: "Elimination-style coding competition with escalating challenges and surprise rounds"
      },
      { 
        title: "EXPERT TALKS", 
        image: speaker,
        description: "Insightful sessions with industry leaders sharing cutting-edge tech advancements"
      }
    ].map((event, index) => (
      <motion.div 
        key={event.title}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="group perspective-1000"
      >
        <div className="relative preserve-3d group-hover:[transform:rotateY(20deg)_rotateX(10deg)] transition-all duration-500 h-[500px] bg-gradient-to-br from-cyan-900/30 to-emerald-900/30 rounded-3xl border-2 border-cyan-500/30 backdrop-blur-lg p-6 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"/>
          
          {/* Image Container */}
          <div className="h-64 mb-6 rounded-xl border border-cyan-500/30 overflow-hidden shadow-2xl">
            <img 
              src={event.image} 
              alt={event.title}
              className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="px-4">
            <h3 className="text-4xl mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent font-bold">
              {event.title}
            </h3>
            <p className="text-lg text-cyan-200/80 font-light leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Hover Effect */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_#00ff8855,_transparent)] opacity-0 group-hover:opacity-30 transition-opacity duration-300"/>
        </div>
      </motion.div>
    ))}
  </div>
</section>

            {/* IEEE Section */}
            <motion.section 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative z-10 container mx-auto px-4 py-24"
            >
              <div className="max-w-7xl mx-auto text-center mb-16">
                <motion.h2 
                  className="font-woodstamp text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  Welcome to the Best Tech Club<br/>
                  <span className="text-6xl md:text-7xl mt-4 block">IEEE</span>
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8 text-left">
                    <motion.p 
                      className="text-lg md:text-xl font-light leading-relaxed text-cyan-200"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      IEEE (Institute of Electrical and Electronics Engineers) is a global organization focused on advancing technology and innovation. It connects professionals in fields like electrical engineering, computer science, and communications, offering access to cutting-edge research, conferences, and networking opportunities to enhance career development and technical expertise.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <motion.button 
                        className="bg-gradient-to-r from-cyan-600 to-emerald-600 px-8 py-3 rounded-lg text-lg font-bold border-2 border-cyan-400/50 hover:border-emerald-400 hover:shadow-[0_0_20px_#00ff88] transition-all duration-300 group relative overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="relative z-10">About Us</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                      </motion.button>
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
                    {[sight, sps, wie].map((img, index) => (
                      <motion.div 
                        key={index}
                        className="relative group aspect-square bg-gradient-to-br from-cyan-900/20 to-emerald-900/20 rounded-xl p-4"
                        whileHover="hover"
                        variants={imageHover}
                      >
                        <motion.img 
                          src={img}
                          alt={`IEEE Chapter ${index + 1}`}
                          className="w-full h-full object-contain p-2"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            delay: index * 0.1 + 0.4,
                            type: "spring",
                            stiffness: 100
                          }}
                        />
                        <div className="absolute inset-0 rounded-xl border-2 border-cyan-500/30 pointer-events-none" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#00ff8822,_transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Gallery Section */}
            <motion.section 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="relative z-10 container mx-auto px-4 py-24"
>
  <div className="max-w-7xl mx-auto">
    <motion.h2 
      className="font-woodstamp text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      Check Out Our<br/>
      <span className="text-6xl md:text-7xl mt-4 block">Photos Gallery</span>
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {[img1, img2, img3, img4, img5 , img6 ].map((image, index) => (
        <motion.div 
          key={index}
          className="relative group aspect-square"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: index * 0.2,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          <img 
            src={image}
            alt={`Gallery ${index + 1}`}
            className="w-full h-full object-cover rounded-xl border-2 border-cyan-500/30 backdrop-blur-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-emerald-900/20 rounded-xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#00ff8822,_transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>

            {/* Sponsors Section */}
            <section id="sponsors" className="relative z-10 container mx-auto px-4 py-32">
              <motion.h2 
                className="text-5xl font-woodstamp text-center mb-24 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent font-bold [text-shadow:_0_0_30px_#00ff8877]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Our Sponsors
              </motion.h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
                {[...Array(8)].map((_, index) => (
                  <motion.div 
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: 'spring', bounce: 0.4 }}
                    viewport={{ once: true }}
                    className="h-40 bg-gradient-to-br from-cyan-900/30 to-emerald-900/30 rounded-xl border-2 border-cyan-500/30 backdrop-blur-lg flex items-center justify-center relative overflow-hidden group hover:[transform:rotateZ(0.5deg)_scale(1.05)] transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#00ff8855_0%,#00ff8800_20%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                    <span className="text-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent font-bold">
                      SPACE-TECH{index + 1}
                    </span>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="z-10">
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;