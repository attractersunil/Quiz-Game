const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressbar = document.getElementById("progressbarfull");
let currentQuestion = {};
let acceptAnswer = true;

let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Inside which HTML element do we put the javascript ?",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripttag>",
        answer: 1
    },
    {
        question: "How can you make a bulleted list?",
        choice1: " <list>",
        choice2: "<nl>",
        choice3: "<ul>",
        choice4: "<ol>",
        answer: 3
    },
    {
        question: "Choose the correct HTML tag to make a text bold?",
        choice1: " <b>",
        choice2: "<bold>",
        choice3: "<bb>",
        choice4: "<bld>",
        answer: 1
    },

    {
        question: "A webpage displays a picture. What tag was used to display that picture?",
        choice1: " <picture>",
        choice2: "<image>",
        choice3: "<img>",
        choice4: "<src>",
        answer: 3
    },
    {
        question: " Which attribute is used to name an element uniquely?",
        choice1: " <class>",
        choice2: "<id>",
        choice3: "<dot>",
        choice4: "<all the above>",
        answer: 2
    },{
        question: " What is the size of float and double in java?",
        choice1: " 32 and 64",
        choice2: "64 and 64",
        choice3: "32 and 32",
        choice4: "64 and 32",
        answer: 1
    },{
        question: " Which attribute is used to name an element uniquely?",
        choice1: " <class>",
        choice2: "<id>",
        choice3: "<dot>",
        choice4: "<all the above>",
        answer: 2
    },{
        question: " What is the size of float and double in java?",
        choice1: " 32 and 64",
        choice2: "64 and 64",
        choice3: "32 and 32",
        choice4: "64 and 32",
        answer: 1
    },{
        question: " Automatic type conversion is possible in which of the possible cases?",
        choice1: " Byte to int",
        choice2: "int to long",
        choice3: "long to int",
        choice4: "int to Byte",
        answer: 2
    },{
        question: " Which attribute is used to name an element uniquely?",
        choice1: " <class>",
        choice2: "<id>",
        choice3: "<dot>",
        choice4: "<all the above>",
        answer: 2
    },{
        question: "Inside which HTML element do we put the javascript ?",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripttag>",
        answer: 1
    },{
        question: " Which attribute is used to name an element uniquely?",
        choice1: " <class>",
        choice2: "<id>",
        choice3: "<dot>",
        choice4: "<all the above>",
        answer: 2
    },{
        question: " Automatic type conversion is possible in which of the possible cases?",
        choice1: " Byte to int",
        choice2: "int to long",
        choice3: "long to int",
        choice4: "int to Byte",
        answer: 2
    },{
        question: " Which type of JavaScript language is ",
        choice1: "Object-Oriented",
        choice2: "Object-based",
        choice3: "Assembly-language",
        choice4: "High-level",
        answer: 2
    }
]
//constant
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 14;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS) {
        return window.location.assign("./end.html");
    }
    localStorage.setItem('mostRecentScore', score);
    questionCounter++;
    progressText.innerText = "Question " + `${questionCounter}/${MAX_QUESTIONS}`;
    /*progress bar update */
    //console.log((questionCounter/MAX_QUESTIONS)*100);
    progressbar.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptAnswer = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptAnswer) return;

        acceptAnswer = false;
        const selectChoice = e.target;
        const selectAnswer = selectChoice.dataset["number"];

        classToApply =
            selectAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply == "correct") {
            incrementScore(CORRECT_BONUS);
        }
        selectChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000)
    });

});
incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}
startGame();