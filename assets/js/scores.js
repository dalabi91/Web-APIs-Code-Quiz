//declare id initial variable
var highScores = document.getElementById("highscores");
var clearBtn = document.getElementById("clear");

//function to get stored result from local storage
function getStoredResults() {
  var storedResults = localStorage.getItem("score");
  //check if theirs any stored results ( not null)
  if (storedResults !== null) {
    // Parse the stored results from a JSON string to a JavaScript object
    var listItems = JSON.parse(storedResults);
    listHighscores(listItems);
  }
  console.log(storedResults);
}

//display result ina list format

function listHighscores(listItems) {
  listItems.forEach(function (listItems) {
    var li = document.createElement("li");
    li.textContent = listItems.initials + " / " + " score: " + listItems.score;
    highScores.appendChild(li);
  });
}

// Clear local storage and scoreboard
function clearResults() {
  localStorage.removeItem("score");
  //   clearElementChildren(highscores);
}

// function to clear child elements of a given element
function clearElementChildren(highScores) {
  while (highScores.firstChild) {
    highScores.removeChild(highScores.firstChild);
  }
}

// Call results and add event listener to 'clear button'
getStoredResults();
clearBtn.addEventListener("click", clearResults);
