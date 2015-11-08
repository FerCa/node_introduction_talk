var Promise = require('promise');
var request = require('request');


function getGooglePage() {
    var promise = new Promise(function (resolve, reject) {

        var options = {
            url: 'http://www.foaas.com/you/' + 'mariano' + '/FerCa',
            headers: {
                'Accept': 'application/json'
            },
            json: true
        };

        request(options, function(error, response, body) {
            if (error) {
                reject(error);
                return;
            }
            resolve(body.message);
        });
    });
    return promise;
};



var googlePagePromise = getGooglePage();

googlePagePromise.then(function(res) {
    console.log(res);
}, function(error) {
    console.log('error:', error);
});



// interesting the promise.all

//var allPromise = Promise.all([promise1, promise2, promise3]);
//
//allPromise.then(function(res) {
//    // res is an array with the result of every promise
//});