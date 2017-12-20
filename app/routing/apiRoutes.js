var friends = require('../data/friends.js');

module.exports = function(app) {

app.get("/api/friends", function(req, res) {
  res.json(friends)
});

app.post("/api/new", function(req, res) {
	var newFriend = req.body;
	var userScore = newFriend.score;
	//save new user in variables

	//add up user scores
	function addScores(array) {
		return array.reduce(function(a,b){
			return parseInt(a) + parseInt(b);
		});
	}
	//intialize variables
	var friendTotalScores = []; 

	//call total function
	var userTotal = addScores(userScore);

	//push existing users to friendTotalScores array
	for (i=0; i < friends.length; i++) {
		friendTotalScores.push(addScores(friends[i].score));
	}
	//find difference of each user compared to new friend
	var scoreDiff = friendTotalScores.map(function(element){
		return Math.abs(userTotal - element);
	});

	//find the index of the best match
	var matchIndex = scoreDiff.indexOf(Math.min.apply(null, scoreDiff));

	//create match object
	var match = {
		name: friends[matchIndex].name,
		photo: friends[matchIndex].photo,
	}
	//push new friend to array of objects
	friends.push2arr(newFriend);

	//send match object back
	res.json(match);

	});

};