const mongoose = require("mongoose");

const contactFormSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String},
  message: { type: String, minlength: 6, maxlength: 3000,  required: true, set: (message) => message.charAt(0).toUpperCase() + message.slice(1).toLowerCase() },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const ContactForm = mongoose.model("ContactForm", contactFormSchema);
module.exports = ContactForm;
