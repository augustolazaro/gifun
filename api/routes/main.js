'use strict';
module.exports = function(app){
  var main = require('../controllers/main.js');

  // Routes
  app.route('/gifs').get(main.get_gif);
}
