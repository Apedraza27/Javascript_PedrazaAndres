class CuentaBancaria{
    constructor(Ncuenta, saldo){
        this.Ncuenta = Ncuenta;
        this.saldo = saldo;
    }

    Depositar(ingreso){
        if (ingreso > 0){
            console.log (this.saldo + ingreso);
        }
    }
    retirar(retiro){
        if (retiro < this.saldo && retiro > 0){
            console.log (this.saldo - retiro);
        }
    }
}


let Numero = parseInt(prompt("Ingresa el numero de cuenta:"));
let SaldoInicial = parseInt(prompt("Ingresa el saldo inicial"));
let cuenta = new CuentaBancaria(Numero, SaldoInicial);

while(true){
    console.log("1. Depositar");
    console.log("2. Retirar");
    console.log("3. Ver saldo");
    console.log("4. salir");
    let opcion = parseInt(prompt("Ingrese la posicion de lo que desea hacer"));

    if(opcion == 1){
        let ingreso = parseInt(prompt("Ingresa la cantidad que deseas ingresar"));
        cuenta.Depositar(ingreso);
    }else if (opcion == 2){
        let retiro = parseInt(prompt("Ingresa la cantidad que desees retirar"));
        cuenta.retirar(retiro)
    }else if (opcion == 3){
        console.log(cuenta.saldo)
    }else if (opcion == 4){
        break;
    }else{
        alert("Esta no es una opción valida")
    }
}
