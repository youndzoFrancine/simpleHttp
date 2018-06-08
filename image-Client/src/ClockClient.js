/**
 * This script allows create a http client.
 *
 * author : Youndzo
 * date   :04.06.2018
 * source : http://stackabuse.com/the-node-js-request-module/
 */
const request = require('request');

const getOptions = {  
    url: 'http://192.168.99.100:8080',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8' //,
        //'User-Agent': 'my-reddit-client'
    }
};

request(getOptions, function(err, res, body) {  
    let json = JSON.parse(body);
	console.log('methode get');
    console.log(json);
});

//---------------------------------------------------------------------------

request.post({
  headers: {'content-type' : 'application/json'},
  url:     'http://192.168.99.100:8080',
  json: {
      email: 'francine.youndzokengne@heig-vd.ch',
      password: 'myPassword'
  }
}, function(error, response, body){
  console.log('methode post');
  console.log(body);
});

//request.post(options, callback); 


console.log('client');

