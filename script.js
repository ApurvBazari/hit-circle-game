/** Utility function to create html elements */
function create(name, props) {
  var el = document.createElement(name);
  for (var p in props)
    el.setAttribute(p, props[p])
  return el;
}

/** Utility function to get random number from 0 to the max provided */
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/** Create 36 HTML circle elements and append them to circleGrid */
var circleContainer = document.createDocumentFragment();
for (var i = 0; i < 36; i++) {
  var circleEl = document.createElement('div')
  circleEl.key = i;
  circleEl.class = 'circle'
  circleContainer.appendChild(create("div", {
    key: i,
    class:'circle',
    onclick: `onCircleClicked(${i})`
  }));
}
document.getElementById("circleGrid").appendChild(circleContainer);

/** Sets the score for to the scorefield input */
function setScore() {
  document.getElementById("scoreField").value = score;
}

var currentIndex = null; // Maintains the current randomly selected value by the computer
var score = 0; // Maintains the total score for the user
setScore();

function onCircleClicked(key) {
  if(currentIndex === null)
    alert('Please start the game first')
  if (key === currentIndex) {
    score++
    currentIndex = getRandomInt(35)
    setScore()
  }
  else if(score > 0) {
    score--
    setScore()
  }
}

function onStop() {
  alert(`Your total score is ${score}`);
  score = 0
  setScore()
}

function onPlay () {
  currentIndex = getRandomInt(35);
}