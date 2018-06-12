

var quesAns = {
	questArray: [{
		question: "Who won best director for The Departed?",
		answers: ["Martin Scorsese","Steven Spielberg","Paul Thomas Anderson","George Lucas"],
		answerKey: "Martin Scorsese",

	}, {
		question: "Who directed Mad Max: Fury Road?",
		answers: ["Martin Scorsese","Joe Hoffmann","Rob Marshal","George Miller"],
		answerKey: "George Miller",

	}, {
		question: "Who directed Punch Drunk Love?",
		answers: ["David Lynch","Steven Spielberg","Paul Thomas Anderson","George Lucas"],
		answerKey: "Paul Thomas Anderson",
	
	}, {
		question: "Who directed Bary Lyndon?",
		answers: ["Stanley Kubrick","Ang Lee","Sam Mendes","Joe Hoffmann"],
		answerKey: "Stanley Kubrick",
	}, {
		question: "Who directed Avengers: Age of Ultron?",
		answers:["Martin Scorsese","Joss Wheaton","Sam Mendes","George Lucas"],
		answerKey: "Joss Wheaton",

	}, {

	}]
};


var index = 0;
var incorrectScore = 0;
var correctScore = 0;
var number = 30;
var intervalId;




function start() {

	
	var startBtn = $("<button>");
	startBtn.addClass("btn btn-danger");
	startBtn.text("Ticket");
	startBtn.click(function() { renderQuestion();});
	$(".start-button").append(startBtn);

}


function renderQuestion() {
	
    $(".start-button").empty();
    $(".correct-answer").empty();
    $(".question").html(quesAns.questArray[index].question);
    console.log(quesAns.questArray[index].question);
    $(".multiplechoice").empty();
    $(".incorrect-answer").empty();
    $(".image").empty();

   
    for (var i=0; i<quesAns.questArray[index].answers.length; i++) {

    	var answerBtn = $("<button>");
    	answerBtn.addClass("btn btn-dark choice");
    	answerBtn.attr("data-answer", quesAns.questArray[index].answers[i]);
    	answerBtn.text(quesAns.questArray[index].answers[i]);
    	$(".multiplechoice").append(answerBtn);
    	console.log(quesAns.questArray[index].answers[i]);

    };

  
    timer();
    console.log(quesAns.questArray[index].answerKey);

}


function timer() {
	number = 15;
	intervalId = setInterval(decrement, 1000);
	$(".timer").html("Time remaining: " + number);

}


function decrement() {

	number--;

	
	$(".timer").html("Time remaining: " + number);


	if (number === 0) {
		
		
		clearInterval(intervalId);
		
	
		$(".timer").html("Time is up!");
		$(".multiplechoice").empty();
		$(".correct-answer").html("Sorry: " + quesAns.questArray[index].answerKey);
		$(".image").html("<img src=" + quesAns.questArray[index].img + " width='400px'>");
		console.log(quesAns.questArray[index].img);
		
		index++
		
		
		setTimeout(continueGame, 1000 * 3);

	}
}


function  continueGame() {	
	
	
	clearInterval(intervalId);
	

	if (index === quesAns.questArray.length) {
		endGame();
	}

	
	else {
		renderQuestion();
	}
}

function endGame() {
	

	$(".timer").empty();
	$(".score").empty();
	$(".question").empty();
	$(".multiplechoice").empty();
	$(".correct-answer").empty();
	$(".image").empty();

	
	index = 0;
	

	var startBtn = $("<button>");
	startBtn.addClass("btn btn-danger");
	startBtn.text("Play Again");
	startBtn.click(function() { renderQuestion();});
	$(".start-button").append(startBtn);
}

start();


$(".multiplechoice").on("click", ".choice", function(event) {

	
	var answerCheck = $(this).text();
	console.log(answerCheck);
	console.log(quesAns.questArray[index].answerKey);

	
	if (answerCheck === quesAns.questArray[index].answerKey) {
		correctScore++
		$(".correct-answer").html("Correct.  Print that take!");
		$(".multiplechoice").empty();
		$(".timer").empty();
		clearInterval(intervalId);



		$(".image").html("<img src=" + quesAns.questArray[index].img + " width='400px'>");
		console.log(quesAns.questArray[index].img);
		index++
	    setTimeout(continueGame, 1000 * 3);


	}
	
	else {
	
		$(".correct-answer").html("Sorry it was: " + quesAns.questArray[index].answerKey);
		$(".multiplechoice").empty();
		$(".timer").empty();
		incorrectScore++
		clearInterval(intervalId);
		$(".image").html("<img src=" + quesAns.questArray[index].img + " width='400px'>");
		console.log(quesAns.questArray[index].img);
		index++
		setTimeout(continueGame, 1000 * 3);
		
	}
})

// Just ran out of time-on Wed I will make this work