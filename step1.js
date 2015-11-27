var fs = require('fs');
var express = require('express');
var request = require('request');

var app = express();

app.listen(3101, function () {
    console.log('server up and running!');
});


app.get('/fuckoff', function(req, res) {

    fs.readFile('./name', 'utf8', function (error, name) {

        if (error) {
            console.log('Error requesting API:', error);
            return;
        }

        var options = {
            url: 'http://www.foaas.com/you/' + name + '/FerCa',
            headers: {
                'Accept': 'application/json'
            },
            json: true
        };

        request(options, function(error, response, body) {
            if(error) {
                console.log('Error requesting API:', error);
                return;
            }

            res.send(body.message);
        });

    });
});