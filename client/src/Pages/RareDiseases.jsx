import React, { useState } from "react";

const RareDiseases = () => {
  const allDiseases = [
    {
      id: 1,
      name: "Systemic Lupus Erythematosus (SLE)",
      symptoms: "Butterfly rash, joint pain, fever, fatigue, chest pain, photosensitivity",
      solution: "NSAIDs, corticosteroids, immunosuppressants, antimalarial drugs, lifestyle management",
      contact: "+91-11-4141-1111",
      hospital: "Apollo Hospitals, New Delhi",
      email: "rheumatology@apollo.com"
    },
    {
      id: 2,
      name: "Ehlers-Danlos Syndrome",
      symptoms: "Skin hyperextensibility, joint hypermobility, tissue fragility, easy bruising, chronic pain",
      solution: "Physical therapy, pain management, genetic counseling, surgical interventions, monitoring",
      contact: "+91-80-3965-1234",
      hospital: "Fortis Healthcare, Bangalore",
      email: "genetics@fortis.com"
    },
    {
      id: 3,
      name: "Marfan Syndrome",
      symptoms: "Tall stature, lens dislocation, skeletal abnormalities, aortic root dilatation, joint laxity",
      solution: "Beta-blockers, ARBs, surgical repair, physical therapy, genetic counseling, regular monitoring",
      contact: "+91-22-6857-3000",
      hospital: "Max Healthcare, Mumbai",
      email: "cardiology@maxhealth.com"
    },
    {
      id: 4,
      name: "Myasthenia Gravis",
      symptoms: "Muscle weakness, ptosis, diplopia, facial weakness, difficulty swallowing, fatigue",
      solution: "Anticholinesterase drugs, immunosuppressants, plasmapheresis, thymectomy, respiratory support",
      contact: "+91-40-6633-7777",
      hospital: "CARE Hospitals, Hyderabad",
      email: "neurology@care.com"
    },
    {
      id: 5,
      name: "Sarcoidosis",
      symptoms: "Persistent cough, chest pain, shortness of breath, fever, fatigue, skin nodules",
      solution: "Corticosteroids, immunosuppressants, pulmonary rehabilitation, respiratory support, monitoring",
      contact: "+91-33-4001-5000",
      hospital: "Apollo Gleneagles, Kolkata",
      email: "pulmonology@apollogleneagles.com"
    },
    {
      id: 6,
      name: "Behçet's Disease",
      symptoms: "Recurrent oral ulcers, genital ulcers, ocular inflammation, skin lesions, vascular complications",
      solution: "Topical corticosteroids, colchicine, immunosuppressants, anticoagulants, ophthalmologic care",
      contact: "+91-95-1111-1111",
      hospital: "Artemis Hospital, Delhi NCR",
      email: "rheumatology@artemishospital.com"
    },
    {
      id: 7,
      name: "Granulomatosis with Polyangiitis",
      symptoms: "Upper respiratory symptoms, pulmonary nodules, hematuria, rash, fever, systemic inflammation",
      solution: "Corticosteroids, immunosuppressants, cyclophosphamide, plasmapheresis, supportive care",
      contact: "+91-22-5677-7777",
      hospital: "Hinduja Hospital, Mumbai",
      email: "rheumatology@hinduja.com"
    },
    {
      id: 8,
      name: "Pemphigus Vulgaris",
      symptoms: "Painful blisters, erosions, mouth ulcers, skin lesions, secondary infections, scarring",
      solution: "Corticosteroids, steroid-sparing agents, dapsone, rituximab, local wound care",
      contact: "+91-40-6600-6600",
      hospital: "Continental Hospitals, Hyderabad",
      email: "dermatology@continentalhospitals.com"
    },
    {
      id: 9,
      name: "Hereditary Angioedema",
      symptoms: "Recurrent angioedema, swelling of face/hands/feet, abdominal pain, airway swelling, asphyxia",
      solution: "C1-esterase inhibitor, fresh frozen plasma, icatibant, ecallantide, emergency management",
      contact: "+91-98-7654-3210",
      hospital: "Medanta Hospital, Delhi",
      email: "immunology@medanta.com"
    },
    {
      id: 10,
      name: "Primary Biliary Cholangitis",
      symptoms: "Fatigue, itching, jaundice, abdominal pain, dark urine, pale stools, cirrhosis signs",
      solution: "Ursodeoxycholic acid, immunosuppressants, liver transplantation, symptom management",
      contact: "+91-11-4643-5000",
      hospital: "Sir Ganga Ram Hospital, Delhi",
      email: "hepatology@gangaramhospital.com"
    }
  ];

  const [displayCount, setDisplayCount] = useState(6);

  const visibleDiseases = allDiseases.slice(0, displayCount);
  const hasMore = displayCount < allDiseases.length;

  const handleViewMore = () => {
    setDisplayCount(prev => Math.min(prev + 4, allDiseases.length));
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] p-6">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-[#1E3A8A] mb-3">🏥 Rare Diseases Guide</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive information about rare diseases, their symptoms, solutions, and specialist contact details
        </p>
      </div>

      {/* Diseases Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {visibleDiseases.map((disease) => (
          <div
            key={disease.id}
            className="bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-200"
          >
            {/* Card Header */}
            <div className="bg-gradient-to-r from-[#1E3A8A] to-[#10B981] text-white p-5">
              <h3 className="text-lg font-bold">{disease.name}</h3>
            </div>

            {/* Card Body */}
            <div className="p-5">
              {/* Symptoms */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-500 uppercase mb-2">🔍 Symptoms</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {disease.symptoms}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-500 uppercase mb-2">💊 Treatment & Solution</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {disease.solution}
                </p>
              </div>

              {/* Contact Details */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-xs font-semibold text-[#1E3A8A] uppercase mb-2">📞 Contact Information</p>
                <div className="space-y-2">
                  <p className="text-xs text-gray-700">
                    <strong>🏢 Hospital:</strong> {disease.hospital}
                  </p>
                  <p className="text-xs text-gray-700">
                    <strong>📱 Phone:</strong> <span className="text-blue-600 font-semibold">{disease.contact}</span>
                  </p>
                  <p className="text-xs text-gray-700">
                    <strong>📧 Email:</strong> <a href={`mailto:${disease.email}`} className="text-blue-600 hover:underline">{disease.email}</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="bg-gray-50 px-5 py-3 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                ℹ️ Consult specialists for personalized care
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      {hasMore && (
        <div className="flex justify-center">
          <button
            onClick={handleViewMore}
            className="bg-gradient-to-r from-[#1E3A8A] to-[#10B981] text-white px-8 py-3 rounded-lg font-bold text-lg hover:shadow-lg transition shadow-md hover:scale-105 transform"
          >
            📚 View More Diseases ({allDiseases.length - displayCount} more)
          </button>
        </div>
      )}

      {/* No More Diseases Message */}
      {!hasMore && displayCount > 6 && (
        <div className="text-center">
          <p className="text-lg text-gray-600 font-semibold">
            ✅ You've viewed all {allDiseases.length} rare diseases in our database
          </p>
        </div>
      )}
    </div>
  );
};

export default RareDiseases;
