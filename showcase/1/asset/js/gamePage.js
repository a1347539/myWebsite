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
  console.log(123);
  document.getElementById("lastScore").innerHTML = localStorage.getItem(
    "lastScore"
  );
  document.getElementById("highScore").innerHTML = localStorage.getItem(
    "highScore"
  );
};
