var Review = require('../models/review');


exports.postReview = function (req, res) {
    var review = new Review();

    review.guideId = req.body.guideId;
    review.userId = req.user._id;
    review.rating = req.body.rating;
    review.comment = req.body.comment;


    review.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.json({message: 'New review added', data: review});
    });
};

exports.getReviewsForGuide = function (req, res) {
    Review.find({ guideId: req.params.guideId }, function (err, guides) {
        if (err) {
            res.send(err);
        }

        res.json(guides);
    });
};