// const mongoose = require('mongoose');

// const ProjectsSchema = new mongoose.Schema({
//   sectionTitle: { type: String, default: "Featured Projects" },
//   items: [{
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//     image: { type: String, default: "/images/placeholder.jpg" },
//     category: { type: String, default: "Web Development" }, // "Web Development" or "Graphic Design"
//     tags: [{ type: String }], // e.g. ["React", "Node", "Photoshop"]
//     links: {
//       live: String,
//       github: String
//     }
//   }]
// });

// module.exports = mongoose.model('Projects', ProjectsSchema);

















const mongoose = require('mongoose');

const ProjectsSchema = new mongoose.Schema({
  sectionTitle: { type: String, default: "My Creative Projects" },
  items: [{
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, default: "" }, // URL from Cloudinary
    category: { type: String, default: "Web Development" }, // "Web Development" or "Graphic Design"
    tags: [{ type: String }], // Array ["React", "Next.js"]
    links: {
      live: { type: String, default: "" },
      github: { type: String, default: "" }
    }
  }]
});

module.exports = mongoose.model('Projects', ProjectsSchema);






