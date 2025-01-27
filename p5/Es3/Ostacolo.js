class Ostacolo {
    constructor(image) {
      this.image = image; // L'immagine dell'ostacolo
      this.x = random(width); // Posizione casuale sull'asse x
      this.y = height + 20; // Posizione iniziale fuori dallo schermo (dal fondo)
      this.w = random(100, 150); // Larghezza casuale
      this.h = random(100, 150); // Altezza casuale
      this.speed = 1; // Velocità di salita (verso l'alto)
    }
  
    // Metodo per disegnare l'ostacolo
    show() {
      image(this.image, this.x, this.y, this.w, this.h);
    }
  
    // Metodo per aggiornare la posizione dell'ostacolo (lo fa salire)
    update() {
      this.y -= this.speed; // L'ostacolo sale verso l'alto
    }
  
    // Metodo per verificare se l'ostacolo è fuori dallo schermo (sopra)
    offscreen() {
      return this.y + this.h < 0; // Se l'ostacolo è completamente fuori dallo schermo
    }
  
    // Metodo per riposizionare l'ostacolo quando esce dallo schermo
    reset() {
      this.y = height + this.h; // Riposiziona l'ostacolo sotto lo schermo
      this.x = random(width); // Nuova posizione casuale sull'asse x
      this.w = random(100, 150); // Nuova larghezza casuale
      this.h = random(100, 150); // Nuova altezza casuale
    }
  }
  