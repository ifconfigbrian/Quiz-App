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
const answerButtons = document.getElementById("answer-buttons");
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
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
            
        }
        button.addEventListener("click",selectAnswer);
    });
    
    }
    
    function resetState() {
        nextButton.style.display = "none";
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
            
        }
        
    }
    function selectAnswer(e) {
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if (isCorrect) {
            selectedBtn.classList.add("correct");
            score++;    
        }else{
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");    
            }
            button.disabled = true;
        });
        nextButton.style.display = "block"; 
    }
    function showScore(){
        resetState();
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML = "Try again";
        nextButton.style.display = "block";
    }
    function handleNextButton() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
            
        } else {
            showScore();
            
        }
        
    }
    nextButton.addEventListener("click",() =>{
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
            
        } else {
            startQuiz();
            
        }
    });
    startQuiz();