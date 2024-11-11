const ContactForm = require('../models/contact.form.model.js');
const { ConflictError, NotFoundError, BadRequestError } = require('../errors/errors.js');
const url = "api.zeptomail.in/";
const token = "Zoho-enczapikey PHtE6r0JEe7oi255oxYIt6W6QpGtN9wv/rthKABHtodDC/5QHk1cqd4owDKz/k8oVvZFFvKTz4M8tbqdtLqHcz2+YGdKW2qyqK3sx/VYSPOZsbq6x00VuF0ZcEXdXI7tdNZo0ifVvtnfNA==";

// Create a new contact form
const createContactForm = async (formData) => {
  const contactForm = new ContactForm();
  contactForm.fullName = formData.fullName;
  contactForm.phone = formData.phone;
  contactForm.email = formData.email;
  contactForm.message = formData.message;
  const { SendMailClient } = require("zeptomail");

let client = new SendMailClient({url, token});

client.sendMail({
    "from": 
    {
        "address": "maheshbanduni9997@gmail.com",
        "name": "noreply"
    },
    "to": 
    [
        {
        "email_address": 
            {
                "address": "maheshbanduni9808@gmail.com",
                "name": "Mahesh Banduni"
            }
        }
    ],
    "subject": "Test Email",
    "htmlbody": "<div><b> Test email sent successfully.</b></div>",
}).then((resp) => console.log("success")).catch((error) => console.log("error"));

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
