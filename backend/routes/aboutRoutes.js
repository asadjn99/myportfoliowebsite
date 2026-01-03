const router = require('express').Router();
const About = require('../models/About');

// GET About Data
router.get('/', async (req, res) => {
  try {
    let about = await About.findOne();
    // Default data if empty
    if (!about) {
      about = new About({
        paragraphs: [
          "My passion for computer science has made me a skilled graphic designer...",
          "I am eager to develop my skills further...",
          "Current focus areas: Documents Control..."
        ],
        expertise: [
          "Documents Control & Office Administration",
          "Graphic Design (Adobe Photoshop, Illustrator, Canva)",
          "Front‑End Web Development (HTML, CSS, JavaScript, WordPress)",
          "IoT & CCTV (Arduino, Raspberry Pi, Sensors, Installation)",
          "Social Media Design & Digital Marketing"
        ]
      });
      await about.save();
    }
    res.json(about);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE About Data
router.put('/', async (req, res) => {
  try {
    const { paragraphs, expertise } = req.body;
    const updatedAbout = await About.findOneAndUpdate(
      {}, 
      { paragraphs, expertise }, 
      { new: true, upsert: true }
    );
    res.json(updatedAbout);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;