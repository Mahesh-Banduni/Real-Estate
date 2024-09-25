const mongoose = require("mongoose");
const contactFormSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String},
  message: { type: String, minlength: 6, maxlength: 3000,  required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const ContactForm = mongoose.model("ContactForm", contactFormSchema);
module.exports = ContactForm;
