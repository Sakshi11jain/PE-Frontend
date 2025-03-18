import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const TestSelection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.history.pushState(null, null, window.location.href);

    const handleBack = () => {
      navigate("/home", { replace: true });
    };

    window.onpopstate = handleBack;

    return () => {
      window.onpopstate = null;
    };
  }, [navigate]);

  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-200 min-h-screen flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-8"
      >
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-4 text-center md:text-left"
        >
          <h2 className="text-3xl font-bold text-blue-700">🚀 Elevate Your Skills with MCQs!</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>📌 Technical MCQs:</strong> Dive deep into programming, DSA, databases, and system design.  
            Master coding concepts that help you crack technical interviews with ease!  
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>🧠 Aptitude MCQs:</strong> Sharpen your logical reasoning, quantitative skills, and problem-solving.  
            Essential for placement exams and competitive tests.  
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center flex flex-col justify-center space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-800">🎯 Choose Your Challenge</h2>
          <motion.button
            onClick={() => navigate("/mcq/aptitude")}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold 
            transition-all hover:bg-purple-700 shadow-lg w-full md:w-auto"
          >
            🏆 Aptitude Test
          </motion.button>
          <motion.button
            onClick={() => navigate("/mcq/technical")}
            whileHover={{ scale: 1.1, rotate: -2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold 
            transition-all hover:bg-purple-700 shadow-lg w-full md:w-auto"
          >
            💻 Technical Test
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TestSelection;
