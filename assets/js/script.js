let timeRemaining = 75; //initial quiz time. 15 seconds per slide
let index = 0; //current slide
let timePenalty = 5; // penalty for wrong answer to question
//document.getElementById("time").textContent = timeRemaining;

//Start Button & event listener
startButton.addEventListener("click", function () {
    startCountdown();
    hideIntro();
    showQuestions();
});

/*
function(e) {
    startTimer();
}); */

var countdown = function () {
    console.log(timeRemaining);
    time.textContent = timeRemaining;
    timeRemaining--;
    if (timeRemaining <= 0) {
        alert("Game Over")
        clearInterval(startCountdown);
        //    endQuiz();
    }

};

var startCountdown = function () {
    setInterval(countdown, 1000);
};


//Show and Hide Sections
function showQuestions() {
    var x = document.getElementById("questions");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function hideIntro() {
    var x = document.getElementById("introductions");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }