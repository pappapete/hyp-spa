var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var config = require('./config/emailConfig').config;
var email = require('./email/email');

const PORT = 3000;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.post('/email', function (req, res) {

    // this function sends the email via SendGrid, but
    // if this fails then it is send via MailGun
    var emailSendGrid = function(data) {
        var params = email.makeSendGridData(data);
        email.sendEmail(config.sendGrid.name, params)
            .then(function( response) {
                res.send(response)
            }, function () {
                emailMailGun(data);
            })
            .catch(function (error) {
                res.status(400).send(error);
            });
    };

    // this function sends the email via MailGun
    // if this fails then an error is returned
    var emailMailGun = function(data) {
        var params = email.makeMailGunData(data);
        email.sendEmail(config.mailGun.name, params)
            .then( function(response) {
                res.send(response)
            }, function () {
                emailSendGrid(data);
            })
            .catch(function() {
                emailSendGrid(data);
            });
    };

    emailMailGun(req.body);
});

app.listen(PORT, function() {
    console.log('Server running on ' + PORT);
});
