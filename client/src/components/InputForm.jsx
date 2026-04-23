import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const InputForm = ({ setLoading, setError }) => {
  const navigate = useNavigate();
  const [symptoms, setSymptoms] = useState("");
  const [symptomStartDate, setSymptomStartDate] = useState("");
  const [timelineDescription, setTimelineDescription] = useState("");
  const [labs, setLabs] = useState({
    hemoglobin: "",
    WBC: "",
    platelets: "",
    glucose: "",
    ESR: "",
    creatinine: "",
    albumin: "",
  });

  const handleLabChange = (field, value) => {
    setLabs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!symptoms.trim()) {
      setError("Please enter patient symptoms");
      return;
    }

    // Filter out empty lab values
    const filteredLabs = Object.fromEntries(
      Object.entries(labs).filter(([, value]) => value.trim() !== "")
    );

    if (Object.keys(filteredLabs).length === 0) {
      setError("Please enter at least one lab value");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await axios.post("http://localhost:3000/api/diagnosis", {
        symptoms: symptoms.trim(),
        timeline: {
          symptomStartDate: symptomStartDate || null,
          description: timelineDescription.trim() || null,
        },
        labs: filteredLabs,
      });

      const diagnoses = res.data.data.diagnoses || [];
      
      // Store results in localStorage and navigate to results page
      localStorage.setItem("diagnosisResults", JSON.stringify(diagnoses));
      
      // Delay navigation to let the loading spinner show briefly
      setTimeout(() => {
        navigate("/results");
      }, 500);
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to analyze. Please check your input and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto"
    >
      {/* Form Header */}
      <div className="bg-gradient-to-r from-[#1E3A8A]/10 to-[#10B981]/10 border-b border-gray-200 p-8">
        <h2 className="text-3xl font-bold text-[#1E3A8A] mb-2">Patient Information</h2>
        <p className="text-gray-600">Enter symptoms and lab results for analysis</p>
      </div>

      <div className="p-8">
        {/* Symptoms Section */}
        <div className="mb-10">
          <label className="block text-lg font-semibold text-[#1E3A8A] mb-3">
            📋 Patient Symptoms
          </label>
          <textarea
            placeholder="e.g., persistent headache, fever, joint pain, fatigue, difficulty breathing"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 transition"
            rows={5}
          />
          <p className="text-sm text-gray-500 mt-2">Separate multiple symptoms with commas</p>
        </div>

        {/* Timeline Section */}
        <div className="mb-10">
          <label className="block text-lg font-semibold text-[#1E3A8A] mb-4">
            📅 Symptom Timeline (Optional)
          </label>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <p className="text-sm text-gray-600 mb-6">
              Help us understand the progression of symptoms for better diagnosis
            </p>

            {/* Timeline Fields Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Symptom Start Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  When did symptoms start?
                </label>
                <input
                  type="date"
                  value={symptomStartDate}
                  onChange={(e) => setSymptomStartDate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981]/20"
                />
                <p className="text-xs text-gray-500 mt-1">Leave blank if date is unknown</p>
              </div>

              {/* Timeline Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Symptom Progression
                </label>
                <input
                  type="text"
                  placeholder="e.g., Started suddenly, worsening daily, intermittent"
                  value={timelineDescription}
                  onChange={(e) => setTimelineDescription(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981]/20"
                />
                <p className="text-xs text-gray-500 mt-1">Describe how symptoms have progressed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lab Results Section */}
        <div className="mb-10">
          <label className="block text-lg font-semibold text-[#1E3A8A] mb-4">
            🔬 Lab Results (Optional)
          </label>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-sm text-gray-600 mb-6">
              Enter values with units (e.g., "13.5 g/dL", "7500 cells/mcL")
            </p>

            {/* Lab Inputs Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Hemoglobin */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Hemoglobin
                </label>
                <input
                  type="text"
                  placeholder="e.g., 13.5 g/dL"
                  value={labs.hemoglobin}
                  onChange={(e) => handleLabChange("hemoglobin", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981]/20"
                />
              </div>

              {/* WBC */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  WBC (White Blood Cells)
                </label>
                <input
                  type="text"
                  placeholder="e.g., 7500 cells/mcL"
                  value={labs.WBC}
                  onChange={(e) => handleLabChange("WBC", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981]/20"
                />
              </div>

              {/* Platelets */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Platelets
                </label>
                <input
                  type="text"
                  placeholder="e.g., 250000"
                  value={labs.platelets}
                  onChange={(e) => handleLabChange("platelets", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981]/20"
                />
              </div>

              {/* Glucose */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Glucose
                </label>
                <input
                  type="text"
                  placeholder="e.g., 95 mg/dL"
                  value={labs.glucose}
                  onChange={(e) => handleLabChange("glucose", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981]/20"
                />
              </div>

              {/* ESR */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ESR (Erythrocyte Sedimentation Rate)
                </label>
                <input
                  type="text"
                  placeholder="e.g., 25 mm/h"
                  value={labs.ESR}
                  onChange={(e) => handleLabChange("ESR", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981]/20"
                />
              </div>

              {/* Creatinine */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Creatinine
                </label>
                <input
                  type="text"
                  placeholder="e.g., 0.9 mg/dL"
                  value={labs.creatinine}
                  onChange={(e) => handleLabChange("creatinine", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981]/20"
                />
              </div>

              {/* Albumin */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Albumin
                </label>
                <input
                  type="text"
                  placeholder="e.g., 4.0 g/dL"
                  value={labs.albumin}
                  onChange={(e) => handleLabChange("albumin", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981]/20"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#1E3A8A] to-[#10B981] text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition duration-300 flex items-center justify-center gap-2"
        >
          🔍 Analyze Patient Data
        </button>
      </div>
    </form>
  );
};

export default InputForm;