console.log("Aeropuerto");

function abrirPuerta(puerta) {
    console.log("Puerta de embarque abierta. ¡Listos para el vuelo!");
}
abrirPuerta();
abrirPuerta();
abrirPuerta();
abrirPuerta();

function recargarTanque(combustible, recarga) {
    let combustibleTanque = 50;
    combustibleTanque = recargarTanque(combustibleTanque, 30);
    combustibleTanque = recargarTanque(combustibleTanque, 40);
}

function pilotoNave(nombre) {
    console.log("El piloto " + nombre + " está a bordo de la aeronave.");
}
pilotoNave("Capitán Ana");
pilotoNave("Copiloto Luis");

function recargarTanque(combustibleActual, recarga) {
    let combustibleTotal = combustibleActual + recarga;
    if (combustibleTotal > 100) {
        combustibleTotal = 100;
    }
    console.log("Recargando combustible de la aeronave. Nivel actual: " + combustibleTotal + "%");
    return combustibleTotal;
}
let combustibleTanque = 50;
combustibleTanque = recargarTanque(combustibleTanque, 30);
combustibleTanque = recargarTanque(combustibleTanque, 40);

console.log("Calcular descuentos en tarifas de vuelos");
function calcularDescuento(precio, descuento) {
    let precioFinal = precio - (precio * (descuento / 100));
    return precioFinal;
}
let precioOriginal = 100;
let porcentajeDescuento = 20;
let precioConDescuento = calcularDescuento(precioOriginal, porcentajeDescuento);
console.log("Tarifa original: $" + precioOriginal + " Tarifa con descuento de pasajero: $" + precioConDescuento);

function evaluarCombustibleExamen(combustible, correctas, totalPreguntas) {
    let porcentajeCorrectas = (correctas / totalPreguntas) * 100;
    if (combustible < 20) {
        console.log("Advertencia: Combustible bajo. Nivel actual: " + combustible + "%");
    }
    if (porcentajeCorrectas >= 70) {
        console.log("¡Felicidades! Has aprobado la certificación de vuelo con un " + porcentajeCorrectas + "% de respuestas correctas.");
    } else {
        console.log("Lo siento, has reprobado la certificación con un " + porcentajeCorrectas + "% de respuestas correctas.");
    }
}
evaluarCombustibleExamen(15, 8, 10);
evaluarCombustibleExamen(50, 6, 10);

let maletasVuelo = [15, 30, 45, 10, 25];
function calcularTotalMaletas(maletas) {
    let total = 0;
    for (let i = 0; i < maletas.length; i++) {
        total += maletas[i];
    }
    return total;
}

let totalRecogido = calcularTotalMaletas(maletasVuelo);
console.log("El total de maletas registradas es: " + totalRecogido);

let maletasPorVuelo = [30, 55, 40, 80, 65];
function contarVuelosExitosos(maletas) {
    let vuelosExitosos = 0;
    for (let i = 0; i < maletas.length; i++) {
        if (maletas[i] > 50) {
            vuelosExitosos++;
        }
    }
    return vuelosExitosos;
}
let exitosas = contarVuelosExitosos(maletasPorVuelo);
console.log("Número de vuelos exitosos: " + exitosas);