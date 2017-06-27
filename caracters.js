var config = require('./config.json');

var caracterService = (function() {
    var service = {};

    service.getCaractersList = function () {
        var caracters = Object.keys(config.caracters);

        return caracters;
    };

    return service;
}());

module.exports = caracterService;
