function Obstacle(x, y, dx, dy, ax, ay, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.ax = ax;
  this.ay = ay;
  this.radius = radius;
  this.collided = false;

  this.draw = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    this.move();
  };

  this.move = () => {
    this.dx += this.ax;
    this.dy += this.ay;
    this.x += this.dx;
    this.y += this.dy;
    if (
      this.y + this.dy < this.radius ||
      this.y + this.dy > canvas.height - this.radius
    ) {
      this.dy *= -1;
      this.ay *= -0.1;
    }
    if (
      this.x + this.dx < this.radius ||
      this.x + this.dx > canvas.width - this.radius
    ) {
      this.dx *= -1;
      this.ax *= -0.1;
    }
  };

  this.collide = (player) => {
    if (
      this.x > player.x &&
      this.x < player.x + player.length &&
      this.y > player.y &&
      this.y < player.y + player.length
    ) {
      if (!this.collided) {
        setHealth();
        this.collided = true;
      }
      let index = obstacles.indexOf(this);
      obstacles.splice(index, 1);
      spawnObstacle(1);
      console.log(health);
      return;
    }
  };
}

function Player(x, y, length) {
  this.x = x;
  this.y = y;
  this.length = length;
  this.right = false;
  this.left = false;
  this.up = false;
  this.down = false;

  this.draw = () => {
    ctx.beginPath();
    ctx.rect(this.x, this.y, length, length);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
    this.move();
    document.addEventListener("keydown", this.keyDownHandler, false);
    document.addEventListener("keyup", this.keyUpHandler, false);
  };

  this.move = () => {
    if (this.right) {
      this.x += 7;
      if (this.x + this.length > canvas.width) {
        this.x = canvas.width - this.length;
      }
    } else if (this.left) {
      this.x -= 7;
      if (this.x < 0) {
        this.x = 0;
      }
    } else if (this.up) {
      this.y -= 7;
      if (this.y < 0) {
        this.y = 0;
      }
    } else if (this.down) {
      this.y += 7;
      if (this.y + this.length > canvas.height) {
        this.y = canvas.height - this.length;
      }
    }
  };

  this.keyDownHandler = (e) => {
    if (e.keyCode == "68") {
      this.right = true;
    } else if (e.keyCode == "65") {
      this.left = true;
    } else if (e.keyCode == "87") {
      this.up = true;
    } else if (e.keyCode == "83") {
      this.down = true;
    }
  };

  this.keyUpHandler = (e) => {
    if (e.keyCode == "68") {
      this.right = false;
    } else if (e.keyCode == "65") {
      this.left = false;
    } else if (e.keyCode == "87") {
      this.up = false;
    } else if (e.keyCode == "83") {
      this.down = false;
    }
  };
}

var ctx;
var canvas;

var health = 3;
var score = 0;
var time = 0;

var scoreBoard;
var timeBoard;

var obstacles = new Array();

let init = (difficulty) => {
  ctx = document.querySelector("canvas").getContext("2d");
  canvas = document.getElementById("canvas");
  setup(difficulty);
};

let setup = (difficulty) => {
  if (difficulty == 0) {
    spawnObstacle(3);
    scoreInit(30);
    player = new Player(canvas.width / 2, canvas.height / 2, 30);
  } else if (difficulty == 1) {
    spawnObstacle(7);
    scoreInit(100);
    player = new Player(canvas.width / 2, canvas.height / 2, 30);
  } else if (difficulty == 2) {
    spawnObstacle(14);
    scoreInit(150);
    player = new Player(canvas.width / 2, canvas.height / 2, 30);
  }
};

let draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  player.draw();

  obstacles.forEach((obstacle) => {
    obstacle.draw();
    obstacle.collide(player);
  });

  if (health <= 0) {
    gameOver();
    return;
  }
  Id = window.requestAnimationFrame(draw);
};

let scoreInit = (earning) => {
  document.getElementById("health").innerHTML = "Health: " + health;
  scoreBoard = document.getElementById("score");
  scoreBoard.innerHTML = "Score: " + score;

  timeBoard = document.getElementById("time");
  timeBoard.innerHTML = "Time Passed: " + "00:00";

  setInterval(() => {
    setStats(earning);
  }, 1000);
};

let setHealth = () => {
  health -= 1;
  document.getElementById("health").innerHTML = "Health: " + health;
};

let setStats = (earning) => {
  time += 1;
  let minute = parseInt(time / 60);
  let second = parseInt(time % 60);
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  timeBoard.innerHTML = "Time Passed: " + minute + ":" + second;
  score = eval(score + earning);
  scoreBoard.innerHTML = "Score: " + score;
};

let gameOver = () => {
  highScore = localStorage.getItem("highScore");
  if (score > highScore) {
    localStorage.setItem("highScore", score);
  }
  localStorage.setItem("lastScore", score);
  alert("GAME OVER");
  document.location.reload();

  window.cancelAnimationFrame(Id);
};

let spawnObstacle = (amount) => {
  for (i = 0; i < amount; i++) {
    x = Math.floor(Math.random() * 400);
    y = Math.floor(Math.random() * 400);
    dx = Math.random() * 2 - 1;
    dy = Math.random() * 1 - 1;
    ax = Math.random() * 0.05;
    ay = Math.random() * 0.05;
    obstacles.push(new Obstacle(x, y, dx, dy, ax, ay, 10));
  }
};
