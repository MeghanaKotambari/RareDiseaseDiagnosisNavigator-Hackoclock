import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ResultCard from "../components/ResultCard";
import resultImage from "../assets/result.png";

const Result = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Retrieve results from localStorage
    const storedResults = localStorage.getItem("diagnosisResults");
    if (storedResults) {
      try {
        setData(JSON.parse(storedResults));
      } catch (error) {
        console.error("Error parsing stored results:", error);
        navigate("/diagnose");
      }
    } else {
      // No results found, redirect to diagnose
      navigate("/diagnose");
    }
  }, [navigate]);

  if (!data || data.length === 0) {
    return (
      <div 
        className="min-h-screen flex flex-col bg-white"
        style={{
          backgroundImage: `url(${resultImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-6 py-20 bg-black/10">
          <div className="text-center bg-white/90 p-8 rounded-xl">
            <h1 className="text-4xl font-bold text-[#1E3A8A] mb-4">No Results</h1>
            <p className="text-lg text-gray-600 mb-8">
              Please go to the diagnosis page and enter your symptoms.
            </p>
            <button
              onClick={() => navigate("/diagnose")}
              className="bg-[#aafafd] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#9ff7fa] transition"
            >
              ← Back to Diagnosis
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen flex flex-col bg-white"
      style={{
        backgroundImage: `url(${resultImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <div 
        className="bg-gradient-to-r from-[#1E3A8A]/80 to-[#10B981]/80 text-white py-16 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">Diagnosis Results</h1>
          <p className="text-lg opacity-100 text-white drop-shadow-md font-semibold">
            AI-powered analysis showing potential diagnoses ranked by confidence
          </p>
        </div>
      </div>

      {/* Results Grid */}
      <div className="flex-1 py-12 px-6 bg-black/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {data.map((item, index) => (
              <ResultCard key={index} item={item} index={index} />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate("/diagnose")}
              className="bg-white text-[#1E3A8A] px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
            >
              ← New Diagnosis
            </button>
            <button
              onClick={() => window.print()}
              className="bg-white text-[#10B981] px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
            >
              🖨️ Print Results
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Result;