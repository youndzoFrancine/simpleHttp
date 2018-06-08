/**
 * This script allows create a http server using the framework express.
 *
 * author : francine youndzo
 * date   : 5.06.2018
 */

// Load the accepts and express module to create an http server.
//const http = require('http');

const accepts = require('accepts');
const express = require('express');

const server = express();

server.get('/challenge-b/test', function (request, response) {
     var accept = accepts(request);
     var curDate = new Date();
     //var emailResponse = "francine.youndzokengne@heig-vd.ch";
  // the order of this list is significant; should be server preferred order
    switch(accept.type(['json', 'html', 'plain'])) {
        case 'json':
        response.writeHead(200, {'Content-Type': 'application/json'});
        var readDate = {
            heure : curDate.getHours()
        };
        var emailResponse = {
            email: "francine.youndzokengne@heig-vd.ch"
        };
        var date = JSON.stringify(readDate);
        var emailobject = JSON.stringify(emailResponse);
        //response.end(date);
        response.end(emailobject);
        break;
        case 'html':
        response.writeHead(200, {'Content-Type':'text/html'});
        response.end('The current date is <b>' + curDate.getHours() + '</b>');
            break;
        case 'plain':
        response.writeHead(200, {'Content-Type':'text/plain'});
        response.end('The current date is' + curDate.getHours());
        break;
        default:
        response.status(406).end('Not Acceptable');
        break;
    }

});

server.post('/',function(request,response){
    var body = '';
    request.on('data', function (data) {
        body += data;
        console.log("Partial body: " + body);
    });
    request.on('end', function () {
            console.log("Body: " + body);
            var jsonObject = JSON.parse(body);
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.end('post received');
    });

});

// Listen on port 8080, IP defaults to 127.0.0.1
server.listen(8080, function () {
  console.log('Server listening on port 8080!');
});


