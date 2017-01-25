"use strict";
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var ProfiledetailsSchema = new mongoose.Schema({
    birthDate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    homeTown: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    photoUri: {
        type: String,
        required: false
    },
    phoneNumber: {
        type: String,
        required: true
    },
    languages:{
        type: [String],
        required: true
    },
    userId: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Profiledetails', ProfiledetailsSchema);