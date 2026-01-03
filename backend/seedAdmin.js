const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config(); // Load your .env variables

// REPLACE WITH YOUR MONGO URI
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/myportfolio"; 

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log("Connected to DB...");
    
    // 1. Check if user exists
    const existing = await User.findOne({ username: "asadjn99" });
    if (existing) {
        console.log("Admin already exists!");
        process.exit();
    }

    // 2. Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("Asadjn99@", salt);

    // 3. Create User
    const newUser = new User({
        username: "asadjn99",
        password: hashedPassword
    });

    await newUser.save();
    console.log("Admin User Created Successfully!");
    process.exit();
  })
  .catch(err => console.log(err));