
var request = require('request');
var fs = require('fs');


function handleResponse(error, response, body, callback) {
    if(error) {
        callback('Error requesting API:' + error);
        return;
    }

    callback(null, body.message);
};

function handleFileAndCallAPI (error, data, callback) {
    if(error) {
        callback('Error retrieving name:' + error);
        return;
    }
    var options = {
        url: 'http://www.foaas.com/you/' + data + '/FerCa',
        headers: {
            'Accept': 'application/json'
        },
        json: true
    };

    request(options, function(error, response, body) {
        handleResponse(error, response, body, callback);
    });
};


function fuckYou(callback) {
    fs.readFile('./name', 'utf8', function(error, data) {
        handleFileAndCallAPI(error, data, callback);
    });
}


fuckYou(function(error, message) {
    if (error) {
        console.log('Error:', error);
        return;
    }
    console.log(message);
});

