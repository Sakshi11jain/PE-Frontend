import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import NavBar from "./NavBar";
import Company from "./Company";
import Feedback from "./Feedback";
import ResumeBuilder from "./ResumeBuilder";
import SeniorGuidance from "./SeniorGuidance";
import ScrollToTopButton from "./ScrollToTop";
import Footer from "./Footer";
import Faq from "./Faq";
import EtiquetteSection from "./EtiquetteSection";
import RoadmapSection from "./RoadmapSection";
import TestSelection from "./TestSelection";
import CodingPlatform from "./CodingPlatform";
import About from "./About";
import JobPortal from "./JobPortal";

function Home() {
  const navigate = useNavigate();
  const words = ["Fear", "Doubt", "Anxiety"];
  const results = ["Confidence", "Clarity", "Success"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      title: "MCQ TEST",
      image: "./slider_images/mcq.jpg",
      description: "Practice MCQs for interviews.",
      link: "/mcq",
    },
    {
      id: 2,
      title: "RESUME BUILDER",
      image: "./slider_images/resume.jpg",
      description: "Create ats-friendly resumes easily.",
      link: "/resume",
    },
    {
      id: 3,
      title: "ROADMAP",
      image: "./slider_images/roadmap.jpg",
      description: "Detailed roadmap for success.",
      link: "/roadmap",
    },
    {
      id: 4,
      title: "FAQ QNA",
      image: "./slider_images/faq.jpg",
      description: "Read and learn.",
      link: "/faq",
    },
    {
      id: 5,
      title: "INTERVIEW ETIQUETTES",
      image: "./slider_images/etiquettes.jpg",
      description: "Learn proper interview manners.",
      link: "/etiquettes",
    },
    {
      id: 6,
      title: "CODING PLATFORM",
      image: "./slider_images/coding.jpg",
      description: "Code and review solutions here.",
      link: "/coding",
    },
    {
      id: 7,
      title: "JOB PORTAL",
      image: "./slider_images/job.jpg",
      description: "Set your job preferences.",
      link: "/job",
    },
    {
      id: 8,
      title: "IT COMPANIES",
      image: "./slider_images/companies.jpg",
      description: "Explore top IT companies.",
      link: "/companies",
    },
  ];

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length, isPaused]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    pauseSlider();
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    pauseSlider();
  };

  const pauseSlider = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000); 
  };

  const getSlidePosition = (index) => {
    const totalSlides = slides.length;
    const relativeIndex = (index - currentSlide + totalSlides) % totalSlides;
    return relativeIndex === 0
      ? "center"
      : relativeIndex === 1
      ? "right"
      : relativeIndex === totalSlides - 1
      ? "left"
      : "hidden";
  };

  const { scrollYProgress } = useScroll();

  return (
    <>
      <NavBar />
      <motion.div
        className="w-full h-[0.35rem] origin-left fixed top-0 left-0 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-900 
               shadow-[0px_0px_15px_4px_rgba(168,85,247,0.8)] z-50"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <div className="w-full h-full overflow-hidden py-28 bg-gradient-to-r from-blue-200 to-blue-50">
        <div className="flex flex-wrap items-center justify-between ">
          {/* Left Side */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left p-6 md:p-12 flex flex-col items-center md:items-start">
            <h1 className="w-full text-3xl md:text-5xl font-semibold font-serif flex flex-col items-center justify-center md:items-start md:justify-start">
              {/* Transform + Sliding Fear, Doubt, Anxiety */}
              <div className="flex items-center space-x-4 justify-center w-[90%] md:justify-start">
                <span>Transform</span>
                <div className="relative h-14 w-[200px] overflow-hidden">
                  <div
                    className="absolute top-0 left-0 flex flex-col transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateY(-${index * 3.5}rem)` }}
                  >
                    {words.map((word, i) => (
                      <div
                        key={i}
                        className="h-14 flex items-center text-red-500"
                      >
                        {word}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Into + Sliding Confidence, Clarity, Success */}
              <div className="flex items-center space-x-4 mt-3 justify-center w-[90%] md:justify-start">
                <span>Into</span>
                <div className="relative h-14 w-[300px] overflow-hidden">
                  <div
                    className="absolute top-0 left-0 flex flex-col transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateY(-${index * 3.5}rem)` }}
                  >
                    {results.map((word, i) => (
                      <div
                        key={i}
                        className="h-14 flex items-center text-green-500"
                      >
                        {word}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </h1>

            <p className="text-lg text-gray-600 italic mt-0">
              PrepEdge transforms your interview journey, providing you with the
              practice and feedback needed to build confidence and excel in
              every round.
            </p>

            <button
              onClick={() => navigate("/chat-interface")}
              className="relative mt-4 px-6 py-3 bg-slate-800 text-white rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out 
        hover:bg-slate-800 hover:w-52 flex items-center justify-center group overflow-hidden shadow-lg hover:shadow-blue-500/50"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
              <span className="relative transition-all duration-300 ease-in-out group-hover:mr-2">
                Start Interview
              </span>
              <span className="relative transform translate-x-[-10px] opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                ➜
              </span>
            </button>
          </div>

          {/* Right Side - Compact Rotating Slider */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:mt-0 py-6 relative">
            {/* Slider Container */}
            <div className="relative w-[95%] sm:w-3/4 md:w-full h-56 sm:h-44 md:h-80 flex items-center justify-center overflow-hidden">
              {/* Left Button */}
              <button
                onClick={handlePrev}
                className="absolute text-4xl sm:text-2xl md:text-4xl left-1 sm:left-4 md:left-9 text-black rounded-full p-2 sm:p-3 transform duration-200 active:scale-95 hover:bg-gray-200 focus:outline-none transition z-10"
              >
                ⇜
              </button>

              {/* Slides */}
              <div className="relative w-[70%] sm:w-3/4 md:w-full h-52 sm:h-44 md:h-80 flex items-center justify-center overflow-hidden">
                <AnimatePresence initial={false}>
                  {slides.map((slide, index) => {
                    const position = getSlidePosition(index);
                    return (
                      <motion.div
                        key={slide.id}
                        initial={{
                          x:
                            position === "center"
                              ? "-50%"
                              : position === "right"
                              ? "30%"
                              : "-80%", // Reduced gap
                          scale: position === "center" ? 1 : 0.9, // Slightly bigger for non-center slides
                          opacity: position === "center" ? 1 : 0.8,
                        }}
                        animate={{
                          x:
                            position === "center"
                              ? "-50%"
                              : position === "right"
                              ? "-10%"
                              : "-90%",
                          scale: position === "center" ? 1 : 0.9,
                          opacity: position === "center" ? 1 : 0.8,
                        }}
                        exit={{
                          x: position === "left" ? "-100%" : "100%",
                          scale: 0.7,
                          opacity: 0,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 20,
                        }}
                        className="absolute w-60 md:w-72 h-60 md:h-72 bg-white shadow-lg rounded-lg p-4"
                        style={{
                          left: "50%",
                          transform: `translateX(-50%)`,
                          zIndex: position === "center" ? 3 : 1,
                          display: position === "hidden" ? "none" : "block",
                        }}
                      >
                        <Link
                          to={slide.link}
                          className="relative w-full h-full block"
                        >
                          <div
                            className="w-full h-full bg-cover bg-center rounded-lg"
                            style={{ backgroundImage: `url(${slide.image})` }}
                          >
                            <div className="absolute bottom-0 p-2 backdrop-blur-sm w-full text-center bg-gradient-to-t from-black via-transparent to-transparent text-white">
                              <h3 className="text-xl md:text-2xl font-bold">
                                {slide.title}
                              </h3>
                              <p className="text-xs md:text-sm mt-2">
                                {slide.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Right Button */}
              <button
                onClick={handleNext}
                className="absolute right-1 sm:right-4 md:right-9 text-4xl sm:text-2xl md:text-4xl text-black p-2 sm:p-3 rounded-full transform transition-all duration-200 active:scale-95 hover:bg-gray-200 focus:outline-none"
              >
                ⇝
              </button>
            </div>

            {/* Bullet Indicators Below Slider */}
            <div className="flex gap-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ease-in-out ${
                    currentSlide === index
                      ? "bg-blue-500 scale-110"
                      : "bg-gray-400 hover:bg-gray-500"
                  }`}
                  onClick={() => {
                    setCurrentSlide(index);
                    pauseSlider();
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div id="roadmap">
      <RoadmapSection/>
      </div>
      <div id="resume">
      <ResumeBuilder />
      </div>
      <div id="mcq">
      <TestSelection/>
      </div>
      <div id="coding">
      <CodingPlatform/>
      </div>
      <div id="Faq">
      <Faq />
      </div>
      <div id="companies">
      <Company />
      </div>
      <div id="guidance">
      <SeniorGuidance />
      </div>
      <div id="job">
        <JobPortal/>
      </div>
      <div id="etiquettes">
      <EtiquetteSection/>
      </div>
      <div id="about">
      <About />
      </div>
      <div id="feedback">
      <Feedback />
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default Home;
