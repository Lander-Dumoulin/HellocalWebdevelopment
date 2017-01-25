"use strict";
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var GuideSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    dateFrom: {
        type: Date,
        required: true
    },
    dateTill: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    maxPeople: {
        type: Number,
        required: true
    },
    photoUri: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Guide', GuideSchema);