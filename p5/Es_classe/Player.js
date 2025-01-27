class Player {
  constructor(image, x, y, w, h, speed, image2) {
      this.player = image;
      this.imgNor = image;
      this.imgRev = image2;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.speed = speed;
      this.vy = 2; // Velocità verticale
      this.gravity = 2; // Forza della gravità
      this.isJumping = false; // Stato del salto
  }

  show() {
      image(this.player, this.x, this.y, this.w, this.h);
  }

  imageChange(imageChange) {
      let d = dist(mouseX, mouseY, this.x + this.w / 2, this.y + this.h / 2);
      if (d < this.w / 2) {
          this.player = imageChange;
      }
  }

  jump() {
      if (!this.isJumping) { // Controllo per evitare salti multipli
          this.vy = -35; // Impulso verso l'alto
          this.isJumping = true;
      }
  }

  update() {
      // Applicare la gravità
      this.vy += this.gravity;
      this.y += this.vy;

      if (this.x > width - this.w || this.x < 0) {
          this.player = playerImgRev;
      }
      if (this.x <= 0) {
          this.player = playerImg;
      }

      // Controllo dei limiti inferiori (atterraggio)
      if (this.y > height - 100 - this.h) {
          this.y = height - 100 - this.h;
          this.vy = 0; // Resetta la velocità verticale
          this.isJumping = false; // Permette un nuovo salto
      }

      // Controllo dei limiti laterali
      if (this.x > width - this.w) {
          this.x = width - this.w;
      }
      if (this.x < 0) {
          this.x = 0;
      }

      // Controllo dei tasti per il movimento
      if (keyIsDown(65) || keyIsDown(37)) { // A o Freccia sinistra
          this.x -= this.speed;
          this.player = this.imgRev;
      }
      if (keyIsDown(68) || keyIsDown(39)) { // D o Freccia destra
          this.x += this.speed;
          this.player = this.imgNor;
      }
      if (keyIsDown(32)) { // Barra spaziatrice
          this.jump();
      }
  }

  //funzione collision
  collision(obstacle) {
      let d = dist(this.x + this.w / 2, this.y + this.h / 2, obstacle.x + obstacle.width / 2, obstacle.y + obstacle.height / 2);
      if (d < this.w / 2 + obstacle.width / 2) {
          console.log("Collisione");
          noLoop();
      }
  }
}
