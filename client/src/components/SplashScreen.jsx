import React, { useEffect, useState } from "react";
import sanjeevani from "../assets/sanjeevani.png";

const SplashScreen = ({ onComplete }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Start fade-out animation at 6 seconds
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 6000);

    // Complete splash at 7 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 7000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gradient-to-b from-[#1E3A8A] to-[#10B981] transition-opacity duration-1000 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Animated Logo */}
        <div className="animate-bounce">
          <img
            src={sanjeevani}
            alt="Sanjeevani"
            className="h-64 w-64 rounded-full shadow-2xl object-cover"
          />
        </div>

        {/* Animated Text */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-2 animate-pulse">
            Sanjeevani
          </h1>
          <p className="text-xl text-white/80">Where AI Meets Healing</p>
        </div>

        {/* Loading Dots */}
        <div className="flex gap-2 mt-8">
          <div className="w-3 h-3 rounded-full bg-white animate-bounce" style={{ animationDelay: "0s" }}></div>
          <div className="w-3 h-3 rounded-full bg-white animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-3 h-3 rounded-full bg-white animate-bounce" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
