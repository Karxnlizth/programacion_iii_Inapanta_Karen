console.log("Abriendo puertas de embarque de la aeronave..." );
let puerta = 1;
while (puerta <= 5) {
    console.log("Abriendo Puerta de embarque " + puerta + ".");
    puerta++;
}
console.log("Todas las puertas de embarque han sido abiertas.");


console.log("Cuenta regresiva despegue de la aeronave");
let i = 10;
while (i >= 0) {
    console.log("Faltan " + i + " segundos para el despegue de la aeronave");
    i--;
}
console.log("Recargar los sistemas de navegación de la torre");
let energia = 50;
let recarga = 10;
let totalRecarga = 0;
while (energia < 100) {
    energia += recarga;
    totalRecarga += recarga;
    console.log("Recargando los sistemas de navegación. Nivel de energía actual: " + energia + "%");
}
console.log("Los sistemas de navegación completamente recargados después de "
    + totalRecarga + " recargas");
console.log("Consumo de combustible de la aeronave");
let combustible = 100;
let consumo = 10;
let viajes = 0;
while (combustible >= consumo) {
    combustible -= consumo;
    viajes++;
    console.log("Vuelo " + viajes + ". Combustible restante: " + combustible + " unidades");
    if (combustible < 50) {
        console.log("Advertencia: Combustible bajo. Nivel actual: " + combustible + " %");
    }
}
console.log("No hay suficiente combustible para otro vuelo.");
console.log("Total de vuelos realizados: " + viajes);

console.log("Activar puertas con restricciones con Do...While");
let energiaPortal = 50;
do{ 
    console.log("Activando puerta con restricciones. Nivel de energía actual: " + energiaPortal + "%");
    energiaPortal -= 15;

} while (energiaPortal > 0);
console.log("No hay suficiente energía para activar más puertas.");

console.log("Comprar repuestos para la flota del aeropuerto");
let ahorro = 80;
let meta = 500;
let ahorroSemanal = 70;
let semanas = 0;
do {
    ahorro += ahorroSemanal;
    semanas++;
    console.log("Semana " + semanas + ": Ahorro actual: " + ahorro + " unidades");
} while (ahorro < meta);
console.log("Meta alcanzada en " + semanas + " semanas. El aeropuerto puede comprar los repuestos.");