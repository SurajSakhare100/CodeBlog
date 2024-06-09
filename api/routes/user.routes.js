import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import cookieParser from "cookie-parser";
import verifyToken from "../verifyToken.js";
import multer from "multer";
import { v2 as cloudinary } from 'cloudinary';
const router = express.Router();
const secret = process.env.SECRET;

router.use(express.json());
router.use(cookieParser());

// get user
cloudinary.config({ 
  cloud_name: process.env.CLOUDARY_CLOUD_NAME, 
  api_key: process.env.CLOUDARY_API_KEY , 
  api_secret:  process.env.CLOUDARY_API_SECRET 
});
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


const storage = multer.diskStorage({
    destination: function (req, file, fn) {
      fn(null, 'uploads/') // Files will be stored in the 'uploads' directory
    },
    filename: function (req, file, fn) {
      fn(null, Date.now() + '-' + file.originalname) // Unique filename
    }
  });
  
const upload = multer({ storage: storage });
  
  // Define a route to handle file uploads
router.post('/upload', upload.single('file'), async(req, res) => {
    try {
        // Upload file to Cloudinary
        console.log(req.file)
        const result = await cloudinary.uploader.upload(req.file.path, { resource_type: "auto" });
    
        // The uploaded file URL is available in result.secure_url
        res.send(`File uploaded successfully. URL: ${result.secure_url}`);
      } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong.');
      }
    res.send('File uploaded successfully.');
});
export default router;
