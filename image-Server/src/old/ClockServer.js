/**
 * This script allows create a http server.
 *
 * author : Marie Lemdjo
 * date   : 25.05.2018
 */
// Load the http module to create an http server.
var http = require('http');
var url = require('url');
var accepts = require('accepts');


// Configure our HTTP server.
var server = http.createServer(function (request, response) {
	
	 var accept = accepts(request);
	 //urlString = new(server_adr);
	 //var q = url.parse(request.url, true);
	 var curDate = new Date();
	 var delta;
	 //var email = "marie.lemdjonzinke@heig-vd.ch";

 if(request.method == 'GET'){
	// the order of this list is significant; should be server preferred order 
	switch(accept.type(['json', 'html'])) {
		case 'json':
		response.writeHead(200, {'Content-Type': 'application/json'});
		var readDate = {
			heure : curDate.getHours()
		}
		var emailResponse = {
			email: "marie.lemdjonzinke@heig-vd.ch"
		}
		var date = JSON.stringify(readDate);
		var emailobject = JSON.stringify(emailResponse); 
		//response.end(date);
		response.end(emailobject);
		break;
		case 'html':
		response.writeHead(200, {'Content-Type':'text/html'});
		response.end('The current date is <b>' + curDate.getHours() + '</b>');
			break;
		default:
			// the fallback is text/plain, so no need to specify it above 
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end(curDate.getHours());
		break;
	}
 }
 if (request.method == 'POST'){
	console.log("POST");
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
       
 }
});


// Listen on port 8080, IP defaults to 127.0.0.1
server.listen(8080, function () {
  console.log('Server listening on port 8080!');
})
 

