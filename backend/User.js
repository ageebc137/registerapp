const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: { 
        type: String, 
        required: true,
        validate: {
            validator: function(v) {
               return (v.length >= 2 && (/^[a-zA-Z]+$/).test(v.trim()));
            },
            message: 'First name not formatted correctly'
        } 
    },
    lastName: { 
        type: String, 
        required: true,
        validate: {
            validator: function(v) {
                return (v.length >= 2 && (/^[a-zA-Z]+$/).test(v.trim()));
            },
            message: 'Last name not formtted correctly'
        }
    },
    address1: { 
        type: String, 
        required: true,
        validate: {
            validator: function(v) {
                return (v.length >= 7 && (/^[a-zA-Z\s0-9]+$/).test(v.trim()));
            },
            message: 'Address1 not formatted correctly'
        } 
        },
    address2: String,
    city: { 
        type: String, 
        required: true
        // validate: {
        //     validator: function(v) {
        //         return (v.length  <  2 && (/^[a-zA-Z\s]+$/).test(v.trim()));
        //     },
        //     message: 'City not formatted properly'
        // } 
    },
    state: { 
        type: String, 
        required: true,
        validate: {
            validator: function(v) {
                return v.length === 2 && (/^[A-Z]+$/).test(v.trim());
            },
            message: 'State not formmated properly'
        }
     },
    zip: { 
        type: String, 
        required: true,
        validate: {
            validator: function(v) {
                return (v.length === 5 || v.length === 9) && (/^\d+$/).test(v.trim());
            },
            message: 'Zip not formatted correctly'
        } 
    },
    country: { 
        type: String, 
        required: true,
        validate: {
            validator: function(v) {
                return v ==='US';
            },
            message: 'Country needs to be US'
        } 
    },
    dateAdded: {
        type: Date, 
        required: true}
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;