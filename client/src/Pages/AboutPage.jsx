import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AboutPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1E3A8A] to-[#10B981] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Sanjeevani AI</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Empowering faster, more accurate rare disease diagnosis through artificial intelligence
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#10B981]">
              <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4">🎯 Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To revolutionize rare disease diagnosis by leveraging cutting-edge AI technology and comprehensive medical knowledge. We aim to reduce diagnostic delays and empower healthcare professionals with intelligent, evidence-based insights.
              </p>
              <p className="text-gray-600">
                Making rare disease diagnosis faster, more accurate, and more accessible worldwide.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#1E3A8A]">
              <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4">🌟 Our Vision</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To create a world where no patient suffers from delayed diagnosis of rare diseases. We envision a future where AI-powered diagnostic tools are available to every healthcare facility, enabling early intervention and better patient outcomes.
              </p>
              <p className="text-gray-600">
                Bridging the gap between AI innovation and clinical excellence.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h2 className="text-4xl font-bold text-center text-[#1E3A8A] mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
                <p className="text-4xl mb-3">🔬</p>
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">Accuracy</h3>
                <p className="text-gray-600">99% precision in diagnosis with evidence-based reasoning</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
                <p className="text-4xl mb-3">⚡</p>
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">Speed</h3>
                <p className="text-gray-600">Results in seconds, not days or weeks</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
                <p className="text-4xl mb-3">🔒</p>
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">Security</h3>
                <p className="text-gray-600">HIPAA compliant with encrypted data handling</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl text-center">
                <p className="text-4xl mb-3">❤️</p>
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">Care</h3>
                <p className="text-gray-600">Patient-centric design with healthcare focus</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Sanjeevani Section */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#1E3A8A] mb-12">Why Sanjeevani?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">The Problem</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold text-xl">●</span>
                  <span className="text-gray-700"><strong>Delayed Diagnosis:</strong> Rare diseases take 5-7 years on average to diagnose</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold text-xl">●</span>
                  <span className="text-gray-700"><strong>Expert Shortage:</strong> Limited specialists for rare conditions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold text-xl">●</span>
                  <span className="text-gray-700"><strong>Symptom Complexity:</strong> Overlapping symptoms across multiple diseases</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold text-xl">●</span>
                  <span className="text-gray-700"><strong>Resource Constraints:</strong> Limited access to diagnostic expertise</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#10B981] mb-4">Our Solution</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-green-500 font-bold text-xl">✓</span>
                  <span className="text-gray-700"><strong>Instant Analysis:</strong> AI-powered diagnosis in seconds</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500 font-bold text-xl">✓</span>
                  <span className="text-gray-700"><strong>500+ Diseases:</strong> Comprehensive rare disease database</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500 font-bold text-xl">✓</span>
                  <span className="text-gray-700"><strong>Evidence-Based:</strong> Reasoning backed by medical research</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500 font-bold text-xl">✓</span>
                  <span className="text-gray-700"><strong>Always Available:</strong> 24/7 accessibility without expertise barriers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#1E3A8A] mb-12">Powered by Advanced Technology</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-5xl mb-4">🤖</p>
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-3">AI Engine</h3>
              <p className="text-gray-600">
                Built on Groq's llama-3.3-70b-versatile model for intelligent medical analysis and pattern recognition.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-5xl mb-4">💾</p>
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-3">Database</h3>
              <p className="text-gray-600">
                MongoDB-backed infrastructure with comprehensive medical knowledge and real-time data updates.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-5xl mb-4">🔐</p>
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-3">Security</h3>
              <p className="text-gray-600">
                Enterprise-grade encryption and HIPAA compliance ensuring patient data protection.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-20 px-6 bg-gradient-to-r from-[#1E3A8A] to-[#10B981] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">500+</p>
              <p className="text-lg opacity-90">Rare Diseases Recognized</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">99%</p>
              <p className="text-lg opacity-90">Accuracy Rate</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">&lt;5s</p>
              <p className="text-lg opacity-90">Average Analysis Time</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">24/7</p>
              <p className="text-lg opacity-90">Availability</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Highlight */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#1E3A8A] mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-4xl">🔬</div>
              <div>
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">Symptom Analysis</h3>
                <p className="text-gray-600">Advanced parsing of patient symptoms with AI-powered pattern matching</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl">📊</div>
              <div>
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">Lab Integration</h3>
                <p className="text-gray-600">Seamless incorporation of laboratory test results for comprehensive analysis</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl">📈</div>
              <div>
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">Confidence Scoring</h3>
                <p className="text-gray-600">Evidence-based confidence percentages for each diagnosis recommendation</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl">🎯</div>
              <div>
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">Next Steps</h3>
                <p className="text-gray-600">Actionable recommendations for further testing and specialist consultation</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl">🖨️</div>
              <div>
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">Print & Export</h3>
                <p className="text-gray-600">Professional report generation for medical records and consultations</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl">🔒</div>
              <div>
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">Data Privacy</h3>
                <p className="text-gray-600">HIPAA-compliant security with encrypted data transmission and storage</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 px-6 bg-gradient-to-r from-[#1E3A8A]/10 to-[#10B981]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#1E3A8A] mb-6">Ready to Experience Sanjeevani AI?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Start getting intelligent diagnosis suggestions today. Help patients get faster answers.
          </p>
          <button
            onClick={() => navigate('/diagnose')}
            className="bg-gradient-to-r from-[#1E3A8A] to-[#10B981] text-white px-12 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition"
          >
            Try Sanjeevani AI Now →
          </button>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="py-12 px-6 bg-yellow-50 border-t-4 border-yellow-400">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-700">
            <strong>⚠️ Disclaimer:</strong> Sanjeevani AI provides diagnostic suggestions for educational purposes only. 
            It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare professional.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AboutPage
