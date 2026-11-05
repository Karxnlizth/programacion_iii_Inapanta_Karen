console.log("Ciclo For");

for (let i = 1; i <= 5; i++) {
    console.log("Iteración número:", i);
}

console.log("Fin del ciclo For");   

console.log("Cuenta regresiva despegue de la nave de Morty con mensaje fianl");
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("¡Despegue de la nave de Morty!");
    } else {
        console.log("Faltan " + i + " segundos para el despegue de la nave de Morty");
    }
}

console.log("Nivel de energia Rick")
let energia = 50;
for (let i = 0; i <= 100; i += 10) {
    if (energia + i > 100) {
        console.log("Nivel de energía actual: " + (energia + i) + "%");
    }
}

let consumoPorViaje = 10;
let totalConsumido = 0;
for (let viaje = 1; viaje <= 5; viaje++) {
    totalConsumido += consumoPorViaje;
    console.log("Viaje" + viaje);
    console.log ("totalConsumido" + totalConsumido + "unidade de combustible");

}
console.log("Total consumido:"+ totalConsumido + " unidades");

console. log("Promedio de los cristales");
let totalCristales = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let cristales = dia *5+5;
    totalCristales += cristales;
    console.log("Día " + dia + ": "+ cristales + "cristales recdolectados");
}

console.log ("Total de cristales recolectados:" + totalCristales);
console.log("Promedio de cristales por dia"+ (totalCristales/dias).toFixed(2));

console.log("Dimensions Peligrosas");
let seguras = 0;
let peligrosas = 0;
for (let dimension = 1; dimension <= 10; dimension++) {
    if (dimension % 2 === 0) {
        console.log("Dimensión " + dimension + " es peligrosa");
        peligrosas++;
    } else {
        console.log("Dimensión " + dimension + " es segura");
        seguras++;
    }
}
console.log("Total de dimensiones seguras: " + seguras);
console.log("Total de dimensiones peligrosas: " + peligrosas);

console.log("Recoleccion de Cristales de Morty");
let cristalesRecolectados = [35,60,45,80,20,90,55];
let total = 0;
for (let i = 0; i < cristalesRecolectados.length; i++) {
    total += cristalesRecolectados[i];
    console.log("Día " + (i + 1) + ": " + cristalesRecolectados[i] + " cristales recolectados");
}
console.log("Total de cristales recolectados: " + total);
console.log("Numero de viajes exitossos: " + viajesExitosos);


console.log("Recorrer Personajs con for ...of")
const personajes = ["Rick", "Morty", "Summer", "Beth", "Jerry"];
for (let personaje of personajes) {
    console.log("Personaje: " + personaje);
}

let nave= {
    nombre: "Nave de Rick",
    combustible: 100,
    velocidad: 500,
    tripulacion: ["Rick", "Morty", "Summer"]
};
console.log("Recorrer propiedades de un objeto con for ...in");
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
    { nombre: "Misión 1", cristales: 90, meta: 100, personaje: "Rick" },
    { nombre: "Misión 2", cristales: 80, meta: 100, personaje: "Morty" },
    { nombre: "Misión 3", cristales: 95, meta: 100, personaje: "Summer" }
];

let exitosas = 0;
for (let mision of misiones) {
    let porcentaje = (mision.cristales / mision.meta) * 100;
    console.log(mision.nombre + " completada por " + mision.personaje + " con un " + porcentaje.toFixed(2) + "%");
    if (porcentaje >= 90) {
        exitosas++;
    } else {
        console.log(mision.nombre + " no fue exitosa, se recolectaron menos del 90% de cristales.");
    }
}
console.log("Número de misiones exitosas: " + exitosas);