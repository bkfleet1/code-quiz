// variables
let timeRemaining = 75; //initial quiz time. 15 seconds per slide
let index = 0;
let timePenalty = 5; // penalty for wrong answer to question
let currentQuizItems = 0; //current quiz question
let timeElapsed = Date.now(); //date time
let today = new Date(timeElapsed); // date time


// start Button & event listener
startButton.addEventListener("click", function () {
  displayQuizSection();
  displayQuestions();
  startCountdown();
});


// time timeRemaining > quiz timer
var countdown = function () {
   time.textContent = timeRemaining;
  timeRemaining--;
  if (parseInt(timeRemaining) <= 0) {
    timeRemaining=0;
    localStorage.setItem("score", JSON.stringify(timeRemaining));
    endQuiz();
  }
};

var startCountdown = function () {
  setInterval(countdown, 1000);
};


// hide introduction section & show quiz section
function displayQuizSection() {
  var x = document.getElementById("quiz");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var x = document.getElementById("introduction");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};


// quiz questions
class quizItems {
  constructor(question, response, answer) {
    this.question = question;
    this.response = response;
    this.answer = answer;
  }
}

var inquire1 = new quizItems('Commonly used data types do not include:', ['strings', 'booleans', 'alerts', 'numbers'], 2);
var inquire2 = new quizItems('The condition in an if / else statement is enclosed with _____________.', ['quotes', 'curly brackets', 'parenthesis', 'square brackets'], 2);
var inquire3 = new quizItems('Arrays in Javascript can be used to store ________________.', ['numbers and strings', 'other arrays', 'booleans', 'all of the above'], 1);
var inquire4 = new quizItems('A very useful tool used during development and debugging for printing content to the debugger is:', ['javascript', 'terminal / bash', 'for loops', 'console.log'], 3);
var inquire5 = new quizItems('String values must be enclosed within ___________ when being assigned to variables.', ['commas', 'curly brackets', 'quotes', 'parenthesis'], 0);
var quizItemsList = [inquire1, inquire2, inquire3, inquire4, inquire5];


// display quiz questions
function displayQuestions() {
  displayInquiry();
  displayResponses();
}


// display question
function displayInquiry() {
  question.textContent = quizItemsList[currentQuizItems].question;
}


// display question response options
function displayResponses() {
  responses.innerHTML = "";
  quizItemsList[currentQuizItems].response.forEach(function (response, index) {
    var li = document.createElement("li");
    var button = document.createElement("button");
    button.dataset.index = index;
    button.textContent = (index + 1) + ". " + response;
    li.appendChild(button);
    responses.appendChild(li);
  });
}


// check user question response; penalize 10 seconds if wrong; end quiz if insufficient time.  
$('ul').on('click', 'li', function (event) {
  if ((parseInt(event.target.dataset.index)) == quizItemsList[currentQuizItems].answer) {
  } else
    timeRemaining -= 10;
  if (timeRemaining <= 0) {
    timeRemaining=0;
    localStorage.setItem("score", JSON.stringify(timeRemaining));
    endQuiz();
  } else
    nextQuestion();
});


// next question. if last question response then go to end quiz, else display question
function nextQuestion() {
  currentQuizItems++;
  if (currentQuizItems > 4 && timeRemaining > 0) {
    localStorage.setItem("score", JSON.stringify(timeRemaining));
    endQuiz();
  } else {
    displayQuestions();
  }
};


// load score
var loadScore = function () {
  score = JSON.parse(localStorage.getItem("score"));
  document.getElementById("currentScore").textContent = score;
};


// end quiz and show score
function endQuiz() {
  displayScoreSection();
  loadScore();

};


// display score section & hide quiz section and timeRemaining
function displayScoreSection() {
  {
    var x = document.getElementById("yourscore");
    x.style.display = "block";
  }
  {
    var x = document.getElementById("quiz");
    x.style.display = "none";
  }
  {
    var x = document.getElementById("time");
    x.style.display = "none";
  }
};


// backButton refreshes page back to introduction section.
backButton.addEventListener("click", function () {
  refreshPage();
});

var refreshPage = function () {
  location.reload();
};

