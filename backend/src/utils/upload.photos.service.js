const B2 = require('backblaze-b2'); // Ensure you have the correct 'backblaze-b2' version installed

// Configure Backblaze B2 instance
const b2 = new B2({
  applicationKeyId: process.env.B2_APPLICATION_KEY_ID, // Your Backblaze Application Key ID
  applicationKey: process.env.B2_APPLICATION_KEY,     // Your Backblaze Application Key
});

// Initialize authorization
const authorizeB2 = async () => {
  try {
    // Using the correct method to authorize
    await b2.authorize(); // Ensure proper authorization with the correct method
    console.log('Authorization successful!');
  } catch (error) {
    console.error('Authorization failed:', error);
    throw error; // Propagate error to handle it in calling functions
  }
};

// Function to upload multiple images to B2
const uploadImages = async (files) => {
  const uploadedImages = [];
  await authorizeB2(); // Ensure authorization is done before uploads

  for (let i = 0; i < files.length; i++) {
    if (!files[i].buffer) {
      console.error('File is empty or missing buffer:', files[i]);
      uploadedImages.push(null);
      continue;
    }

    try {
        const uploadData = await b2.getUploadUrl({
        bucketId: process.env.B2_BUCKET_ID,
      });
  
      const { uploadUrl, authorizationToken } = uploadData.data;
      console.log('Obtained upload URL and token.');

      // Ensure authorization token is valid before uploading
      if (!authorizationToken || !uploadUrl) {
        throw new Error('Invalid authorization token or upload URL');
      }

      const fileName = `assets/upload_${Date.now()}_${i}.jpg`; // You can customize file naming
      const result = await b2.uploadFile({
        uploadAuthToken: authorizationToken,
        uploadUrl,
        fileName: fileName,
        data: files[i].buffer, // File buffer data
      });

      //console.log('File uploaded successfully:', result);
      const fileUrl = `${uploadUrl}/${process.env.B2_BUCKET_NAME}/${fileName}`; // Construct URL based on your bucket settings
      uploadedImages.push(fileUrl);
    } catch (error) {
      console.error('Error uploading file:', error.message);
      uploadedImages.push(null); // If upload fails, add null to the results
    }
  }

  return uploadedImages;
};

// Function to upload a single image to B2
const uploadImage = async (file) => {
    var fileUrl='';
    await authorizeB2(); // Ensure authorization is done before uploads
  
      if (!file.buffer) {
        console.error('File is empty or missing buffer:', file);
        file=null;
      }
  
      try {
          const uploadData = await b2.getUploadUrl({
          bucketId: process.env.B2_BUCKET_ID,
        });
    
        const { uploadUrl, authorizationToken } = uploadData.data;
  
        // Ensure authorization token is valid before uploading
        if (!authorizationToken || !uploadUrl) {
          throw new Error('Invalid authorization token or upload URL');
        }
  
        const fileName = `Profile_Pic/upload_${Date.now()}.jpg`; // You can customize file naming
        const result = await b2.uploadFile({
          uploadAuthToken: authorizationToken,
          uploadUrl,
          fileName: fileName,
          data: file.buffer, // File buffer data
        });
  
        //console.log('File uploaded successfully:', result);
        fileUrl = `${uploadUrl}/${process.env.B2_BUCKET_NAME}/${fileName}`; // Construct URL based on your bucket settings
      } catch (error) {
        console.error('Error uploading file:', error.message);
        fileUrl=null; // If upload fails, add null to the results
      }
  
    return fileUrl;
};

module.exports = { uploadImages, uploadImage };