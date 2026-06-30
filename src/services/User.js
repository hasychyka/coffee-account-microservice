const User = require('../models/User');

class UserService {

    async getAllUsers() {
        return await User.find();
    }

    async createUser(userData) {
        return await User.create(userData);
    }

    async getUserById(Id) {
        return await User.findById(Id);
    }
    async updateUser(Id, userData) {
        return await User.findByIdAndUpdate(Id, userData, { new: true });
    }

    async deleteUser(Id) {
        return await User.findByIdAndDelete(Id);
    }
}

module.exports = new UserService();
