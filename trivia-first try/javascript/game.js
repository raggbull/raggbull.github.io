$(document).ready(function() {
//     var count=30;

// var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

// function timer()
// {
//   count=count-1;
//   if (count <= 0)
//   {
//      clearInterval(counter);
//      //counter ended, do something here
//      return;
//   }

//   //Do code for showing the number of seconds here
//   document.getElementById("timer").innerHTML=count + " secs";
 })

var timer = setTimeout(nextQuestion, 5000);
function nextQuestion(){
    console.log("Next Question")
}
$("#start-button").on("click", function() {
    $(this).hide();
    newGame();
    showTimer();
    
})

// Reset Button
$("#restartBtn").on("click", function() {
    $(this).hide();
    newGame();
})
// countdown();
// //clicking an answer will pause the time and setup answerPage
// $('.thisChoice').on('click',function(){
//     userSelect = $(this).data('index');
//     clearInterval(time);
//     answerPage();
// });

// function countdown(){
//     seconds = 30;
//     $('#timeLeft').html('<h2>Time Remaining: ' + seconds + '</h2>');
//     answered = true;
//     //sets timer to go down
//     time = setInterval(showCountdown, 1000);
// }

// function showCountdown(){
//     seconds--;
//     $('#timeLeft').html('<h2>Time Remaining: ' + seconds + '</h2>');
//     if(seconds < 1){
//         clearInterval(time);
//         answered = false;
//         answerPage();
//     }
// }


var startTime = 0;
var currentTime = 0;

 //Timer
 var timerNumber = 30;
 var intervalId;
 
 //when the question is answered go to next question and start timer again
 
 // Fucntion runs the timer by decrements of 1 second when pages load
 function timer () {
	intervalId = setInterval(count, 10);
}

// This runs the timer for each question and keeps track of the score via the variable time
function count () {
	if (time === 0) { clearInterval(intervalId);
					  unanswered++;
					  timerExp = 1; 
					  checkAnswer(); }
	else if (time % 100 === 0) { $("#timer").html(time/100); }
	time--;
}
function submitAnswers(){
	var total = 5;
	var score = 0;
	
	// Get User Input
	var q1 = document.forms["quiz"]["q1"].value;
	var q2 = document.forms["quiz"]["q2"].value;
	var q3 = document.forms["quiz"]["q3"].value;
	var q4 = document.forms["quiz"]["q4"].value;
	var q5 = document.forms["quiz"]["q5"].value;
	
	// Validation
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == null || eval('q'+i) == ''){
			alert('You missed question '+ i);
			return false;
		}
	}
	
	// Set Correct Answers
	var answers = ["a","b","c","a","d"];
	
	// Check Answers
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == answers[i - 1]){
			score++;
		}
	}
	
	// Display Results
	var results = document.getElementById('results');
	results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
	alert('You scored '+score+' out of ' +total);
	
	return false;}
