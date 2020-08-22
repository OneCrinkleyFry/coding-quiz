var timeLeft = 70;
var quizBodyEl = document.querySelector(".quiz-body");
var startBtnEl = document.querySelector("#ready-btn");
var questions = [
    {
        q: "0What is JavaScript?",
        correct: "an object oriented coding language for web development.",
        incorrect1: "1",
        incorrect2: "2",
        incorrect3: "3"
    },
    {
        q: "1What is JavaScript?",
        correct: "an object oriented coding language for web development.",
        incorrect1: "1",
        incorrect2: "2",
        incorrect3: "3"
    },
    {
        q: "2What is JavaScript?",
        correct: "an object oriented coding language for web development.",
        incorrect1: "1",
        incorrect2: "2",
        incorrect3: "3"
    },
    {
        q: "3What is JavaScript?",
        correct: "an object oriented coding language for web development.",
        incorrect1: "1",
        incorrect2: "2",
        incorrect3: "3"
    },
    {
        q: "4What is JavaScript?",
        correct: "an object oriented coding language for web development.",
        incorrect1: "1",
        incorrect2: "2",
        incorrect3: "3"
    }
];
var questionsLeft = questions.length;

var createAnswers = function(answersBody, question) {
    var orderedAnswers = [question.correct, question.incorrect1, question.incorrect2, question.incorrect3];
    var orderedInitialLength = orderedAnswers.length;
    var unorderedAnswers = [];

    while (unorderedAnswers.length < orderedInitialLength) {
        console.log(orderedAnswers);
        console.log(unorderedAnswers);
        var index = Math.floor(Math.random() * orderedAnswers.length);
        unorderedAnswers.push(orderedAnswers[index]);
        orderedAnswers.splice(index,1);
        console.log(orderedAnswers);
        console.log(unorderedAnswers);
    }
    
    for (let i = 0; i < unorderedAnswers.length; i++) {
        var 
        
    }
}

var createQuestions = function(question) {

        var questionTitleEl = document.createElement("h1");
        
        questionTitleEl.className ="question-title";
        questionTitleEl.textContent = question.q;
        quizBodyEl.appendChild(questionTitleEl);

        var answersEl = document.createElement("div");

        answersEl.className = "question-answers";
        quizBodyEl.appendChild(answersEl);

        createAnswers(answersEl, question);
}

var runGame = function() {
    startBtnEl.remove();
    //for (var i = 0; timeLeft > 0 && i < questions.length; i++) {
        //createQuestions(questions[i]);
    //}
    createQuestions(questions[0]);
};

startBtnEl.addEventListener("click", runGame);