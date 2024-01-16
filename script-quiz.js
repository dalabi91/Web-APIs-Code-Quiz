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
//    {
//      question: "What is the result of the expression 2 + '2' in JavaScript?",
//      choices: ["4", "22", "Error", "NaN"],
//      correctAnswer: "22"
//    },
//    {
//      question: "Which function is used to print output in JavaScript?",
//      choices: ["console.log()", "print()", "output()", "log()"],
//      correctAnswer: "console.log()"
//    },
//    {
//    question: "Which of the following is a JavaScript framework?",
//    choices: ["Angular", "React", "Vue", "All of the above"],
//    correctAnswer: "All of the above"
//  },
//  {
//    question: "What is the purpose of the 'document.getElementById()' method?",
//    choices: [
//      "To select an element by its class",
//      "To select an element by its tag name",
//      "To select an element by its ID",
//      "To select an element by its name"
//    ],
//    correctAnswer: "To select an element by its ID"
//  },
//  {
//    question: "What is the correct way to comment out multiple lines in JavaScript?",
//    choices: [
//      "// This is a comment",
//      "/* This is a comment */",
//      "# This is a comment",
//      "' This is a comment"
//    ],
//    correctAnswer: "/* This is a comment */"
//  },
//  {
//    question: "What is the purpose of the 'Array.isArray()' method?",
//    choices: [
//      "To check if a variable is an array",
//      "To reverse the elements of an array",
//      "To remove an element from an array",
//      "To add an element to an array"
//    ],
//    correctAnswer: "To check if a variable is an array"
//  }
 ];
 
 // declared variables 
 var score = 0;
 var questionIndex = 0;
 //quiz total time in seconds
 var quizTotalTime = 90;
 var timeRemaining = quizTotalTime;
 
 //DOM elements  
 var timeElement = document.getElementById("time");
 var startScreen = document.getElementById("start-screen");
 var startBtn = document.getElementById("start");
 var questionsDiv = document.getElementById("questions");
 var questionsTitle = document.getElementById("question-title");
 var choicesElement = document.getElementById("choices");
 var endScreen = document.getElementById("end-screen");
 var finalScore = document.getElementById("final-score");
 var initialsInput = document.getElementById("initials");
 var submitBtn = document.getElementById("submit");
 var feedback = document.getElementById("feedback");
 
 var randomQus = questions.sort(() => Math.random()- 0.5);

 function displayQuestion() {
  var currentQuestion = questions[questionIndex];
  questionsTitle.textContent = currentQuestion.question;
  choicesElement.innerHTML = "";
  currentQuestion.choices.forEach(function (choice) {
    var li = document.createElement("li");
    li.textContent = choice;
    choicesElement.appendChild(li);
  });
   }

displayQuestion();
// startTimer();


//function to check users answers
function checkAnswer(selectedAnswer) {
var currentQuestion = questions[questionIndex];
if (selectedAnswer === currentQuestion.correctAnswer) {
score++;//increment the score if answer is correct.
//provide feedback that the answer is correct
feedback.textContent = "Correct!"
} else{
  //provide feedback that the answer is wrong and tells teh correct answer.
  feedback.textContent = "Wrong. The correct answer is: " + questions[questionIndex].correctAnswer;
}
questionIndex++;//move to the next question
if (questionIndex < questions.length) {
displayQuestion();
} 
else {
  showResults();
}
console.log(selectedAnswer);
}

//  function to show results

function showResults() {
  questionsDiv.style.display = "none";
  endScreen.style.display = "block";
  //display the final score
  finalScore.textContent = score + " out of " + questions.length;
   // Stop the timer when the quiz ends
  // clearInterval(timerInterval);
}

//function to restart quiz

// Function to end the quiz
function endQuiz() {
  clearInterval(timer);
  questionsDiv.style.display = "none";
  endScreen.style.display = "block";
  finalScore.textContent = score;
}

// function restartQuiz() {
//   questionIndex  = 0;
//   score = 0;
//   questionsDiv.style.display = "block";
//   endScreen.style.display = "none";
//   displayQuestion();
// }

// Function to save the user's score 
// function saveUserScore(userScore) {
//   //To store scores in localStorage
//   var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
//   highScores.push(userScore);
//   localStorage.setItem("highScores", JSON.stringify(highScores));
  
// }
 //event listeners
 //start button
 startBtn.addEventListener("click", function () {
   startScreen.style.display = "none";
   questionsDiv.style.display = "block";
   displayQuestion();
 });
 
 //choices element
 choicesElement.addEventListener("click", function (event) {
   if (event.target.tagName === "LI") {
     checkAnswer(event.target.textContent);
   }
 });
 
//  submit buttons
 submitBtn.addEventListener("click", function () {
   var  userInitials = initialsInput.Value;
   if (userInitials === ""){
     console.log("User's initials", userInitials);
     window.alert("Please enter your initials.");
    //  feedback("Please enter your initials.");
        } 
        else {
          var finalScore = {
            initialsInput: initials,
            score: score, 
          }
          var highScores = localStorage.getItem("highScores");
          if (highScores === null){
            highScores =[];
          } else {
            highScores = JSON.parse(highScores);
          }
      highScores.push(finalScore);
      var newScore = JSON.stringify(highScores);
      localStorage.setItem("highScores", newScore);
      window.location.replace("highScores.html");
      console.log(highScores);
    }

  //  checkAnswer();

 });

//  submitBtn.addEventListener("click", function() {
//         // Get the user's initials
//         var userInitials = initialsInput.value;
//          // Saves the score and user initials 
//         var userScore = { initials: userInitials, Score: score };
//         saveUserScore(userScore);

//         // Display additional message or redirect to another page
//         endScreen.innerHTML = "<p>Thank you for taking the quiz!</p>";
//     });


