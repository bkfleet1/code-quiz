var timeRemaining = 75; //initial quiz time. 15 seconds per slide
var index = 0; //current slide
var timePenalty = 5; // penalty for wrong answer to question

console.log(slides);

startButton.addEventListener('click',startQuiz)




//Start Button & event listener
start_button.addEventListener('click', function(e) {
    startTimer();
});

function startTimer() {
// slider()
timer = setInterval(function() {
    console.log(timeRemaining);
    timer.textContent = timeRemaining
    timeRemaining --;
    if (timeRemaining % 5 === 0) {
        index++;
        slider()
    }
  }, 1000)
};

function slider () {
    slider.textContent = JSON.stringify(slides[index]);
    if (timeRemaining === 0) {
        clearInterval(timer);
        index = 0;
    }
};