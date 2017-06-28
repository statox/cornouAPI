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
        var quotes = getAllQuotes();
        quotes = quotes.filter(function(q) {
            return q.tags.indexOf(tag) != -1;
        });
        return quotes;
    };

    getAllQuotes = function() {
        var quotes = [];
        Object.keys(config.caracters).forEach(function(c) {
            var car = config.caracters[c];
            var carQuotes = config.caracters[c].quotes;
            quotes = quotes.concat(carQuotes);
        });

        return quotes;
    }

    return service;
}());

module.exports = quoteService;
