import React, { useState } from "react";
import Navbar from "../components/Navbar";
import InputForm from "../components/InputForm";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

const Diagnose = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1E3A8A] to-[#10B981] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Diagnosis Analysis</h1>
          <p className="text-lg opacity-90">
            Enter patient symptoms and lab results for intelligent diagnosis suggestions
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <InputForm
            setLoading={setLoading}
            setError={setError}
          />

          {error && (
            <div className="mt-8 bg-red-50 border border-red-200 text-red-700 p-6 rounded-xl max-w-4xl mx-auto">
              <p className="font-semibold">⚠️ Error</p>
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>

      {loading && <Loader />}

      <Footer />
    </div>
  );
};

export default Diagnose;