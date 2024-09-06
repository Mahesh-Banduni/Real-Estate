const userService = require('../services/userService');

const createUser = async (req, res, next) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user) {
            throw new NotFoundError('User not found');
        }
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createUser,
    getUserById,
};
