// Paso 1: Estructura de datos
let items = [];

// Paso 2: Funciones CRUD
function addItem(item) {
    items.push(item);
}

function readItems() {
    console.log("Elementos:");
    items.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
}

function updateItem(index, newItem) {
    if (index >= 0 && index < items.length) {
        items[index] = newItem;
    } else {
        console.log("Índice fuera de rango.");
    }
}

function deleteItem(index) {
    if (index >= 0 && index < items.length) {
        items.splice(index, 1);
    } else {
        console.log("Índice fuera de rango.");
    }
}

// Ejemplo de uso
addItem("Elemento 1");
addItem("Elemento 2");
readItems(); // Muestra los elementos

updateItem(0, "Elemento Actualizado");
readItems(); // Muestra los elementos actualizados

deleteItem(1);
readItems(); // Muestra los elementos después de eliminar uno





// ** COORDINADOR **
var registros = []
var opcion = 0;
var opciones_campers = 0;
var opciones_trainers = 0;
var opciones_grupos = 0;

do{
    opcion=Number(prompt(`Bienvenido, ¿Que desea realizar? \n
1. Ver opciones sobre los campers \n
2. Ver opciones sobre los trainers \n
3. Grupos (creacion, vista...) \n
0. Salir`))
switch (opcion){
        case 1:
            opciones_campers=Number(prompt(`Bienvenido \n
        1. Inscripcion ( Autorizar campers para realizar la prueba de ingreso) \n
        2. Ingresar la nota de los campers que se han registrado \n
        3. Matriculas ( Asignar grupo a camper Aprobado) \n
        4. Graduar campers (comprueba que todos los modulos fueron realizados) \n
        5. Expulsar campers \n
        6. Modificar nota de modulo de camper \n
        0. Salir`))
break;
        case 2:
            opciones_trainers=Number(prompt(`Bienvenido \n
        1. Ingreso de trainer \n
        2. Ver rutas segun trainers \n
        3. Ver informacion de trainer \n
        0. Salir`))
        break
    case 0:
        alert("Hasta luego")
    }
switch (opcion) {
    case 3:
        opciones_grupos=Number(prompt(`Bienvenido \n
        1. Crear grupo \n
        2. Ver grupos \n
        0. Salir`))
        break;

    default:
        break;
}
}

while(opcion!=0) 





/*
var registros = []
var opcion = 0;
do{
    opcion=Number(prompt(`Bienvenido \n
1. Mostrar registros \n
2. Insertar Registros \n
0. Salir`))
switch (opcion){
        case 1:
            console.log(registros)
break;
        case 2:
            var nuevo = prompt("Ingresa un elemento para los registros")
            registros.push(nuevo)
        break
    case 0:
        alert("Hasta luego")
    }

}
while(opcion!=0) 
*/