var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require('body-parser');

var json = require('../products.json');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/../'));

const PORT = 5000;

app.set('port', (process.env.PORT || 5000));

app.get("/", function(req, res){
  res.sendFile('index.html');
});

app.get("/items", function(req, res){
	res.json(json);
});

app.listen(app.get('port'),function(){
  console.log("node app is running at localhost:" + app.get('port'));
});
