const router = require('express').Router();
const Education = require('../models/Education');

router.get('/', async (req, res) => {
  try {
    let edu = await Education.findOne();
    if (!edu) {
      // Default Data
      edu = new Education({
        education: {
          degree: "BS Computer Science (ICS/IT)",
          institution: "The University of Agriculture Peshawar",
          year: "Nov 2021 – Jul 2025",
          tags: ["Web Design", "Programming Fundamentals", "Database & Networking", "IoT Basics"]
        },
        certifications: [
          { title: "Web Development", issuer: "BanoQabil IT Program", year: "2024 – 2025" },
          { title: "Graphic Design", issuer: "Encoderbytes Pvt Ltd", year: "Jan 2024 – Mar 2024" },
          { title: "IoT Certificate", issuer: "NAVTTC", year: "Jun 2023 – Aug 2023" }
        ],
        trainings: [
          { title: "Digiskills: WordPress (Jul 2024 – Oct 2024)", category: "Training" },
          { title: "Member – Dir Student Society (AUP)", category: "Membership" }
        ]
      });
      await edu.save();
    }
    res.json(edu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/', async (req, res) => {
  try {
    const { education, certifications, trainings } = req.body;
    const updated = await Education.findOneAndUpdate(
      {}, 
      { education, certifications, trainings }, 
      { new: true, upsert: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;