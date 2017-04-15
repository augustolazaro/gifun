var http = require('http');
exports.getGif = function(keywords, callback){
  http.get("http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC", function(res){
    res.setEncoding('utf-8');
    let data = [];
    res.on('data', function(chunk){
      data.push(chunk);
    });
    res.on('end', function(){
      callback(data.join(''));
    });
  }).end();
}
