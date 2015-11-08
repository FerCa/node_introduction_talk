var request = require('request');
var fs = require('fs');

FuckYou = function(nameFilePath) {
    this.nameFilePath = nameFilePath;
};

FuckYou.prototype.execute = function(callback) {

    fs.readFile(this.nameFilePath, 'utf8', function(error, data) {
        handleFileAndCallAPI(error, data, callback);
    });
};

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


module.exports = FuckYou;