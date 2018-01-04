//creer serveur http
var http = require('http');
var express = require('express');
var app = express();
var mongo = require('./mongo.js')

//récuperation de la var d'env clever
var uri = process.env.MONGODB_ADDON_URI;

//http prends express et fait sa tambouille

var http = require ('http').Server(app);
app.get('/hello', function(req, res){
	var coll = mongo.collection('users');
	coll.find().toArray(function (err, res){
	res.end(res);
	return;
	});
	res.end('Salut tout le monde\n');
});

app.post('/hello', function(req, res){
        var msg = req.body.name;
        var coll = mongo.collection('users);
	coll.insert({name:name}, function(err, res){
	if(err){
		console.log(err)
	} else {
		console.log("added user " + name);
		}
	})
});

mongo.connect(uri, function()
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
