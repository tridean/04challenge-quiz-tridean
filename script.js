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
            {text: "Continue to stare at it for 2 hours.", correct: false},
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
            {text: "If you put the effort in!", correct: true},
            {text: "Unlikely", correct: false},
            {text: "Absolutely not", correct: false},
            {text: "For certain", correct: false},
        ]
    },
    {
        question: "Who designed JavaScript?",
        answers: [
            {text: "Jimmy Java", correct: false},
            {text: "Albert Einstein", correct: false},
            {text: "Brendan Eich", correct: true},
            {text: "Doug Prishpreed", correct: false},
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
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", chooseAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function chooseAnswer(e){
    const chosenBtn = e.target;
    const isCorrect = chosenBtn.dataset.correct === "true";
    if(isCorrect){
        chosenBtn.classList.add("correct");
        score++;
    }
    else{
        chosenBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function giveNext(){
    qIndex++;
    if(qIndex < questions.length){
        displayQ();
    }
    else{
        displayScore();
        saveScore();
    }
};


function displayScore(){
    resetState();
    qElement.innerHTML = `You got ${score} correct out of ${questions.length}.`;
    nextButton.innerHTML = "Try Again?";
    nextButton.style.display = "block";
}


nextButton.addEventListener("click", ()=>{
    if(qIndex < questions.length){
        giveNext();
    }
    else{
        startQuiz();
    }
})

startQuiz();