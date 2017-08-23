$(document).ready(function() {

  var magicEightBall = {};
  magicEightBall.listOfAnswers = ["It is decidedly so", "As I see it, yes", "Absolutely!", "You may rely on it", "Signs point to yes", "Yes", "Ask again later", "Concentrate and ask again", "Reply hazy, try again", "Don't count on it", "Outlook not so good", "Very doubtful", "My sources say no", "No", "In your dreams"];
  $("#answer").hide();


  magicEightBall.foresee = function(question) {
    $("#answer").hide();
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
    setTimeout(
      function() {
        question = prompt("What would you like to know? Please ask a yes/no question.")
        $("#8ball").effect( "shake" );
        var randomNumber = Math.random();
        var randomNumberArray = randomNumber * magicEightBall.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberArray);
        var randomAnswer = magicEightBall.listOfAnswers[randomIndex];
        console.log(question);
        console.log(randomAnswer);
        $("#answer").text( randomAnswer );
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
        $("#answer").fadeIn(4000)
      }, 500);
    }
  $("#questionButton").click( magicEightBall.foresee );

});
