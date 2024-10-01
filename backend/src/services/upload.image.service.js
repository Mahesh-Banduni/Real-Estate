const cloudinary = require('../utils/cloudinary.config.js'); // Ensure cloudinary is configured

// Upload images function for Cloudinary
const uploadImages = async (files) => {

  const uploadedImages = [];
  for (const file of files) {
    if (!file.buffer) {
      console.error('File is empty or missing buffer:', file);
      uploadedImages.push(null);
      continue;
    }

    try {
      const result = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { resource_type: 'image',upload_preset: 'righttimeproperty'}, 
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result.secure_url);
            }
          }
        );

        // Pipe the buffer into Cloudinary
        uploadStream.end(file.buffer);
      });

      uploadedImages.push(result);
    } catch (error) {
      console.error('Image upload failed:', error);
      uploadedImages.push(null);
    }
  }

  return uploadedImages;
};

module.exports= uploadImages;