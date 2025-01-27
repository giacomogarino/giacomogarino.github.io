class Player {
    constructor(image, x, y, w, h, speed) {
      this.player = image;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.speed = speed;
    }
  
    show() {
      image(this.player, this.x, this.y, this.w, this.h);
    }
  
    update() {
        if ((keyIsDown(LEFT_ARROW) || keyIsDown(65)) && this.x > 0) {
          this.x -= this.speed; // Muovi a sinistra
        }
        if ((keyIsDown(RIGHT_ARROW) || keyIsDown(68)) && this.x < width - this.w) {
          this.x += this.speed; // Muovi a destra
        }
        if ((keyIsDown(DOWN_ARROW) || keyIsDown(83)) && this.y > 0) {
          this.y -= this.speed; // Muovi verso l'alto
        }
        if ((keyIsDown(UP_ARROW) || keyIsDown(87)) && this.y < height - this.h) {
          this.y += this.speed; // Muovi verso il basso
        }
      }

}