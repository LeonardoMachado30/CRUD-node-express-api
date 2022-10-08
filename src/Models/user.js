const mongoose = require("../DataBase");

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('user', UserSchema)

module.exports = User;