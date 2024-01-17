//declare id initial variable
var highScoresE1 = document.getElementById("highscores");
var clearBtn = document.getElementById("clear");

//function to get stored result from local storage
// Function to get stored results from local storage
function getStoredResults() {
  // Check if there are stored results
  if (localStorage.getItem("score")) {
    // Parse the JSON string stored in local storage
    var storedResults = JSON.parse(localStorage.getItem("score"));

    // Display or use the stored results as needed
    console.log("Stored Results:", storedResults);

    // Example: Display the last stored score
    if (storedResults.length > 0) {
      var lastResult = storedResults[storedResults.length - 1];
      console.log("Last Score:", lastResult.score);
    }
  } else {
    console.log("No stored results found.");
  }
}

// Example usage
getStoredResults();

// Function to save the user's score
// function saveUserScore(userScore) {
//   //To store scores in localStorage
//   var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
//   highscores.push(userScore);
//   localStorage.setItem("highscores", JSON.stringify(highscores));

// }
