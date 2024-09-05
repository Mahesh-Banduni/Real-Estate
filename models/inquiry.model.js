const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema({
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property",
    required: true,
  },
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  messages: [
    {
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      content: { type: String, required: true },
      dateSent: { type: Date, default: Date.now },
    },
  ],
  isOpen: { type: Boolean, default: true },
});

const Inquiry = mongoose.model("Inquiry", inquirySchema);

module.exports = Inquiry;
