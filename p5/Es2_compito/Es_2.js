let bgimg;
let value = 0;
let x;
let y;

function preload(){ //carica le immagini prima dell'esecuzione per evitare lag
    bgimg = loadImage('img/sfondo.jpg')
    player0 = loadImage('img/ney11.jpg')
    player1 = loadImage('img/ney01.jpg')
}

function setup(){
    createCanvas(windowWidth-30, windowHeight-30);
    frameRate(10);

    x = random(0, width - 100);
    y = random(0, height - 100);
}

function draw(){
    background(bgimg);

    
    if (value === 0) {
        image(player0, x, y);
    } else {
        image(player1, x, y);
    }
    
}

function mouseClicked() {
    let d1 = dist(mouseX, mouseY, x + player0.width / 2, y + player0.height / 2);
    let d2 = dist(mouseX, mouseY, x + player1.width / 2, y + player1.height / 2);
    if (d1 < 150 || d2 < 150){
        value = (value === 0) ? 1 : 0;
        if(value === 1){
            x = random(0, width - player0.width);
            y = random(0, height - player0.height);
        }
    }
}



// Variabili per lo sfondo
/*let bgImg;
let bgX = 0; // Posizione orizzontale dello sfondo
let bgSpeed = 1; // Velocità di scorrimento

function preload() {
  // Carica un'immagine per lo sfondo
  bgImg = loadImage('img/sfondo.jpg'); // Sostituisci con il percorso della tua immagine
}

function setup() {
  createCanvas(800, 400); // Dimensione del canvas
}

function draw() {
  background(220); // Colore di sfondo

  // Disegna lo sfondo in modo ripetuto
  image(bgImg, bgX, 0, width, height);
  image(bgImg, bgX + width, 0, width, height);

  // Aggiorna la posizione dello sfondo
  bgX -= bgSpeed;

  // Ripristina la posizione per effetto loop
  if (bgX <= -width) {
    bgX = 0;
  }

  // Puoi aggiungere qui il resto del gioco (personaggi, ostacoli, ecc.)
}*/


/*let bgImg;
let bgX = 0; // Posizione orizzontale dello sfondo
let bgY = 0; // Posizione verticale dello sfondo

// Variabili del personaggio
let playerX = 400; // Posizione fissa orizzontale del personaggio (al centro)
let playerY = 200; // Posizione verticale del personaggio
let playerSpeed = 5; // Velocità del personaggio

function preload() {
  // Carica un'immagine per lo sfondo
  bgImg = loadImage('img/sfondo.jpg'); // Sostituisci con il percorso della tua immagine
}

function setup() {
  createCanvas(800, 400); // Dimensione del canvas
}

function draw() {
  background(220); // Sfondo colore di base

  // Disegna lo sfondo ripetuto
  image(bgImg, bgX, bgY, width, height);
  image(bgImg, bgX + width, bgY, width, height);
  image(bgImg, bgX - width, bgY, width, height);
  image(bgImg, bgX, bgY + height, width, height);
  image(bgImg, bgX, bgY - height, width, height);

  // Movimento del personaggio (simulato muovendo lo sfondo)
  if (keyIsDown(LEFT_ARROW)) {
    bgX += playerSpeed; // Sfondo si muove a destra
  }
  if (keyIsDown(RIGHT_ARROW)) {
    bgX -= playerSpeed; // Sfondo si muove a sinistra
  }
  if (keyIsDown(UP_ARROW)) {
    bgY += playerSpeed; // Sfondo si muove in basso
  }
  if (keyIsDown(DOWN_ARROW)) {
    bgY -= playerSpeed; // Sfondo si muove in alto
  }

  // Disegna il personaggio (rimane al centro dello schermo)
  fill(255, 0, 0);
  ellipse(playerX, playerY, 40, 40); // Cerchio come personaggio

  // Puoi aggiungere qui ulteriori elementi (ostacoli, nemici, ecc.)
}*/
