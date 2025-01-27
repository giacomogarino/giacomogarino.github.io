class Player {
    constructor(image,x, y, w, h, speed) {
      this.player = image;
      this.x = x; // Posizione X
      this.y = y; // Posizione Y
      this.w = w; // Larghezza
      this.h = h; // Altezza
      this.speed = speed; // Velocità di movimento
    }
  
    // Disegna il personaggio
    show() {
      image(this.player, this.x, this.y, this.w, this.h);
    }
  
    // Aggiorna la posizione in base ai tasti premuti
    update() {
      if (keyIsDown(LEFT_ARROW) && this.x > 0) {
        this.x -= this.speed; // Muovi a sinistra
      }
      if (keyIsDown(RIGHT_ARROW) && this.x < width - this.w) {
        this.x += this.speed; // Muovi a destra
      }
      if (keyIsDown(UP_ARROW) && this.y > 0) {
        this.y -= this.speed; // Muovi verso l'alto
      }
      if (keyIsDown(DOWN_ARROW) && this.y < height - this.h) {
        this.y += this.speed; // Muovi verso il basso
      }
      if(keyIsDown(SPACE)){
        this.y += this.speed;
        setTimeout(() => {}, 2000);
      }
    }

}