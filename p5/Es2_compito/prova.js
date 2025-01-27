let bgimg;
let value = 'black';
let x = 100
let y = 100

function preload() {
bgimg = loadImage('sfondo.jpg');
omino = loadImage('1.png');
}

// Setup code
function setup () {
//createCanvas(400, 800);
createCanvas(bgimg.width, bgimg.height); //grandezza dell'immagine di sfondo
frameRate(1); //numero di fotogrammi da visualizzare ogni secondo
}

// Drawing code
function draw () {
background(bgimg);

if (x >= 600){
x = 0
}
console.log(x);
//x = x+1
//y = 50
x = random(0, width)
y = random(0, height)

//colore del quadrato e forma quadrato
fill(value);
ellipse(x, y, 100, 100)
image(omino,x, y);
}

function mouseClicked() {
let d = dist(mouseX, mouseY, x, y); //la distanza è minore dal punto cliccato al punto del centro del cerchio
if (d < 50) { //se la distanza è quindi minore del raggio
if (value === 'red') {
value = 'black';
} else {
value = 'red';
}
}
}