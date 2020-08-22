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

var randomizeAnswers = function(question) {
    var orderedAnswers = 
    [
        {
            answer: question.correct,
            isCorrect: true
        },
        {
            answer: question.incorrect1,
            isCorrect: false
        },
        {
            answer: question.incorrect2,
            isCorrect: false
        },
        {
            answer: question.incorrect3,
            isCorrect: false
        }
    ];
    var orderedInitialLength = orderedAnswers.length;
    var unorderedAnswers = [];

    while (unorderedAnswers.length < orderedInitialLength) {
        var index = Math.floor(Math.random() * orderedAnswers.length);
        unorderedAnswers.push(orderedAnswers[index]);
        orderedAnswers.splice(index,1);
    }
    return unorderedAnswers;
}

var createAnswers = function(answersBody, question) {
    var answers = randomizeAnswers(question);
    console.log(answers);

    for (let index = 0; index < answers.length; index++) {
        var answerBtnEl = document.createElement("button");
        answerBtnEl.className = "answer-btn";
        answerBtnEl.setAttribute("id", `${index}`);
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