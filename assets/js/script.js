var timeLeft = 70;
var quizBodyEl = document.querySelector(".quiz-body");
var startBtnEl = document.querySelector("#ready-btn");
var timerEl = document.querySelector(".time-left");
var highScoresEl = document.querySelector(".high-score");
var timer;
var score = 0;
var answersCorrect = 0;
var iterator = 0;
var wasAnswered = true;
var questions = [
    {
        q: "Why so JavaScript and Java have similar name?",
        correct: "JavaScript's syntax is loosely based on Java's",
        incorrect1: "JavaScript is a stripped-down version of Java",
        incorrect2: "They both originated on the island of Java",
        incorrect3: "None of the above"
    },
    {
        q: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
        correct: "The User's machine running a Web browser",
        incorrect1: "The Web server",
        incorrect2: "A central machine deep within Netscape's corporate offices",
        incorrect3: "None of the above"
    },
    {
        q: "______ JavaScript is also called client-side JavaScript.",
        correct: "Navigator",
        incorrect1: "Microsoft",
        incorrect2: "LiveWire",
        incorrect3: "Native"
    },
    {
        q: "__________ JavaScript is also called server-side JavaScript.",
        correct: "LiveWire",
        incorrect1: "Microsoft",
        incorrect2: "Navigator",
        incorrect3: "Native"
    },
    {
        q: "What are variables used for in JavaScript Programs?",
        correct: "Storing numbers, dates, or other values",
        incorrect1: "Varying randomly",
        incorrect2: "Causing high-school algebra flashbacks",
        incorrect3: "None of the above"
    },
    {
        q: "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
        correct: "Client-side",
        incorrect1: "Server-side",
        incorrect2: "Local",
        incorrect3: "Native"
    },
    {
        q: "What should appear at the very end of your JavaScript? The <script LANGUAGE='JavaScript'>tag",
        correct: "The </script>",
        incorrect1: "The <script>",
        incorrect2: "The END statement",
        incorrect3: "None of the above"
    },
    {
        q: "Which of the following can't be done with client-side JavaScript?",
        correct: "Storing the form's contents to a database file on the server",
        incorrect1: "Validating a form",
        incorrect2: "Sending a form's contents by email",
        incorrect3: "None of the above"
    },
    {
        q: "Which of the following are capabilities of functions in JavaScript?",
        correct: "Accept parameters",
        incorrect1: "Return a value",
        incorrect2: "Accept parameters and Return a value",
        incorrect3: "None of the above"
    },
    {
        q: "Which of the following is not a valid JavaScript variable name?",
        correct: "2names",
        incorrect1: "_first_and_last_names",
        incorrect2: "FirstAndLast",
        incorrect3: "None of the above"
    },
    {
        q: "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
        correct: "<SCRIPT>",
        incorrect1: "<BODY>",
        incorrect2: "<HEAD>",
        incorrect3: "<TITLE>"
    },
    {
        q: "How does JavaScript store dates in a date object?",
        correct: "The number of milliseconds since January 1st, 1970",
        incorrect1: "The number of days since January 1st, 1900",
        incorrect2: "The number of seconds since Netscape's public stock offering.",
        incorrect3: "None of the above"
    },
    {
        q: "Which of the following attribute can hold the JavaScript version?",
        correct: "LANGUAGE",
        incorrect1: "SCRIPT",
        incorrect2: "VERSION",
        incorrect3: "None of the above"
    },
    {
        q: "What is the correct JavaScript syntax to write 'Hello World'?",
        correct: "document.write('Hello World')",
        incorrect1: "System.out.println('Hello World')",
        incorrect2: "println ('Hello World')",
        incorrect3: "response.write('Hello World')"
    },
    {
        q: "Inside which HTML element do we put the JavaScript?",
        correct: "<script>",
        incorrect1: "<js>",
        incorrect2: "<scripting>",
        incorrect3: "<javascript>"
    },
    {
        q: "Which types of image maps can be used with JavaScript?",
        correct: "Client-side image maps",
        incorrect1: "Server-side image maps",
        incorrect2: "Server-side image maps and Client-side image maps",
        incorrect3: "None of the above"
    },
    {
        q: "Which of the following navigator object properties is the same in both   Netscape and IE?",
        correct: "navigator.appCodeName",
        incorrect1: "navigator.appName",
        incorrect2: "navigator.appVersion",
        incorrect3: "None of the above"
    },
    {
        q: "What does the <noscript> tag do?",
        correct: "Enclose text to be displayed by non-JavaScript browsers.",
        incorrect1: "Prevents scripts on the page from executing.",
        incorrect2: "Describes certain low-budget movies.",
        incorrect3: "None of the above"
    },
    {
        q: "JavaScript entities start with _______ and end with _________.",
        correct: "Ampersand, semicolon",
        incorrect1: "Semicolon, colon",
        incorrect2: "Semicolon, Ampersand",
        incorrect3: "Ampersand, colon"
    },
    {
        q: "Which of the following best describes JavaScript?",
        correct: "an object-oriented scripting language.",
        incorrect1: "a low-level programming language.",
        incorrect2: "a scripting language precompiled in the browser.",
        incorrect3: "a compiled scripting language."
    },
    {
        q: "Choose the server-side JavaScript object?",
        correct: "File",
        incorrect1: "FileUpLoad",
        incorrect2: "Function",
        incorrect3: "Date"
    },
    {
        q: "Choose the client-side JavaScript object?",
        correct: "FileUpLoad",
        incorrect1: "Database",
        incorrect2: "Cursor",
        incorrect3: "Client"
    },
    {
        q: "Which of the following is not considered a JavaScript operator?",
        correct: "this",
        incorrect1: "new",
        incorrect2: "delete",
        incorrect3: "typeof"
    },{
        q: "______method evaluates a string of JavaScript code in the context of the specified",
        correct: "Eval",
        incorrect1: "ParseInt",
        incorrect2: "ParseFloat",
        incorrect3: "Efloat"
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

    for (let index = 0; index < answers.length; index++) {
        
        var answerBtnEl = document.createElement("button");
        answerBtnEl.className = "answer-btn";
        answerBtnEl.textContent = answers[index].answer;
        if (answers[index].isCorrect) {
            answerBtnEl.setAttribute("id", `${true}`);
        }
        answersBody.appendChild(answerBtnEl);
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

var removeChildren = function(parent) {
    while (parent.firstChild) {
        parent.removeChild(quizBodyEl.firstChild);
    }
}

var gameOver = function() {
    removeChildren(quizBodyEl);

    var highScoreSaveEl = document.createElement("form");
    highScoreSaveEl.className = "high-score-form";
    quizBodyEl.appendChild(highScoreSaveEl);

    var scoreLabelEl = document.createElement("label");
    scoreLabelEl.setAttribute("for", "player-name");
    scoreLabelEl.textContent = "Enter your initials here:";
    highScoreSaveEl.appendChild(scoreLabelEl);

    var scoreInputEl = document.createElement("input");
    scoreInputEl.type = "text";
    scoreInputEl.className = "high-scorer"
    scoreInputEl.setAttribute("id", "player-name");
    scoreInputEl.name = "player-name";
    highScoreSaveEl.appendChild(scoreInputEl);

    var scoreBtnEl = document.createElement("button");
    scoreBtnEl.className = "score-submit";
    scoreBtnEl.textContent = "Save Score!"
    highScoreSaveEl.appendChild(scoreBtnEl);
}

var saveHighScore = function(target) {
    console.log(target);
    var playerName = target.closest(".high-score-form").querySelector(".high-scorer").value;
    if (!playerName) {
        alert("No valid input. Try again!");
    } else {
        localStorage.setItem("player", playerName);
        localStorage.setItem("score", score);
    }
}

var checkCorrect = function(event) {
    if (event.target.matches(".answer-btn")) {
       if (event.target.matches("#true.answer-btn")) {
            answersCorrect++;
        }
        else {
            timeLeft -= 5;
        }
        removeChildren(quizBodyEl);
        wasAnswered = true;
        runGame();
    } else if (event.target.matches(".score-submit")) {
        saveHighScore(event.target);
    }
}
var changeTimer = function() {
    timerEl.textContent = timeLeft;
    if (!timeLeft || timeLeft < 0) {
        clearInterval(timer);
        removeChildren(quizBodyEl);
        score = answersCorrect;
        alert(`You have run out of time! Your final score: ${score}`);
        gameOver();
        timerEl.textContent = "";
    }
    timeLeft--;
};

var runGame = function() {
    if (timeLeft > 0) {
        if (iterator < questions.length) {
            if (wasAnswered) {
                wasAnswered = false;
                createQuestions(questions[iterator]);
                iterator++;
            }
        } 
        else if (iterator >= questions.length) {
            clearInterval(timer);
            timerEl.textContent = "";
            score = answersCorrect + timeLeft;
            alert(`You have completed the quiz! congratulations! Your final score: ${score}`);
            gameOver();
            return true;
        }
    }
};

var startButtonHandler = function() {
    removeChildren(quizBodyEl);
    timer = setInterval(changeTimer, 1000);
    runGame();
};

var showHighScores = function() {
    var previousName = localStorage.getItem("player");
    var previousScore = localStorage.getItem("score");
    var isHighScoreShowing = document.querySelector("#score-card");
    console.dir(isHighScoreShowing);
    if (!isHighScoreShowing) {
        if (previousScore || previousName) {

            var scoreCardEl = document.createElement("div");
            scoreCardEl.className = "score-card";
            scoreCardEl.setAttribute("id", "score-card");
            quizBodyEl.appendChild(scoreCardEl);
    
            var nameEl = document.createElement("h1");
            nameEl.textContent = previousName;
            
            scoreCardEl.appendChild(nameEl);
    
            var scoreEl = document.createElement("h2");
            scoreEl.textContent = "high score: " + previousScore;
    
            scoreCardEl.appendChild(nameEl);
            scoreCardEl.appendChild(scoreEl);
        } else {
            alert("There are no previous high scores.");
            return false;
        }
    }
}

startBtnEl.addEventListener("click", startButtonHandler);

quizBodyEl.addEventListener("click", checkCorrect);

highScoresEl.addEventListener("click", showHighScores);
