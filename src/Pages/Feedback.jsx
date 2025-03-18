import React, { useState } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API_URL}/api/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, feedback }),
    });
    if (response.ok) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setFeedback("");
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-bluue-50 p-8">
    <div className="flex flex-col lg:flex-row w-full max-w-4xl">
      <div className="w-full lg:w-1/2 p-8 bg-purple-100 shadow-2xl rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none transform transition-all duration-300">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-6">
          Your Feedback Matters!
        </h2>
        {submitted ? (
          <p className="text-green-600 text-md text-center font-semibold">
            🎉 Thank you for your valuable feedback! 🎉
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Feedback <span className="text-red-500">*</span>
              </label>
              <textarea
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                placeholder="We'd love to hear your thoughts!"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg backdrop-blur-md bg-opacity-90 hover:bg-opacity-100 hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400"
            >
              🚀 Submit Feedback
            </button>
          </form>
        )}
      </div>
  
      <div className="w-full lg:w-1/2 bg-blue-950 text-white rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none transform transition-all duration-300">
        <div className="border-t-[45px] border-t-transparent border-l-[60px] border-l-purple-100 border-b-[45px] border-b-transparent"></div>
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
            Let’s Connect
          </h2>
          <p className="text-lg text-center mb-6">
            Got a question or want to collaborate? <br />
            Send us an email!
          </p>
          <div className="flex justify-center">
            <a href="mailto:prepedge2k25@gmail.com">
              <button className="w-auto px-6 py-3 mb-20 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white font-semibold rounded-full shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400">
                📧 Send an Email
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default FeedbackForm;
