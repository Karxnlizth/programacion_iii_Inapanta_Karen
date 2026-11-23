const combustible = document.getElementById("combustible");
const ruta = document.getElementById("ruta");
const puerta = document.getElementById("puerta");

combustible.textContent = "Combustible: 100%";
ruta.textContent = "Ruta: UIO-GYE";
puerta.textContent = "Puerta de embarque: abierta";

// Selección de tripulante a través del nombre de la clase
const tripulante = document.querySelector(".tripulante");
tripulante.textContent = "Capitán Principal";

const h2Objeto = document.querySelector("h2");
h2Objeto.textContent = "Preparando Aeronave";

const planVuelo = document.querySelector("#planVuelo");
planVuelo.textContent = "Preparando Plan de Vuelo";

const estadoPasajero = document.querySelector("#pasajero .estado");
estadoPasajero.textContent = "Listo para Embarcar";

const destinos = document.querySelectorAll(".destinos");
console.log(destinos);
console.log(destinos.length);

console.log(destinos[0].textContent);
console.log(destinos[1].textContent);
console.log(destinos[2].textContent);
console.log(destinos[3].textContent);

for (let i = 0; i < destinos.length; i++) {
    console.log(destinos[i].textContent);
}
console.log("Recorrido de destinos con forEach");
destinos.forEach(function(destino) {
    console.log(destino.textContent);
});

console.log("Recorrido de destinos con for of");
for (let destino of destinos) {
    console.log(destino.textContent);
}