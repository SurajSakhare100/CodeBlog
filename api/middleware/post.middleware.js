import multer from "multer";
import express from "express";
const { v2: cloudinary } = require('cloudinary').v2;
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
app.post('/upload', upload.single('file'), async(req, res) => {
    try {
        // Upload file to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.buffer, { resource_type: "auto" });
    
        // The uploaded file URL is available in result.secure_url
        res.send(`File uploaded successfully. URL: ${result.secure_url}`);
      } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong.');
      }
    res.send('File uploaded successfully.');
});