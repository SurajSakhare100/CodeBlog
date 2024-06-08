import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import verifyToken from "../verifyToken.js";

const router = express.Router();
const secret = process.env.SECRET;

router.use(express.json());
router.use(cookieParser());

// get user
router.get("/:id",verifyToken, async (req, res) => {
    try{
      const userDoc=await User.findById(req.params.id)
      res.status(200).json(userDoc);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

// update user
router.put("/:id",verifyToken, async (req, res) => {
    try {
        if(req.body.password){
            const salt = bcrypt.genSaltSync(10);
            req.body.password = bcrypt.hashSync(req.body.password, salt);
        }
      const updatedUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

router.delete("/:id",verifyToken, async (req, res) => {
    try{
      await User.findByIdAndDelete(req.params.id)
      res.status(200).send("user will be deleted");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

export default router;
