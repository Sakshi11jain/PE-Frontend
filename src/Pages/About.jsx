import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-purple-200 min-h-screen flex items-center justify-center py-12 w-full">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12 md:gap-16">

        {/* About Paragraph (Top on Small Screens, Top Right on Large Screens) */}
        <motion.div 
          className="w-full lg:w-1/2 order-1 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight font-sans">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-black">PrepEdge</span>
          </h2>

          <p className="text-gray-700 text-base sm:text-lg mt-6 leading-relaxed font-light">
            <span className="font-semibold text-black">PrepEdge</span> is your ultimate placement companion! 
            It equips you with everything needed to crack IT job interviews, from 
            <span className="font-semibold text-gray-900"> Chatbot mock interviews, resume building, coding practice, Interview Questions, senior guidance, 
            structured roadmap, MCQ tests, IT insights, job portals, and interview etiquette.</span>
            &nbsp;Our goal is to ensure a smooth transition from campus to corporate.
          </p>
        </motion.div>

        {/* Image Section (Middle on Small Screens, Left on Large Screens) */}
        <motion.div 
          className="w-full lg:w-1/2 order-2 lg:order-3 flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <img
            src="/about.jpg"
            alt="About PrepEdge"
            className="rounded-xl shadow-2xl w-5/6 sm:w-4/5 md:w-full max-w-sm sm:max-w-md md:max-w-xl h-auto object-cover transition-transform duration-300 hover:scale-105"
          />
        </motion.div>

        {/* Vision & Mission Section (Bottom on Small Screens, Below About Paragraph on Large Screens) */}
        <motion.div 
          className="w-full lg:w-1/2 order-3 lg:order-2 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="space-y-6 mt-8">
          <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 font-serif">🎯 Mission</h3>
              <p className="text-gray-700 text-base sm:text-lg mt-2 leading-relaxed font-light">
                Deliver structured, expert-curated resources for placement excellence.<br/>
                Enhance interview confidence with mock interviews & MCQ practice.<br/>
                Bridge the gap between students & industry leaders through mentorship.
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 font-serif">🌍 Vision</h3>
              <p className="text-gray-700 text-base sm:text-lg mt-2 leading-relaxed font-light">
                To empower students with the right tools, guidance, and resources for a seamless, structured, and effective transition from campus to corporate.
              </p>
            </div>
          </div>

          <p className="text-lg sm:text-xl font-semibold text-gray-900 mt-6">
            With PrepEdge, you're not just preparing but you're unlocking your dream career!
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;