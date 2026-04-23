const { analyzeDiagnosis } = require('../services/groqService');
const Diagnosis = require('../models/Diagnosis');

const getDiagnosis = async (req, res) => {
  try {
    const { symptoms, labs, timeline } = req.body;

    // Validation
    if (!symptoms || typeof symptoms !== 'string' || symptoms.trim() === '') {
      return res.status(400).json({
        success: false,
        message: 'Symptoms must be provided as a non-empty string',
      });
    }

    if (!labs) {
      return res.status(400).json({
        success: false,
        message: 'Lab results must be provided',
      });
    }

    // Validate labs is object or valid JSON string
    let labsData = labs;
    if (typeof labs === 'string') {
      try {
        labsData = JSON.parse(labs);
      } catch (error) {
        return res.status(400).json({
          success: false,
          message: 'Lab results must be valid JSON',
        });
      }
    }

    // Call Groq service with timeline data
    const diagnosisResult = await analyzeDiagnosis(symptoms, labsData, timeline);

    // Save to MongoDB (non-blocking)
    try {
      const diagnosisRecord = new Diagnosis({
        symptoms,
        labs: labsData,
        timeline: timeline || {},
        diagnoses: diagnosisResult,
      });
      await diagnosisRecord.save();
      console.log('Diagnosis saved to MongoDB:', diagnosisRecord._id);
    } catch (dbError) {
      console.error('Database save error:', dbError.message);
      // Don't fail the API response if DB save fails
    }

    return res.status(200).json({
      success: true,
      data: diagnosisResult,
      message: 'Diagnosis analysis completed successfully',
    });
  } catch (error) {
    console.error('Controller error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Error processing diagnosis request',
    });
  }
};

const getSpecialists = (req, res) => {
  try {
    const { diseaseName } = req.params;
    const doctorsAndHospitals = require('../data/doctorsAndHospitals');

    if (!diseaseName) {
      return res.status(400).json({
        success: false,
        message: 'Disease name is required',
      });
    }

    // Convert disease name to lowercase for case-insensitive matching
    const normalizedDiseaseName = diseaseName.toLowerCase().trim();

    // Find matching disease in the database
    const diseaseData = Object.keys(doctorsAndHospitals).find(
      (key) => key.toLowerCase() === normalizedDiseaseName
    );

    if (!diseaseData) {
      // Return generic response if disease not found
      return res.status(200).json({
        success: true,
        data: {
          specialists: [],
          hospitals: [],
          tests: 'Consult with your healthcare provider for recommended tests',
          message: 'Specific specialist information not available. Please contact nearby major hospitals.',
        },
      });
    }

    return res.status(200).json({
      success: true,
      data: doctorsAndHospitals[diseaseData],
    });
  } catch (error) {
    console.error('Specialists controller error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Error fetching specialist information',
    });
  }
};

module.exports = {
  getDiagnosis,
  getSpecialists,
};
