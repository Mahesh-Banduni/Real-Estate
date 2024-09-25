const ContactForm = require('../models/contact.form.model.js');
const { ConflictError, NotFoundError, BadRequestError } = require('../errors/errors');

// Create a new contact form
const createContactForm = async (formData) => {
  const contactForm = new ContactForm();
  contactForm.fullName = formData.fullName;
  contactForm.phone = formData.phone;
  contactForm.email = formData.email;
  contactForm.message = formData.message;

  return await contactForm.save();
};

// Get all contact forms
const getAllContactForms = async () => {
  return await ContactForm.find();
};

// Get a contact form by full name
const getContactFormByFullName = async (fullName) => {
  const contactForm = await ContactForm.findOne({ fullName });
  if (!contactForm) {
    throw new NotFoundError('Contact form not found');
  }
  return contactForm;
};

// Delete a contact form by ID
const deleteContactForm = async (formId) => {
  const contactForm = await ContactForm.findByIdAndDelete(formId);
  if (!contactForm) {
    throw new NotFoundError('Contact form not found');
  }
  return contactForm;
};

module.exports = {
  createContactForm,
  getAllContactForms,
  getContactFormByFullName,
  deleteContactForm,
};
