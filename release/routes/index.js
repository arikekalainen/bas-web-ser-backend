/**
 * Basic Web Service : backend
 * Routes : index.ts
 * @module Routes
 * @author Ari Kekalainen <ari.kekalainen@gmail.com>
 * @version 0.0.1
 */
var path = require('path');
var Routes;
(function (Routes) {
    function index(req, res, next) {
        var options = {
            root: path.join(__dirname, '../../client/'),
            reqdotfiles: 'deny',
            headers: {
                'x-timestamp': Date.now(),
                'x-sent': true
            }
        };
        res.sendFile('./index.html', options, function (err) {
            if (err) {
                console.log(err);
                res.status(err.status).end();
            }
        });
    }
    Routes.index = index;
    ;
})(Routes || (Routes = {}));
module.exports = Routes;
