var config = require('../config.json');

var appRouter = function(app) {

    app.get("/", function(req, res) {
        res.send("Hello World");
    }); 

    app.get("/account", function(req, res) {
        var accountMock = {
            "username": "nraboy",
            "password": "1234",
            "twitter": "@nraboy"
        }
        if(!req.query.username) {
            return res.send({"status": "error", "message": "missing username"});
        } else if(req.query.username != accountMock.username) {
            return res.send({"status": "error", "message": "wrong username"});
        } else {
            return res.send(accountMock);
        }
    });

    app.get("/quote/*", function(req, res) {
        var caracter = req.params[0];
        var quotes = config.caracters[caracter].quotes;
        var quoteIndex = randomInt(quotes.length - 1);
        console.log(quoteIndex);
        var quote = quotes[quoteIndex];

        return res.send(quote);
    }); 
}

function randomInt (max) {
    return Math.floor(Math.random() * (max + 1));
}

module.exports = appRouter;
