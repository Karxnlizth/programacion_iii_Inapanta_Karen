let pasajeros = [
    {
        id: 1,
        nombre: "Carlos Mendoza",
        ruta: "UIO-GYE",
        estado: "Embarcado"
    },
    {
        id: 2,
        nombre: "Ana Lucía Ruiz",
        ruta: "UIO-CUE",
        estado: "En espera"
    },
    {
        id: 3,
        nombre: "Sofía Viteri",
        ruta: "UIO-PTY",
        estado: "Cancelado"
    },
];

const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const ruta = document.getElementById("ruta");
const estado = document.getElementById("estado");
const guardar = document.getElementById("guardar");
const cancelar = document.getElementById("cancelar");

const cantidad = document.getElementById("cantidad");
const contenedor = document.getElementById("contenedor");
console.log("mostrarPasajeros");

function mostrarPasajeros() {
    contenedor.replaceChildren();
    pasajeros.forEach(function(pasajero) {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");
        const titulo = document.createElement("h3");
        titulo.textContent = pasajero.nombre;
        const parrafoRuta = document.createElement("p");
        parrafoRuta.textContent = "Ruta: " + pasajero.ruta;
        const parrafoEstado = document.createElement("p");
        parrafoEstado.textContent = "Estado: " + pasajero.estado;
        const acciones = document.createElement("div");
        acciones.classList.add("acciones");
        const botonEditar = document.createElement("button");
        botonEditar.textContent = "Editar";
        botonEditar.classList.add("editar");
        botonEditar.addEventListener("click", function() {
            editarPasajero(pasajero.id);
        });
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("eliminar");
        botonEliminar.addEventListener("click", function() {
            eliminarPasajero(pasajero.id);
        });
        acciones.append(botonEditar, botonEliminar);
        tarjeta.append(titulo, parrafoRuta, parrafoEstado, acciones);
        contenedor.appendChild(tarjeta);
    });
}

function eliminarPasajero(id) {
    const pasajero = pasajeros.find(function(pasajero) {
        return pasajero.id == id;
    });
    const confirmar = confirm("¿Eliminar a " + pasajero.nombre + "?");
    if (!confirmar) {
        return;
    }
    pasajeros = pasajeros.filter(function(pasajero) {
        return pasajero.id !== id;
    });
    mostrarPasajeros();
}

let idEditando = null;

function editarPasajero(id) {
    const pasajero = pasajeros.find(function(p) {
        return p.id == id;
    });
    nombre.value = pasajero.nombre;
    ruta.value = pasajero.ruta;
    estado.value = pasajero.estado;
    idEditando = id;
    guardar.textContent = "Editar";
    cancelar.hidden = false;
    nombre.focus();
}

mostrarPasajeros();

let siguienteId = 4;

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const nombrePasajero = nombre.value.trim();
    const rutaPasajero = ruta.value;
    const estadoPasajero = estado.value;
    if (idEditando == null) {
        const nuevoPasajero = {
            id: siguienteId,
            nombre: nombrePasajero,
            ruta: rutaPasajero,
            estado: estadoPasajero
        };
        siguienteId++;
        pasajeros.push(nuevoPasajero);
    } else {
        const pasajero = pasajeros.find(function(p) {
            return p.id == idEditando;
        });
        pasajero.nombre = nombrePasajero;
        pasajero.ruta = rutaPasajero;
        pasajero.estado = estadoPasajero;
    }
    mostrarPasajeros();
    limpiarFormulario();
});

function limpiarFormulario() {
    formulario.reset();
    idEditando = null;
    guardar.textContent = "Agregar";
    cancelar.hidden = true;
}

cancelar.addEventListener("click", function() {
    limpiarFormulario();
});