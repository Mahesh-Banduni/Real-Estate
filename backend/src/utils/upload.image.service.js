const cloudinary = require('../configs/cloudinary.config.js'); // Ensure cloudinary is configured

// Upload images function for Cloudinary
const uploadImages = async (files) => {

  const uploadedImages = [];
  for (let i=0; i<= files.length-1;i++) {
    if (!files[i].buffer) {
      console.error('File is empty or missing buffer:', files[i]);
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
        uploadStream.end(files[i].buffer);
      });

      uploadedImages.push(result);
    } catch (error) {
      console.error('Image upload failed:', error);
      uploadedImages.push(null);
    }
  }

  return uploadedImages;
};

const uploadImage = async (file) => { 
  let uploadedImage = null;

  // Check if the file buffer exists
  if (!file || !file.buffer) {
    console.error('File is empty or missing buffer:', file);
    return null;
  }

  try {
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { resource_type: 'image', upload_preset: 'righttimeproperty' },
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

    uploadedImage = result;
  } catch (error) {
    console.error('Image upload failed:', error);
  }

  return uploadedImage;
};

module.exports= {uploadImages, uploadImage};
