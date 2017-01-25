"use strict";
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

passport.use(new LocalStrategy(
    function (username, password, callback) {
        User.findOne({
            username: username
        },
            function (err, user) {
            if (err) {
                return callback(err);
                }

            if (!user) {
                return callback(null, false);
                }

                user.verifyPassword(password, function (err, isMatch) {
                if (err) {
                    return callback(err);
                    }

                if (!isMatch) {
                    return callback(null, false);
                    }

                return callback(null, user);
                });
            });
    }
));

exports.isAuthenticated = passport.authenticate(['local', 'bearer'], { session: false });