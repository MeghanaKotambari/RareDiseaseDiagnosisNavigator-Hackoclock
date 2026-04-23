import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgImage from "../assets/bg.png";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen flex flex-col justify-between bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Navbar />

      {/* Hero Section with Overlay */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 relative z-10">
        {/* Blue overlay background */}
        <div className="absolute inset-0 bg-blue-400/15"></div>
        
        <div className="relative z-20">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-[#1E3A8A] mb-4">
            Sanjeevani AI
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-3xl text-[#08885d] font-medium mb-6">
            Where AI Meets Healing
          </p>

          {/* Description */}
          <p className="md:text-2xl text-gray-700 mb-8">
            An intelligent platform that analyzes symptoms, timelines, and lab data
            to help identify rare diseases faster and guide you toward the right diagnosis.
          </p>

          {/* CTA Button */}
          <button 
            onClick={() => navigate("/diagnose")}
            className="bg-[#10B981] text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-[#059669] transition shadow-lg">
            Start Diagnosis
          </button>
        </div>
      </div>

      {/* Feature Section */}
      <div className="grid md:grid-cols-3 gap-6 px-6 py-12 bg-[#F9FAFB]">
        
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border-l-4 border-[#10B981]">
          <h3 className="text-[#1E3A8A] font-semibold text-lg mb-2">
            Smart Analysis
          </h3>
          <p className="text-gray-600">
            AI-powered understanding of symptoms and medical data.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border-l-4 border-[#10B981]">
          <h3 className="text-[#1E3A8A] font-semibold text-lg mb-2">
            Rare Disease Detection
          </h3>
          <p className="text-gray-600">
            Identify potential rare conditions with confidence scores.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border-l-4 border-[#10B981]">
          <h3 className="text-[#1E3A8A] font-semibold text-lg mb-2">
            Guided Next Steps
          </h3>
          <p className="text-gray-600">
            Get recommended tests and specialist guidance instantly.
          </p>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;