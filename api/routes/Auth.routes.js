import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const router = express.Router();
const secret = process.env.SECRET;

router.use(express.json());
router.use(cookieParser());

// register
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const userDoc = await User.create({ username, email, password: hashedPassword });
    res.status(200).json(userDoc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userDoc = await User.findOne({ email });
    
    if (!userDoc) {
      return res.status(400).json({ error: "User not found" });
    }
    
    const passok = await bcrypt.compare(password, userDoc.password);
    
    if (!passok) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    
    const token = jwt.sign({ username: userDoc.username, _id: userDoc._id }, secret);
    res.cookie("token", token, { httpOnly: true }).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// logout
router.get("/logout", async (req, res) => {
    try {
      res.clearCookie("token",{secure:true,sameSite:null}).status(200).send('logout successfully')
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

export default router;
