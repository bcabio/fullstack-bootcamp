var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require('body-parser');
// var http = require('http');

var json = require('../p.json');
// app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/../'));

const PORT = 5000;

app.set('port', (process.env.PORT || 5000));

app.get("/", function(req, res){
  // res.send(json["EVGA_GTX_1080"]);
  // console.log(__dirname);
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/items", function(req, res){
	// res.send(json[req.query.id]);
	console.log(json["EVGA_GTX_1080"]);
	res.json(json["EVGA_GTX_1080"]);
});

// app.get("*", function(req,res){
// 	console.log(req.body);
//     console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
//     res.sendFile(path.join(__dirname, req.originalUrl));
// });

app.listen(app.get('port'),function(){
  console.log("node app is running at localhost:" + app.get('port'));
});
