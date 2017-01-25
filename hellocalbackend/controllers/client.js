var Client = require('../models/client');

exports.postClients = function (req, res){
    var client = new Client();

    client.name = req.body.name;
}