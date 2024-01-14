//quiz question and answers
var questions =  [
 {
    question: "What does 'JS' stand for?",
    choices: ["Java Source", "JavaScript", "JumboScript", "JustScript"],
    correctAnswer: "JavaScript"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    choices: ["var", "let", "const", "both var and let"],
    correctAnswer: "both var and let"
  },
  {
    question: "What is the result of the expression 2 + '2' in JavaScript?",
    choices: ["4", "22", "Error", "NaN"],
    correctAnswer: "22"
  },
  {
    question: "Which function is used to print output in JavaScript?",
    choices: ["console.log()", "print()", "output()", "log()"],
    correctAnswer: "console.log()"
  },
  {
  question: "Which of the following is a JavaScript framework?",
  choices: ["Angular", "React", "Vue", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "What is the purpose of the 'document.getElementById()' method?",
  choices: [
    "To select an element by its class",
    "To select an element by its tag name",
    "To select an element by its ID",
    "To select an element by its name"
  ],
  correctAnswer: "To select an element by its ID"
},
{
  question: "What is the correct way to comment out multiple lines in JavaScript?",
  choices: [
    "// This is a comment",
    "/* This is a comment */",
    "# This is a comment",
    "' This is a comment"
  ],
  correctAnswer: "/* This is a comment */"
},
{
  question: "What is the purpose of the 'Array.isArray()' method?",
  choices: [
    "To check if a variable is an array",
    "To reverse the elements of an array",
    "To remove an element from an array",
    "To add an element to an array"
  ],
  correctAnswer: "To check if a variable is an array"
}
];

// declared variables 
var score = 0;
var currentIndex = 0;

//DOM elements  
var time = document.getElementById("time");
var startScreen = document.getElementById("start-screen");
var startBtn = document.getElementById("start");
var questionsDiv = document.getElementById("questions");
var questionsTitle = document.getElementById("question-title");
var choicesElement = document.getElementById("choices");
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");
var initials = document.getElementById("initials");
var submitBtn = document.getElementById("submit");
var feedback = document.getElementById("feedback");

//function to display questions
function displayQuestion() {
      var currentQuestion = questions[currentIndex];
      questionsTitle.textContent = currentQuestion.question;
      choicesElement.innerHTML = "";
      currentQuestion.choices.forEach(function (choice) {
        var li = document.createElement("li");
        li.textContent = choice;
        choicesElement.appendChild(li);
      });
    }
    displayQuestion();
 
//function to check users answers
function checkAnswer(selectedAnswer) {
  var currentQuestion = questions[currentIndex];
  if (selectedAnswer === currentQuestion.correctAnswer) {
    score++;
  }
  currentIndex++;
  if (currentIndex < questions.length) {
    displayQuestion();
  } else {
    showResults();
  }
}

//function to show results
// function showResults() {
//   questionsDiv.textContent = "";
//   choices.innerHTML = "";
//   endScreen.style.display = "block";
//   finalScore.textContent = score + " out of " + questions.length;
// }
function showResults() {
  questionsDiv.style.display = "none";
  endScreen.style.display = "block";
  finalScore.textContent = score + " out of " + questions.length;
}