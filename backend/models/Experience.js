const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  sectionTitle: { type: String, default: "Professional Experience" },
  jobs: [{
    role: { type: String, required: true },
    company: { type: String, required: true },
    duration: { type: String, required: true },
    description: [{ type: String }] // Array of bullet points
  }]
});

module.exports = mongoose.model('Experience', ExperienceSchema);