import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FullStack = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const resources = [
    { title: "HTML & CSS Basics", link: "https://www.w3schools.com/html/" },
    { title: "JavaScript Essentials", link: "https://javascript.info/" },
    { title: "React Official Docs", link: "https://react.dev/" },
    { title: "Node.js Guide", link: "https://nodejs.org/en/docs/" },
    { title: "PostgreSQL Docs", link: "https://www.postgresql.org/docs/" },
    { title: "MongoDB Docs", link: "https://www.mongodb.com/docs/" },
    {
      title: "AWS Cloud Basics",
      link: "https://aws.amazon.com/getting-started/",
    },
    { title: "Flutter Docs", link: "https://docs.flutter.dev/" },
    {
      title: "React Native Docs",
      link: "https://reactnative.dev/docs/getting-started",
    },
  ];

  const youtubeResources = [
    {
      title: "Full Stack Development Course",
      link: "https://www.youtube.com/watch?v=nu_pCVPKzTk",
    },
    {
      title: "MERN Stack Full Course",
      link: "https://www.youtube.com/watch?v=7CqJlxBYj-M",
    },
    {
      title: "Django & React Full Course",
      link: "https://www.youtube.com/watch?v=PTZiD44OEkM",
    },
    {
      title: "PostgreSQL Full Tutorial",
      link: "https://www.youtube.com/watch?v=qw--VYLpxG4",
    },
    {
      title: "MongoDB for Beginners",
      link: "https://www.youtube.com/watch?v=ExcRbA7fy_A",
    },
    {
      title: "AWS for Beginners",
      link: "https://www.youtube.com/watch?v=ulprqHHWlng",
    },
    {
      title: "Flutter Full Course",
      link: "https://www.youtube.com/watch?v=VPvVD8t02U8",
    },
    {
      title: "React Native Full Course",
      link: "https://www.youtube.com/watch?v=0-S5a0eXPoc",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-200 to-blue-50 min-h-screen flex flex-col items-center text-white p-6">
      <img
        src="/roadmap_images/FullStack.jpg"
        alt="Full Stack Roadmap"
        className="w-full max-w-4xl object-contain mb-6"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md z-50"
          onClick={() => setIsOpen(false)} // Closes when clicking outside
        >
          <img
            src="/roadmap_images/FullStack.jpg"
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
          href="/roadmap_images/FullStack.jpg"
          download="FullStack.jpg"
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

export default FullStack;
