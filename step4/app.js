var FuckYou = require('./fuckyou');

var fuckYou = new FuckYou();

fuckYou.execute(function(error, message) {

    if (error) {
        console.log(error);
        return;
    }
    console.log(message);
});