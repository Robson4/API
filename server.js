/** creating the server */

var http = require('http');
var app = require('./config/express');

http.createServer(app).listen(3000, function(){
    console.log('running')/**console records that the server is working/running */
})
