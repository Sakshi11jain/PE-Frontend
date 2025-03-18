import React, { useEffect, useRef, useState } from "react";

export default function FaqPage() {
  const [faqData, setFaqData] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("frontend");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const scrollRef = useRef(null);
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/faqs`)
      .then((response) => response.json())
      .then((data) => setFaqData(data));
  }, []);

  const categories = Object.keys(faqData);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-6xl font-bold font-serif text-center mb-8 text-gray-800">
          Interview FAQ
        </h1>

        {/* Responsive Category Selector */}
        <div className="mb-8">
          {/* Dropdown for Small Screens */}
          <div className="relative md:hidden">
            <button
              className="w-full px-6 py-2 bg-white text-gray-800 rounded-lg shadow-md font-medium text-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} ▼
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 w-full bg-white shadow-lg rounded-lg mt-2 z-10">
                {categories?.map((category) => (
                  <button
                    key={category}
                    className={`w-full text-left px-6 py-2 font-medium ${
                      selectedCategory === category
                        ? "bg-purple-600 text-white"
                        : "hover:bg-purple-100 text-gray-800"
                    } transition-all duration-300`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Buttons for Large Screens */}
          <div className="hidden md:flex justify-center gap-4 flex-wrap">
            {categories?.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-lg shadow-md font-medium ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-800 hover:bg-purple-100"
                } transition-all duration-300`}
                onClick={() => handleCategoryChange(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <div ref={scrollRef} className="max-h-[500px] overflow-y-auto">
            {faqData[selectedCategory]?.map((faq, index) => (
              <div key={index} className="mb-6 border-b pb-4 last:border-b-0 last:pb-0">
                <h2 className="font-semibold text-lg text-gray-900">{faq.question}</h2>
                <p className="text-gray-700 mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
