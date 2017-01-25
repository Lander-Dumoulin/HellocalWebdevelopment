"use strict";
var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
    guideId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String
    }
});

module.exports = mongoose.model('reviews', ReviewSchema);