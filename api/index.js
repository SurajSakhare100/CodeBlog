const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
// const secret=import.meta.env.VITE_SECRET;
const app = express();
const port = 3000;
var salt = bcrypt.genSaltSync(10);
// console.log(secret)

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors({credentials:true,origin:'http://localhost:5173'}));

mongoose.connect(
  "mongodb+srv://blog:I7k2XmzRGEe2wpd5@codeblogger.7qjx8dj.mongodb.net/?retryWrites=true&w=majority&appName=CodeBlogger"
);
// Define a route for the root URL
app.get("/", (req, res) => {
  res.send("Hello, World!");
});


app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userDoc = await User.findOne({ email});
    const passok= bcrypt.compareSync(password,userDoc.password)
    passok?'':res.status(400).json('invalid credentials')
    jwt.sign({email,_id:userDoc._id},'secret',{},(err,token)=>{
      if(err) throw err;
      res.cookie('token',token).json('ok')
    })
  } catch (e) {
    console.log(e.message)
  }
});


app.post("/api/signup", async (req, res) => {
  try {
    const { username,email, password } = req.body;
    const userDoc = await User.create({ 
      username,
      email, 
      password:bcrypt.hashSync(password,salt) });
  } catch (e) {
    console.log(e.message)
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