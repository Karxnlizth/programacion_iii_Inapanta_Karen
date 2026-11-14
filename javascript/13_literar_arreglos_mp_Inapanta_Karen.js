let maletasVuelo = [30, 50, 70, 40];
let posicion = 2;
let nuevaCapacidad = 100;

if (posicion >= 0 && posicion < maletasVuelo.length) {
    maletasVuelo[posicion] = nuevaCapacidad;
} else {
    console.log("Posición no válida");
}
for (let i = 0; i < maletasVuelo.length; i++) {
    console.log("Posición", i);
    console.log("Maleta", maletasVuelo[i]);
}
console.log(maletasVuelo);

let tripulantes = [
    {id: 1, nombre: "Capitán Carlos", energia: 99, edad: 45},
    {id: 2, nombre: "Copiloto Ana", energia: 80, edad: 30},
    {id: 3, nombre: "Karen", energia: 90, edad: 22},
];

for (let tripulante of tripulantes) {
    console.log("ID: " + tripulante.id);
    console.log("Nombre: " + tripulante.nombre);
    console.log("Energía: " + tripulante["energia"]);
    console.log("Edad: " + tripulante["edad"]);
};

console.log("El aeropuerto organiza sus vuelos");
misiones = [
    {
        nombre: "Capitán Carlos",
        maletas: [30,50,60]
    },
    {
        piloto: "Copiloto Ana",
        maletas: [20,30,30]
    },
    {
        piloto: "Karen",
        maletas: [90,80,70]
    }
];

for(let mision of misiones){                                                                                                                                                                                                                                                                                                                                                                      
    totalMaletas = 0;
    console.log("Piloto", mision.piloto);
    for (let maleta of mision.maletas){
        console.log("Maletas Registradas", maleta);
        totalMaletas += maleta;
    }
    console.log("Total Maletas Registradas por ", mision.piloto, "son: ", totalMaletas);
}

let maletasOriginales = [30,50,70,40];
let maletasDobles = maletasOriginales.map(elemento => {
    return elemento * 2;
});

console.log(maletasDobles);
let validas = maletasOriginales.filter(maleta => maleta >= 50);
let resultado = maletasOriginales.reduce((acumulador, elemento) => {
    return acumulador + elemento;
});