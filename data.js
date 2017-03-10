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

var p1Object = {
	"questionsAndAnswers" : [{
		"question": "Mr Man is my class teacher. ____ is nice.",
		"answers": ["He", "She", "It", "They"]
	}, {
        "question": "Miss Tam is my English teacher. _____ is beautiful.",
		"answers": ["She", "We", "He", "They"]
	}, {
        "question": "Peter is my friend. ____ is nine years old.",
		"answers": ["He", "They", "She", "It"]
	}, {
        "question": "Sally is my classmate. ____ is helpful.",
		"answers": ["She", "It", "We", "He"]
	}, {
        "question": "Sandy and Amy are good friends. ______ are in Class 3B. ",
		"answers": ["They", "She", "We", "I"]
	}, {
        "question": "Peter is my classmate. _______ are in Class 1B. ",
		"answers": ["We", "He", "I", "They"]
	}, {
        "question": "My father is a Chinese teacher. ______ is kind.",
		"answers": ["He", "They", "She", "I"]
	}, {
        "question": "Amy is my sister. _____ is naughty. ",
		"answers": ["She ", "He", "It", "We"]
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
                p1Object.checkAnswer(studentInput, correctAnswer);
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
                p1Object.display();
            });
        } else {$('#pictureFeedback').attr('src', 'images/wrong.png');}
    }
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

var p3Object= {
	"questionsAndAnswers" : [{
		"question": "Which one is NOT a competition in the school Sports Day?",
		"answers": ["marathon", "4X100-relay", "long jump", "60-metre race"]
	}, {
		"question": "What do we call the person who won the 2nd place in a competition?",
		"answers": ["first runner-up", "second runner-up", "champion", "seconder"]
	}, {
		"question": "Which one is NOT an activity played in the Games Day?",
		"answers": ["Chiness Chess", "tug-of-war", "sack race", "egg-and-spoon"]
	}, {
	    "question" : "What can you do in a school fun fair?",
	    "answers" : ["eat candy floss", "dive in to the pool", "play badminton", "do revisions"]
	}, {
	    "question" : "I should ______ because the exam is coming.",
	    "answers" : ["do revision", "perform on stage", "have a picnic", "play computer games"]
	}, {
	    "question" : "How will people prepare for the Talent Show?",
	    "answers" : ["dress up for their performance", "buy sweets", "eat popcorn", "join the long jump competition"]
	}, {
	    "question" : "Teachers usually ___ in the Open Day.",
	    "answers" : ["display some good work", "do exams", "buy trainers", "have afternoon tea"]
	}, {
	    "question" : "Singers ______ in the singing contest.",
	    "answers" : ["perform on stage", "eat chocolate", "watch a film", "announce the results"]
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
                p3Object.checkAnswer(studentInput, correctAnswer);
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
                p3Object.display();
            });
        } else {$('#pictureFeedback').attr('src', 'images/wrong.png');}
    }
}

var p4Object = {
	"questionsAndAnswers" : [{
		"question": "Where can you watch the birds?",
		"answers": ["Mai Po", "Tsim Sha Tsui", "The Peak", "Wan Chai"]
	}, {
		"question": "I want to eat seafood. Where can I go ?",
		"answers": ["Aberdeen", "Tsim Sha Tsui", "Lantau", "Mai Po"]
	}, {
		"question": "Where is Hong Kong Wetland Park?",
		"answers": ["in Tin Shui Wai", "in Tuen Mun", "in Tsuen Wan", "in Mongkok"]
	}, {
	    "question" : "Where is Aberdeen?",
	    "answers" : ["on Hong Kong Island", "in Kowloon", "in the New Territories", "on the outlying islands"]
	}, {
	    "question" : "What can we do on the Avenue of Stars?",
	    "answers" : ["take photos", "watch the birds", "eat seafood", "ride on the cable car"]
	}, {
	    "question" : " Where is Disneyland?",
	    "answers" : ["on Lantau Island", "in Tsim Sha Tsui", "in Sai Kung", "in Yuen Long"]
	}, {
	    "question" : "What can people do in Sai Kung?",
	    "answers" : ["do water sports", "visit the theme park", "ride on the cable car", "go on rides"]
	}, {
	    "question" : "Which of the following places is in Kowloon?",
	    "answers" : ["Tsim Sha Tsui", "Sai Kung", "Aberdeen", "The Peak"]
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
                p4Object.checkAnswer(studentInput, correctAnswer);
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
                p4Object.display();
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

var p6Object = {
	"questionsAndAnswers" : [{
		"question": "I have an eye but cannot see. What am I?",
		"answers": ["A needle", "An owl", "A boy", "A clock"]
	}, {
		"question": "I have a green house. Inside my green house, I have a white house. Inside my white house, I have a red house. Inside my red  house I have a lot of children. What am I?",
		"answers": ["A watermelon", "A building", "A mother", "A bee"]
	}, {
		"question": "If you have me, you want to share me. If you share me, you haven’t got me. What am I?",
		"answers": ["A secret", "Air", "A ring", "A watch"]
	}, {
	    "question" : "You feed me and I live. If you give me a drink then I'll die. What am I?",
	    "answers" : ["Fire", "A puppy", "A baby", "A shell"]
	}, {
	    "question" : "Take off my skin- I won’t cry, but you will. What am I?",
	    "answers" : ["An onion", "A pear", "A lemon", "A banana"]
	}, {
	    "question" : "Everyone in the world breaks every time they speak. What am I?",
	    "answers" : ["Silence", "A window", "A promise", "A rule"]
	}, {
	    "question" : "You always make more of us, but leave more of us behind you. The more you make, the more you leave behind. What am I?",
	    "answers" : ["Footprints", "Rubbish", "Paper", "Sand"]
	}, {
	    "question" : "I have a face and two hands but I have no arms or legs. What am I?",
	    "answers" : ["A clock", "A hammer", "A dog", "A boy"]
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
                p6Object.checkAnswer(studentInput, correctAnswer);
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
                p6Object.display();
            });
        } else {$('#pictureFeedback').attr('src', 'images/wrong.png');}
    }
}

//add event listeners for the buttons, to call the relevant display functio for the objects:
$('#button-p1').click(function(){
    $('#question').empty();
    $('#answer-radio').empty();
    $('#pictureFeedback').attr('src', 'images/question.png');
    $('#button-new-word').remove();
    $('#button-submit').remove();
    p1Object.display();
});
$('#button-p2').click(function(){
    $('#question').empty();
    $('#answer-radio').empty();
    $('#pictureFeedback').attr('src', 'images/question.png');
    $('#button-new-word').remove();
    $('#button-submit').remove();
    p2Object.display();
});
$('#button-p3').click(function(){
    $('#question').empty();
    $('#answer-radio').empty();
    $('#pictureFeedback').attr('src', 'images/question.png');
    $('#button-new-word').remove();
    $('#button-submit').remove();
    p3Object.display();
});
$('#button-p4').click(function(){
    $('#question').empty();
    $('#answer-radio').empty();
    $('#pictureFeedback').attr('src', 'images/question.png');
    $('#button-new-word').remove();
    $('#button-submit').remove();
    p4Object.display();
});
$('#button-p5').click(function(){
    $('#question').empty();
    $('#answer-radio').empty();
    $('#pictureFeedback').attr('src', 'images/question.png');
    $('#button-new-word').remove();
    $('#button-submit').remove();
    p5Object.display();
});
$('#button-p6').click(function(){
    $('#question').empty();
    $('#answer-radio').empty();
    $('#pictureFeedback').attr('src', 'images/question.png');
    $('#button-new-word').remove();
    $('#button-submit').remove();
    p6Object.display();
});
