console.log("Hola mundo")

let a=1;
let b=5;

console.log(typeof a)

let c=1;
let d=5;

palabra1= "campus"
palabra2= "Land";

concatenacion= palabra1+palabra2;
console.log(concatenacion)

operacion= (8*5)

console.log(concatenacion)

console.log(typeof c)


// ** FUNCION SIN RETORNO Y SIN PARAMETROS **
function funcionNormal(){
    console.log("Mi función");
}

// ** FUNCION SIN RETORNO Y CON PARAMETROS **
function suma(a,b){
    console.log(a+b);
}
// ** FUNCION CON RETORNO Y CON PARAMETROS **
function sumaR(a,b){
    //console.log(a+b);
    return a+b;
}
// ** FUNCION CON RETORNO Y SIN PARAMETROS **
function salonFavorito(){
    //console.log(a+b);
    return "P1";
}

// ** BUCLE FOR **

for (let i=0;i<10;i=i+1) {
    console.log(i);
}






// ** EJERCICIO 1 **

function celsiusAfahrenheit(celsius) {
    var fahrenheit = (celsius*9/5)+32;
    console.log(fahrenheit);
  }
celsiusAfahrenheit(10)
