const User = require('../models/userModel');
const { ConflictError } = require('../errors/errors');

const createUser = async (userData) => {
    const { email } = userData;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new ConflictError('User with this email already exists.');
    }

    const user = new User(userData);
    return await user.save();
};

const getUserById = async (userId) => {
    return await User.findById(userId);
};

module.exports = {
    createUser,
    getUserById,
};
