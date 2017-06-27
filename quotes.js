var config = require('./config.json');

var quoteService = (function() {
    var service = {};

    service.randomInt = function(max) {
        return Math.floor(Math.random() * (max + 1));
    };

    service.getRandomQuoteFromCaracter = function (caracter) {
        var quotes = config.caracters[caracter].quotes;
        var quoteIndex = this.randomInt(quotes.length - 1);
        var quote = quotes[quoteIndex];

        return quote
    };

    service.getQuoteByTag = function (tag) {
        return;
    };

    return service;
}());

module.exports = quoteService;
