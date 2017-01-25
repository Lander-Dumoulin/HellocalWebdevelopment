var Guide = require('../models/guide');

exports.postGuides = function (req, res) {
    var guide = new Guide();


    guide.country = req.body.country;
    guide.dateFrom = req.body.dateFrom;
    guide.dateTill = req.body.dateTill;
    guide.location = req.body.location;
    guide.maxPeople = req.body.maxPeople;
    guide.photoUri = req.body.photoUri;
    guide.price = req.body.price;
    guide.type = req.body.type;
    guide.userId = req.user._id;

    guide.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Guide added', data: guide });
    });
};

exports.getGuides = function (req, res) {

    Guide.find(function (err, guides) {
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

        res.json(guides);
    });
};