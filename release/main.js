"use strict";
var env = process.env.NODE_ENV || 'development';
var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var routes = require("./routes/index");
var BasWebSer;
(function (BasWebSer) {
    BasWebSer.server = app;
    function init() {
        /**
         * Server configuration
         */
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        if ('development' === env) {
            app.locals.pretty = true;
        }
        app.use('/bower_components', express.static(path.join(__dirname, '../client/bower_components')));
        app.use('/style', express.static(path.join(__dirname, '../client/style')));
        app.use('/js', express.static(path.join(__dirname, '../client/js')));
        app.get('/', routes.index);
        app.all('*', function (req, res) {
            res.status(404).send("backend:fileNotFound");
        });
    }
    BasWebSer.init = init;
})(BasWebSer || (BasWebSer = {}));
if (require.main === module) {
    var server = require('http').createServer(app);
    BasWebSer.init();
    server.listen(3000, function () {
        console.log("Basic Web Service backend (server) is up and running at port localhost:3000");
    });
}
module.exports = BasWebSer;
