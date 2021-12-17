let timeRemaining = 75; //initial quiz time. 15 seconds per slide
let index = 0; //current slide
let timePenalty = 5; // penalty for wrong answer to question
let currentQuizItems = 0;

//Start Button & event listener
startButton.addEventListener("click", function () {
  startCountdown();
  //   hideIntroSection();
  showQuizSection();
  displayInquiry();
  displayResponses();
});


var countdown = function () {
  console.log(timeRemaining);
  time.textContent = timeRemaining;
  timeRemaining--;
  if (timeRemaining <= 0) {
    clearInterval(startCountdown);
  }
};

var startCountdown = function () {
  setInterval(countdown, 1000);
};



//Show and Hide Sections
function showQuizSection() {
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
}

// Questions
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

function displayInquiry() {
  question.textContent = quizItemsList[currentQuizItems].question;
  
}

function displayResponses() {
  responses.innerHTML = "";
  quizItemsList[currentQuizItems].response.forEach (function (response, index) {
    var li = document.createElement("li");
    li.dataset.index = index;
    var button = document.createElement("button");
    button.textContent = (index + 1) + ". " + response;
    li.appendChild(button);
    responses.appendChild(li);
  });
}

