//creo la classe ostacolo
class Ostacolo {

    //crea la grandezza dell'ostacolo
    constructor() {
    
      //r rappresenta la grandezza dell'ostacolo
      this.r = 100;

      //x rappresenta la larghezza dell'ostacolo
      this.x = width;

      //y rapppresenta l'altezza dell'ostacolo
      this.y = height - this.r;
    
    }
  
    //velocità di movimento degli ostacoli
    move() {
      
        this.x -= 60;
    
    }

   // mostra l'immagine
      show() {

      image(oImg, this.x, this.y, this.r, this.r);

    }
  
  }