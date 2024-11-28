const { ConflictError, NotFoundError, BadRequestError } = require('../errors/errors.js');
const {sendContactUsEmail} = require("../utils/email.service.utils.js");

// Create a new contact form
const createContactForm = async (formData) => {
  const userDetails={};
  
  userDetails.fullName = formData.fullName;
  userDetails.phone = formData.phone;
  userDetails.email = formData.email;
  userDetails.message = formData.message;

  const response = sendContactUsEmail(userDetails);
  return response;
};

module.exports = {
  createContactForm,
};
