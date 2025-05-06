var shape = document.getElementById("shape");
var resultDisplay = document.getElementById("result");
var gameArea = document.getElementById("game-area");
let startTime = 0;

function getRandomColor() {
  const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function showShape() {
  var areaWidth = gameArea.clientWidth;
  var areaHeight = gameArea.clientHeight;
  var size = Math.random() * 150 + 50; 
  var maxLeft = areaWidth - size;
  var maxTop = areaHeight - size;
  shape.style.width = size + "px";
  shape.style.height = size + "px";
  shape.style.left = Math.random() * maxLeft + "px";
  shape.style.top = Math.random() * maxTop + "px";
  shape.style.backgroundColor = getRandomColor();
  shape.style.display = "block";
  startTime = new Date().getTime();
}

shape.onclick = function () {
  shape.style.display = "none";
  var endTime = new Date().getTime();
  var reactionTime = ((endTime - startTime) / 1000).toFixed(3);
  resultDisplay.textContent = `Your reaction time: ${reactionTime} seconds`;
  
  setTimeout(showShape, Math.random() * 2000 + 1000);
}