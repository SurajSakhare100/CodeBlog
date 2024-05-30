const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://blog:I7k2XmzRGEe2wpd5@codeblogger.7qjx8dj.mongodb.net/?retryWrites=true&w=majority&appName=CodeBlogger"
);
// Define a route for the root URL
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const userDoc = await User.create({ username, password });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e.message);
  }
});

// Define another route for demonstration
app.get("/hello/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

// Start the server and listen on port 3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

//I7k2XmzRGEe2wpd5
