// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require('fs')

// Sets up the Express App
var app = express();
var port = process.env.PORT || 3000;

var friends = require('./app/data/friends.js');


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.get("/api/friends", function(req, res) {
  res.json(friends)
});

app.post("/api/new", function(req, res) {
	var newFriend = req.body;
	console.log(newFriend);
	friends.push2arr(newFriend);
	
	

	});

app.listen(port, function() {
  console.log("App listening on PORT " + port);
});