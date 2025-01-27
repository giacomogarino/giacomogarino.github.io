/*https://it.crazygames.com/gioco/punchers*/

let bgImg;
let bgX = 0;
let speed = 3;

function preload() {
    bgImg = loadImage('img/sfondo.jpeg');
}

function setup() {
    createCanvas(windowWidth - 30, windowHeight - 30);
}

function draw() {
    background(220);

    image(bgImg, bgX, 0, width, height);
    image(bgImg, bgX + width, 0, width, height);

    if (bgX <= -width) {
        bgX = 0;
    }

    
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        bgX -= speed;
    }
}