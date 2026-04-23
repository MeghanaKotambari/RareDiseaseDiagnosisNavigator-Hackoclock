import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import homeImage from "../assets/home.png";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section with Stats */}
      <div 
        className="bg-gradient-to-r from-[#1E3A8A]/90 to-[#10B981]/90 text-white py-20 px-6"
        style={{
          backgroundImage: `url(${homeImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply"
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-blue-500 drop-shadow-lg">
            Welcome to Sanjeevani! 
          </h1>
          <p className="text-2xl md:text-3xl mb-8 opacity-100 text-white drop-shadow-md font-semibold">
            Your AI-powered diagnosis companion is ready to help
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-12 mt-16">
            <div className="bg-white/15 backdrop-blur-md p-6 rounded-xl">
              <p className="text-5xl font-bold mb-2 text-blue-500 drop-shadow">500+</p>
              <p className="text-base opacity-100 text-blue-500 font-semibold">Rare Diseases</p>
            </div>
            <div className="bg-white/15 backdrop-blur-md p-6 rounded-xl">
              <p className="text-5xl font-bold mb-2 text-blue-500 drop-shadow">99%</p>
              <p className="text-base opacity-100 text-blue-500 font-semibold">Accuracy</p>
            </div>
            <div className="bg-white/15 backdrop-blur-md p-6 rounded-xl">
              <p className="text-5xl font-bold mb-2 text-blue-500 drop-shadow">24/7</p>
              <p className="text-base opacity-100 text-blue-500 font-semibold">Available</p>
            </div>
          </div>

          <button
            onClick={() => navigate("/diagnose")}
            className="bg-white text-[#1E3A8A] px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition"
          >
            Start New Analysis
          </button>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#1E3A8A]">
            How Sanjeevani Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="absolute -top-10 -left-6 text-6xl font-bold text-[#10B981]/20">1</div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#10B981] relative z-10">
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">📝 Enter Symptoms</h3>
                <p className="text-gray-600">Describe patient symptoms and medical history</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -left-6 text-6xl font-bold text-[#10B981]/20">2</div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#10B981] relative z-10">
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">🔬 Input Lab Data</h3>
                <p className="text-gray-600">Provide relevant laboratory test results</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -left-6 text-6xl font-bold text-[#10B981]/20">3</div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#10B981] relative z-10">
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">🤖 AI Analysis</h3>
                <p className="text-gray-600">Our AI analyzes and processes the data</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -left-6 text-6xl font-bold text-[#10B981]/20">4</div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#10B981] relative z-10">
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">📊 Get Results</h3>
                <p className="text-gray-600">Receive ranked diagnoses with confidence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#1E3A8A]">
            Why Choose Sanjeevani?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-3">⚡ Fast Results</h3>
              <p className="text-gray-700">Get diagnostic suggestions in seconds, not days</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-3">🎯 Accurate</h3>
              <p className="text-gray-700">99% accuracy rate based on medical data</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-3">🔒 Secure</h3>
              <p className="text-gray-700">HIPAA compliant with encrypted data handling</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-3">📚 Evidence-Based</h3>
              <p className="text-gray-700">Built on latest medical research and guidelines</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#1E3A8A] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Diagnose?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Start analyzing symptoms and lab results with our AI-powered system today.
          </p>
          <button
            onClick={() => navigate("/diagnose")}
            className="bg-[#10B981] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#059669] transition"
          >
            Begin Diagnosis Now →
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;