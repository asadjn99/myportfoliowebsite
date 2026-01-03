// const router = require('express').Router();
// const Projects = require('../models/Projects');

// // GET
// router.get('/', async (req, res) => {
//   try {
//     let projects = await Projects.findOne();
//     if (!projects) {
//       // Default Data
//       projects = new Projects({
//         items: [{
//           title: "My Portfolio",
//           description: "A dynamic portfolio built with Next.js and MERN stack.",
//           image: "https://placehold.co/600x400/png",
//           category: "Web Development",
//           tags: ["Next.js", "MongoDB", "Tailwind"],
//           links: { live: "#", github: "#" }
//         }]
//       });
//       await projects.save();
//     }
//     res.json(projects);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // PUT
// router.put('/', async (req, res) => {
//   try {
//     const { sectionTitle, items } = req.body;
//     const updated = await Projects.findOneAndUpdate(
//       {}, 
//       { sectionTitle, items }, 
//       { new: true, upsert: true }
//     );
//     res.json(updated);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;

















const router = require('express').Router();
const Projects = require('../models/Projects');

// GET Projects
router.get('/', async (req, res) => {
  try {
    let projects = await Projects.findOne();
    if (!projects) {
      // Create Default if none exists
      projects = new Projects({
        sectionTitle: "My Creative Projects",
        items: [
          {
            title: "Sample Portfolio",
            description: "A portfolio website built with Next.js.",
            category: "Web Development",
            tags: ["Next.js", "React"],
            links: { live: "#", github: "#" }
          }
        ]
      });
      await projects.save();
    }
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE Projects
router.put('/', async (req, res) => {
  try {
    const { sectionTitle, items } = req.body;
    const updated = await Projects.findOneAndUpdate(
      {}, 
      { sectionTitle, items }, 
      { new: true, upsert: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;