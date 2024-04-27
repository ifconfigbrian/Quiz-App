const questions = [
    {
        question:"What is Java?",
        answers:[
            {text: "A coffee joint",correct: false},
            {text: "A famous artist in Europe",correct: false},
            {text: "A programming language",correct: true},
            {text: "The best Netflix series",correct: false},
        ]
    },
    {
        question:"Which of this is a data type in Java?",
        answers:[
            {text: "Data typography",correct: false},
            {text: "Float",correct: true},
            {text: "Safaricom data",correct: false},
            {text: "database",correct: false},
        ]
    },
    {
        question:"Which data structure is mostly taught in schools?",
        answers:[
            {text: "Hashtables",correct: false},
            {text: "ArrayList",correct: false},
            {text: "Sorting argorithms",correct: false},
            {text: "Arrays",correct: true},
        ]
    },
    {
        question:"Why is Java used in most organisations?",
        answers:[
            {text: "It is compatible with most devices",correct: true},
            {text: "It is secure",correct: false},
            {text: "It is easy to write",correct: false},
            {text: "Object Oriented",correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();    
}
function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
    
}