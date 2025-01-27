let bgImg;
let playerImg, playerImgRev, imageChange;
let player;

function preload() {
    bgImg = loadImage('img/sfondo.avif');
    playerImg = loadImage('img/player.gif');
    playerImgRev = loadImage('img/player_reverse.gif');
    imageChange = loadImage('img/player_change.jpg');
    bomba = loadImage('img/bomba.jpeg');
}

function setup() {
    createCanvas(windowWidth - 30, windowHeight - 30);
    player = new Player(playerImg, 50, height - 315, 200, 200, 7, playerImgRev);
    obstacle = new Obstacle(width/2, height - 200, 75, 75, bomba);
    frameRate(60);
}

function draw() {
    background(220);

    // Sfondo
    image(bgImg, 0, 0, width, height);

    // Mostra e aggiorna il giocatore
    player.show();
    player.update();

    if (keyIsDown(32) || keyIsDown(38)) {
        player.jump();
    }

    //richiamo la funzione draw dell'ostacolo
    obstacle.show();

    player.collision(obstacle);
}

function mouseClicked() {
    player.imageChange(imageChange);
}
