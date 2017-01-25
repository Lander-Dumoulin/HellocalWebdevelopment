
var Profiledetails = require('../models/profiledetails');

exports.postProfiledetails = function (req, res) {
    var profiledetails = new Profiledetails();




    profiledetails.birthDate = req.body.birthDate;
    profiledetails.description = req.body.description;
    profiledetails.gender = req.body.gender;
    profiledetails.homeTown = req.body.homeTown;
    profiledetails.firstName = req.body.firstName;
    profiledetails.lastName = req.body.lastName;
    profiledetails.photoUri = req.body.photoUri;
    profiledetails.phoneNumber = req.body.phoneNumber;
    profiledetails.languages = req.body.languages;
    profiledetails.userId = req.user._id;

    profiledetails.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'profiledetails added', data: profiledetails });
    });
};




exports.getProfileDetailsFrom = function (req, res) {
    console.log('inside getProfileDetailsFrom');
    Profiledetails.find({ userId: req.params.user_id }, function (err, profiledetails) {
        if (err) {
            res.send(err);
        }

        res.json(profiledetails);
    });
};



exports.getProfileDetails = function (req, res) {

    Profiledetails.find(function (err, profiledetails) {
        if (err) {
            res.send(err);
        }

        // Domain you wish to allow
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'YOUR-CUSTOM-HEADERS-HERE');

        // Set to true if you need the website to include cookies in  requests
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Check if preflight request
        if (req.method === 'OPTIONS') {
            res.status(200);
            res.end();
        } else {
            // Pass to next layer of middleware
        }

        res.json(profiledetails);
    });
};