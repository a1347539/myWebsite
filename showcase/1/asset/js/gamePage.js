let getLevel = (difficulty) => {
  instruction = document.getElementById("instruction");
  $(instruction).css("display", "none");
  $(instruction).after(
    '<canvas id="canvas" width="600" height="400"></canvas>'
  );
  initCanvas(difficulty);
};

let initCanvas = (difficulty) => {
  init(difficulty);

  draw();
};

let setScore = () => {
  lastScore = localStorage.getItem("lastScore");
  console.log(lastScore);
  if (lastScore != null) {
    document.getElementById("lastScore").innerHTML = lastScore;
  }
  highScore = localStorage.getItem("highScore");
  if (highScore != null) {
    document.getElementById("highScore").innerHTML = highScore;
  }
};
