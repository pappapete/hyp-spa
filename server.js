var express = require('express');
var open = require('open');
var bodyParser = require('body-parser');

var app = express();

var config = require('./config/emailConfig').config;
var email = require('./email/email');

const PORT = 3000;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.post('/email', function (req, res) {

    var emailSendGrid = function(data) {
        var params = email.makeSendGridData(data);
        email.sendEmail(config.sendGrid.name, params)
            .then(function( response) {
                res.send(response)
            })
            .catch(function () {
                emailMailGun(data)
            });
    };

    var emailMailGun = function(data) {
        var params = email.makeMailGunData(data);
        email.sendEmail(config.mailGun.name, params)
            .then( function(response) {
                res.send(response)
            })
            .catch(function(error) {
                res.status(400).send(error);
            });
    };



    emailSendGrid(req.body);
});

app.listen(PORT, function() {
    console.log('Server running on ' + PORT);
    // open('http://localhost:8081/');
});
