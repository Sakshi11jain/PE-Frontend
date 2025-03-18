import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Roadmap.css";

const RoadmapSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.onpopstate = () => {
      navigate("/home");
    };

    return () => {
      window.onpopstate = null;
    };
  }, [navigate]);

  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-200 min-h-screen flex flex-col items-center justify-center text-white p-4 sm:p-6 relative overflow-hidden">
      {/* Glowing Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-700 to-blue-800 opacity-20 rounded-full w-[90%] sm:w-[70%] md:w-[60%] h-[50%] blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Animated Heading with Rocket */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8 gap-3 relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-center bg-clip-text text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Preparation Roadmap
        </motion.h1>

        {/* Rocket Animation */}
        <motion.span 
          className="text-2xl sm:text-3xl md:text-4xl"
          initial={{ x: -10, y: 0, rotate: 0 }}
          animate={{ x: [0, 10, 0], y: [-5, 5, -5], rotate: [0, 15, -15] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        >
          🚀
        </motion.span>
      </motion.div>

      {/* Subheading */}
      <motion.p
        className="text-sm sm:text-base md:text-lg text-center mb-6 sm:mb-10 max-w-2xl px-4 text-gray-800 font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      >
        Plan your learning journey with structured roadmaps and track your progress effectively!
      </motion.p>

      {/* Animated Buttons with Responsive Layout */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-2xl px-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        {["frontend", "backend", "fullstack", "DSA"].map((section) => (
          <motion.button
            key={section}
            onClick={() => navigate(`/roadmap/${section}`)}
            className="relative bg-purple-500 px-5 py-3 text-sm sm:text-base md:text-lg font-bold rounded-xl shadow-md text-gray-800 hover:bg-[#ffaaf5] transition-all duration-300 w-full border-2 border-white"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default RoadmapSection;