const express = require('express');
const { getDiagnosis, getSpecialists } = require('../controllers/diagnosisController');

const router = express.Router();

// POST endpoint for diagnosis analysis
router.post('/diagnosis', getDiagnosis);

// GET endpoint for specialist doctors and hospitals information
router.get('/specialists/:diseaseName', getSpecialists);

module.exports = router;
