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

// Function to delete multiple images from Cloudinary
// const deleteImages = async (imageUrls) => {
//   const deletePromises = imageUrls.map((url) => {
//     // Extract the public ID from the Cloudinary URL
//     const publicId = url.split('/').pop().split('.')[0]; // This extracts the publicId part of the URL
//     console.log(publicId);
//     return cloudinary.uploader.destroy(publicId);
//   });

//   try {
//     const results = await Promise.all(deletePromises);
//     return results; // Returning the result of deletion for each image
//   } catch (error) {
//     console.error('Error deleting images from Cloudinary:', error);
//     throw new Error('Error deleting images');
//   }
// };

// Delete images function for Cloudinary
// const deleteImages = async (imageUrls) => {
//   const deletionResults = [];

//   for (let imageUrl of imageUrls) {
//     try {
//       // Extract public_id from the Cloudinary URL
//       const publicId = imageUrl.split('/').pop().split('.')[0];

//       const result = await cloudinary.uploader.destroy(publicId, {
//         resource_type: 'image',
//         upload_preset: 'righttimeproperty'
//       });

//       console.log(result);
//       deletionResults.push({
//         publicId,
//         result: result.result, // success or not found
        
//       });
//     } catch (error) {
//       console.log(error);
//       console.error(`Failed to delete image ${imageUrl}:`, error);
//       deletionResults.push({ publicId: imageUrl, error: error.message });
//     }
//   }
//   return deletionResults;
// };

// Delete multiple images from Cloudinary
const deleteImages = async (imageUrls) => {
  const deletionPromises = imageUrls.map(async (imageUrl) => {
    try {
      // Extract the public_id from the URL
      const publicId = imageUrl.split('/').pop().split('.')[0];
      await cloudinary.uploader.destroy(publicId, { resource_type: 'image' });
      console.log(`Deleted image with public_id: ${publicId}`);
    } catch (error) {
      console.error(`Failed to delete image ${imageUrl}:`, error);
    }
  });

  await Promise.all(deletionPromises);
  return { message: 'Images deleted successfully' };
};

module.exports= {uploadImages, uploadImage, deleteImages};

