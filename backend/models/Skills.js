const mongoose = require('mongoose');

const SkillsSchema = new mongoose.Schema({
  sectionTitle: { type: String, default: "Technical Skills" },
  // Main Cards (Graphic Design, Frontend, etc.)
  categories: [{
    title: { type: String, required: true },
    code: { type: String, required: true }, // e.g., "GD", "FE"
    theme: { type: String, default: "purple" }, // "purple", "blue", "green", "orange"
    skills: [{ type: String }] // Array of skill names
  }],
  // The bottom section tags
  additionalSkills: [{ type: String }]
});

module.exports = mongoose.model('Skills', SkillsSchema);