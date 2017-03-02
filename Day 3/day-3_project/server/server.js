var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var json = require('../products.json');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/../'));

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response){
	response.sendFile('index.html');
});

app.get('/isThisTheKrustyKrab', function(req, res){
	res.send('No this is Patrick');
});

app.get('/items', function(req, res){
	res.send('products.json');
});

app.listen(app.get('port'), function(){
	console.log('Node app is running at localhost:' + app.get('port'));
});