var _ = require('lodash'),
	$ = require('jquery'),
	Parse = require('parse').Parse;

Parse.initialize("rAgoiRAf5xDfOIBYsb78caxCiCov2cYfw5eyxy94", "3aeUP7YkBkmWOjjfrSkJaHJNvKKm6zpxH8OF6AQv");

var GameScore = Parse.Object.extend("GameScore");
var gameScore = new GameScore();
 
gameScore.set("score", 1337);
gameScore.set("playerName", "Sean Plott");
gameScore.set("cheatMode", false);
 
gameScore.save(null, {
  success: function(gameScore) {
    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectId: ' + gameScore.id);
  },
  error: function(gameScore, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and description.
    alert('Failed to create new object, with error code: ' + error.description);
  }
});