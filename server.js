var express = require('express');
var app = express();
var http = require('http').Server(app);

http.listen(process.env.PORT || 3000, function() {
    console.log('listening on', http.address().port);
});

app.get('/', function(req, res) {
    var jsonResponse = [];
    var user_fb_id = req.param('fb_id');
    var firstScore = parseInt(req.param('attribute1'));
    var secondScore = parseInt(req.param('attribute2'));
    var thridScore = parseInt(req.param('attribute3'));
    var fourthScore = parseInt(req.param('attribute4'));
    var fifthScore = parseInt(req.param('attribute5'));
    //Total Score
    console.log( "Total Score equal" + totalScore);

    var totalScore = firstScore + secondScore + thridScore + fourthScore + fifthScore;
    
    // jsonResponse.push({ "text": "Hi. " + (Math.random() * 5 + 1).toFixed(0) + " is a lucky number..." });
    res.json({ 
                "set_attributes":
                {
                    "result": totalScore
                }
            });
    //res.send(jsonResponse);
});

