class Vehiculo{
    constructor(marca, modelo, año){
        this.marca = marca
        this.modelo = modelo
        this.año = año
    }
}

let carro = new Vehiculo("Volvo", "X60", 2021);
console.log(carro);

class auto extends Vehiculo{
    constructor(marca, modelo, año, Npuertas){
        super(marca, modelo, año)
        this.Npuertas = Npuertas
    }
}

let carro1 = new auto ("Honda", "WRD", 2022, 4)
console.log (carro1);