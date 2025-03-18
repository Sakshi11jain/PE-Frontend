import React, { useEffect, useState, useRef } from "react";
import { handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ navigateTo }) => {
  const [loggedInUser, setLoggedInUser] = useState("User");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate()

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser") || "User");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User Logged out");
    setTimeout(() => {
        navigate('/'); // Redirect to MainPage
    }, 1000);
};

  const toggleProfileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleNavMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsNavOpen(false); // Close mobile menu on selection
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 py-6 bg-slate-800 shadow-md">
      {/* Mobile Menu Icon */}
      <button className="md:hidden text-white" onClick={toggleNavMenu}>
        {isNavOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Logo */}
      <img
        src="./images/logo.png"
        alt="PrepEdge Logo"
        className="w-20 h-12 mr-24 cursor-pointer"
        onClick={() => navigateTo("main")}
      />

      {/* Navigation Links */}
      <div
        className={`mt-4 md:mt-0 text-[18px] absolute md:static top-16 left-0 w-full md:w-auto bg-slate-800 md:bg-transparent shadow-md md:shadow-none transform transition-transform duration-300 z-50 md:flex ${
          isNavOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex flex-col md:flex-row md:space-x-6">
          {[
            { label: "RoadMap", id: "roadmap" },
            { label: "Resume Builder", id: "resume" },
            { label: "MCQ", id: "mcq" },
            { label: "Coding", id: "coding" },
            { label: "FAQ", id: "Faq" }, 
            { label: "Companies Info", id: "companies" },
            { label: "Senior Guidance", id: "guidance" },
            { label: "Job Portal", id: "job" },
            { label: "Etiquettes", id: "etiquettes" },
            { label: "About", id: "about" },
            { label: "Contact", id: "feedback" },
          ].map((item, index) => (
            <a
              key={index}
              className="text-gray-300 hover:text-blue-500 py-2 md:py-0 cursor-pointer border-b-2 sm:border-b-2 md:border-0 border-slate-700 px-12 sm:px-12 md:px-0"
              onClick={() => handleScrollTo(item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      
      {/* Profile Section */}
      <div
        className="relative flex items-center space-x-2 cursor-pointer p-2 ml-auto"
        ref={menuRef}
        onClick={toggleProfileMenu}
      >
        <img src="./images/profile.png" alt="Profile" className="w-10 h-10 rounded-full" />
        <span className="text-white font-medium">{loggedInUser}</span>
        {isMenuOpen && (
          <div className="absolute right-0 w-40 bg-white border rounded shadow-md">
            <button
              className="w-full text-center px-4 py-3 text-blue-800 hover:bg-gray-100"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>

      <ToastContainer />
    </nav>
  );
};

export default Navbar;
