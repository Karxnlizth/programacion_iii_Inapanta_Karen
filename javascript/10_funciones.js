console.log("Rick y Morty: Funciones en JavaScript");
function abrirPortal(portal) {
    console.log("Portal abierto.  !Vamos a otra dimensión!");
}
abrirPortal();
abrirPortal();
abrirPortal();
abrirPortal();

function recargarPistola(energia, recarga) {
    let energiaPistola = 50;
    energiaPistola = recargarPistola(energiaPistola, 30);
    energiaPistola = recargarPistola(energiaPistola, 40);
}
function pilotoNave(nombre) {
    console.log("El piloto " + nombre + "está a bordo de la nave. ");
}
pilotoNave("Rick");
pilotoNave("Morty");

function recargarPistola(energiaActual, recarga) {
    let energiaTotal = energiaActual + recarga;
    if (energiaTotal > 100) {
        energiaTotal = 100;
    }
    console.log("Recargando la pistola de portales. Nivel de energía actual: " + energiaTotal + "%");
    return energiaTotal;
}
let energiaPistola = 50;
energiaPistola = recargarPistola(energiaPistola, 30);
energiaPistola = recargarPistola(energiaPistola, 40);

console.log("Calcular descuentos interdimensionales");
function calcularDescuento(precio, descuento) {
    let precioFinal = precio - (precio * (descuento / 100));
    return precioFinal;
}
let precioOriginal = 100;
let porcentajeDescuento = 20;
let precioConDescuento = calcularDescuento(precioOriginal, porcentajeDescuento);
console.log("Precio original: " + precioOriginal + " Precio con descuento: " + precioConDescuento);

function evaluarCombustibleExamen(combustible, correctas, totalPreguntas) {
    let porcentajeCorrectas = (correctas / totalPreguntas) * 100;
    if (combustible < 20) {
        console.log("Advertencia: Combustible bajo. Nivel actual: " + combustible + "%");
    }
    if (porcentajeCorrectas >= 70) {
        console.log("¡Felicidades! Has aprobado el examen con un " + porcentajeCorrectas + "% de respuerstas correctas.");
    } else{
        console.log("Lo siento, has reprobado el examen con un " + porcentajeCorrectas + "% de respuestas correctas.");
    }
}
evaluarCombustibleExamen(15, 8, 10);
evaluarCombustibleExamen(50, 6, 10);



let cristalesMisiones = [15, 30, 45, 10, 25];
function calcularTotalCristales(cristales) {
    let total = 0;
    for (let i = 0; i < cristales.length; i++) {
        total += cristales[i];
    }
    return total;
}

let totalRecogido = calcularTotalCristales(cristalesMisiones);
console.log("El total de cristales recolectados es: " + totalRecogido);


let CristalesPorMision = [30, 55, 40, 80, 65];
function contarMisionesExitosas(cristales) {
    let misionesExitosas = 0;
    for (let i = 0; i < cristales.length; i++) {
        if (cristales[i] > 50) {
            misionesExitosas++;
        }
    }
    return misionesExitosas;
}
let exitosas = contarMisionesExitosas(CristalesPorMision);
console.log("Número de misiones exitosas: " + exitosas);


