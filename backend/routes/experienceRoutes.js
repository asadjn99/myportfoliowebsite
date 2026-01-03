const router = require('express').Router();
const Experience = require('../models/Experience');

// GET
router.get('/', async (req, res) => {
  try {
    let experience = await Experience.findOne();
    if (!experience) {
      // Default Data if empty
      experience = new Experience({
        sectionTitle: "Professional Experience",
        jobs: [
          {
            role: "Documents Controller",
            company: "Ideal Business Products",
            duration: "Jul 2025 – Present",
            description: ["Managing document workflows.", "Ensuring security of records."]
          }
        ]
      });
      await experience.save();
    }
    res.json(experience);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT (Update)
router.put('/', async (req, res) => {
  try {
    const { sectionTitle, jobs } = req.body;
    const updated = await Experience.findOneAndUpdate(
      {}, 
      { sectionTitle, jobs }, 
      { new: true, upsert: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;