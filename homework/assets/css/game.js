$(document).ready(function() {


    var randomNumber = Math.floor((Math.random() * 101) + 19) 
    var number1 = Math.floor((Math.random() * 11) + 1);
    var number2 = Math.floor((Math.random() * 11) + 1);
    var number3 = Math.floor((Math.random() * 11) + 1);
    var numumb4 = Math.floor((Math.random() * 11) + 1);//now working
  
    $('#number').text(randomNumber); 
  
    var wins = 0;
    var losses = 0;
    var totalScore = 0; 
    $('#wins').text("Wins: " + wins);
    $('#losses').text("Losses: " + losses);
  
  
    function win() {
        alert("Congrats! Your the big Winner!!!");
        wins++;
        $('#wins').text("Wins: " + wins);
        reset()
  
    }
  
    function lose() {
        alert("You lose! Brush up on your addition skills!");
        losses++;
        $('#losses').text("Losses: " + losses);
        reset()
  
  
    }
  
    $('#green').on('click', function() {
        totalScore = totalScore + number1;
        console.log("New totalScore= " + totalScore);
        $('#total').text(totalScore);
       
        if (totalScore == randomNumber) {
            win();
        } else if (totalScore > randomNumber) {
            lose();
        }
    })
    $('#grey').on('click', function() {
        totalScore = totalScore + number2;
        console.log("New totalScore= " + totalScore);
        $('#total').text(totalScore);
       
        if (totalScore == randomNumber) {
            win();
        } else if (totalScore > randomNumber) {
            lose();
        }
    })
    $('#clear').on('click', function() {
        totalScore = totalScore + number3;
        console.log("New totalScore= " + totalScore);
        $('#total').text(totalScore);
        
        if (totalScore == randomNumber) {
            win();
        } else if (totalScore > randomNumber) {
            lose();
        }
    })
    $('#red').on('click', function() {
        totalScore = totalScore + number3;
        console.log("New totalScore= " + totalScore);
        $('#total').text(totalScore);
     
        if (totalScore == randomNumber) {
            win();
        } else if (totalScore > randomNumber) {
            lose();
        }
    })
  
    function reset() {
        var randomNumber = Math.floor((Math.random() * 101) + 19);
        var numumber1 = Math.floor((Math.random() * 11) + 1);
        var numumber2 = Math.floor((Math.random() * 11) + 1);
        var numumber3 = Math.floor((Math.random() * 11) + 1);
        var numumber4 = Math.floor((Math.random() * 11) + 1);
        totalScore = 0;
        $('#total').text(totalScore);
        $('#number').text(randomNumber);
  
    };
  
  
  
  });