import React from "react";

const ResultCard = ({ item }) => {
  // Parse confidence percentage
  const confidenceValue = parseInt(item.confidence) || 0;
  
  // Determine color based on confidence
  let confidenceColor = "bg-red-500"; // < 50%
  if (confidenceValue >= 80) {
    confidenceColor = "bg-green-500";
  } else if (confidenceValue >= 65) {
    confidenceColor = "bg-yellow-500";
  } else if (confidenceValue >= 50) {
    confidenceColor = "bg-orange-500";
  }

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
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Recommended Next Steps</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            {item.next_steps}
          </p>
        </div>
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