let player;
let bgimg;
let value = 'black';
let x1 = 10;
let y1 = 10;
let x2 = 10;
let y2 = 300;

function preload(){ //carica le immagini prima dell'esecuzione per evitare lag
    bgimg = loadImage('img/pista.jpg')
    player = loadImage('img/cavallo.jpg')
    fine = loadImage('img/nastroFine.jpg')
    win = loadImage('img/win.jpg')
}

function setup(){
    createCanvas(bgimg.width, bgimg.height);
    frameRate(10);
}

function draw(){
    background(bgimg);

    image(fine, 500,300);
    


    x1 = x1 + random(0, 10);
    y1 = 10;

    image(player, x1, y1);



    x2 = x2 + random(0, 10);
    y2 = 300;
    
    image(player, x2, y2);

    if(x2 == 500 || x1 == 500){
        image(win, bgimg.width/2, bgimg.height/2);
    }
}