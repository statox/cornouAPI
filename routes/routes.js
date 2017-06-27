var quoteService = require('../quotes.js');

var appRouter = function(app) {

    app.get("/quote/*", function(req, res) {
        var caracter = req.params[0];
        var quote = quoteService.getRandomQuoteFromCaracter(caracter);

        return res.send(quote);
    }); 
}

module.exports = appRouter;
