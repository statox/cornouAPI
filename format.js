var formatService = (function() {
    var service = {};

    service.formatQuote = function (quote) {
        var s = quote.quote.replace(/^/, '> ');

        return s;
    };

    service.formatQuotes = function(quotes) {
        var s = "";

        quotes.forEach(function(quote) {
            s += "> ";
            s += quote.quote;
            s += "\n";
        });

        return s;
    };

    return service;
}());

module.exports = formatService;
