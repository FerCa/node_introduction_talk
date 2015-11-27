var fs = require('fs');
var express = require('express');

var app = express();

app.listen(3101, function () {
    console.log('server up and running!');
});


app.get('/name', function(req, res) {

    fs.readFile('./name', 'utf8', function (error, name) {

        if (error) {
            console.log('Error requesting API:', error);
            return;
        }

        res.send(name);
    });
});