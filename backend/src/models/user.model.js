const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: { type: String},
  password: {
        type: String,
        required: true,
        minlength: 6,
  },
  role: {type: String, enum: ["User","Agent","Admin"], default: "User"},
  phone: { type: String, required: true, minlength: 10, maxlength: 10 },
  tokens:[{
    token:{
        type:String,
        //required:true
    }
  }],
  favoriteProperties: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property",
    required: true
  }],
  ownedProperties: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Property' 
  }]
},{timestamps: true});

// Method to generate JWT auth token
userSchema.methods.generateAuthToken = async function() {
  try {
    // Create token using the user's _id and the secret key from the environment variables
    const token = jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY);

    // Add the generated token to the user's tokens array
    this.tokens = this.tokens.concat({ token });

    // Save the updated user object
    await this.save();

    // Return the generated token
    return token;
  } catch (error) {
    // Log the error for debugging
    console.error("Error generating token: ", error);
    throw new Error("Token generation failed"); // Throw error if token generation fails
  }
}

const User = mongoose.model('User', userSchema);
module.exports = User;