/**
 * Basic Web Service : backend
 * Routes : index.ts
 * @module Routes
 * @author Ari Kekalainen <ari.kekalainen@gmail.com>
 * @version 0.0.1
 */

/** express JS */
import express = require("express");
/** Node core modules */
import path = require('path');

/**
 * Module for main page route handler
 * @module Routes
 * @exports Routes
 */
module Routes {

    /** @function index
     *  @description Root interface to serve HTML5 app files
     *  @param {express.Request} req - http request object
     *  @param {express.Response} res - http response object
     *  @param next {function}
     */
    export function index(req: express.Request, res: express.Response, next: Function) {

        var options = {
            root: path.join(__dirname, '../../client/'),
            reqdotfiles: 'deny',
            headers: {
                'x-timestamp': Date.now(),
                'x-sent': true
            }
        };
        res.sendFile('./index.html', options, (err: any) => {
            if (err) {
                console.log(err);
                res.status(err.status).end();
            }
        });
    };
}

export = Routes;
