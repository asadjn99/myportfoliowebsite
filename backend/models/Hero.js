const mongoose = require('mongoose');

const HeroSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  bio: { type: String, required: true },
  socials: {
    email: String,
    github: String,
    linkedin: String
  },
  // Make sure this line exists!
  profileImage: { type: String, default: "/images/profile.png" },
  resumeUrl: { type: String, default: "" }
});

module.exports = mongoose.model('Hero', HeroSchema);