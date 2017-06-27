var config = require('../config.json');

var appRouter = function(app) {

    app.get("/quote/*", function(req, res) {
        var caracter = req.params[0];
        var quotes = config.caracters[caracter].quotes;
        var quoteIndex = randomInt(quotes.length - 1);
        var quote = quotes[quoteIndex];

        return res.send(quote);
    }); 
}

function randomInt (max) {
    return Math.floor(Math.random() * (max + 1));
}

module.exports = appRouter;
