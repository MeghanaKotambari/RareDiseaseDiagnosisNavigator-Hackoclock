import React, { useState } from "react";
import axios from "axios";

const ResultCard = ({ item }) => {
  // Parse confidence percentage
  const confidenceValue = parseInt(item.confidence) || 0;
  const [showModal, setShowModal] = useState(false);
  const [specialistData, setSpecialistData] = useState(null);
  const [loadingSpecialists, setLoadingSpecialists] = useState(false);
  
  // Determine color based on confidence
  let confidenceColor = "bg-red-500"; // < 50%
  if (confidenceValue >= 80) {
    confidenceColor = "bg-green-500";
  } else if (confidenceValue >= 65) {
    confidenceColor = "bg-yellow-500";
  } else if (confidenceValue >= 50) {
    confidenceColor = "bg-orange-500";
  }

  // Handle button click to open modal
  const handleFindSpecialists = async () => {
    setShowModal(true);
    if (!specialistData && !loadingSpecialists) {
      await fetchSpecialists();
    }
  };

  const fetchSpecialists = async () => {
    try {
      setLoadingSpecialists(true);
      const res = await axios.get(
        `http://localhost:3000/api/specialists/${encodeURIComponent(item.name)}`
      );
      if (res.data.success) {
        setSpecialistData(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching specialist data:", error);
      setSpecialistData({ specialists: [], hospitals: [], message: "Information not available" });
    } finally {
      setLoadingSpecialists(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-200">
      {/* Card Header with Disease Name */}
      <div className="bg-gradient-to-r from-[#1E3A8A]/10 to-[#10B981]/10 p-5 border-b border-gray-200">
        <h3 className="text-lg font-bold text-[#1E3A8A]">
          {item.name}
        </h3>
      </div>

      {/* Card Body */}
      <div className="p-5">
        {/* Confidence Section */}
        <div className="mb-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-700">Confidence Level</span>
            <span className={`font-bold text-sm ${
              confidenceValue >= 80 ? 'text-green-600' :
              confidenceValue >= 65 ? 'text-yellow-600' :
              confidenceValue >= 50 ? 'text-orange-600' : 'text-red-600'
            }`}>
              {item.confidence}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className={`h-full ${confidenceColor} transition-all duration-500`}
              style={{ width: `${confidenceValue}%` }}
            />
          </div>
        </div>

        {/* Reason */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Reason</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            {item.reason}
          </p>
        </div>

        {/* Next Steps */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Recommended Next Steps</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            {item.next_steps}
          </p>
        </div>

        {/* Find Specialists Button */}
        <button
          onClick={handleFindSpecialists}
          className="w-full bg-gradient-to-r from-[#1E3A8A]/80 to-[#10B981]/80 text-white py-2 rounded-lg text-sm font-semibold hover:from-[#1E3A8A] hover:to-[#10B981] transition mt-4"
        >
          🔍 Find Specialists & Hospitals
        </button>

        {/* Specialist Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-[#1E3A8A] to-[#10B981] text-white p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">🏥 {item.name}</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition text-2xl"
                >
                  ✕
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {loadingSpecialists ? (
                  <div className="text-center py-8">
                    <div className="inline-block">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#10B981]"></div>
                    </div>
                    <p className="text-gray-600 mt-4">Loading specialist information...</p>
                  </div>
                ) : specialistData ? (
                  <>
                    {/* Specialists Section */}
                    {specialistData.specialists && specialistData.specialists.length > 0 && (
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-[#1E3A8A] mb-4 pb-2 border-b-2 border-[#10B981]">👨‍⚕️ Specialist Doctors</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {specialistData.specialists.map((doc, idx) => (
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
                    {specialistData.hospitals && specialistData.hospitals.length > 0 && (
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-[#10B981] mb-4 pb-2 border-b-2 border-[#10B981]">🏥 Recommended Hospitals</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {specialistData.hospitals.map((hosp, idx) => (
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
                    {specialistData.tests && (
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-[#1E3A8A] mb-4 pb-2 border-b-2 border-[#10B981]">🔬 Recommended Diagnostic Tests</h3>
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-5 rounded-lg border-2 border-[#1E3A8A]/20">
                          <p className="text-sm text-gray-700 leading-relaxed">{specialistData.tests}</p>
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
                    <p className="text-sm text-gray-500 mt-2">Please contact nearby major hospitals for more information about {item.name}</p>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="bg-gray-50 px-6 py-4 border-t flex justify-end gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-400 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          💡 Consult with a healthcare professional for confirmation
        </p>
      </div>
    </div>
  );
};

export default ResultCard;