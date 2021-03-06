//creer serveur http
var http = require('http');
var express = require('express');
var app = express();
var mongo = require('./mongo.js')

//récuperation de la var d'env clever
var uri = process.env.MONGODB_ADDON_URI;
var dbName = process.env.MONGODB_ADDON_DB;


//http prends express et fait sa tambouille

var http = require ('http').Server(app);

var bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/hello', function(req, res){
	var coll = mongo.collection('users');
	coll.find().toArray(function (err, res2){
		res.end(res2);
		return;
	});
});

app.post('/hello', function(req, res){
        var name = req.param('name', null);
        var coll = mongo.collection('users');
	coll.insert({name:name}, function(err, res){
	if(err){
		console.log(err)
	} else {
		console.log("added user " + name);
		}
	})
});

mongo.connect(uri, dbName, function()
{
	console.log("MongoDB connected");
	http.listen(8080, () => 
	{
        console.log("server started");
	});

});










/*
//sans express
const server = http.createServer((req, res) => {
        res.statuscode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World');
});

server.listen (8080, '127.0.0.1', () => {
	console.log("server started");
});
*/
