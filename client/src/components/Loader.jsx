import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-12 shadow-2xl text-center">
        {/* Animated Medical Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-24 h-24">
            {/* Outer rotating circle */}
            <div className="absolute inset-0 border-4 border-transparent border-t-[#10B981] border-r-[#10B981] rounded-full animate-spin"></div>
            
            {/* Middle rotating circle (opposite direction) */}
            <div className="absolute inset-3 border-4 border-transparent border-b-[#1E3A8A] border-l-[#1E3A8A] rounded-full animate-spin-reverse" style={{ animation: 'spin 3s linear infinite reverse' }}></div>
            
            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center text-4xl">
              🔬
            </div>
          </div>
        </div>

        {/* Text */}
        <h3 className="text-2xl font-bold text-[#1E3A8A] mb-3">Analyzing...</h3>
        <p className="text-gray-600 mb-6">
          Our AI is intelligently processing your symptoms and lab data to identify potential diagnoses
        </p>

        {/* Animated dots */}
        <div className="flex justify-center gap-2">
          <div className="w-3 h-3 bg-[#10B981] rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
          <div className="w-3 h-3 bg-[#1E3A8A] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-3 h-3 bg-[#10B981] rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
        </div>

        {/* Progress info */}
        <p className="text-sm text-gray-500 mt-6">
          This may take a few seconds...
        </p>
      </div>

      <style>{`
        @keyframes spin-reverse {
          to { transform: rotate(-360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;