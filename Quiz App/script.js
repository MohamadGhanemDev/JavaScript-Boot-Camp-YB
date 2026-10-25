
const quizQuestion = [

    {
        question: "What is the Capital of Lebanon?",
        option: ["Rome" , "Paris" , "Beirut" , "London"],
        answer: "Beirut"
    }

    ,

    {
        question: "What does the S means in HTTPS stands for?",
        option: ["Secure" , "System" , "Speed" , "Size"],
        answer: "Secure"
    }

    ,

    {
        question: "What language runs in a web browser?",
        option: ["Python" , "JavaScript" , "C++" , "C#"],
        answer: "JavaScript"
    }

    ,

    {
        question: "How to get the length of an array in javascript ?",
        option: ["count" , "size" , "items" , "length"],
        answer: "length"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let didAnswerClicked = false;

    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const questionCorrectionEl = document.getElementById("questionCorrection");

function displayQuestions(){
    questionEl.innerHTML = "";
    questionCorrectionEl.innerHTML = "";
    optionsEl.innerHTML = ""; //instead of making function delete all like in list manipulation

    let currentQuestion = quizQuestion[currentQuestionIndex];
        questionEl.innerHTML = currentQuestion.question;
        // optionsEl.innerHTML = currentQuestion.option;//this is wrong 
        currentQuestion.option.forEach((option) => {
            const optionEl = document.createElement("li");
                optionEl.innerHTML = option;
                optionEl.style.cursor = "pointer";
                optionEl.onclick = function (){
                    selectOptions(option);
                }

            optionsEl.appendChild(optionEl);
        })
}

function selectOptions(option){
    if(didAnswerClicked){
        return;
    }
    let currentQuestion = quizQuestion[currentQuestionIndex];

    if(option == currentQuestion.answer){
        score++;
        questionCorrectionEl.innerHTML ="Correct!";
        questionCorrectionEl.style.color = "green";
    }
    else{
        questionCorrectionEl.innerHTML ="Wrong! , the correct answer is: " + currentQuestion.answer;
        questionCorrectionEl.style.color = "red";
    }
    didAnswerClicked=true;
}

function nextQuestion(){
    didAnswerClicked=false;
    currentQuestionIndex++;
    if(currentQuestionIndex == quizQuestion.length){
        showScore();
    }
    else{
        displayQuestions();
    }
    
}

function showScore(){
    const container = document.getElementById("quizContainer");
    container.innerHTML = "<h1> Your Score is:  " + score + "/" + quizQuestion.length + "</h1>";
}

displayQuestions(); //we can call it from inspect elements