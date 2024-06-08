import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDARY_CLOUD_NAME, 
  api_key: process.env.CLOUDARY_API_KEY , 
  api_secret:  process.env.CLOUDARY_API_SECRET 
});
cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
    { public_id: "olympic_flag" }, 
    function(error, result) {console.log(result); });