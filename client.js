var winston  = require('winston');
var {Loggly} = require('winston-loggly-bulk');
winston.add(new Loggly({
    token: "0528b37e-977a-44e7-99d5-2bb58d4189e7",
    subdomain: "https://facundo.loggly.com/",
    tags: ["Winston-NodeJS"],
    json: true
}));
winston.log('info', "Hello World from Node.js!");