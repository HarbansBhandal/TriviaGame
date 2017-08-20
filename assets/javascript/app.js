$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};



var correct = 0;
var wrong = 0;
var q1 = {
	question : 'What was the name of Tims Show?',
	possibleAnswers : ['A. Home Improvement',
				 'B. Tim Allen Show',
				 'C. Tool Time',
				 'D. Larry King Live'],
	flags : [false, false, true, false],
	answer : 'C. Tool Time'
};

var q2 = {
	question: 'How many kids did Tim have?',
	possibleAnswers: ['A. 2',
				 'B. 3',
				 'C. 4',
				 'D. 0'],
	flags : [false, true, false, false],
	answer : 'B. 2'
};

var q3 = {
	question : 'What is Tims wifes name?',
	possibleAnswers : ['A. Ashley',
				 'B. Jill',
				 'C. Emily',
				 'D. Ulga'],
	flags : [false, true, false, false],
	answer : 'B. Jill'
};

var q4 = {
	question : 'What was Tims partner on his show named?',
	possibleAnswers : ['A. Al',
				 'B. Tim',
				 'C. Bob',
				 'D. Eugene'],
	flags : [true, false, false, false],
	answer : 'A. Al'
};

var q5 = {
	question : 'What was Tims signature reponse?',
	possibleAnswers : ['A. A Laugh',
				 'B. A Grunt',
				 'C. A Dance',
				 'D. An Insult'],
	flags : [false, true, false, false],
	answer : 'B. A Grunt'
};

var q6 = {
	question : 'What was Tims oldest sons name?',
	possibleAnswers : ['A. Brad',
				 'B. Al',
				 'C. Wilson',
				 'D. Timothy'],
	flags : [true, false, false, false],
	answer : 'A. Brad'
};

var q7 = {
	question : 'Who did Tim often goto for advice?',
	possibleAnswers : ['A. His Father',
				 'B. His Wife',
				 'C. His Neighbor',
				 'D. Google'],
	flags : [false, false, true, false],
	answer : 'C. His Neighbor'
};

var q8 = {
	question : 'What year did Home Improvement first air?',
	possibleAnswers : ['A. 1990',
				 'B. 1991',
				 'C. 1998',
				 'D. 1902'],
	flags : [false, true, false, false],
	answer : 'B. 1991'
};

var q9 = {
	question : 'What was Tims nickname on his show?',
	possibleAnswers : ['A. The Toolinator',
				 'B. Mr Stealyotools',
				 'C. Tim Tool Taylor ',
				 'D. Tim The Tool Man Taylor'],
	flags : [false, false, false, true],
	answer : 'D. Tim The Tool Man Taylor'
};

var q10 = {
	question : 'What is the name of Tims Neighbor?',
	possibleAnswers : ['A. Dinkleburg',
				  'B. Wilson W. Wilson',
				  'C. Doug Dimmadome',
				  'D. Tony Stark'],
	flags : [false, true, false, false],
	answer : 'B. Wilson W. Wilson'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}

//----------------------------------------

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


//$('#start').click(countdownTimer.start);
});