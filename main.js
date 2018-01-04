//creer serveur http
var http = require('http');
var express = require('express');
var app = express();

//http prends express et fait sa tambouille

var http = require ('http').Server(app);
app.get('/hello', function(req, res){
	res.end('Salut tout le monde\n');
});
http.listen(8080, () => {
        console.log("server started");
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
