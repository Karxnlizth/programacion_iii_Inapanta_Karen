console.log("Sistema de Torre de Control iniciado en consola");
console.log("Declaración y asignación de Variables de Vuelo");

/*
Bitácora de vuelo,
Línea 1: Control de radares activos,
Línea 2: Verificación de niveles de combustible,
Línea 3: Monitoreo de aeronaves en pista,
Línea 4: Autorización de despegues y aterrizajes.
*/

let copiloto = 'Copiloto Ana';
// Nivel de combustible
let combustible = 100;
let codigoVuelo = 'VUE-137';
let pistaDisponible = true;
console.log(copiloto);
console.log(combustible);
console.log(codigoVuelo);
console.log(pistaDisponible);

copiloto = 'Capitán Juan';
combustible = 1500;
codigoVuelo = 'VUE-140';
pistaDisponible = false;
console.log(copiloto);
console.log(combustible);
console.log(codigoVuelo);
console.log(pistaDisponible);

var torreControl = "Torre Norte";
console.log("Sección ", torreControl);
torreControl = "Torre Sur";
console.log("Nueva Sección ", torreControl);

const aeropuertoPrincipal = "Aeropuerto Internacional";
console.log("Destino Principal ", aeropuertoPrincipal);