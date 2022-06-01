let hoursHTML = document.getElementById("hours");
let minutesHTML = document.getElementById("minutes");
let secondsHTML = document.getElementById("seconds");

let seconds = 0;
let minutes = 0;
let hours = 0;


function formatTime(value) {
  if (value < 10) {
    return "0" + value;
  } else {
    return value;
  }
}

function timeLogic() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }

  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
}

function updateTimeHtml(seconds, minutes, hours) {
  secondsHTML.innerHTML = formatTime(seconds);
  minutesHTML.innerHTML = formatTime(minutes);
  hoursHTML.innerHTML = formatTime(hours);
}


let btnStart = document.getElementById('start')
let btnStop = document.getElementById('stop')
let btnReset = document.getElementById('reset')
let btnSave = document.getElementById('save')


// Functions for buttons

let timer;

// Start button
btnStart.addEventListener('click', function() {
  timer = setInterval(function () {
    timeLogic(); 
    updateTimeHtml(seconds, minutes, hours);
  }, 1000);

  btnStart.disabled = true;
  return timer;
});
 

// Stop button
btnStop.addEventListener('click', function() {
  clearInterval(timer);
  btnStart.disabled = false;
});

let saveContainer = document.getElementById('saveData');

// Reset button
btnReset.addEventListener('click', function() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;

  updateTimeHtml(seconds, minutes, hours);
  btnStart.disabled = false;

  while (saveContainer.firstChild) {
    saveContainer.removeChild(saveContainer.firstChild);
  }
  
});


// Save button

btnSave.addEventListener('click', function() {
 
  let addSave = document.createElement('div');
  addSave.innerText = `${formatTime(hours)}:${formatTime(
    minutes
  )}:${formatTime(seconds)}`
  saveContainer.appendChild(addSave);
});