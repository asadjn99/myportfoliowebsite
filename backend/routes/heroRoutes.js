const router = require('express').Router();
const Hero = require('../models/Hero');

// GET Hero Data
router.get('/', async (req, res) => {
  try {
    // Find the first document, if not exists, return empty or default
    let hero = await Hero.findOne();
    if (!hero) {
        // Optional: Create default if none exists
         hero = new Hero({
            name: "Asad Ullah",
            designation: "Graphic Designer • Front-End Developer",
            bio: "My passion for computer science has made me...",
            socials: { email: "", github: "", linkedin: "" }
         });
         await hero.save();
    }
    res.json(hero);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// UPDATE Hero Data
router.put('/', async (req, res) => {
  try {
    // 1. Log what the server receives (for debugging)
    console.log("Receiving update data:", req.body);

    // 2. Explicitly extract profileImage
    const { name, designation, bio, socials, profileImage, resumeUrl } = req.body;
    
    // 3. Update the database including profileImage
    const updatedHero = await Hero.findOneAndUpdate(
      {}, 
      { name, designation, bio, socials, profileImage, resumeUrl }, 
      { new: true, upsert: true }
    );
    
    res.json(updatedHero);
  } catch (err) {
    console.error("Update Error:", err);
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;