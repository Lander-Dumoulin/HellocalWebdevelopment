var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var cors = require('cors');

var beerController = require('./controllers/beer');
var userController = require('./controllers/user');
var authController = require('./controllers/auth');
var guideController = require('./controllers/guide');
var profiledetailsController = require('./controllers/profiledetails');
var reviewController = require('./controllers/review');

var originsWhiteList = [
    'http://localhost:3001'
];
var corsOptions = {
    origin: function(origin, callback){
        var isWhiteListed = originsWhiteList.indexOf(origin) != -1;
        callback(null, isWhiteListed);
    },
    credentials: true
}

mongoose.connect('mongodb://admin:administrator@ds054619.mlab.com:54619/hellocal');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors(corsOptions));

app.use(passport.initialize());

var router = express.Router();

router.route('/beers')
    .post(authController.isAuthenticated, beerController.postBeers)
    .get(authController.isAuthenticated, beerController.getBeers);

router.route('/beers/:beer_id')
    .get(authController.isAuthenticated, beerController.getBeer)
    .put(authController.isAuthenticated, beerController.putBeer)
    .delete(authController.isAuthenticated, beerController.deleteBeer);

router.route('/users')
    .post(authController.isAuthenticated, userController.postUsers)
    .get(authController.isAuthenticated, userController.getUsers);

router.route('/guides')
    .post(authController.isAuthenticated, guideController.postGuides)
    .get(guideController.getGuides);

router.route('/profiledetails')
    .post(authController.isAuthenticated, profiledetailsController.postProfiledetails)
    .get(profiledetailsController.getProfileDetails);

router.route('/profiledetails/:user_id')
    .get(profiledetailsController.getProfileDetailsFrom);

router.route('/reviews')
    .post(authController.isAuthenticated, reviewController.postReview);

router.route('/reviews/:guideId')
    .get(reviewController.getReviewsForGuide);

app.use('/api', router);



app.listen(3000);

console.log('Server running at http://localhost:3000');

