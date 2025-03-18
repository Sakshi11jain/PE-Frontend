import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Frontend = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const resources = [
    { title: "HTML & CSS Basics", link: "https://www.w3schools.com/html/" },
    { title: "JavaScript Essentials", link: "https://javascript.info/" },
    { title: "React Official Docs", link: "https://react.dev/" },
    { title: "Tailwind CSS", link: "https://tailwindcss.com/docs" },
    {
      title: "SASS Documentation",
      link: "https://sass-lang.com/documentation",
    },
    {
      title: "TypeScript Handbook",
      link: "https://www.typescriptlang.org/docs/",
    },
    { title: "Redux Official Docs", link: "https://redux.js.org/" },
    {
      title: "Jest Testing Framework",
      link: "https://jestjs.io/docs/getting-started",
    },
    { title: "GitHub Docs", link: "https://docs.github.com/" },
    { title: "NPM Guide", link: "https://docs.npmjs.com/" },
  ];

  const youtubeResources = [
    {
      title: "HTML & CSS Crash Course",
      link: "https://www.youtube.com/watch?v=UB1O30fR-EE",
    },
    {
      title: "JavaScript for Beginners",
      link: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
    },
    {
      title: "React Tutorial",
      link: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
    },
    {
      title: "Tailwind CSS Full Course",
      link: "https://www.youtube.com/watch?v=dFgzHOX84xQ",
    },
    {
      title: "TypeScript Crash Course",
      link: "https://www.youtube.com/watch?v=BwuLxPH8IDs",
    },
    {
      title: "Redux Explained",
      link: "https://www.youtube.com/watch?v=CVpUuw9XSjY",
    },
    {
      title: "Git & GitHub for Beginners",
      link: "https://www.youtube.com/watch?v=RGOj5yH7evk",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-200 to-blue-50 min-h-screen flex flex-col items-center justify-center text-white p-6">
      <img
        src="/roadmap_images/Frontend.jpg"
        alt="Frontend Roadmap"
        className="w-full max-w-4xl object-contain mb-4"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md z-50"
          onClick={() => setIsOpen(false)} // Closes when clicking outside
        >
          <img
            src="/roadmap_images/Frontend.jpg"
            alt="Backend Roadmap Large"
            className="max-w-full max-h-screen rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
          />
        </div>
      )}

      <div className="w-full max-w-xl flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-semibold text-black mb-2">
            Recommended Resources:
          </h3>
          <ul className="list-disc list-inside text-left text-black">
            {resources.map((resource, index) => (
              <li key={index} className="mb-2">
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline"
                >
                  {resource.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-semibold text-black mb-2">
            YouTube Tutorials:
          </h3>
          <ul className="list-disc list-inside text-left text-black">
            {youtubeResources.map((yt, index) => (
              <li key={index} className="mb-2">
                <a
                  href={yt.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline"
                >
                  {yt.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4 mt-6 w-full max-w-xs">
        <a
          href="/roadmap_images/Frontend.jpg"
          download="Frontend.jpg"
          className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition text-center w-3/4"
        >
          Download Image
        </a>

        <button
          onClick={() => navigate("/roadmap")}
          className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition text-center w-3/4"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Frontend;
