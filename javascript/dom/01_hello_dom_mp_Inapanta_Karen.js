console.log(document);
const titulo = document.getElementById("titulo");
console.log(titulo);
titulo.textContent = "Torre de Control - Airport: Excelencia en cada vuelo";

const estadoPuerta = document.getElementById("estadoPuerta");
const botonPuerta = document.getElementById("botonPuerta");
botonPuerta.addEventListener("click", function(){
    console.log("Ejecutando click en puerta de embarque");
    estadoPuerta.textContent = "¡Puerta de Embarque Abierta!";
    console.log("Texto Cambiado en el elemento estadoPuerta");
    alert("Proceso de Apertura de Puerta de Embarque Terminado");
});

const mensajePasajero = document.getElementById("mensajePasajero");
const botonPasajero = document.getElementById("botonPasajero");
botonPasajero.addEventListener("click", function(){
    mensajePasajero.textContent = "Pasajero Listo para el Embarque!";
});

let vuelos = 0;
const contadorVuelos = document.getElementById("contadorVuelos");
const nuevoVuelo = document.getElementById("nuevoVuelo");
nuevoVuelo.addEventListener("click", function(){
    vuelos += 1;
    contadorVuelos.textContent = vuelos;
});