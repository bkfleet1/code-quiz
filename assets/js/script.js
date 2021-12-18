let timeRemaining = 75; //initial quiz time. 15 seconds per slide
let index = 0;
let timePenalty = 5; // penalty for wrong answer to question
let currentQuizItems = 0; //current slide
let timeElapsed = Date.now();
let today = new Date(timeElapsed);


//Start Button & event listener
startButton.addEventListener("click", function () {
  displayQuizSection();
  displayQuestions();
  startCountdown();
});


var countdown = function () {
  time.textContent = timeRemaining;
  timeRemaining--;
  if (parseInt(timeRemaining) <= 0) {
     endQuiz();
  }
};

var startCountdown = function () {
  setInterval(countdown, 1000);
};



//Show and Hide Sections
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


function displayQuestions() {
  displayInquiry();
  displayResponses();
}


function displayInquiry() {
  question.textContent = quizItemsList[currentQuizItems].question;
  
}

function displayResponses() {
  responses.innerHTML = "";
  quizItemsList[currentQuizItems].response.forEach (function (response, index) {
    var li = document.createElement("li");
    var button = document.createElement("button");
    button.dataset.index = index;
    button.textContent = (index + 1) + ". " + response;
    li.appendChild(button);
    responses.appendChild(li);
    });
    
}

$ ('ul').on('click','li',function(event) {
   if ((parseInt(event.target.dataset.index)) == quizItemsList[currentQuizItems].answer) {
  } else 
    timeRemaining -= 10;
  if (timeRemaining <= 0) {
     endQuiz();
  } else

  nextQuestion();
});

 

 function nextQuestion () {
  currentQuizItems++;
  if (currentQuizItems > 4 && timeRemaining > 0) {
    localStorage.setItem("score", JSON.stringify(timeRemaining));
    endQuiz();
  } else {
   displayQuestions();
  }
};
var loadScore = function() {
  score = JSON.parse(localStorage.getItem("score"));
  document.getElementById("currentScore").textContent=score;
};
  
 function endQuiz() {
  displayScoreSection();
  loadScore();

};


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



//  localStorage.setItem("q1timeRemaining", JSON.stringify(timeRemaining));

// console.log("q1",event.target.dataset.index);
//  localStorage.setItem("q1response", JSON.stringify(event.target.dataset.index));
//  localStorage.setItem("score", JSON.stringify(timeRemaining));  