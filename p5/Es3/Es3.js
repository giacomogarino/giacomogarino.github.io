let bgImg;
let bgY = 0;
let bgSpeed = 1;
let player;
let obstacles = [];

function preload() {
  
  bgImg = loadImage('img/sfondo.jpg');
  player = loadImage('img/player.jpg');
  ostacolo = loadImage('img/ostacolo.jpg')
}

function setup() {
  createCanvas(windowWidth-30, windowHeight-30);

  player = new Player(player,width / 2, 50, 200, 200, 5);
  //ostacolo = new Ostacolo(ostacolo);
  for (let i = 0; i < 15; i++) {
    obstacles.push(new Ostacolo(ostacolo)); // Aggiungi ostacoli all'array
  }
  frameRate(100);
}

function draw() {
  background(220);

  image(bgImg, 0, bgY, width, height);
  image(bgImg, 0, bgY + height, width, height);

  bgY -= bgSpeed;

  if (bgY <= -height) {
    bgY = 0;
  }

  player.show();
  player.update();

  /*for (let i = 0; i < obstacles.length; i++) {
    let obstacle = obstacles[i];
    obstacle.update();
    obstacle.show();
    if (obstacle.offscreen()) {
      obstacle.reset();
    }
  }*/


}
/*

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
      moveLeft = true;
    } else if (keyCode === RIGHT_ARROW) {
      moveRight = true;
    } else if (keyCode === UP_ARROW) {
      moveUp = true;
    } else if (keyCode === DOWN_ARROW) {
      moveDown = true;
    }
  }
  
  
  function keyReleased() {
    if (keyCode === LEFT_ARROW) {
      moveLeft = false;
    } else if (keyCode === RIGHT_ARROW) {
      moveRight = false;
    } else if (keyCode === UP_ARROW) {
      moveUp = false;
    } else if (keyCode === DOWN_ARROW) {
      moveDown = false;
    }
  }*/
