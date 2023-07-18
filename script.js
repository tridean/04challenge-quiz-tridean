const questions = [
    {
        question: "Is procrastination a cool thing to do?",
        answers: [
            {text: "Absolutely", correct: false},
            {text: "No", correct: true},
            {text: "Sometimes", correct: false},
            {text: "Sure", correct: false},
        ]
    },
    {
        question: "What language was Roller Coaster Tycoon written in?",
        answers: [
            {text: "C#", correct: false},
            {text: "Python", correct: false},
            {text: "C++", correct: false},
            {text: "Assembly", correct: true},
        ]
    },
    {
        question: "Where does the link to the JS file go?",
        answers: [
            {text: "At the bottom of the body tag.", correct: true},
            {text: "In the header.", correct: false},
            {text: "Anywhere in the CSS file.", correct: false},
            {text: "You don't have to link to the JS file.", correct: false},
        ]
    },
    {
        question: "What should you do when staring at a blank file?",
        answers: [
            {text: "Start with something small.", correct: true},
            {text: "Continue to stare at it for 2 hours.", correct: true},
            {text: "Copy code into it that you don't understand.", correct: false},
            {text: "Shut down your computer.", correct: false},
        ]
    },
    {
        question: "What is the command for commiting a change to GitHub?",
        answers: [
            {text: "install -r requirements.txt", correct: false},
            {text: "sudo apt get", correct: false},
            {text: "git git got got", correct: false},
            {text: "git commit -m", correct: true},
        ]
    },
    {
        question: "Will I get a job after completing this course?",
        answers: [
            {text: "If you put the effort in!", correct: false},
            {text: "Unlikely", correct: false},
            {text: "Absolutely not", correct: false},
            {text: "For certain", correct: true},
        ]
    },
    {
        question: "Who designed JavaScript?",
        answers: [
            {text: "Jimmy Java", correct: false},
            {text: "Albert Einstein", correct: false},
            {text: "Brendan Eich", correct: false},
            {text: "Doug Prishpreed", correct: true},
        ]
    }
];

const qElement = document.getElementById("question");
const answerButton = document.getElementById("answerButtons");
const nextButton = document.getElementById("nextQ");

let qIndex = 0;
let score = 0;

function startQuiz(){
    qIndex = 0;
    score = [0];
    nextButton.innerHTML = "Next";
    displayQ();
}

function displayQ(){
    resetState();
    let currentQ = questions[qIndex];
    let qNum = qIndex + 1;
    qElement.innerHTML = qNum + ". " + currentQ.
    question;

    currentQ.answers.forEach(function (answer){
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}
startQuiz();