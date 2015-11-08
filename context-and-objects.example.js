
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.getModel = function() {
    return this.model;
};

Car.prototype.getModel = function(callback) {
    db.getModelsInfo(function(modelsInfo) {
        var modelInfo = modelsInfo[this.model];  // < will fail, this here points to global context
        callback(modelInfo);
    });

};

var car1 = new Car('Renault', 'Kangoo', 2013);





