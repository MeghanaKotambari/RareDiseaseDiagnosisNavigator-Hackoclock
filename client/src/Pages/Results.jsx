import React, { useState } from "react";
import axios from "axios";
import ResultCard from "../components/ResultCard";

const Result = ({ data }) => {
  const [showSpecialistsModal, setShowSpecialistsModal] = useState(false);
  const [activeTab, setActiveTab] = useState(data[0]?.name || "");
  const [specialistsData, setSpecialistsData] = useState({});
  const [loadingTab, setLoadingTab] = useState(null);

  // Get unique disease names
  const diseases = data.map((item) => item.name);

  // Fetch specialists for a specific disease
  const fetchSpecialists = async (diseaseName) => {
    if (specialistsData[diseaseName]) return; // Already loaded

    try {
      setLoadingTab(diseaseName);
      const res = await axios.get(
        `http://localhost:3000/api/specialists/${encodeURIComponent(diseaseName)}`
      );
      if (res.data.success) {
        setSpecialistsData((prev) => ({
          ...prev,
          [diseaseName]: res.data.data,
        }));
      }
    } catch (error) {
      console.error("Error fetching specialist data:", error);
      setSpecialistsData((prev) => ({
        ...prev,
        [diseaseName]: {
          specialists: [],
          hospitals: [],
          tests: "Information not available",
        },
      }));
    } finally {
      setLoadingTab(null);
    }
  };

  // Handle tab change
  const handleTabChange = async (diseaseName) => {
    setActiveTab(diseaseName);
    if (!specialistsData[diseaseName]) {
      await fetchSpecialists(diseaseName);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header Section with Button */}
      <div className="bg-gradient-to-r from-[#1E3A8A] to-[#10B981] text-white p-8">
        <h1 className="text-4xl font-bold text-center mb-2">📋 Diagnosis Results</h1>
        <p className="text-center text-white/90 mb-6">AI-powered analysis showing potential diagnoses ranked by confidence</p>
        
        {/* Find Specialists Button - Prominent */}
        <div className="flex justify-center">
          <button
            onClick={async () => {
              setShowSpecialistsModal(true);
              if (!specialistsData[activeTab]) {
                await fetchSpecialists(activeTab);
              }
            }}
            className="bg-white text-[#1E3A8A] px-8 py-3 rounded-lg text-lg font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            🔍 Find All Specialists & Hospitals
          </button>
        </div>
      </div>

      {/* Diagnosis Results Grid */}
      <div className="p-6 grid md:grid-cols-2 gap-6">
        {data.map((item, index) => (
          <ResultCard key={index} item={item} />
        ))}
      </div>

      {/* Specialists Modal with Tabs */}
      {showSpecialistsModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#1E3A8A] to-[#10B981] text-white p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold">🏥 Specialists & Hospitals</h2>
              <button
                onClick={() => setShowSpecialistsModal(false)}
                className="text-white hover:bg-white/20 rounded-full p-2 transition text-2xl"
              >
                ✕
              </button>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 p-4 bg-gray-50 border-b overflow-x-auto">
              {diseases.map((disease) => (
                <button
                  key={disease}
                  onClick={() => handleTabChange(disease)}
                  className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition ${
                    activeTab === disease
                      ? "bg-[#1E3A8A] text-white shadow-md"
                      : "bg-white text-gray-700 border-2 border-gray-300 hover:border-[#1E3A8A]"
                  }`}
                >
                  {disease}
                </button>
              ))}
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {loadingTab === activeTab ? (
                <div className="text-center py-12">
                  <div className="inline-block">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#10B981]"></div>
                  </div>
                  <p className="text-gray-600 mt-4 font-semibold">Loading specialist information...</p>
                </div>
              ) : specialistsData[activeTab] ? (
                <>
                  {/* Specialists Section */}
                  {specialistsData[activeTab].specialists &&
                    specialistsData[activeTab].specialists.length > 0 && (
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-[#1E3A8A] mb-4 pb-2 border-b-2 border-[#10B981]">
                          👨‍⚕️ Specialist Doctors
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {specialistsData[activeTab].specialists.map((doc, idx) => (
                            <div
                              key={idx}
                              className="bg-gradient-to-br from-blue-50 to-green-50 p-4 rounded-lg border-2 border-[#1E3A8A]/20 hover:shadow-md transition"
                            >
                              <p className="text-lg font-bold text-[#1E3A8A] mb-2">{doc.name}</p>
                              <p className="text-sm text-[#10B981] font-semibold mb-1">{doc.specialization}</p>
                              <p className="text-sm text-gray-700 mb-1">{doc.experience}</p>
                              <p className="text-sm text-gray-600 mb-3">{doc.hospital}</p>
                              <div className="bg-white p-3 rounded border border-gray-200">
                                <p className="text-xs text-gray-600 mb-1">
                                  <strong>📍 Location:</strong> {doc.location}
                                </p>
                                <p className="text-xs text-blue-600 font-semibold mb-1">
                                  <strong>📞 Contact:</strong> {doc.contact}
                                </p>
                                <p className="text-xs text-gray-600">
                                  <strong>📧 Email:</strong> {doc.email}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  {/* Hospitals Section */}
                  {specialistsData[activeTab].hospitals &&
                    specialistsData[activeTab].hospitals.length > 0 && (
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-[#10B981] mb-4 pb-2 border-b-2 border-[#10B981]">
                          🏥 Recommended Hospitals
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {specialistsData[activeTab].hospitals.map((hosp, idx) => (
                            <div
                              key={idx}
                              className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-lg border-2 border-[#10B981]/20 hover:shadow-md transition"
                            >
                              <p className="text-lg font-bold text-[#10B981] mb-2">{hosp.name}</p>
                              <p className="text-sm text-[#1E3A8A] font-semibold mb-1">{hosp.specialization}</p>
                              <div className="bg-white p-3 rounded border border-gray-200">
                                <p className="text-xs text-gray-600 mb-2">
                                  <strong>📍 Location:</strong> {hosp.location}
                                </p>
                                <p className="text-xs text-green-600 font-semibold mb-2">
                                  <strong>📞 Contact:</strong> {hosp.contact}
                                </p>
                                <a
                                  href={`https://${hosp.website}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-blue-600 hover:underline"
                                >
                                  <strong>🌐 Website:</strong> {hosp.website}
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  {/* Tests Section */}
                  {specialistsData[activeTab].tests && (
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-[#1E3A8A] mb-4 pb-2 border-b-2 border-[#10B981]">
                        🔬 Recommended Diagnostic Tests
                      </h3>
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-5 rounded-lg border-2 border-[#1E3A8A]/20">
                        <p className="text-sm text-gray-700 leading-relaxed">{specialistsData[activeTab].tests}</p>
                      </div>
                    </div>
                  )}

                  {/* Disclaimer */}
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <p className="text-xs text-yellow-800">
                      <strong>⚠️ Important:</strong> This information is provided for reference purposes. Please contact the hospital directly to verify current services and specialist availability before visiting.
                    </p>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-lg text-gray-600">❌ Unable to load specialist information</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Please contact nearby major hospitals for more information.
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-6 py-4 border-t flex justify-end gap-3">
              <button
                onClick={() => setShowSpecialistsModal(false)}
                className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-400 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;