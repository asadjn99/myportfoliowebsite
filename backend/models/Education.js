const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
  // 1. Formal Education (Your University Degree)
  education: {
    degree: { type: String, default: "BS Computer Science (ICS/IT)" },
    institution: { type: String, default: "The University of Agriculture Peshawar" },
    year: { type: String, default: "Nov 2021 – Jul 2025" },
    specialization: { type: String, default: "Web Development" }, // <--- NEW
    finalYearProject: { // <--- NEW
       title: { type: String, default: "Smart Campus System" },
       link: { type: String, default: "https://github.com/asadjn99" }
    },
    tags: [{ type: String }] // e.g. ["Web Design", "Database", "IoT"]
  },

  // 2. Main Certifications (The Grid)
  certifications: [{
    title: { type: String, required: true },
    issuer: { type: String, required: true }, // e.g. "BanoQabil IT Program"
    year: { type: String, required: true }
  }],

  // 3. Additional Training (The section you wanted improved)
  // We split this into specific items to style them better
  trainings: [{
    title: { type: String, required: true }, // e.g. "Digiskills: WordPress"
    category: { type: String, default: "Training" } // "Training" or "Membership"
  }]
});

module.exports = mongoose.model('Education', EducationSchema);