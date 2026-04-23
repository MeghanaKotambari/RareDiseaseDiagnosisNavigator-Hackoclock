import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ResultCard from "../components/ResultCard";
import resultImage from "../assets/result.png";

const Result = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Retrieve results from localStorage
    const storedResults = localStorage.getItem("diagnosisResults");
    if (storedResults) {
      try {
        setData(JSON.parse(storedResults));
      } catch (error) {
        console.error("Error parsing stored results:", error);
        navigate("/diagnose");
      }
    } else {
      // No results found, redirect to diagnose
      navigate("/diagnose");
    }
  }, [navigate]);

  // Download Results as PDF
  const downloadPDF = () => {
    const element = document.getElementById("results-container");
    const timestamp = new Date().toLocaleString();
    
    // Create HTML content for PDF
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Sanjeevani Diagnosis Results</title>
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background-color: #f5f5f5;
              color: #333;
              line-height: 1.6;
            }
            
            .container {
              max-width: 900px;
              margin: 0 auto;
              background: white;
              padding: 40px;
            }
            
            .header {
              text-align: center;
              border-bottom: 3px solid #1E3A8A;
              padding-bottom: 20px;
              margin-bottom: 30px;
            }
            
            .header h1 {
              color: #1E3A8A;
              font-size: 28px;
              margin-bottom: 10px;
            }
            
            .header-meta {
              color: #666;
              font-size: 14px;
            }
            
            .disclaimer {
              background: #fff3cd;
              border-left: 4px solid #ffc107;
              padding: 15px;
              margin-bottom: 30px;
              border-radius: 4px;
            }
            
            .disclaimer-title {
              font-weight: bold;
              color: #856404;
              margin-bottom: 8px;
            }
            
            .disclaimer-text {
              color: #856404;
              font-size: 13px;
              line-height: 1.5;
            }
            
            .results-section {
              margin-bottom: 30px;
            }
            
            .result-card {
              background: white;
              border: 1px solid #e0e0e0;
              border-radius: 6px;
              padding: 20px;
              margin-bottom: 20px;
              page-break-inside: avoid;
              box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            }
            
            .disease-name {
              font-size: 20px;
              font-weight: bold;
              color: #1E3A8A;
              margin-bottom: 15px;
              padding-bottom: 10px;
              border-bottom: 2px solid #10B981;
            }
            
            .confidence-section {
              margin-bottom: 15px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            
            .confidence-label {
              font-weight: 600;
              color: #666;
            }
            
            .confidence-value {
              font-size: 18px;
              font-weight: bold;
              color: #1E3A8A;
              background: #e8f4f8;
              padding: 5px 12px;
              border-radius: 4px;
            }
            
            .section-title {
              font-weight: 600;
              color: #1E3A8A;
              font-size: 13px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-top: 15px;
              margin-bottom: 8px;
            }
            
            .section-content {
              color: #555;
              font-size: 14px;
              line-height: 1.6;
              background: #f9f9f9;
              padding: 12px;
              border-radius: 4px;
              border-left: 3px solid #10B981;
            }
            
            .footer {
              margin-top: 50px;
              padding-top: 20px;
              border-top: 1px solid #ddd;
              text-align: center;
              color: #999;
              font-size: 12px;
            }
            
            .footer p {
              margin: 5px 0;
            }
            
            @media print {
              body {
                background: white;
              }
              .container {
                box-shadow: none;
                padding: 20px;
              }
              .result-card {
                page-break-inside: avoid;
                box-shadow: none;
                border: 1px solid #ddd;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🏥 Sanjeevani AI - Diagnosis Results</h1>
              <div class="header-meta">
                <p><strong>Generated:</strong> ${timestamp}</p>
                <p><strong>Patient ID:</strong> ${new Date().getTime()}</p>
              </div>
            </div>
            
            <div class="disclaimer">
              <div class="disclaimer-title">⚠️ Important Medical Disclaimer</div>
              <div class="disclaimer-text">
                These results are AI-generated suggestions for medical guidance only and should NOT be considered as professional medical advice, diagnosis, or treatment. 
                Always consult with a qualified healthcare professional for proper diagnosis and treatment plans. Sanjeevani AI and its creators are not responsible for any medical decisions made based on these results.
              </div>
            </div>
            
            <div class="results-section">
              ${element.innerHTML}
            </div>
            
            <div class="footer">
              <p><strong>© 2024 Sanjeevani AI - Rare Disease Diagnosis Navigator</strong></p>
              <p>This is a confidential medical document. Please keep it secure and share only with authorized medical professionals.</p>
              <p>For more information, visit: www.sanjeevani-ai.com</p>
            </div>
          </div>
        </body>
      </html>
    `;
    
    // Create a Blob from the HTML content
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary link and trigger download
    const link = document.createElement("a");
    link.href = url;
    link.download = `Sanjeevani_Diagnosis_Report_${new Date().getTime()}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    // Show success message
    setTimeout(() => {
      alert("✅ Report downloaded! You can open it in your browser and use 'Print to PDF' (Ctrl+P or Cmd+P) to save as PDF.");
    }, 500);
  };

  // Share on WhatsApp
  const shareOnWhatsApp = () => {
    const message = `🏥 *Sanjeevani AI - Diagnosis Results*\n\nHi, I received diagnosis suggestions from Sanjeevani AI:\n\n${data
      .slice(0, 3)
      .map((item) => `• ${item.name} (${item.confidence} confidence)`)
      .join("\n")}\n\n⚠️ *Important:* These are AI-generated suggestions for medical guidance only. Please consult with a healthcare professional for proper diagnosis and treatment.\n\nCheck it out at: Sanjeevani AI - Rare Disease Diagnosis Navigator`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  if (!data || data.length === 0) {
    return (
      <div 
        className="min-h-screen flex flex-col bg-white"
        style={{
          backgroundImage: `url(${resultImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-6 py-20 bg-black/10">
          <div className="text-center bg-white/90 p-8 rounded-xl">
            <h1 className="text-4xl font-bold text-[#1E3A8A] mb-4">No Results</h1>
            <p className="text-lg text-gray-600 mb-8">
              Please go to the diagnosis page and enter your symptoms.
            </p>
            <button
              onClick={() => navigate("/diagnose")}
              className="bg-[#aafafd] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#9ff7fa] transition"
            >
              ← Back to Diagnosis
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen flex flex-col bg-white"
      style={{
        backgroundImage: `url(${resultImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <div 
        className="bg-gradient-to-r from-[#1E3A8A]/80 to-[#10B981]/80 text-white py-16 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">Diagnosis Results</h1>
          <p className="text-lg opacity-100 text-white drop-shadow-md font-semibold">
            AI-powered analysis showing potential diagnoses ranked by confidence
          </p>
        </div>
      </div>

      {/* Results Grid */}
      <div className="flex-1 py-12 px-6 bg-black/10">
        <div className="max-w-6xl mx-auto" id="results-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {data.map((item, index) => (
              <ResultCard key={index} item={item} index={index} />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate("/diagnose")}
              className="bg-white text-[#1E3A8A] px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
            >
              ← New Diagnosis
            </button>
            <button
              onClick={() => window.print()}
              className="bg-white text-[#10B981] px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
            >
              🖨️ Print Results
            </button>
            <button
              onClick={downloadPDF}
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
            >
              📥 Download PDF
            </button>
            <button
              onClick={shareOnWhatsApp}
              className="bg-white text-green-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
            >
              💬 Share on WhatsApp
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Result;