class Rectangulo{
    constructor(ancho, alto){
        this.ancho = ancho;
        this.alto = alto;
    }
    
    area(){
      console.log(this.ancho * this.alto);
    }

    perimetro(){
      console.log((this.ancho*2)+(this.alto*2));
    }
}

let rectangulo = new Rectangulo(5, 5);
rectangulo.area();
rectangulo.perimetro();
