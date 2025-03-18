import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Backend = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const resources = [
    {
      title: "JavaScript Docs",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { title: "Python Docs", link: "https://docs.python.org/3/" },
    { title: "Java Docs", link: "https://docs.oracle.com/en/java/" },
    { title: "PHP Docs", link: "https://www.php.net/docs.php" },
    { title: "Django Docs", link: "https://docs.djangoproject.com/en/stable/" },
    { title: "MongoDB Docs", link: "https://www.mongodb.com/docs/" },
    { title: "REST API Guide", link: "https://restfulapi.net/" },
    { title: "Git & GitHub", link: "https://git-scm.com/doc" },
  ];

  const youtubeResources = [
    {
      title: "Java Full Course",
      link: "https://www.youtube.com/watch?v=grEKMHGYyns",
    },
    {
      title: "JavaScript Full Course",
      link: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
    },
    {
      title: "PHP Full Course",
      link: "https://www.youtube.com/watch?v=OK_JCtrrv-c",
    },
    {
      title: "Python Crash Course",
      link: "https://www.youtube.com/watch?v=rfscVS0vtbw",
    },
    {
      title: "Node.js Full Course",
      link: "https://www.youtube.com/watch?v=Oe421EPjeBE",
    },
    {
      title: "Django Tutorial",
      link: "https://www.youtube.com/watch?v=rHux0gMZ3Eg",
    },
    {
      title: "Spring Boot Crash Course",
      link: "https://www.youtube.com/watch?v=9SGDpanrc8U",
    },
    {
      title: "MySQL Database Tutorial",
      link: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
    },
    {
      title: "Git & GitHub Crash Course",
      link: "https://www.youtube.com/watch?v=RGOj5yH7evk",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-200 to-blue-50 min-h-screen flex flex-col items-center text-black p-6">
      <img
        src="/roadmap_images/Backend.jpg"
        alt="Backend Roadmap"
        className="w-full max-w-[650px] h-auto object-cover rounded-lg shadow-lg mt-12 mb-6 cursor-pointer"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md z-50"
          onClick={() => setIsOpen(false)} // Closes when clicking outside
        >
          <img
            src="/roadmap_images/Backend.jpg"
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
          href="/roadmap_images/Backend.jpg"
          download="Backend.jpg"
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

export default Backend;
