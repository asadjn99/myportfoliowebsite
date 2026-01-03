const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  email: { type: String, default: "asadjn99@gmail.com" },
  whatsapp: { type: String, default: "923075993029" },
  linkedin: { type: String, default: "" },
  github: { type: String, default: "" },
  description: { type: String, default: "I'm always open to discussing new projects, opportunities, or partnerships." }
});

module.exports = mongoose.model('Contact', ContactSchema);