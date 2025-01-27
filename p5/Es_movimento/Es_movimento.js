let bgImg;
let bgY = 0;
let speed = 1;
let playerImg, ostacoloImg;
let player;
let obstacles = []; // Array per gli ostacoli
let time = 0; // Memorizza il tempo dell'ultimo ostacolo creato
let gameOver = false;

function preload() {
  bgImg = loadImage('img/sfondo.jpg');
  playerImg = loadImage('img/player.jpg'); // Usa una variabile separata per l'immagine del player
  ostacoloImg = loadImage('img/ostacolo.jpg'); // Usa una variabile separata per l'immagine degli ostacoli
}

function setup() {
  createCanvas(windowWidth - 30, windowHeight - 30);
  player = new Player(playerImg, width / 2, 50, 200, 200, 3);
  frameRate(60); // Aggiorna il frame rate
}

function draw() {
  background(220);

  // Sfondo scorrevole
  image(bgImg, 0, bgY, width, height);
  image(bgImg, 0, bgY + height, width, height);

  bgY -= speed;

  if (bgY <= -height) {
    bgY = 0;
  }

  /*if (gameOver) {
    // Mostra il messaggio di Game Over
    textSize(64);
    textAlign(CENTER, CENTER);
    fill(255, 0, 0);
    text("Game Over", width / 2, height / 2);
    noLoop();   // Ferma il ciclo di draw
    return;
  }*/

  // Mostra e aggiorna il giocatore
  player.show();
  player.update();

  // Aggiungi un ostacolo ogni 4 secondi
  if (millis() - time > 4000) {
    obstacles.push(new Ostacolo(ostacoloImg)); // Aggiungi un nuovo ostacolo
    time = millis(); // Aggiorna il timestamp
  }

  // Mostra e aggiorna tutti gli ostacoli
  for (let i = obstacles.length - 1; i >= 0; i--) {
    let obstacle = obstacles[i];
    obstacle.update();
    obstacle.show();

    // Rimuovi ostacoli fuori dallo schermo
    if (obstacle.offscreen()) {
      obstacles.splice(i, 1); // Rimuovi l'ostacolo dall'array
    }

    if (hits(player, obstacle)) {
      gameOver = true;  // Imposta il gioco in stato di "Game Over"
      textSize(64);
      textAlign(CENTER, CENTER);
      fill(255, 0, 0);
      text("Game Over", width / 2, height / 2);
      noLoop();
      return;
    }
  }
}

function hits(player, obstacle) {
  return (
    player.y < obstacle.y + obstacle.h && // Il giocatore tocca la parte superiore dell'ostacolo
    player.x + player.w > obstacle.x && // Il giocatore è sopra l'ostacolo (lato sinistro)
    player.x < obstacle.x + obstacle.w // Il giocatore è sopra l'ostacolo (lato destro)
  );
}
/*
let bgImg;
let bgY = 0;
let speed = 1;
let obstacles = []; // Array per gli ostacoli
let playerImg, ostacoloImg;
let player;
let gameOver = false; // Variabile per verificare lo stato del gioco
let time = 0; // Memorizza il tempo dell'ultimo ostacolo creato

function preload() {
  bgImg = loadImage('img/sfondo.jpg');
  playerImg = loadImage('img/player.jpg'); // Usa una variabile separata per l'immagine del player
  ostacoloImg = loadImage('img/ostacolo.jpg'); // Usa una variabile separata per l'immagine degli ostacoli
}

function setup() {
  createCanvas(windowWidth - 30, windowHeight - 30);
  player = new Player(playerImg, width / 2, height - 150, 100, 100, 3); // Creazione del player
  frameRate(60); // Aggiorna il frame rate
}

function draw() {
  if (gameOver) {
    // Mostra il messaggio di Game Over
    textSize(64);
    textAlign(CENTER, CENTER);
    fill(255, 0, 0);
    text("Game Over", width / 2, height / 2);
    noLoop(); // Ferma il ciclo di draw
    return;
  }

  background(220);

  // Sfondo scorrevole
  image(bgImg, 0, bgY, width, height);
  image(bgImg, 0, bgY + height, width, height);

  bgY -= speed;

  if (bgY <= -height) {
    bgY = 0;
  }

  // Mostra e aggiorna il giocatore
  player.show();
  player.update();

  // Aggiungi un ostacolo ogni 4 secondi
  if (millis() - time > 4000) {
    obstacles.push(new Ostacolo(ostacoloImg)); // Aggiungi un nuovo ostacolo
    time = millis(); // Aggiorna il timestamp
  }

  // Mostra e aggiorna tutti gli ostacoli
  for (let i = obstacles.length - 1; i >= 0; i--) {
    let obstacle = obstacles[i];
    obstacle.update();
    obstacle.show();

    // Controlla la collisione con il giocatore
    if (checkCollision(player, obstacle)) {
      gameOver = true; // Imposta il gioco in stato di "Game Over"
      return;
    }

    // Rimuovi ostacoli fuori dallo schermo
    if (obstacle.offscreen()) {
      obstacles.splice(i, 1); // Rimuovi l'ostacolo dall'array
    }
  }
}

// Funzione per verificare la collisione tra il giocatore e un ostacolo
function checkCollision(player, obstacle) {
  return (
    player.y < obstacle.y + obstacle.h && // Il giocatore tocca la parte superiore dell'ostacolo
    player.x + player.w > obstacle.x && // Il giocatore è sopra l'ostacolo (lato sinistro)
    player.x < obstacle.x + obstacle.w // Il giocatore è sopra l'ostacolo (lato destro)
  );
}*/