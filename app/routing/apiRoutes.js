var friends = require('../data/friends.js');

module.exports = function(app) {

app.get("/api/friends", function(req, res) {
  res.json(friends)
});

app.post("/api/new", function(req, res) {
	var newFriend = req.body;
	var userScore = newFriend.score;
	
	function addScores(array) {
		return array.reduce(function(a,b){
			return parseInt(a) + parseInt(b);
		});
	}

	var friendTotalScores = []; 

	var userTotal = addScores(userScore);

	for (i=0; i < friends.length; i++) {
		friendTotalScores.push(addScores(friends[i].score));
	}

	var scoreDiff = friendTotalScores.map(function(element){
		return Math.abs(userTotal - element);
	});

	var matchIndex = scoreDiff.indexOf(Math.min.apply(null, scoreDiff));

	var match = {
		name: friends[matchIndex].name,
		photo: friends[matchIndex].photo,
	}

	friends.push2arr(newFriend);

	res.json(match);

	});

};