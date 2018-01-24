var express = require('express');
var app = express();
var http = require('http').Server(app);

http.listen(process.env.PORT || 3000, function() {
    console.log('listening on', http.address().port);
});

app.get('/*', function(req, res) {
    var jsonResponse = [];
    jsonResponse.push({ "text": "Hi. " + (Math.random() * 5 + 1).toFixed(0) + " is a lucky number..." });
    res.send(jsonResponse);
});

