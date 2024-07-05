const mongoose = require('mongoose');
const plm = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    profileImg: String,
    createdAt: { type: Date, default: Date.now }
});

userSchema.plugin(plm)

module.exports = mongoose.model("User", userSchema)