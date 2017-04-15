'use strict';

var http = require('http');

exports.get_gif = function(req, res){
  var parsedData = "";
  var options = { host: 'api.giphy.com', path: '/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC' };
  http.get("http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC", function(res){
    res.setEncoding('utf-8');
    let response = "";
    res.on('data', function(chunk){
      response += chunk;
    });
    res.on('end', function(){
      parsedData = JSON.parse(response);
      console.log(parsedData);
    });
  }).end();
  res.json(parsedData);
};
