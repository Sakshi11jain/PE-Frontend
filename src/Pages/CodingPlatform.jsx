import { useState, useEffect } from "react";
import axios from "axios";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { StreamLanguage } from "@codemirror/language";
import { java as javaLanguage, c as cLanguage } from "@codemirror/legacy-modes/mode/clike";
import { dracula } from "@uiw/codemirror-theme-dracula";

const API_URL = "https://judge0-ce.p.rapidapi.com";

// ✅ Language Configuration
const languages = [
  { id: 63, name: "JavaScript", extension: javascript() },
  { id: 71, name: "Python", extension: python() },
  { id: 54, name: "C++", extension: cpp() },
  { id: 62, name: "Java", extension: StreamLanguage.define(javaLanguage) },
  { id: 50, name: "C", extension: StreamLanguage.define(cLanguage) }
];

function CodingPlatform() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState(null);
  const [darkMode, setDarkMode] = useState(false); // ✅ Default to light mode
  const [copyText, setCopyText] = useState("Copy Code");

  // ✅ Load dark mode preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      setDarkMode(true);
    }
  }, []);

  // ✅ Toggle dark mode and save preference
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  const handleRunCode = async () => {
    if (!language) {
      setOutput("⚠️ Please select a language first!");
      return;
    }

    setOutput("Running...");

    try {
      const { data } = await axios.post(
        `${API_URL}/submissions?base64_encoded=false&wait=true`,
        {
          source_code: code,
          language_id: language.id,
          stdin: "",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Key": "8e0eef0cfamshe2355aa19d1c20dp17c919jsn26cdfd49a487",
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          },
        }
      );

      setOutput(data.stdout || data.stderr || "No Output");
    } catch (error) {
      console.error("Error running code:", error);
      setOutput("❌ Error executing code.");
    }
  };

  const handleClearOutput = () => {
    setOutput("");
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopyText("Code Copied!");
      setTimeout(() => setCopyText("Copy Code"), 2000);
    });
  };

  return (
    <div className={`p-6 min-h-screen flex flex-col items-center ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-blue-200 to-blue-50 text-black"}`}>
      {/* ✅ Header */}
      <h2 className="text-4xl mt-8 font-bold font-serif  mb-4">Online Code Editor</h2>

      {/* ✅ Toolbar */}
      <div className="flex justify-between w-full max-w-9xl mb-4">
        <div className="flex gap-4 items-center">
          <select
            className="p-2 w-[130px] bg-gray-700 text-white rounded"
            value={language ? language.name : ""}
            onChange={(e) => {
              setLanguage(languages.find(lang => lang.name === e.target.value) || null);
              setCode(""); // Clear previous code
            }
            }
          >
            <option value="" disabled>Select lang.</option>
            {languages.map((lang) => (
              <option key={lang.id} value={lang.name}>{lang.name}</option>
            ))}
          </select>
          <button
            onClick={handleRunCode}
            className="p-2 bg-gray-700 hover:bg-blue-700 rounded transition text-white"
          >
            Run Code
          </button>
          <button
            onClick={handleCopyCode}
            className="p-2 bg-gray-700 hover:bg-green-700 rounded transition text-white"
          >
            {copyText}
          </button>
          <button
            onClick={toggleDarkMode}
            className="p-2 bg-gray-600 hover:bg-gray-700 rounded transition text-white"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>

      {/* ✅ Responsive Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-9xl gap-2">
        {/* ✅ Code Editor Section */}
        <div className="bg-gray-800 rounded shadow-lg flex flex-col h-[500px]">
          <div className="bg-gray-900 text-white p-2 rounded-t text-sm font-semibold">Code Editor</div>
          <CodeMirror
            value={code}
            height="100%"
            theme={dracula}
            extensions={language ? [language.extension] : []}
            onChange={(value) => setCode(value)}
            className="flex-grow"
            placeholder="Write your code here..."
          />
        </div>

        {/* ✅ Output Section */}
        <div className="bg-gray-800 rounded shadow-lg flex flex-col h-[500px]">
          <div className="bg-gray-900 text-white p-2 rounded-t text-sm font-semibold flex justify-between">
            <span>Output</span>
            <button 
              className="text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
              onClick={handleClearOutput}
            >
              Clear
            </button>
          </div>
          <div className="bg-black p-2 flex-grow rounded-b text-green-400 whitespace-pre-wrap overflow-auto">
            {output || "Output will be displayed here..."}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodingPlatform;