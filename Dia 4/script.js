/*Un objeto en JavaScript es una estructura de datos que puede contener tanto propiedades como métodos. 
Puedes crear un objeto en JavaScript de varias formas, 
pero una de las más comunes es utilizando la sintaxis de llaves {} para definir un objeto literal. 
Aquí tienes un ejemplo de cómo crear un objeto en JavaScript y algunos ejemplos de código:*/

/*Crear un objeto en JavaScript:*/

// Crear un objeto literal
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
  saludar: function() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
  }
};


/*Acceder a las propiedades y métodos de un objeto:*/
console.log(persona.nombre); // Output: Juan
console.log(persona.edad); // Output: 30
persona.saludar(); // Output: Hola, me llamo Juan y tengo 30 años.


/*Crear un objeto utilizando una función constructora:*/
function Pelicula(titulo, director, año) {
  this.titulo = titulo;
  this.director = director;
  this.año = año;
}

const nuevaPelicula = new Pelicula("Inception", "Christopher Nolan", 2010);
console.log(nuevaPelicula.titulo); // Output: Inception
console.log(nuevaPelicula.director); // Output: Christopher Nolan
console.log(nuevaPelicula.año); // Output: 2010




/*Por favor hacer una representación de objetos en JavaScript de los siguientes elementos.


1. Una persona
2. Un coche
3. Un libro
4. Un número
5. Una función */

1.
let persona1 = {
    nombre: "Juan",
    edad: 30,
    genero: "masculino",
    ocupacion: "ingeniero"
  };  

2.  
  let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    color: "rojo",
    año: 2022
  };

 
3. 
  let libro = {
    titulo: "El Alquimista",
    autor: "Paulo Coelho",
    genero: "Ficción",
    año_publicacion: 1988
  };


4.
  let numero = 42;



5.
  function suma(a, b) {
    return a + b;
  }
  