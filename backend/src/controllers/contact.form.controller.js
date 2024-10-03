const contactFormService = require('../services/contact.form.service.js');

// Create a new contact form
exports.createContactForm = async (req, res, next) => {
  try {
    const contactForm = await contactFormService.createContactForm(req.body);
    res.status(201).json({
      success: true,
      data: contactForm,
    });
  } catch (error) {
    next(error);
  }
};

// Get all contact forms
exports.getAllContactForms = async (req, res, next) => {
  try {
    const contactForms = await contactFormService.getAllContactForms();
    res.status(200).json({
      success: true,
      data: contactForms,
    });
  } catch (error) {
    next(error);
  }
};

// Get contact form by full name
exports.getContactFormByFullName = async (req, res, next) => {
  try {
    const contactForm = await contactFormService.getContactFormByFullName(req.params.fullName);
    res.status(200).json({
      success: true,
      data: contactForm,
    });
  } catch (error) {
    next(error);
  }
};

// Delete contact form by ID
exports.deleteContactForm = async (req, res, next) => {
  try {
    await contactFormService.deleteContactForm(req.params.id);
    res.status(200).json({ message: 'Contact form deleted successfully' });
  } catch (error) {
    next(error);
  }
};
