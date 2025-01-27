
function preload() {
    bgImg = loadImage('img/sfondo.jpg'); // Carica l'immagine
}

function setup() {
    createCanvas(windowWidth - 30, windowHeight - 30); // Crea il canvas
    frameRate(100);
}

function draw() {
    background(0); // Imposta un colore di sfondo (opzionale)
    image(bgImg, 0, 0, width, height); // Disegna l'immagine sul canvas
}