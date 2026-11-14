let nombre = "Capitán Karen";
let edad = 45;
let baseVuelo = "Aeropuerto Internacional";
let energia = 100;
let averia = false;

let aeronave = {
    nombre: "Capitán Karen",
    edad: 45,
    baseVuelo: "Aeropuerto Internacional",
    energia: 100,
    averia: false
}

console.log("Información de la aeronave comercial:");
console.log("Nombre del piloto: " + aeronave.nombre);
console.log("Edad del piloto: " + aeronave.edad);
console.log("Base de origen: " + aeronave.baseVuelo);
console.log("Nivel de energía: " + aeronave.energia + "%");
console.log("Avería en la aeronave: " + (aeronave.averia ? "Averiada" : "Operativa"));

console.log("Agregar una nueva propiedad a la aeronave");
aeronave.modelo = "Boeing 737-800";
console.log("Modelo de la aeronave: " + aeronave.modelo);
aeronave["capacidadPasajeros"] = 180;
console.log("Capacidad de pasajeros: " + aeronave["capacidadPasajeros"]);
console.log("Aeronave comercial", aeronave);
console.log("Actualizar el nivel de energía de la aeronave");
aeronave.energia = 80;
console.log("Nivel de energía actualizado: " + aeronave.energia + "%");
aeronave["averiada"] = true;
console.log("Nuevo estado de la aeronave: " + (aeronave.averia ? "Averiada" : "Operativa"));

console.log("Eliminar una propiedad de la aeronave");
delete aeronave.capacidadPasajeros;
console.log("Propiedad 'capacidadPasajeros' eliminada.");
console.log("Aeronave comercial", aeronave);

console.log("Recorrer las propiedades de la aeronave");
for (let propiedad in aeronave) {
    console.log(propiedad + ": " + aeronave[propiedad]);
}

let inventario = {
    boletos: 8,
    maletas: 10,
    pasaportes: 9,
}
let total = 0;
for (let objetos in inventario) {
    total += inventario[objetos];
}
console.log("Total inventario: " + total);