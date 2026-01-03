const router = require('express').Router();
const Skills = require('../models/Skills');

router.get('/', async (req, res) => {
  try {
    let skills = await Skills.findOne();
    if (!skills) {
      // Default Data (matching your design)
      skills = new Skills({
        categories: [
          {
            title: "Graphic Design",
            code: "GD",
            theme: "purple",
            skills: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Branding"]
          },
          {
            title: "Front-End Development",
            code: "FE",
            theme: "blue",
            skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind"]
          }
        ],
        additionalSkills: ["Social Media Design", "Digital Marketing", "Freelancing"]
      });
      await skills.save();
    }
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/', async (req, res) => {
  try {
    const { sectionTitle, categories, additionalSkills } = req.body;
    const updated = await Skills.findOneAndUpdate(
      {}, 
      { sectionTitle, categories, additionalSkills }, 
      { new: true, upsert: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;