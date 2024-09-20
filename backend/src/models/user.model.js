const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String},
  password: {
        type: String,
        required: true,
        minlength: 6,
  },
  phone: { type: String, required: true, minlength: 10, maxlength: 10 },
});

const User = mongoose.model('User', userSchema);
module.exports = User;


