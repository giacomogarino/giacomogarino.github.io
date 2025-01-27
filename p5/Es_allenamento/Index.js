// index.js

let circle;
let square;

function setup() {
    createCanvas(windowWidth - 30, windowHeight - 30);
    circle = new Circle(100, height - 150, 50);
    square = new Square(width / 2, height - 200, 75, 50);
}

function draw() {
    background(220);

    // Mostra e aggiorna il cerchio
    circle.show();
    circle.update();

    // Mostra e aggiorna il quadrato
    square.show();
    square.update();

    // Controlla collisioni
    if (circle.collidesWith(square)) {
        textSize(32);
        fill(255, 0, 0);
        textAlign(CENTER, CENTER);
        text('Game Over', width / 2, height / 2);
        square.changeColor();
        noLoop(); // Ferma il loop di disegno
    }
    //richiamo funzione cambiamento colore

}

class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.vy = 0; // Velocità verticale
        this.gravity = 2; // Gravità
        this.isJumping = false;
    }

    show() {
        fill(0, 0, 255);
        ellipse(this.x, this.y, this.radius * 2);
    }

    update() {
        // Gravità
        this.vy += this.gravity;
        this.y += this.vy;

        // Controlla i limiti inferiori (atterraggio)
        if (this.y > height - this.radius) {
            this.y = height - this.radius;
            this.vy = 0;
            this.isJumping = false;
        }

        // Movimento orizzontale
        if (keyIsDown(65)) { // A
            this.x -= 5;
        }
        if (keyIsDown(68)) { // D
            this.x += 5;
        }

        // Salto
        if (keyIsDown(32) && !this.isJumping) { // SPACE
            this.vy = -30;
            this.isJumping = true;
        }
    }
    
    
    collidesWith(square) {
        let distX = abs(this.x - square.x - square.width / 2); 
        let distY = abs(this.y - square.y - square.height / 2);

        if (distX > (square.width / 2 + this.radius)) {
            return false;
        }
        if (distY > (square.height / 2 + this.radius)) {
            return false;
        }

        if (distX <= (square.width / 2)) {
            return true;
        }
        if (distY <= (square.height / 2)) {
            return true;
        }

        let dx = distX - square.width / 2;
        let dy = distY - square.height / 2;
        return (dx * dx + dy * dy <= (this.radius * this.radius));
    }
}

class Square {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 3;
    }

    show() {
        fill(255, 0, 0);
        rect(this.x, this.y, this.width, this.height);
    }

    update() {
        this.x += this.speed;

        // Controlla i limiti laterali
        if (this.x > width - this.width || this.x < 0) {
            this.speed *= -1; // Inverte la direzione
        }
    }

    //funzione cambio colore
    changeColor() {
        if (this.x > width - this.width || this.x < 0) {
            fill(random(255), random(255), random(255));
        }
    }
    

}

