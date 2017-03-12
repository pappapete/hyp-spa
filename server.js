var express = require('express');
var open = require('open');

var app = express();

var port = process.env.PORT || 8081;

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
    console.log('Server running on ' + port);
    // open('http://localhost:8081/');
});