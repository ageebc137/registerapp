const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address1: { type: String, required: true },
    address2: String,
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
    dateAdded: {type: Date, required: true}
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;