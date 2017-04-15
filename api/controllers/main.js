'use strict';

var http = require('http');
var giphy = require('../lib/Giphy');

exports.get_gif = function(req, res){
  giphy.getGif("", function(response){
    response = JSON.parse(response);
    let index = Math.floor(Math.random()*response['data'].length);
    res.json(response['data'][index]);
  });
};
