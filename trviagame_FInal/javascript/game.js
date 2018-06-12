
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



//this function is only used to start the game the first time, not to play again
function start() {

	//put start game button for user to click
	var startBtn = $("<button>");
	startBtn.addClass("btn btn-danger");
	startBtn.text("Ticket");
	startBtn.click(function() { renderQuestion();});
	$(".start-button").append(startBtn);

}

//this puts question and multiple choice answer buttons to html
function renderQuestion() {
	
	//empty out html to add new information
    $(".start-button").empty();
    $(".correct-answer").empty();
    $(".question").html(quesAns.questArray[index].question);
    console.log(quesAns.questArray[index].question);
    $(".multiplechoice").empty();
    $(".incorrect-answer").empty();
    $(".image").empty();

    //to loop through all possible answers, puts them into buttons and append them to the browser
    for (var i=0; i<quesAns.questArray[index].answers.length; i++) {

    	var answerBtn = $("<button>");
    	answerBtn.addClass("btn btn-dark choice");
    	answerBtn.attr("data-answer", quesAns.questArray[index].answers[i]);
    	answerBtn.text(quesAns.questArray[index].answers[i]);
    	$(".multiplechoice").append(answerBtn);
    	console.log(quesAns.questArray[index].answers[i]);

    };

    //starts countdown
    timer();
    console.log(quesAns.questArray[index].answerKey);

}

//countdown function, gives user 15 seconds to answer the question 
function timer() {
	number = 15;
	intervalId = setInterval(decrement, 1000);
	$(".timer").html("Time remaining: " + number);

}

//decrement/to decrease countdown number and it shows on broswer
function decrement() {
	//  Decrease number by one.
	number--;

	//  Show the number in the #show-number tag.
	$(".timer").html("Time remaining: " + number);


	//  Once number hits zero...
	if (number === 0) {
		
		//creating a stop function did not work so put clearIntervals where I needed them
		//else infinite loops were created in the functions
		
		clearInterval(intervalId);
		
		//  Alert the user that time is up.
		$(".timer").html("Time is up!");
		$(".multiplechoice").empty();
		$(".correct-answer").html("Sorry: " + quesAns.questArray[index].answerKey);
		$(".image").html("<img src=" + quesAns.questArray[index].img + " width='400px'>");
		console.log(quesAns.questArray[index].img);
		
		index++
		
		//this allows user to see correct answer before continuing the game and rendering another question
		setTimeout(continueGame, 1000 * 3);

	}
}

//this function checks to see if all the questions have been asked, if yes it starts endGame function, if not it goes to render the next question
function  continueGame() {	
	
	//had stop() here before but it created a loop
	clearInterval(intervalId);
	
	// if there are no more questions, stop the function
	if (index === quesAns.questArray.length) {
		endGame();
	}

	// if there are more questions, countinue game and render another question/possible anwers to html
	else {
		renderQuestion();
	}
}

//created endGame function to empty out html, let the user know their count of correct and incorrect answers and give an option to play again
function endGame() {
	
	//empty out html
	$(".timer").empty();
	$(".score").empty();
	$(".question").empty();
	$(".multiplechoice").empty();
	$(".correct-answer").empty();
	$(".image").empty();

	//give user there incorrect/correct answer count
	// $(".question").html("Thanks for playing!");
	// $(".correct-answer").html("You had " + correctScore + " correct answers.");
	// $(".incorrect-answer").html("You had " + incorrectScore + " incorrect answers.");
	
	//needed to reset index here if the user chose to restart game
	index = 0;
	
	//play again button
	var startBtn = $("<button>");
	startBtn.addClass("btn btn-danger");
	startBtn.text("Play Again");
	startBtn.click(function() { renderQuestion();});
	$(".start-button").append(startBtn);
}

//=============Main Game played here==============
//start game function
start();

//create on-click event on the multiple choice buttons
$(".multiplechoice").on("click", ".choice", function(event) {

	//grab the value of button clicked and give it the name answerCheck
	var answerCheck = $(this).text();
	console.log(answerCheck);
	console.log(quesAns.questArray[index].answerKey);

	//checks to see if user answer matches correct answer from answerKey
	//adds to correctScore counter, add to index to move to next question, and continue game
	if (answerCheck === quesAns.questArray[index].answerKey) {
		// alert("Correct!");
		correctScore++
		$(".correct-answer").html("Correct.  Print that take!");
		$(".multiplechoice").empty();
		$(".timer").empty();
		clearInterval(intervalId);


	    //add image to page of movie===========not working yet
	    // var image = $("<img>");
    	// image.addClass("image");
    	// image.attr("src", quesAns.questArray[index].image);
    	// $(".image-source").html(image);
//is this a way to do it?=================================
		$(".image").html("<img src=" + quesAns.questArray[index].img + " width='400px'>");
		console.log(quesAns.questArray[index].img);
		index++
	    setTimeout(continueGame, 1000 * 3);


	}
	// If it is the wrong answer let them know correct answer, log to incorrectScore counter, add to index to move to next question, and continue game
	else {
		// alert("Wrong!");
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
