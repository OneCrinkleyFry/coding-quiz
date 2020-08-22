var timeLeft = 70;
var quizBodyEl = document.querySelector(".quiz-body");
var startBtnEl = document.querySelector("#ready-btn");
var questions = [
    {
        q: "0What is JavaScript?",
        correct: "an object oriented coding language for web development.",
        incorrect1: "a potato",
        incorrect2: "a potato",
        incorrect3: "a potato",
    },
    {
        q: "1What is JavaScript?",
        correct: "an object oriented coding language for web development.",
        incorrect1: "a potato",
        incorrect2: "a potato",
        incorrect3: "a potato",
    },
    {
        q: "2What is JavaScript?",
        correct: "an object oriented coding language for web development.",
        incorrect1: "a potato",
        incorrect2: "a potato",
        incorrect3: "a potato",
    },
    {
        q: "3What is JavaScript?",
        correct: "an object oriented coding language for web development.",
        incorrect1: "a potato",
        incorrect2: "a potato",
        incorrect3: "a potato",
    },
    {
        q: "4What is JavaScript?",
        correct: "an object oriented coding language for web development.",
        incorrect1: "a potato",
        incorrect2: "a potato",
        incorrect3: "a potato",
    }
];
var questionsLeft = questions.length;

var createAnswers = function(answersBody, question) {
}

var createQuestions = function(question) {

        var questionTitleEl = document.createElement("h1");
        questionTitleEl.className ="question-title";

        questionTitleEl.textContent = question.q;
        console.dir(questionTitleEl);
        quizBodyEl.appendChild(questionTitleEl);

        var answersEl = document.createElement("div");
        answersEl.className = "question-answers";
        quizBodyEl.appendChild(answersEl);

        createAnswers(answersEl, question);

}

var runGame = function() {
    startBtnEl.remove();
    for (var i = 0; timeLeft > 0 && i < questions.length; i++) {
        console.log(i);
        createQuestions(questions[i]);
    }
};

startBtnEl.addEventListener("click", runGame);