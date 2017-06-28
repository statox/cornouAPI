var formatter = require('./format.js');
var config = require('./config.json');

var quoteService = (function() {
    var service = {};

    service.randomInt = function(max) {
        return Math.floor(Math.random() * (max + 1));
    };

    service.getRandomQuoteFromCaracter = function (caracter) {
        var quotes = getAllQuotesFromCaracter(caracter);
        var quoteIndex = this.randomInt(quotes.length - 1);
        var quote = quotes[quoteIndex];
        quote = formatter.formatQuote(quote);

        return quote
    };

    service.getTaggedQuoteFromCaracter = function(caracter, tag) {
        return "Tagged " + tag + " from " + caracter;
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
            var carQuotes = config.caracters[c].quotes;
            quotes = quotes.concat(carQuotes);
        });

        return quotes;
    };

    getAllQuotesFromCaracter = function(caracter) {
        var quotes = [];

        Object.keys(config.caracters).forEach(function(c) {
            var carQuotes = config.caracters[c].quotes;
            var carAliases = config.caracters[c].aliases;

            if (carAliases.indexOf(caracter) != -1) {
                quotes = quotes.concat(carQuotes);
            }
        });

        return quotes;
    };

    return service;
}());

module.exports = quoteService;
