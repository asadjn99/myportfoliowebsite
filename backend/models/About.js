const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
  // We store paragraphs as an Array of Strings so you can have 1, 2, or 3 paragraphs easily.
  paragraphs: [{ type: String }],
  
  // We store expertise as an Array of Strings for the list
  expertise: [{ type: String }]
});

module.exports = mongoose.model('About', AboutSchema);