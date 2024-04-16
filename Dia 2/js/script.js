/*

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

------------------------------------------------------------------------------------------------------------------------------------*/






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






/*------------------------------------------------------------------------------------------------------------------------------------
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







/*------------------------------------------------------------------------------------------------------------------------------------
let listaEmpleados = [];

const objEmpleado = {
    id: '',
    nombre: '',
    puesto: ''
}

let editando = false;

const formulario = document.querySelector('#formulario');
const nombreInput = document.querySelector('#nombre');
const puestoInput = document.querySelector('#puesto');
const btnAgregarInput = document.querySelector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    if(nombreInput.value === '' || puestoInput.value === '') {
        alert('Todos los campos se deben llenar');
        return;
    }

    if(editando) {
        editarEmpleado();
        editando = false;
    } else {
        objEmpleado.id = Date.now();
        objEmpleado.nombre = nombreInput.value;
        objEmpleado.puesto = puestoInput.value;

        agregarEmpleado();
    }
}

function agregarEmpleado() {

    listaEmpleados.push({...objEmpleado});

    mostrarEmpleados();

    formulario.reset();
    limpiarObjeto();
}

function limpiarObjeto() {
    objEmpleado.id = '';
    objEmpleado.nombre = '';
    objEmpleado.puesto = '';
}

function mostrarEmpleados() {
    limpiarHTML();

    const divEmpleados = document.querySelector('.div-empleados');
    
    listaEmpleados.forEach(empleado => {
        const {id, nombre, puesto} = empleado;

        const parrafo = document.createElement('p');
        parrafo.textContent = `${id} - ${nombre} - ${puesto} - `;
        parrafo.dataset.id = id;

        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarEmpleado(empleado);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminarEmpleado(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');

        divEmpleados.appendChild(parrafo);
        divEmpleados.appendChild(hr);
    });
}

function cargarEmpleado(empleado) {
    const {id, nombre, puesto} = empleado;

    nombreInput.value = nombre;
    puestoInput.value = puesto;

    objEmpleado.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';
    
    editando = true;
}

function editarEmpleado() {

    objEmpleado.nombre = nombreInput.value;
    objEmpleado.puesto = puestoInput.value;

    listaEmpleados.map(empleado => {

        if(empleado.id === objEmpleado.id) {
            empleado.id = objEmpleado.id;
            empleado.nombre = objEmpleado.nombre;
            empleado.puesto = objEmpleado.puesto;

        }

    });

    limpiarHTML();
    mostrarEmpleados();
    formulario.reset();

    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';
    
    editando = false;
}

function eliminarEmpleado(id) {

    listaEmpleados = listaEmpleados.filter(empleado => empleado.id !== id);

    limpiarHTML();
    mostrarEmpleados();
}

function limpiarHTML() {
    const divEmpleados = document.querySelector('.div-empleados');
    while(divEmpleados.firstChild) {
        divEmpleados.removeChild(divEmpleados.firstChild);
    }
}
*/