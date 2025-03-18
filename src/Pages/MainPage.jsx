import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";

function MainPage() {
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.history.pushState(null, null, window.location.href);
      window.addEventListener("popstate", () => {
        window.history.pushState(null, null, window.location.href);
      });
    }
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  const handleGetStartedClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleError = (message) => {
    toast.error(message || "An error occurred");
  };

  const handleSuccess = (message) => {
    toast.success(message || "Operation successful!");
  };

  const handleLoginSubmit = async (loginInfo) => {
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError("Email and password are required");
    }
    try {
      const url = `${API_URL}/auth/login`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();
      const { success, message, jwtToken, name } = result;

      if (success) {
        handleSuccess(message);
        // Store token and user info in local storage
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        setTimeout(() => {
          navigate("/home");
          closeModal();
        }, 1000);
      } else {
        handleError(message); // If success is false, show the error message
      }
    } catch (err) {
      handleError(err.message); // Handle network or other errors
    }
  };

  const handleSignupSubmit = async (signupInfo) => {
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError("All fields are required!");
    }
    try {
      const url = `${API_URL}/auth/signup`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();
      const { success, message, jwtToken } = result;

      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        setTimeout(() => {
          navigate("/home");
          closeModal();
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError(err.message);
    }
  };

  const LoginForm = ({ onSubmit }) => {
    const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setLoginInfo((prev) => ({ ...prev, [name]: value }));
    };

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(loginInfo);
        }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-700 text-center">Login</h2>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            value={loginInfo.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none text-black"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password..."
            value={loginInfo.password}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none text-black"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => setIsLogin(false)}
            className="text-blue-600 hover:underline"
          >
            Signup
          </button>
        </p>
      </form>
    );
  };

  const SignupForm = ({ onSubmit }) => {
    const [signupInfo, setSignupInfo] = useState({
      name: "",
      email: "",
      password: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setSignupInfo((prev) => ({ ...prev, [name]: value }));
    };

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(signupInfo);
        }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-700 text-center">Signup</h2>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name..."
            value={signupInfo.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none text-black"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            value={signupInfo.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none text-black"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password..."
            value={signupInfo.password}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none text-black"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Signup
        </button>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => setIsLogin(true)}
            className="text-blue-600 hover:underline"
          >
            Login
          </button>
        </p>
      </form>
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 brightness-[0.6]"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Heading */}
      {/* <motion.h1
          className="text-[10vw] md:text-[6vw] font-extrabold tracking-wide"

            style={{
                fontFamily:  "'Georgia', sans-serif",
                WebkitTextStroke: "2px black", 
                color: "white",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            PrepEdge
        </motion.h1> */}

      <motion.img
        src="./images/Heading.png"
        alt="PrepEdge"
        srcset=""
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Description */}
      <motion.p
        className="text-lg text-center px-4 md:px-6 py-4 w-[90%] md:w-[60%] text-white font-medium rounded-xl shadow-lg"
        style={{
          fontFamily: "'Georgia', sans-serif",
          color: "#e5e7eb", // Softer white for better readability
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        PrepEdge is your ultimate platform to ace technical interviews.
        Practice, learn, and grow with interactive features designed just for
        you. Your smart interview preparation hub where you can take mock
        interviews, MCQ tests, built ats-friendly resumes, check out hiring
        partners, code, and more—ALL IN ONE PLACE.
      </motion.p>

      {/* Button */}
      <motion.button
        className="mt-8 px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-700 
               text-white text-xl font-bold uppercase tracking-wider 
               rounded-lg shadow-lg hover:shadow-2xl transition-all 
               duration-300 hover:scale-110 transform hover:translate-y-[-2px] 
               hover:bg-gradient-to-r hover:from-indigo-700 hover:to-blue-600"
        onClick={handleGetStartedClick}
        whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 10px rgba(100, 149, 237, 0.5)",
          }}          
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 1 }}
      >
        Get Started
      </motion.button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:max-w-sm relative">
            <button
              onClick={closeModal}
              className="absolute top-0 right-2 text-gray-500 text-2xl"
            >
              &times;
            </button>
            {isLogin ? (
              <LoginForm onSubmit={handleLoginSubmit} />
            ) : (
              <SignupForm onSubmit={handleSignupSubmit} />
            )}
          </div>
          <ToastContainer />
        </div>
      )}
    </div>
  );
}

export default MainPage;
