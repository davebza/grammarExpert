/* This file is for the data objects and procedures to retrieve from those objects
for the English Day activity */

// var questionsP5 = [{
// 	"question": "Ms. Chan _____________ a concert in England two years ago.",
// 	"answers": ["watched", "have watched", "has watched", "is watching"]
// }, {
// 	"question": "Mr and Mrs Chan __________ their favourite movie for two hours.",
// 	"answers": ["watched", "have watch", "have watched", "has watched"]
// }, {
// 	"question": "Maggie ___________ on stage since 1995.",
// 	"answers": ["has sung", "sang", "has sang", "sung"]
// }, {
//     "question" : "My classmate Susan ___________ a prefect for 3 months.",
//     "answers" : ["has been", "did", "has done", "became"]
// }, {
//     "question" : "Tom has been an animator ______ 1989.",
//     "answers" : ["since", "for", "in", "ago"]
// }, {
//     "question" : "Mum asked '______ you ______ your lunch yet?'",
//     "answers" : ["have...had", "did...have", "did...had", "have...have"]
// }, {
//     "question" : "Kelly won the best singer award ____ 2007.",
//     "answers" : ["in", "since", "for", "ago"]
// }, {
//     "question" : "Betty decided to become an athlete 24 years ______.",
//     "answers" : ["ago", "since", "for", "in"]
// }]

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
		var randomLimit = (p5Object.questionsAndAnswers.length);
		var randomIndex = Math.floor(Math.random()* randomLimit + 1);
		console.log(randomIndex);
		//get the question and the answer set:
		var currentQuestion = p5Object.questionsAndAnswers[randomIndex].question;
		console.log(currentQuestion);
		//output the question and answers to the DOM - when you've set the html come ack and do this:


	}
}
