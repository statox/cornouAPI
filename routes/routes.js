var quoteService = require('../quotes.js');
var caracterService = require('../caracters.js');

var appRouter = function(app) {

    app.get("/quote/*/caracter", function(req, res) {
        var caracter = req.params[0];
        var quote = quoteService.getRandomQuoteFromCaracter(caracter);

        return res.send(quote);
    }); 

    app.get("/caracter/list", function(req, res) {
        var caracters = caracterService.getCaractersList();

        return res.send(caracters);
    });

    app.get("/quote/*/tag", function(req, res) {
        var tag = req.params[0];
        var quotes = quoteService.getQuoteByTag(tag);

        return res.send(quotes);
    });
}

module.exports = appRouter;
