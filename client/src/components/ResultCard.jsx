import React, { useState, useEffect } from "react";
import axios from "axios";

const ResultCard = ({ item }) => {
  // Parse confidence percentage
  const confidenceValue = parseInt(item.confidence) || 0;
  const [expandDetails, setExpandDetails] = useState(false);
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

  // Fetch specialist information when expanding
  useEffect(() => {
    if (expandDetails && !specialistData && !loadingSpecialists) {
      fetchSpecialists();
    }
  }, [expandDetails]);

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

        {/* Expand Details Button */}
        <button
          onClick={() => setExpandDetails(!expandDetails)}
          className="w-full bg-gradient-to-r from-[#1E3A8A]/80 to-[#10B981]/80 text-white py-2 rounded-lg text-sm font-semibold hover:from-[#1E3A8A] hover:to-[#10B981] transition mt-4"
        >
          {expandDetails ? "Hide Details ⬆️" : "Find Specialists & Hospitals ⬇️"}
        </button>

        {/* Specialist Details Section */}
        {expandDetails && (
          <div className="mt-5 border-t pt-5 bg-blue-50 -mx-5 -mb-5 px-5 py-5">
            {loadingSpecialists ? (
              <div className="text-center py-4">
                <p className="text-sm text-gray-600">Loading specialist information...</p>
              </div>
            ) : specialistData ? (
              <>
                {/* Specialists */}
                {specialistData.specialists && specialistData.specialists.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-bold text-[#1E3A8A] text-sm mb-2">👨‍⚕️ Specialist Doctors</h4>
                    {specialistData.specialists.map((doc, idx) => (
                      <div key={idx} className="bg-white p-3 rounded mb-2 text-xs border border-gray-200">
                        <p className="font-semibold text-gray-800">{doc.name}</p>
                        <p className="text-gray-600">{doc.specialization}</p>
                        <p className="text-gray-600">{doc.hospital}, {doc.location}</p>
                        <p className="text-blue-600 font-semibold mt-1">{doc.contact}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Hospitals */}
                {specialistData.hospitals && specialistData.hospitals.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-bold text-[#10B981] text-sm mb-2">🏥 Nearby Hospitals</h4>
                    {specialistData.hospitals.map((hosp, idx) => (
                      <div key={idx} className="bg-white p-3 rounded mb-2 text-xs border border-gray-200">
                        <p className="font-semibold text-gray-800">{hosp.name}</p>
                        <p className="text-gray-600">{hosp.location}</p>
                        <p className="text-green-600 font-semibold">{hosp.contact}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tests */}
                {specialistData.tests && (
                  <div>
                    <h4 className="font-bold text-[#1E3A8A] text-sm mb-2">🔬 Recommended Tests</h4>
                    <p className="text-xs text-gray-700 bg-white p-3 rounded border border-gray-200">
                      {specialistData.tests}
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-4">
                <p className="text-sm text-gray-600">Unable to load specialist information</p>
              </div>
            )}
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