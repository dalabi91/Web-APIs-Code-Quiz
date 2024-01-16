//DOM elements
var timerElement = document.getElementById("time");
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
var highscores = document.getElementById("highscores");

// declared variables
var score = 0;
var questionIndex = 0;
var timeRemaining = 90;
// var quizTotalTime = 90;

//randomly display questions
// var randomQus = questions.sort(() => Math.random()- 0.5);

//adding sound variables to correct/wrong answer

var soundCorrect = new Audio("assets/sfx/correct.wav");
var soundWrong = new Audio("assets/sfx/incorrect.wav");

//start button
startBtn.addEventListener("click", startQuiz);
//to start the quiz
function startQuiz() {
  //   startScreen.style.display = "none";
  //   questionsDiv.style.display = "block";
  displayQuestion();
  theEnd();
  timerElement();
}

function displayQuestion() {
  startScreen.classList.add("hide"); //add css class hide to the html
  questionsDiv.classList.remove("hide"); //remove css class hide to the html
  feedback.classList.remove("hide"); //remove css class hide to the html
  var currentQuestion = questions[questionIndex];
  questionsTitle.textContent = currentQuestion.question;
  choicesElement.innerHTML = "";
  currentQuestion.choices.forEach((choices, index) => {
    var button = document.createElement("button");
    button.textContent = choices;
    choicesElement.appendChild(button);
    button.addEventListener("click", () => checkAnswer(choices));
  });
}

//choices element event listener
// choicesElement.addEventListener("click", function (event) {
//   if (event.target.tagName === "LI") {
//     checkAnswer(event.target.textContent);
//   }
// });
// displayQuestion();
// startTimer();

//function to check users answers
function checkAnswer(selectedAnswer) {
  var currentQuestion = questions[questionIndex];
  questionIndex++; //increment the score if answer is correct.
  console.log(choicesElement);
  //provide feedback that the answer is correct

  if (selectedAnswer === currentQuestion.correctAnswer) {
    feedback.textContent = "Correct!";
    soundCorrect.play();
    score++;
  } else {
    //provide feedback that the answer is wrong and tells teh correct answer.
    feedback.textContent = "Wrong";
    soundWrong.play();
    timeRemaining -= 10;
    if (timeRemaining <= 0) {
      timeRemaining = 1;
    }
  }
  theEnd();
  // questionIndex++;//move to the next question
  if (questionIndex < questions.length) {
    displayQuestion();
    //
  } else {
    timerElement.textContent = timeRemaining;
    questionsDiv.classList.add("hide");
    feedback.classList.add("hide");
    endScreen.classList.remove("hide");
  }
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

//timer function
// var timerInterval;
function startTimer() {
  var timerInterval = setInterval(function () {
    timeRemaining--;
    timerElement.textContent = timeRemaining;
    if (timeRemaining === 0) {
      clearInterval(timerInterval);
      theEnd();
      questionsDiv.classList.add("hide");
      feedback.classList.add("hide");
      endScreen.classList.remove("hide");
    }
  }, 1000); // Update the timer every second
}

// function updateTimer() {
//   timerElement.textContent = "Time: " + timeRemaining + "s";
// }

// Function to end the quiz
function theEnd() {
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
//   var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
//   highscores.push(userScore);
//   localStorage.setItem("highscores", JSON.stringify(highscores));

// }
//event listeners

//  submit buttons
submitBtn.addEventListener("click", function () {
  var userInitials = initialsInput.Value;
  if (userInitials === "") {
    console.log("User's initials", userInitials);
    window.alert("Please enter your initials.");
    //  feedback("Please enter your initials.");
  } else {
    var finalScore = {
      initialsInput: initials,
      score: score,
    };
    var highscores = localStorage.getItem("highscores");
    if (highscores === null) {
      highscores = [];
    } else {
      highscores = JSON.parse(highscores);
    }
    highscores.push(finalScore);
    var newScore = JSON.stringify(highscores);
    localStorage.setItem("highscores", newScore);
    window.location.replace("highscores.html");
    console.log(highscores);
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
