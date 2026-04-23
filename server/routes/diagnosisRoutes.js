const express = require('express');
const { getDiagnosis } = require('../controllers/diagnosisController');

const router = express.Router();

// POST endpoint for diagnosis analysis
router.post('/diagnosis', getDiagnosis);

module.exports = router;
