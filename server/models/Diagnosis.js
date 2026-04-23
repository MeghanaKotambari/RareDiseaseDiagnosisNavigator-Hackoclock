const mongoose = require('mongoose');

const diagnosisSchema = new mongoose.Schema(
  {
    symptoms: {
      type: String,
      required: true,
    },
    timeline: {
      symptomStartDate: {
        type: String,
        default: null,
      },
      description: {
        type: String,
        default: null,
      },
    },
    labs: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    diagnoses: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Diagnosis', diagnosisSchema);
