var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
nextSequence(buttonColors, gamePattern);

function nextSequence(buttonColors, gamePattern) {
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColor);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
