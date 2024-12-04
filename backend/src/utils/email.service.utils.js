const nodemailer = require('nodemailer');
const crypto = require('crypto');

//Temporary in-memory storage for OTPs
global.otpStorage = {};

// Nodemailer configuration for SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // Replace with your SMTP server
  port: process.env.SMTP_PORT,  // Use 587 for STARTTLS or 465 for SSL/TLS
  secure: true,                // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER, // SMTP user
    pass: process.env.SMTP_PASS, // SMTP password
  },
});

// Generate a random 6-digit OTP
const generateOTP = () => crypto.randomInt(100000, 999999).toString();

// Function to send OTP via email and store it temporarily
const sendOTP = async (email) => {
  const otp = generateOTP();
  const expiryTime = Date.now() + 180 * 60 * 1000; // OTP valid for 10 minutes

  // Store OTP and expiry in memory
  global.otpStorage[email] = { otp, expiry: expiryTime };
  //console.log(global.otpStorage);

  // Email content
  const mailOptions = {
    from: '"Propertymela" <pgoyal_realestate@propertymela.in>', // Sender's email
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP is ${otp}. It is valid for 10 minutes.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    //console.log(`OTP sent to ${email}`);
    return { success: true, message: 'OTP sent successfully.' };
  } catch (error) {
    //console.error('Error sending OTP:', error);
    return { success: false, message: 'Failed to send OTP.' };
  }
};

// Function to verify OTP
const verifyOTP = (email, userInputOtp) => {
  //console.log(global.otpStorage);
  const storedData = global.otpStorage[email];
  if (!storedData) {
    return { success: false, message: 'No OTP found for this email.' };
  }

  const { otp, expiry } = storedData;

  // Check for expiry
  if (Date.now() > expiry) {
    delete global.otpStorage[email]; // Clean up expired OTP
    return { success: false, message: 'OTP has expired.' };
  }

  // Validate OTP
  if (otp === userInputOtp) {
    delete global.otpStorage[email]; // OTP verified and cleared
    return { success: true, message: 'OTP verified successfully.' };
  }

  return { success: false, message: 'Invalid OTP.' };
};

// Function to handle property inquiry
const sendPropertyInquiryEmail = async (propertyDetails, userDetails) => {

  try {
    if(propertyDetails.propertyType=="Residential Flat/Apartment"){
      const { queryUsername, queryUseremail, queryUserphone} = userDetails;
      const { user } = propertyDetails;
      const { propertyID, propertyType, propertyPurpose, expectedPrice, city, address, description, bedrooms, balconies, floorNumber, totalFloor, furnished, bathrooms, floorsAllowed, carpetArea, carpetAreaUnit, superArea, superAreaUnit, possessionStatus, ownership, transactionType, bookingAmount, priceNegotiable, residentialAmenities, locationAdvantages, facing, overlooking} = propertyDetails;
  
      // Email content to send to admin
  const mailOptions1 = {
    from: `"Property Inquiry" <pgoyal_realestate@propertymela.in>`, // Sender email
    to: process.env.ADMIN_EMAIL, // Admin's email
    subject: `New Inquiry for Property: ${propertyType} for ${propertyPurpose} in ${city}, `,
    html: `
      <h2>New Property Inquiry</h2>
      <p><strong>Property ID:</strong> ${propertyID}</p>
      <p><strong>Property Type:</strong> ${propertyType}</p>
      <p><strong>Property Purpose:</strong> ${propertyPurpose}</p>
      <p><strong>Price:</strong> ₹${expectedPrice}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>Address:</strong> ${address}</p>
      <br>
      <h3>Property Details</h3>
      <p><strong>Bedrooms:</strong> ${bedrooms}</p>
      <p><strong>Balconies:</strong> ${balconies}</p>
      <p><strong>Floor Number:</strong> ${floorNumber}</p>
      <p><strong>Total Floor:</strong> ${totalFloor}</p>
      <p><strong>Furnished:</strong> ${furnished}</p>
      <p><strong>Bathrooms:</strong> ${bathrooms}</p>
      <p><strong>Floors Allowed:</strong> ${floorsAllowed}</p>
      <br>
      <h3>Property Area Details</h3>
      <p><strong>Carpet Area:</strong> ${carpetArea} ${carpetAreaUnit}</p>
      <p><strong>Super Area:</strong> ${superArea} ${superAreaUnit}</p>
      <br>
      <h3>Property Ownership Details</h3>
      <p><strong>Possession Status:</strong> ${possessionStatus}</p>
      <p><strong>Ownership:</strong> ${ownership}</p>
      <p><strong>Transaction Type:<strong> ${transactionType}</p> 
      <br>
      <h3>Property Price Details</h3>
      <p><strong>Booking Amount:</strong> ₹${bookingAmount}</p>
      <p><strong>Price Negotiable:</strong> ${priceNegotiable}</p>
      <br>
      <h3>Property Other Details</h3>
      <p><strong>Residential Amenities:</strong> ${residentialAmenities}</p>
      <p><strong>Location Advantages:</strong> ${locationAdvantages}</p>
      <p><strong>Overlooking:</strong> ${overlooking}</p>
      <p><strong>Facing:</strong> ${facing}</p>
      <p><strong>Property Description:</strong> ${description}</p>
      <br>
      <h3>Owner Details</h3>
      <p><strong>Name:</strong> ${user.name}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <br>
      <h3>Inquiry User Details</h3>
      <p><strong>Name:</strong> ${queryUsername}</p>
      <p><strong>Email:</strong> ${queryUseremail}</p>
      <p><strong>Phone:</strong> ${queryUserphone}</p>
      <p><strong>Message:</strong> I am interested in this property. Please contact me for more details.</p>
    `,
  };

      //await transporter.sendMail(mailOptions1);
    await transporter.sendMail(mailOptions1);
    //console.log('Inquiry email sent to admin. '+mailOptions1);
    return { success: true, message: 'Thankyou for showing interest in the property. Our team will contact you soon.' };
    }
    else if(propertyDetails.propertyType=="Residential House"){
      const { queryUsername, queryUseremail, queryUserphone} = userDetails;
      const { user } = propertyDetails;
      const { propertyID, propertyType, propertyPurpose, expectedPrice, city, address, description, bedrooms, balconies, floorNumber, totalFloor, furnished, bathrooms, floorsAllowed, openSides, facingRoadWidth, facingRoadWidthUnit, cornerPlot, carpetArea, carpetAreaUnit, superArea, superAreaUnit, plotArea, plotAreaUnit, lengthDimension, widthDimension, dimensionUnit, possessionStatus, ownership, transactionType, bookingAmount, priceNegotiable, residentialAmenities, locationAdvantages, facing, overlooking} = propertyDetails;
  
      const mailOptions2 = {
        from: `"Property Inquiry" <pgoyal_realestate@propertymela.in>`, // Sender email
        to: process.env.ADMIN_EMAIL, // Admin's email
        subject: `New Inquiry for Property: ${propertyType} for ${propertyPurpose} in ${city}, `,
        html: `
          <h2>New Property Inquiry</h2>
          <p><strong>Property ID:</strong> ${propertyID}</p>
          <p><strong>Property Type:</strong> ${propertyType}</p>
          <p><strong>Property Purpose:</strong> ${propertyPurpose}</p>
          <p><strong>Price:</strong> ₹${expectedPrice}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Address:</strong> ${address}</p>
          <br>
          <h3>Property Details</h3>
          <p><strong>Bedrooms:</strong> ${bedrooms}</p>
          <p><strong>Balconies:</strong> ${balconies}</p>
          <p><strong>Floor Number:</strong> ${floorNumber}</p>
          <p><strong>Total Floor:</strong> ${totalFloor}</p>
          <p><strong>Furnished:</strong> ${furnished}</p>
          <p><strong>Bathrooms:</strong> ${bathrooms}</p>
          <p><strong>Floors Allowed:</strong> ${floorsAllowed}</p>
          <p><strong>Open Sides:</strong> ${openSides}</p>
          <p><strong>Facing Road Width:</strong> ${facingRoadWidth} ${facingRoadWidthUnit}</p>
          <br>
          <h3>Property Area Details</h3>
          <p><strong>Plot Area:</strong> ${plotArea} ${plotAreaUnit}</p>
          <p><strong>Length Dimension:</strong> ${lengthDimension} ${dimensionUnit}</p>
          <p><strong>Width Dimension:</strong> ${widthDimension} ${dimensionUnit}</p>
          <p><strong>Carpet Area:</strong> ${carpetArea} ${carpetAreaUnit}</p>
          <p><strong>Super Area:</strong> ${superArea} ${superAreaUnit}</p>
          <p><strong>Corner Plot:</strong> ${cornerPlot}</p>
          <br>
          <h3>Property Ownership Details</h3>
          <p><strong>Possession Status:</strong> ${possessionStatus}</p>
          <p><strong>Ownership:</strong> ${ownership}</p>
          <p><strong>Transaction Type:<strong> ${transactionType}</p> 
          <br>
          <h3>Property Price Details</h3>
          <p><strong>Booking Amount:</strong> ₹${bookingAmount}</p>
          <p><strong>Price Negotiable:</strong> ${priceNegotiable}</p>
          <br>
          <h3>Property Other Details</h3>
          <p><strong>Residential Amenities:</strong> ${residentialAmenities}</p>
          <p><strong>Location Advantages:</strong> ${locationAdvantages}</p>
          <p><strong>Overlooking:</strong> ${overlooking}</p>
          <p><strong>Facing:</strong> ${facing}</p>
          <p><strong>Property Description:</strong> ${description}</p>
          <br>
          <h3>Owner Details</h3>
          <p><strong>Name:</strong> ${user.name}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <br>
          <h3>Inquiry User Details</h3>
          <p><strong>Name:</strong> ${queryUsername}</p>
          <p><strong>Email:</strong> ${queryUseremail}</p>
          <p><strong>Phone:</strong> ${queryUserphone}</p>
          <p><strong>Message:</strong> I am interested in this property. Please contact me for more details.</p>
        `,
      };
    
      await transporter.sendMail(mailOptions2);
      //console.log('Inquiry email sent to admin. '+mailOptions2);
    return { success: true, message: 'Thankyou for showing interest in the property. Our team will contact you soon.' };
    }
    else if(propertyDetails.propertyType=="Residential Plot/Land"){
      const { queryUsername, queryUseremail, queryUserphone} = userDetails;
      const { user } = propertyDetails;
      const { propertyID, propertyType, propertyPurpose, expectedPrice, city, address, projectSocietyName, description, openSides, facingRoadWidth, facingRoadWidthUnit, boundaryWall, gatedColony, anyConstructionDone, cornerPlot, plotArea, plotAreaUnit,lengthDimension, widthDimension, dimensionUnit, ownership, transactionType, bookingAmount, priceNegotiable, landAmenities, locationAdvantages, facing, overlooking} = propertyDetails;
  
      const mailOptions3 = {
        
        from: `"Property Inquiry" <pgoyal_realestate@propertymela.in>`, // Sender email
        to: process.env.ADMIN_EMAIL, // Admin's email
        subject: `New Inquiry for Property: ${propertyType} for ${propertyPurpose} in ${city}, `,
        html: `
          <h2>New Property Inquiry</h2>
          <p><strong>Property ID:</strong> ${propertyID}</p>
          <p><strong>Property Type:</strong> ${propertyType}</p>
          <p><strong>Property Purpose:</strong> ${propertyPurpose}</p>
          <p><strong>Price:</strong> ₹${expectedPrice}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Project/Society Name :</strong> ${projectSocietyName}</p>
          <p><strong>Address:</strong> ${address}</p>
          <br>
          <h3>Property Details</h3>
          <p><strong>Open Sides:</strong> ${openSides}</p>
          <p><strong>Facing Road Width:</strong> ${facingRoadWidth} ${facingRoadWidthUnit}</p>
          <p><strong>Boundary Wall:</strong> ${boundaryWall}</p>
          <p><strong>Gated Colony:</strong> ${gatedColony}</p>
          <p><strong>Any Construction Done:</strong> ${anyConstructionDone}</p>
          <br>
          <h3>Property Area Details</h3>
          <p><strong>Plot Area:</strong> ${plotArea} ${plotAreaUnit}</p>
          <p><strong>Length Dimension:</strong> ${lengthDimension} ${dimensionUnit}</p>
          <p><strong>Width Dimension:</strong> ${widthDimension} ${dimensionUnit}</p>
          <p><strong>Corner Plot:</strong> ${cornerPlot}</p>
          <br>
          <h3>Property Ownership Details</h3>
          <p><strong>Ownership:</strong> ${ownership}</p>
          <p><strong>Transaction Type:<strong> ${transactionType}</p> 
          <br>
          <h3>Property Price Details</h3>
          <p><strong>Booking Amount:</strong> ₹${bookingAmount}</p>
          <p><strong>Price Negotiable:</strong> ${priceNegotiable}</p>
          <br>
          <h3>Property Other Details</h3>
          <p><strong>Land Amenities:</strong> ${landAmenities}</p>
          <p><strong>Location Advantages:</strong> ${locationAdvantages}</p>
          <p><strong>Overlooking:</strong> ${overlooking}</p>
          <p><strong>Facing:</strong> ${facing}</p>
          <p><strong>Property Description:</strong> ${description}</p>
          <br>
          <h3>Owner Details</h3>
          <p><strong>Name:</strong> ${user.name}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <br>
          <h3>Inquiry User Details</h3>
          <p><strong>Name:</strong> ${queryUsername}</p>
          <p><strong>Email:</strong> ${queryUseremail}</p>
          <p><strong>Phone:</strong> ${queryUserphone}</p>
          <p><strong>Message:</strong> I am interested in this property. Please contact me for more details.</p>
        `,
      };
      await transporter.sendMail(mailOptions3);
      //console.log('Inquiry email sent to admin. '+mailOptions3);
    return { success: true, message: 'Thankyou for showing interest in the property. Our team will contact you soon.' };
    }
    else if(propertyDetails.propertyType=="Commercial Office Space"){
      const { queryUsername, queryUseremail, queryUserphone} = userDetails;
      const { user } = propertyDetails;
      const { propertyID, propertyType, propertyPurpose, expectedPrice, city, address, buildingComplexName, landZone, idealForOfficeBusinesses, floorNumber, totalFloor, furnished, bathrooms, description, personalWashroom, pantryCafeteria, carpetArea, carpetAreaUnit, currentlyLeasedOut, superArea, superAreaUnit, possessionStatus, ownership, transactionType, bookingAmount, priceNegotiable, commercialAmenities, locationAdvantages, facing, overlooking} = propertyDetails;
      const mailOptions4 = {
        from: `"Property Inquiry" <pgoyal_realestate@propertymela.in>`, // Sender email
        to: process.env.ADMIN_EMAIL, // Admin's email
        subject: `New Inquiry for Property: ${propertyType} for ${propertyPurpose} in ${city}, `,
        html: `
          <h2>New Property Inquiry</h2>
          <p><strong>Property ID:</strong> ${propertyID}</p>
          <p><strong>Property Type:</strong> ${propertyType}</p>
          <p><strong>Property Purpose:</strong> ${propertyPurpose}</p>
          <p><strong>Price:</strong> ₹${expectedPrice}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Building/Complex Name :</strong> ${buildingComplexName}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Land Zone:</strong> ${landZone}</p>
          <p><strong>Ideal for Office Businesses:</strong> ${idealForOfficeBusinesses}</p>
          <br>
          <h3>Property Details</h3>
          <p><strong>Floor Number:</strong> ${floorNumber}</p>
          <p><strong>Total Floor:</strong> ${totalFloor}</p>
          <p><strong>Furnished:</strong> ${furnished}</p>
          <p><strong>Bathrooms:</strong> ${bathrooms}</p>
          <p><strong>Personal Washroom:</strong> ${personalWashroom}</p>
          <p><strong>Pantry Cafeteria:</strong> ${pantryCafeteria}</p>
          <br>
          <h3>Property Area Details</h3>
          <p><strong>Carpet Area:</strong> ${carpetArea} ${carpetAreaUnit}</p>
          <p><strong>Super Area:</strong> ${superArea} ${superAreaUnit}</p>
          <br>
          <h3>Property Ownership Details</h3>
          <p><strong>Possession Status:</strong> ${possessionStatus}</p>
          <p><strong>Ownership:</strong> ${ownership}</p>
          <p><strong>Transaction Type:</strong> ${transactionType}</p> 
          <p><strong>Currently Leased Out:</strong> ${currentlyLeasedOut}</p>
          <br>
          <h3>Property Price Details</h3>
          <p><strong>Booking Amount:</strong> ₹${bookingAmount}</p>
          <p><strong>Price Negotiable:</strong> ${priceNegotiable}</p>
          <br>
          <h3>Property Other Details</h3>
          <p><strong>Commercial Amenities:</strong> ${commercialAmenities}</p>
          <p><strong>Location Advantages:</strong> ${locationAdvantages}</p>
          <p><strong>Overlooking:</strong> ${overlooking}</p>
          <p><strong>Facing:</strong> ${facing}</p>
          <p><strong>Property Description:</strong> ${description}</p>
          <br>
          <h3>Owner Details</h3>
          <p><strong>Name:</strong> ${user.name}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <br>
          <h3>Inquiry User Details</h3>
          <p><strong>Name:</strong> ${queryUsername}</p>
          <p><strong>Email:</strong> ${queryUseremail}</p>
          <p><strong>Phone:</strong> ${queryUserphone}</p>
          <p><strong>Message:</strong> I am interested in this property. Please contact me for more details.</p>
        `,
      };
      
      await transporter.sendMail(mailOptions4);
      //console.log('Inquiry email sent to admin. '+mailOptions4);
    return { success: true, message: 'Thankyou for showing interest in the property. Our team will contact you soon.' };
    }
    else if(propertyDetails.propertyType=="Commercial Showroom"){
      const { queryUsername, queryUseremail, queryUserphone} = userDetails;
      const { user } = propertyDetails;
      const { propertyID, propertyType, propertyPurpose, expectedPrice, city, address, projectMarketName,landZone, currentlyLeasedOut, description, nearbyBusinesses, entranceWidth, entranceWidthUnit, floorNumber, totalFloor, furnished, personalWashroom, pantryCafeteria, mainRoadFacing, cornerPlot, carpetArea, carpetAreaUnit, coveredArea, coveredAreaUnit, plotArea, plotAreaUnit, possessionStatus, ownership, transactionType, bookingAmount, priceNegotiable, commercialAmenities, locationAdvantages, facing, overlooking} = propertyDetails;

      const mailOptions5 = {
        from: `"Property Inquiry" <pgoyal_realestate@propertymela.in>`, // Sender email
        to: process.env.ADMIN_EMAIL, // Admin's email
        subject: `New Inquiry for Property: ${propertyType} for ${propertyPurpose} in ${city}, `,
        html: `
          <h2>New Property Inquiry</h2>
          <p><strong>Property ID:</strong> ${propertyID}</p>
          <p><strong>Property Type:</strong> ${propertyType}</p>
          <p><strong>Property Purpose:</strong> ${propertyPurpose}</p>
          <p><strong>Price:</strong> ₹${expectedPrice}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Project/Market Name :</strong> ${projectMarketName}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Land Zone:</strong> ${landZone}</p>
          <p><strong>Nearby Businesses:</strong> ${nearbyBusinesses}</p>
          <br>
          <h3>Property Details</h3>
          <p><strong>Floor Number:</strong> ${floorNumber}</p>
          <p><strong>Total Floor:</strong> ${totalFloor}</p>
          <p><strong>Furnished:</strong> ${furnished}</p>
          <p><strong>Personal Washroom:</strong> ${personalWashroom}</p>
          <p><strong>Pantry Cafeteria:</strong> ${pantryCafeteria}</p>
          <p><strong>Corner Plot:</strong> ${cornerPlot}</p>
          <p><strong>Main Road Facing:</strong> ${mainRoadFacing}</p>
          <br>
          <h3>Property Area Details</h3>
          <p><strong>Covered Area:</strong> ${coveredArea} ${coveredAreaUnit}</p>
          <p><strong>Plot Area:</strong> ${plotArea} ${plotAreaUnit}</p>
          <p><strong>Carpet Area:</strong> ${carpetArea} ${carpetAreaUnit}</p>
          <p><strong>Entrance Width:</strong> ${entranceWidth} ${entranceWidthUnit}</p>
          <br>
          <h3>Property Ownership Details</h3>
          <p><strong>Possession Status:</strong> ${possessionStatus}</p>
          <p><strong>Ownership:</strong> ${ownership}</p>
          <p><strong>Transaction Type:</strong> ${transactionType}</p> 
          <p><strong>Currently Leased Out:</strong> ${currentlyLeasedOut}</p>
          <br>
          <h3>Property Price Details</h3>
          <p><strong>Booking Amount:</strong> ₹${bookingAmount}</p>
          <p><strong>Price Negotiable:</strong> ${priceNegotiable}</p>
          <br>
          <h3>Property Other Details</h3>
          <p><strong>Commercial Amenities:</strong> ${commercialAmenities}</p>
          <p><strong>Location Advantages:</strong> ${locationAdvantages}</p>
          <p><strong>Overlooking:</strong> ${overlooking}</p>
          <p><strong>Facing:</strong> ${facing}</p>
          <p><strong>Property Description:</strong> ${description}</p>
          <br>
          <h3>Owner Details</h3>
          <p><strong>Name:</strong> ${user.name}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <br>
          <h3>Inquiry User Details</h3>
          <p><strong>Name:</strong> ${queryUsername}</p>
          <p><strong>Email:</strong> ${queryUseremail}</p>
          <p><strong>Phone:</strong> ${queryUserphone}</p>
          <p><strong>Message:</strong> I am interested in this property. Please contact me for more details.</p>
        `,
      };
      await transporter.sendMail(mailOptions5);
      //console.log('Inquiry email sent to admin. '+mailOptions5);
    return { success: true, message: 'Thankyou for showing interest in the property. Our team will contact you soon.' };
    }
    else if(propertyDetails.propertyType=="Commercial Shop"){
      const { queryUsername, queryUseremail, queryUserphone} = userDetails;
      const { user } = propertyDetails;
      const { propertyID, propertyType, propertyPurpose, expectedPrice, city, address, description, projectMarketName, landZone, nearbyBusinesses, entranceWidth, entranceWidthUnit, currentlyLeasedOut, floorNumber, totalFloor, furnished, personalWashroom, pantryCafeteria, mainRoadFacing, cornerPlot, carpetArea, carpetAreaUnit, coveredArea, coveredAreaUnit, plotArea, plotAreaUnit, possessionStatus, ownership, transactionType, bookingAmount, priceNegotiable, commercialAmenities, locationAdvantages, facing, overlooking} = propertyDetails;
  
      const mailOptions6 = {
        from: `"Property Inquiry" <pgoyal_realestate@propertymela.in>`, // Sender email
        to: process.env.ADMIN_EMAIL, // Admin's email
        subject: `New Inquiry for Property: ${propertyType} for ${propertyPurpose} in ${city}, `,
        html: `
          <h2>New Property Inquiry</h2>
          <p><strong>Property ID:</strong> ${propertyID}</p>
          <p><strong>Property Type:</strong> ${propertyType}</p>
          <p><strong>Property Purpose:</strong> ${propertyPurpose}</p>
          <p><strong>Price:</strong> ₹${expectedPrice}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Project/Market Name :</strong> ${projectMarketName}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Land Zone:</strong> ${landZone}</p>
          <p><strong>Nearby Businesses:</strong> ${nearbyBusinesses}</p>
          <br>
          <h3>Property Details</h3>
          <p><strong>Floor Number:</strong> ${floorNumber}</p>
          <p><strong>Total Floor:</strong> ${totalFloor}</p>
          <p><strong>Furnished:</strong> ${furnished}</p>
          <p><strong>Personal Washroom:</strong> ${personalWashroom}</p>
          <p><strong>Pantry Cafeteria:</strong> ${pantryCafeteria}</p>
          <p><strong>Corner Plot:</strong> ${cornerPlot}</p>
          <p><strong>Main Road Facing:</strong> ${mainRoadFacing}</p>
          <br>
          <h3>Property Area Details</h3>
          <p><strong>Covered Area:</strong> ${coveredArea} ${coveredAreaUnit}</p>
          <p><strong>Plot Area:</strong> ${plotArea} ${plotAreaUnit}</p>
          <p><strong>Carpet Area:</strong> ${carpetArea} ${carpetAreaUnit}</p>
          <p><strong>Entrance Width:</strong> ${entranceWidth} ${entranceWidthUnit}</p>
          <br>
          <h3>Property Ownership Details</h3>
          <p><strong>Possession Status:</strong> ${possessionStatus}</p>
          <p><strong>Ownership:</strong> ${ownership}</p>
          <p><strong>Transaction Type:</strong> ${transactionType}</p> 
          <p><strong>Currently Leased Out:</strong> ${currentlyLeasedOut}</p>
          <br>
          <h3>Property Price Details</h3>
          <p><strong>Booking Amount:</strong> ₹${bookingAmount}</p>
          <p><strong>Price Negotiable:</strong> ${priceNegotiable}</p>
          <br>
          <h3>Property Other Details</h3>
          <p><strong>Commercial Amenities:</strong> ${commercialAmenities}</p>
          <p><strong>Location Advantages:</strong> ${locationAdvantages}</p>
          <p><strong>Overlooking:</strong> ${overlooking}</p>
          <p><strong>Facing:</strong> ${facing}</p>
          <p><strong>Property Description:</strong> ${description}</p>
          <br>
          <h3>Owner Details</h3>
          <p><strong>Name:</strong> ${user.name}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <br>
          <h3>Inquiry User Details</h3>
          <p><strong>Name:</strong> ${queryUsername}</p>
          <p><strong>Email:</strong> ${queryUseremail}</p>
          <p><strong>Phone:</strong> ${queryUserphone}</p>
          <p><strong>Message:</strong> I am interested in this property. Please contact me for more details.</p>
        `,
      };
      
      await transporter.sendMail(mailOptions6);
      //console.log('Inquiry email sent to admin. '+mailOptions6);
    return { success: true, message: 'Thankyou for showing interest in the property. Our team will contact you soon.' };
    }
    else if(propertyDetails.propertyType=="Commercial Land"){
      const { queryUsername, queryUseremail, queryUserphone} = userDetails;
      const { user } = propertyDetails;
      const { propertyID, propertyType, propertyPurpose, expectedPrice, city, address, projectSocietyName,landZone, currentlyLeasedOut, description, lengthDimension, widthDimension, dimensionUnit, openSides, facingRoadWidth, facingRoadWidthUnit, boundaryWall, cornerPlot, plotArea, plotAreaUnit, possessionStatus, ownership, transactionType, bookingAmount, priceNegotiable, commercialAmenities, locationAdvantages, facing, overlooking} = propertyDetails;
  
      const mailOptions7 = {
        from: `"Property Inquiry" <pgoyal_realestate@propertymela.in>`, // Sender email
        to: process.env.ADMIN_EMAIL, // Admin's email
        subject: `New Inquiry for Property: ${propertyType} for ${propertyPurpose} in ${city}, `,
        html: `
          <h2>New Property Inquiry</h2>
          <p><strong>Property ID:</strong> ${propertyID}</p>
          <p><strong>Property Type:</strong> ${propertyType}</p>
          <p><strong>Property Purpose:</strong> ${propertyPurpose}</p>
          <p><strong>Price:</strong> ₹${expectedPrice}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Project/Society Name :</strong> ${projectSocietyName}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Land Zone:</strong> ${landZone}</p>
          <br>
          <h3>Property Details</h3>
          <p><strong>Open Sides:</strong> ${openSides}</p>
          <p><strong>Facing Road Width:</strong> ${facingRoadWidth} ${facingRoadWidthUnit}</p>
          <p><strong>Boundary Wall:</strong> ${boundaryWall}</p>
          <br>
          <h3>Property Area Details</h3>
          <p><strong>Plot Area:</strong> ${plotArea} ${plotAreaUnit}</p>
          <p><strong>Length Dimension:</strong> ${lengthDimension} ${dimensionUnit}</p>
          <p><strong>Width Dimension:</strong> ${widthDimension} ${dimensionUnit}</p>
          <p><strong>Corner Plot:</strong> ${cornerPlot}</p>
          <br>
          <h3>Property Ownership Details</h3>
          <p><strong>possession Status:</strong> ${possessionStatus}</p>
          <p><strong>Ownership:</strong> ${ownership}</p>
          <p><strong>Transaction Type:<strong> ${transactionType}</p>
          <p><strong>Currently Leased Out:<strong> ${currentlyLeasedOut}</p> 
          <br>
          <h3>Property Price Details</h3>
          <p><strong>Booking Amount:</strong> ₹${bookingAmount}</p>
          <p><strong>Price Negotiable:</strong> ${priceNegotiable}</p>
          <br>
          <h3>Property Other Details</h3>
          <p><strong>Commercial Amenities:</strong> ${commercialAmenities}</p>
          <p><strong>Location Advantages:</strong> ${locationAdvantages}</p>
          <p><strong>Overlooking:</strong> ${overlooking}</p>
          <p><strong>Facing:</strong> ${facing}</p>
          <p><strong>Property Description:</strong> ${description}</p>
          <br>
          <h3>Owner Details</h3>
          <p><strong>Name:</strong> ${user.name}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <br>
          <h3>Inquiry User Details</h3>
          <p><strong>Name:</strong> ${queryUsername}</p>
          <p><strong>Email:</strong> ${queryUseremail}</p>
          <p><strong>Phone:</strong> ${queryUserphone}</p>
          <p><strong>Message:</strong> I am interested in this property. Please contact me for more details.</p>
        `,
      };
      await transporter.sendMail(mailOptions7);
      //console.log('Inquiry email sent to admin. '+mailOptions7);
    return { success: true, message: 'Thankyou for showing interest in the property. Our team will contact you soon.' };
    }
    
  } catch (error) {
    //console.log('Error sending inquiry email:', error);
    return { success: false, message: 'Failed to send inquiry.' };
  }
};

// Function to send Contact Us inquiry email
const sendContactUsEmail = async (userDetails) => {
  const { fullName, email, phone, message } = userDetails;

  const mailOptions = {
    from: `"Contact Us Query" <pgoyal_realestate@propertymela.in>`,
    to: process.env.ADMIN_EMAIL, // Admin's email
    subject: `New Contact Us Inquiry from ${fullName}`,
    html: `
      <h2>Contact Us Inquiry</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    //ll.log('Contact Us inquiry email sent to admin.');
    return { success: true, message: 'Thankyou. Your message has been sent to our team. We will contact you soon.' };
  } catch (error) {
    //console.error('Error sending Contact Us inquiry email:', error);
    return { success: false, message: 'Failed to send inquiry.' };
  }
};

// Function to handle property inquiry
const sendAuctionPropertyInquiryEmail = async (propertyDetails, userDetails) => {
  const { queryUsername, queryUseremail, queryUserphone} = userDetails;
  const { propertyID, propertyType, bankName, borrowerName, propertyPurpose, reservePrice, propertyArea, propertyAreaUnit, emdAmount, city} = propertyDetails;

  // Email content to send to admin
  const mailOptions = {
    from: `"Auction Property Inquiry" <pgoyal_realestate@propertymela.in>`, // Sender email
    to: process.env.ADMIN_EMAIL, // Admin's email
    subject: `New Inquiry for Auction Property: ${propertyType} for sale in ${city} `,
    html: `
      <h2>New Auction Property Inquiry</h2>
      <p><strong>Property ID:</strong> ${propertyID}</p>
      <p><strong>Bank name:</strong> ${bankName}</p>
      <p><strong>Property Type:</strong> ${propertyType}</p>
      <p><strong>Property Area:</strong> ${propertyArea} ${propertyAreaUnit}</p>
      <p><strong>Reserve Price:</strong> ₹${reservePrice}</p>
      <p><strong>EMD Amount:</strong> ₹${emdAmount}</p>
      <p><strong>City:</strong> ${city}</p>
      <br>
      <h3>Borrower Details</h3>
      <p><strong>Name:</strong> ${borrowerName}</p>
      <br>
      <h3>Inquiry User Details</h3>
      <p><strong>Name:</strong> ${queryUsername}</p>
      <p><strong>Email:</strong> ${queryUseremail}</p>
      <p><strong>Phone:</strong> ${queryUserphone}</p>
      <p><strong>Message:</strong> I am interested in this property. Please contact me for more details.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    //console.log('Inquiry email sent to admin.');
    return { success: true, message: 'Thankyou for showing interest in the property. Our team will contact you soon.' };
  } catch (error) {
    //console.error('Error sending inquiry email:', error);
    return { success: false, message: 'Failed to send inquiry.' };
  }
};

//module.exports = { sendOTP, verifyOTP };
module.exports ={sendContactUsEmail, sendPropertyInquiryEmail, sendAuctionPropertyInquiryEmail, sendOTP, verifyOTP};
