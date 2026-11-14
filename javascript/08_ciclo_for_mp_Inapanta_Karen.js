console.log("Ciclo For");

for (let i = 1; i <= 5; i++) {
    console.log("Iteración número:", i);
}

console.log("Fin del ciclo For");   

console.log("Cuenta regresiva despegue de la aeronave con mensaje final");
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("¡Despegue de la aeronave!");
    } else {
        console.log("Faltan " + i + " segundos para el despegue de la aeronave");
    }
}

console.log("Nivel de combustible de la aeronave")
let energia = 50;
for (let i = 0; i <= 100; i += 10) {
    if (energia + i > 100) {
        console.log("Nivel de combustible actual: " + (energia + i) + "%");
    }
}

let consumoPorViaje = 10;
let totalConsumido = 0;
for (let viaje = 1; viaje <= 5; viaje++) {
    totalConsumido += consumoPorViaje;
    console.log("Viaje " + viaje);
    console.log ("Total consumido: " + totalConsumido + " unidades de combustible");

}
console.log("Total consumido: " + totalConsumido + " unidades");

console.log("Promedio de pasajeros embarcados");
let totalCristales = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let cristales = dia * 5 + 5;
    totalCristales += cristales;
    console.log("Día " + dia + ": " + cristales + " pasajeros embarcados");
}

console.log ("Total de pasajeros embarcados: " + totalCristales);
console.log("Promedio de pasajeros por día: " + (totalCristales / dias).toFixed(2));

console.log("Terminales de Vuelo");
let seguras = 0;
let peligrosas = 0;
for (let dimension = 1; dimension <= 10; dimension++) {
    if (dimension % 2 === 0) {
        console.log("Terminal " + dimension + " tiene restricciones");
        peligrosas++;
    } else {
        console.log("Terminal " + dimension + " está operativa");
        seguras++;
    }
}
console.log("Total de terminales operativas: " + seguras);
console.log("Total de terminales con restricciones: " + peligrosas);

console.log("Registro de Pasajeros del Vuelo");
let cristalesRecolectados = [35, 60, 45, 80, 20, 90, 55];
let total = 0;
for (let i = 0; i < cristalesRecolectados.length; i++) {
    total += cristalesRecolectados[i];
    console.log("Día " + (i + 1) + ": " + cristalesRecolectados[i] + " pasajeros registrados");
}
console.log("Total de pasajeros registrados: " + total);
console.log("Número de vuelos exitosos: " + (typeof viajesExitosos !== 'undefined' ? viajesExitosos : 0));


console.log("Recorrer Tripulantes con for...of")
const personajes = ["Capitán", "Copiloto", "Aeromoza", "Navegante", "Inspector"];
for (let personaje of personajes) {
    console.log("Tripulante: " + personaje);
}

let nave = {
    nombre: "Avión Comercial",
    combustible: 100,
    velocidad: 850,
    tripulacion: ["Capitán", "Copiloto", "Aeromoza"]
};
console.log("Recorrer propiedades de un objeto con for...in");
for (let propiedad in nave) {
    console.log(propiedad + ": " + nave[propiedad]);
    if (propiedad === "tripulacion") {
        console.log("Miembros de la tripulación:");
        for (let miembro of nave[propiedad]) {
            console.log("- " + miembro);
        }
    }
}
for (let tripulante of nave.tripulacion) {
    console.log("Tripulante: " + tripulante);
}

let misiones = [
    { nombre: "Vuelo 1", cristales: 90, meta: 100, personaje: "Capitán" },
    { nombre: "Vuelo 2", cristales: 80, meta: 100, personaje: "Copiloto" },
    { nombre: "Vuelo 3", cristales: 95, meta: 100, personaje: "Aeromoza" }
];

let exitosas = 0;
for (let mision of misiones) {
    let porcentaje = (mision.cristales / mision.meta) * 100;
    console.log(mision.nombre + " supervisado por " + mision.personaje + " con un " + porcentaje.toFixed(2) + "%");
    if (porcentaje >= 90) {
        exitosas++;
    } else {
        console.log(mision.nombre + " no fue exitoso, se registró menos del 90% de ocupación.");
    }
}
console.log("Número de vuelos exitosos: " + exitosas);