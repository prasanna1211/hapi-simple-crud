// Include Hapi package
var Hapi = require('hapi');

// Create Server Object
var server = new Hapi.Server();

// Define PORT number
server.connection({port: 7002});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
