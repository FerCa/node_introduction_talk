
var request = require('request');
var fs = require('fs');


function handleResponse(error, response, body) {
    if(error) {
        console.log('Error requesting API:', error);
        return;
    }

    console.log(body.message);
};

function handleFileAndCallAPI (error, data) {
    if(error) {
        console.log('Error retrieving name:', error);
        return;
    }

    var options = {
        url: 'http://www.foaas.com/you/' + data + '/FerCa',
        headers: {
            'Accept': 'application/json'
        },
        json: true
    };

    request(options, handleResponse);
};


function fuckYou() {
    fs.readFile('./name', 'utf8', handleFileAndCallAPI);
}


fuckYou();

