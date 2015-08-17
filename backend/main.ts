/**
 * Basic Web Service : backend
 * Main module : main.ts
 * @module BasWebSer
 * @author Ari Kekäläinen <ari.kekalainen@cybercom.com>
 * @version 0.0.1
 */
"use strict";

var env = process.env.NODE_ENV || 'development';

/** Node core modules */
import path = require('path');

/** 3rd party module dependencies. */
import bodyParser = require('body-parser');
import express = require('express');
var app = express();

/** Local Express route dependencies */
import routes = require("./routes/index");

/**
 * Main Module for base web app
 * @module BaseWebApp
 * @exports BaseWebApp
 */
module BasWebSer {
    /**
     * The Express middleware
     */
    export var server = app;

    /**
     * Inits the Express middleware
     */
    export function init() {

        /**
         * Server configuration
         */

        /** parse application/x-www-form-urlencoded */
        app.use(bodyParser.urlencoded({ extended: true }));
        /** parse application/json */
        app.use(bodyParser.json());

        /** development configuration */
        if ('development' === env) {
            app.locals.pretty = true;
        }

        /** static resources */
        app.use('/bower_components', express.static(path.join(__dirname, '../client/bower_components')));
        app.use('/style', express.static(path.join(__dirname, '../client/style')));
        app.use('/js', express.static(path.join(__dirname, '../client/js')));

        /** Routes */
        app.get('/', routes.index);

        /** Send HTTP 404 for pages that have no defined route */
        app.all('*', (req: express.Request, res: express.Response) => {
            res.status(404).send("backend:fileNotFound");
        });

    }
}
/** Check if this application is a top level (main) module and start services here */
if (require.main === module) {

    var server = require('http').createServer(app);

    BasWebSer.init();

    server.listen(3000, function () {
        console.log("Basic Web Service backend (server) is up and running at port localhost:3000");
    });
}

export = BasWebSer;
