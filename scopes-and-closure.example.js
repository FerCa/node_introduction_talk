// ------ Scopes --------

var userName = 'Ferran';

function firstScope() {

    var userName = 'Quim';
    console.log('Value in first scope', userName);
    secondScope();

    function secondScope() {
        console.log('Value in second scope', userName);
    };

}

console.log('Value in global scope', userName);
firstScope();


// ----- Closure -------

function makeCounterFunc() {
    var counter = 0;
    var closure = function () {
        return counter += 1;
    };
    return closure;
}

var counterFunc = makeCounterFunc();
console.log(counterFunc());
console.log(counterFunc());
console.log(counterFunc());
console.log(counterFunc());