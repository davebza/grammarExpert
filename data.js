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
	    "question" : "Mum asked '______ you ______ your lunch yet?'",
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
		var randomIndex = Math.floor(Math.random()* randomLimit);
		//get the question and the answer set:
		var currentQuestion = this.questionsAndAnswers[randomIndex].question;
		var currentAnswerArray = this.questionsAndAnswers[randomIndex].answers;
		var correctAnswer = currentAnswerArray[0];
		//copy the array and shuffle it for the randomness:
		var shuffledArray = currentAnswerArray.slice();
		shuffledArray = shuffle(shuffledArray);
		//Append the question to the DOM element:
		$('#question').append(currentQuestion);
		//make the radio buttons from the shuffled array:
		for (var i = 0; i< shuffledArray.length; i++){
			var baseRadioString = '<input type="radio" name="studentAnswer" value="%replaceThis%"> %replaceThis%';
			var currentOption = baseRadioString.replace("%replaceThis%", shuffledArray[i]);
			currentOption = currentOption.replace("%replaceThis%", shuffledArray[i]);
			$('#answer-radio').append(currentOption);
		}
        $('form').append('<button type="button" id="button">Click</button>');
        $('button').click(function(){
            $('form').append("Hya");
        });
	}
}
//Run the display function for the correct year group:
p5Object.display();
