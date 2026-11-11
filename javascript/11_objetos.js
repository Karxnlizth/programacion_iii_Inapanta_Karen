let nombre ="Rick";
let edad = 70;
let planeta = "Tierra C-137";
let energia = 100;
let averia = false;

let nave = {
    nombre: "Rick",
    edad: 70,
    planeta: "Tierra C-137",
    energia: 100,
    averia: false
}

console.log("Informacion de la nave de Rick:");
console.log("Nombre del piloto: " + nave.nombre);
console.log("Edad del piloto: " + nave[edad]);
console.log("Planeta de origen: " + nave[planeta]);
console.log("Nivel de energía: " + nave.energia + "%");
console.log("Avería en la nave: " + (nave.averia ? "Averiada" : "Operativa"));

console.log("Agregar una nueva propiedad a la nave de Rick");
nave.modelo = "Nave Espacial X-2000";
console.log("Modelo de la nave: " + nave.modelo);
nave["capacidadPasajeros"] = 5;
console.log("Capacidad de pasajeros: " + nave["capacidadPasajeros"]);
cosnole.log("Nave de Rick", nave);

console.log("Actualizar el nivel de energía de la nave de Rick");
nave.energia = 80;
console.log("Nivel de energía actualizado: " + nave.energia + "%");
nave["averiada"] = true;
console.log("Nuevo estado de la nave: " + (nave.averia ? "Averiada" : "Operativa"));
console.log("Eliminar una propiedad de la nave de Rick");
delete nave.capacidadPasajeros;
console.log("Propiedad 'capacidadPasajeros' eliminada.");
console.log("Nave de Rick", nave);

console.log("Recorrer las propiedades de la nave de Rick");
for (let propiedad in nave) {
    console.log(propiedad + ": " + nave[propiedad]);
}



let inventario = {
    vino: 8,
    cristales: 10,
    pistola: 9,
}
let total = 0
for (let objetos in inventario) {
    total =+ objetos
    
}
console.log ("Total invetario" + total)