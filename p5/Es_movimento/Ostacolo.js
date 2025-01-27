class Ostacolo {
    constructor(image) {
      this.image = image;
      this.x = random(width); // Posizione casuale sull'asse X
      this.y = height + 20; // Posizione iniziale fuori dallo schermo (dal fondo)
      this.w = random(200, 250); // Larghezza casuale
      this.h = random(100, 150); // Altezza casuale
      this.speed = 1; // Velocità di salita (verso l'alto)
    }
  
    show() {
      image(this.image, this.x, this.y, this.w, this.h);
    }
  
    update() {
      this.y -= this.speed; // L'ostacolo sale verso l'alto
    }
  
    offscreen() {
      return this.y + this.h < 0; // Se l'ostacolo è completamente fuori dallo schermo
    }
  
    // Metodo per riposizionare l'ostacolo quando esce dallo schermo
    reset() {
      this.y = height + this.h; // Riposiziona l'ostacolo sotto lo schermo
      this.x = random(width); // Nuova posizione casuale sull'asse X
      this.w = random(100, 150); // Nuova larghezza casuale
      this.h = random(100, 150); // Nuova altezza casuale
    }
  }