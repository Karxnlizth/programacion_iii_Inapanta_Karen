let personajes = [
    {
        id:1,
        nombre: "Rich Sanchez",
        dimension: "C-137",
        estado: "Vivo"
    },
    {
        id:2,
        nombre: "Rich Sanchez",
        dimension: "C-137",
        estado: "Muerto"
    },
    {
        id:3,
        nombre: "Rich Sanchez",
        dimension: "C-137",
        estado: "Desconocido"
    }
];

const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const dimension = document.getElementById("dimension");
const estado = document.getElementById("estado");
const guardar = document.getElementById("guardar");
const cancelar = document.getElementById("cancelar");

const cantidad = document.getElementById("cantidad");
const contenedor = document.getElementById("contenedor");

console.log("mostrarPersonajes");

function mostrarPersonajes(){
    contenedor.replaceChildren();
    personajes.forEach(function(personaje){
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");
        const titulo = document.createElement("h3");
        titulo.textContent=personaje.nombre;
        const parrafoDimension=document.createElement("p");
        parrafoDimension.textContent="Dimension: "+personaje.dimension;
        const parrafoEStado = document.createElement("p");
        parrafoEStado.textContent="Estado: "+personaje.estado;
        tarjeta.append(titulo, parrafoDimension, parrafoEStado);

        contenedor.appendChild(tarjeta);
    });
}
mostrarPersonajes();

siguienteId=4;
formulario.addEventListener("submit"), function(event){
    event.preventDefault();
    const nombrePersonaje = nombre.ariaValueMax.trim();
    const dimensionPersonaje = dimension.value;
    const estadoPersonaje = estado.value;
    const nuevoPersonaje={
        id: siguienteId,
        nombre: nombrePersonaje,
        dimension: dimensionPersonaje,
        estado: estadoPersonaje,
    }
    siguienteId++;
    personajes.push(nuevoPersonaje);
    mostrarPersonajes()
}