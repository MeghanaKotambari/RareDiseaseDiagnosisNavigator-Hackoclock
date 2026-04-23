import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/sanjeevanilogo.png";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex justify-between items-center">
      
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/home")}>
        <img src={logo} alt="Sanjeevani" className="h-10 w-10 rounded-full object-cover" />
        <h1 className="text-xl font-bold text-[#1E3A8A]">
          Sanjeevani
        </h1>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-6 text-[#1E3A8A] font-medium">
        <button onClick={() => navigate("/home")} className="hover:text-[#10B981] transition">Home</button>
        <button onClick={() => navigate("/diagnose")} className="hover:text-[#10B981] transition">Diagnose</button>
        <button onClick={() => navigate("/about")} className="hover:text-[#10B981] transition">About</button>
      </div>

      {/* Button */}
      <button onClick={() => navigate("/diagnose")} className="bg-[#10B981] text-white px-4 py-2 rounded-lg hover:bg-[#059669] transition">
        Start Diagnosis
      </button>
    </nav>
  );
};

export default Navbar;