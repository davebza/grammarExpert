/* This file is for the data objects and procedures to retrieve from those objects
for the English Day activity */

// this function shuffles arrays:
function shuffle(array) {
    let counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

var p2Object = {
	"questionsAndAnswers" : [{
		"question": "What does the sign say?<img src='images/pickFlowers.png' style='max-height: 120px;'>",
		"answers": ["Don’t pick the flowers.", "Keep quiet.", "Keep off the grass.", "No spitting."]
	}, {
		"question": "You must ____ at the bus stop.",
		"answers": ["line up", "sit still", "litter", "keep off the grass"]
	}, {
		"question": "You must wait ___ your turn in the computer room.",
		"answers": ["for", "on", "to", "at"]
	}, {
	    "question" : "What housework does Peter do?<img src='images/waterPlants.png' style='max-height: 120px;'>",
	    "answers" : ["He waters the plants.", "He sweeps the floor.", "He sets the table.", "He hangs up the washing."]
	}, {
	    "question" : "Which sentence is correct?",
	    "answers" : ["She folds the clothes.", "He fold the clothes.", "I folds the clothes.", "They folds the clothes."]
	}, {
	    "question" : "Sally helps at home every day. She is ___.",
	    "answers" : ["helpful", "honest", "polite", "lazy"]
	}, {
	    "question" : "Ben is polite. He ___.",
	    "answers" : ["says ‘please’ and ‘thank you’", "tells lies", "plays computer games", "pushes other boys"]
	}, {
	    "question" : "Tom ___ every day.",
	    "answers" : ["studies", "study", "studys", "studyes"]
	}],
	display : function() {
		//Get random number equal to length of array (number of Q&A pairs)
		var randomLimit = (this.questionsAndAnswers.length);
		var randomIndex = Math.floor(Math.random() * randomLimit);
		//get the question and the answer set:
		var currentQuestion = this.questionsAndAnswers[randomIndex].question;
		var currentAnswerArray = this.questionsAndAnswers[randomIndex].answers;
		var correctAnswer = currentAnswerArray[0];
		//copy the array and shuffle it for the randomness:
		var shuffledArray = currentAnswerArray.slice();
		shuffledArray = shuffle(shuffledArray);
		//Append the question to the DOM element:
		$('#question').append("<h1>"+currentQuestion+"</h1>");
		//make the radio buttons from the shuffled array:
		for (var i = 0; i< shuffledArray.length; i++){
			var baseRadioString = '<input type="radio" name="studentAnswer" value="%replaceThis%"> %replaceThis%';
			var currentOption = baseRadioString.replace("%replaceThis%", shuffledArray[i]);
			currentOption = currentOption.replace("%replaceThis%", shuffledArray[i]);
			$('#answer-radio').append("<h1>"+currentOption+"</h1>");
		}
        //Make a button to submit the form:
        $('.button-area').append('<button type="button" id="button-submit" class="btn btn-success btn-lg">OK! Let\'s check!</button>');
        //Check the answer submitted:
        $('button').click(function(){
            var studentInput = $("input[name='studentAnswer']:checked").val();
            //First, check if the form is valid:
            if (studentInput){
                //If yes, check the answer:
                p2Object.checkAnswer(studentInput, correctAnswer);
            }
        });
	}, checkAnswer : function(studentInput, correctAnswer) {
        if (studentInput === correctAnswer){
            $('#pictureFeedback').attr('src', 'images/correct.png');
            $('#button-submit').remove();
            $('.button-area').append('<button type="button" id="button-new-word" class="btn btn-primary btn-lg">I want a new question!</button>');
            $('#button-new-word').click(function(){
                $('#question').empty();
                $('#answer-radio').empty();
                $('#pictureFeedback').attr('src', 'images/question.png');
                $('#button-new-word').remove();
                p2Object.display();
            });
        } else {$('#pictureFeedback').attr('src', 'images/wrong.png');}
    }
}

var p5Object = {
	"questionsAndAnswers" : [{
		"question": "Ms. Chan _____________ a concert in England two years ago.",
		"answers": ["watched", "have watched", "has watched", "is watching"]
	}, {
		"question": "Mr and Mrs Chan __________ their favourite movie for two hours.",
		"answers": ["watched", "have watch", "have watched", "has watched"]
	}, {
		"question": "Maggie ___________ on stage since 1995.",
		"answers": ["has sung", "sang", "has sang", "sung"]
	}, {
	    "question" : "My classmate Susan ___________ a prefect for 3 months.",
	    "answers" : ["has been", "did", "has done", "became"]
	}, {
	    "question" : "Tom has been an animator ______ 1989.",
	    "answers" : ["since", "for", "in", "ago"]
	}, {
	    "question" : "Mum asked:'H______ you ______ your lunch yet?'",
	    "answers" : ["have...had", "did...have", "did...had", "have...have"]
	}, {
	    "question" : "Kelly won the best singer award ____ 2007.",
	    "answers" : ["in", "since", "for", "ago"]
	}, {
	    "question" : "Betty decided to become an athlete 24 years ______.",
	    "answers" : ["ago", "since", "for", "in"]
	}],
	display : function() {
		//Get random number equal to length of array (number of Q&A pairs)
		var randomLimit = (this.questionsAndAnswers.length);
		var randomIndex = Math.floor(Math.random() * randomLimit);
		//get the question and the answer set:
		var currentQuestion = this.questionsAndAnswers[randomIndex].question;
		var currentAnswerArray = this.questionsAndAnswers[randomIndex].answers;
		var correctAnswer = currentAnswerArray[0];
		//copy the array and shuffle it for the randomness:
		var shuffledArray = currentAnswerArray.slice();
		shuffledArray = shuffle(shuffledArray);
		//Append the question to the DOM element:
		$('#question').append("<h1>"+currentQuestion+"</h1>");
		//make the radio buttons from the shuffled array:
		for (var i = 0; i< shuffledArray.length; i++){
			var baseRadioString = '<input type="radio" name="studentAnswer" value="%replaceThis%"> %replaceThis%';
			var currentOption = baseRadioString.replace("%replaceThis%", shuffledArray[i]);
			currentOption = currentOption.replace("%replaceThis%", shuffledArray[i]);
			$('#answer-radio').append("<h1>"+currentOption+"</h1>");
		}
        //Make a button to submit the form:
        $('.button-area').append('<button type="button" id="button-submit" class="btn btn-success btn-lg">OK! Let\'s check!</button>');
        //Check the answer submitted:
        $('button').click(function(){
            var studentInput = $("input[name='studentAnswer']:checked").val();
            //First, check if the form is valid:
            if (studentInput){
                //If yes, check the answer:
                p5Object.checkAnswer(studentInput, correctAnswer);
            }
        });
	}, checkAnswer : function(studentInput, correctAnswer) {
        if (studentInput === correctAnswer){
            $('#pictureFeedback').attr('src', 'images/correct.png');
            $('#button-submit').remove();
            $('.button-area').append('<button type="button" id="button-new-word" class="btn btn-primary btn-lg">I want a new question!</button>');
            $('#button-new-word').click(function(){
                $('#question').empty();
                $('#answer-radio').empty();
                $('#pictureFeedback').attr('src', 'images/question.png');
                $('#button-new-word').remove();
                p5Object.display();
            });
        } else {$('#pictureFeedback').attr('src', 'images/wrong.png');}
    }
}
//Run the display function for the correct year group:
//p2Object.display();

//add event listeners for the buttons, to call the relevant display functio for the objects:
$('#button-p2').click(function(){
    $('#question').empty();
    $('#answer-radio').empty();
    $('#pictureFeedback').attr('src', 'images/question.png');
    $('#button-new-word').remove();
    $('#button-submit').remove();
    p2Object.display();
});
$('#button-p5').click(function(){
    $('#question').empty();
    $('#answer-radio').empty();
    $('#pictureFeedback').attr('src', 'images/question.png');
    $('#button-new-word').remove();
    $('#button-submit').remove();
    p5Object.display();
});
