var bodyParser     =        require("body-parser");
var express = require('express');
var app = express();
var cors = require('cors')
app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(bodyParser.json());

  var auth =require('./middleWares/auth');

var routes = require('./routes'); //importing route
app.use(auth);
routes(app);

var server = app.listen(8085, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("TbseAPI listening at http://%s:%s", host, port)
})