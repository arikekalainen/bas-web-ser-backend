# bas-veb-ser-backend
Basic Web Service backend implementation.

NodeJs application with expressJs.

Provides currently one route to index.html.

## Prerequisites

1. Install nodeJs (get 0.12.x from nodejs.org)
1. Install gulp : *$ npm install -g gulp*

## Compilation
Local compilation can be done... will be used also for testing some day...
1. *$ npm install*
1. *$ gulp*

Compiled .js files are found under release -folder.

Note that resource files, e.g. index.html, are not currently found for local compilation.
So, to get Web service is up and running how it supposed to be run, please use *bas-web-ser-example-app*'s gulpfile for compilation

However, *bas-web-ser-example-app*'s gulpfile executes also this repo's gulpfile.

## TODO
* gulp task : release
 * compiles and prepares only "releasable" content
* Testing
 * gulp task : test
 * mock up index.html
 * mocha test framework
