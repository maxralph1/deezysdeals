import { v2 as cloudinary } from 'cloudinary';

 
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const cloudinaryImageUpload = (image, folderName) => cloudinary.uploader.upload(image, { 
    folder: folderName
});


export default cloudinaryImageUpload;