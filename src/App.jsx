import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MainPage from "./Pages/MainPage";
import ChatInterface from "./Pages/ChatInterface";
import { useState } from "react";
import RoadmapSection from "./Pages/RoadmapSection";
import RefrshHandler from "./RefrshHandler";
import Frontend from "./Pages/Roadmap/Frontend";
import Backend from "./Pages/Roadmap/Backend";
import FullStack from "./Pages/Roadmap/FullStack";
import DSA from "./Pages/Roadmap/DSA";
import TestSelection from "./Pages/TestSelection";
import MCQTest from "./Pages/MCQTest";
import CodingPlatform from "./Pages/CodingPlatform";
import ResumeBuilder from "./Pages/ResumeBuilder";
import FaqPage from "./Pages/Faq";
import EtiquetteSection from "./Pages/EtiquetteSection";
import Company from "./Pages/Company";
import JobPortal from "./Pages/JobPortal";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/chat-interface" element={<PrivateRoute><ChatInterface /></PrivateRoute>} />
        <Route path="/resume" element={<ResumeBuilder />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/etiquettes" element={<EtiquetteSection />} />
        <Route path="/companies" element={<Company />} />
        <Route path="/roadmap" element={<RoadmapSection />} />
        <Route path="/roadmap/frontend" element={<Frontend />} />
        <Route path="/roadmap/backend" element={<Backend />} />
        <Route path="/roadmap/fullstack" element={<FullStack/>}/>
        <Route path="/roadmap/dsa" element={<DSA />} />
        <Route path="/mcq" element={<TestSelection />} />
        <Route path="/mcq/:category" element={<MCQTest />} />
        <Route path="/coding" element={<CodingPlatform />} />
        <Route path="/job" element={<JobPortal />} />
      </Routes>
    </div>
  );
}

export default App;