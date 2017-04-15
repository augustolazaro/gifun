var express = require('express'), app = express(), port = process.env.PORT || 3000;
var routes = require('./api/routes/main.js');
routes(app);
app.listen(port);
console.log('Server started on: ' + port);
