import React, { useState } from "react";

const ResumeBuilder = () => {
  const [previewImage, setPreviewImage] = useState(null);

  const templates = [
    { 
      id: 1, 
      name: "Template 1", 
      path: "/templates/template1.docx", 
      preview: "/previewImages/template1.png" 
    },
    { 
      id: 2, 
      name: "Template 2", 
      path: "/templates/template2.docx", 
      preview: "/previewImages/template2.png" 
    },
    { 
      id: 3, 
      name: "Template 3", 
      path: "/templates/template3.docx", 
      preview: "/previewImages/template3.png" 
    },
    { 
      id: 4, 
      name: "Template 4", 
      path: "/templates/template4.docx", 
      preview: "/previewImages/template4.png" 
    },
    { 
      id: 5, 
      name: "Template 5", 
      path: "/templates/template5.docx", 
      preview: "/previewImages/template5.png" 
    },
    { 
      id: 6, 
      name: "Template 6", 
      path: "/templates/template6.docx", 
      preview: "/previewImages/template6.png" 
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200 p-10 relative animate-fadeIn">
      {/* Background Blur and Fullscreen Preview */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setPreviewImage(null)}
        >
          <img
            src={previewImage}
            alt="Preview"
            className="max-w-full max-h-full rounded shadow-lg"
          />
        </div>
      )}

      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-2">
          <h1 className="text-5xl font-bold mb-4 font-serif text-gray-800 mr-4">
            Resume Templates
          </h1>
          {/* Icon */}
          <div
    className="w-12 h-12 sm:w-14 sm:h-14 ml-0 sm:ml-2 rounded-full bg-blue-500 flex justify-center items-center cursor-pointer glow-icon animate-spin shrink-0"
    onClick={toggleModal}
    onMouseOver={toggleModal}
    onMouseEnter={(e) => e.target.classList.add("glow")}
    onMouseLeave={(e) => e.target.classList.remove("glow")}
  >
    <i className="text-white text-lg sm:text-xl">📄</i>
  </div>
        </div>
        <h3 className="text-gray-700 font-bold text-center mb-2">
          Download a professional and ATS-friendly resume templates (Word file),<br/> customize it effortlessly, and shine in your job interviews! Best of luck! 🎉
        </h3>
        <p className="text-gray-600">
          Click on a template image to preview it in full screen.
        </p>
      </div>

     {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 px-4 sm:px-6 md:px-8 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
          onClick={toggleModal}
        >
          <div
            className="bg-gradient-to-r from-slate-50 via-blue-50 to-blue-100 py-8 px-6 sm:px-8 md:px-10 w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-2xl xl:max-w-3xl rounded-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-4 text-gray-600 hover:text-gray-800 text-2xl sm:text-3xl"
              onClick={toggleModal}
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 sm:mb-6 animate__animated animate__fadeInDown">
                Why You Need an ATS-Friendly Resume
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8">
                Did you know that 75% of resumes never reach a recruiter because they fail ATS checks? Here’s why an ATS-friendly resume is essential for your success.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
                <div className="p-4 sm:p-6 bg-white rounded-lg shadow hover:shadow-lg hover:scale-105 transition-all">
                  <h3 className="text-md sm:text-lg font-semibold mb-2 sm:mb-3 text-blue-700">Higher Selection Chances</h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    ATS-friendly resumes pass filters to ensure your application gets seen.
                  </p>
                </div>
                <div className="p-4 sm:p-6 bg-white rounded-lg shadow hover:shadow-lg hover:scale-105 transition-all">
                  <h3 className="text-md sm:text-lg font-semibold mb-2 sm:mb-3 text-blue-700">Improved Readability</h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Organized formats make it easy for systems and recruiters to scan.
                  </p>
                </div>
                <div className="p-4 sm:p-6 bg-white rounded-lg shadow hover:shadow-lg hover:scale-105 transition-all">
                  <h3 className="text-md sm:text-lg font-semibold mb-2 sm:mb-3 text-blue-700">Keyword Optimization</h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Incorporates job-relevant keywords for better match scores.
                  </p>
                </div>
              </div>
              <a
                href="https://recruiterflow.com/blog/applicant-tracking-system-benefits-of-ats/" target="_blank"
                className="mt-6 sm:mt-10 bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Learn More About ATS Resumes
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-8">
        {templates.map((template) => (
          <div
            key={template.id}
            className="border border-gray-300 p-4 rounded-xl shadow flex flex-col items-center bg-gray-100 "
          >
            <h3 className="text-lg font-semibold text-center">{template.name}</h3>
            <h3 className="text-gray-800 mb-2">Click to Preview:</h3>
            <img
              src={template.preview}
              alt={`${template.name} Preview`}
              className="w-48 h-60 mb-4 border-2 border-slate-500 rounded cursor-pointer hover:shadow-lg"
              onClick={() => setPreviewImage(template.preview)}
            />
            <button
              className="bg-blue-600 hover:bg-blue-700 hover:ring-2 hover:ring-blue-400 text-white px-10 py-2 text-lg rounded-3xl font-medium mt-3 border-2 border-transparent hover:border-blue-300 shadow-md hover:shadow-lg transition-all"
              onClick={() => {
                const link = document.createElement("a");
                link.href = template.path;
                link.download = `${template.name}.docx`;
                link.click();
              }}
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeBuilder;
