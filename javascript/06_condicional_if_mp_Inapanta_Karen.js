console.log("Misión de Vuelo - Control de Torre");

let pasajerosObjetivo = 200;
let pasajerosEmbarcados = 150;
let combustibleInicial = 1000;
let combustibleGastado = 800;
let copilotoFatigado = "si";
let avionAveriado = "no";
let bonificacion = 0;

let porcentajeCumplimiento = (pasajerosEmbarcados / pasajerosObjetivo) * 100;
let combustibleRestante = combustibleInicial - combustibleGastado;

console.log("Resultados del vuelo:");

if (porcentajeCumplimiento >= 90) {
    console.log("Vuelo cumplido con éxito");
} else if (porcentajeCumplimiento > 70 && porcentajeCumplimiento < 90) {
    console.log("Vuelo cumplido parcialmente");
} else if (porcentajeCumplimiento > 50 && porcentajeCumplimiento <= 70) {
    console.log("Vuelo regular, se requiere mejorar");
} else {
    console.log("Vuelo fallido");
}

console.log("Evaluación de bonificación por desempeño");

if (porcentajeCumplimiento >= 90 && combustibleRestante >= 200) {
    bonificacion = 1000;
    console.log("Bonificación otorgada por desempeño excelente.");
} else {
    console.log("No se otorga bonificación por desempeño.");
}

console.log("Aterrizaje seguro en el aeropuerto de destino");

if (copilotoFatigado === "no" && avionAveriado === "no") {
    console.log("Aterrizaje seguro en el aeropuerto de destino.");
} else if (copilotoFatigado === "si" && avionAveriado === "no") {
    console.log("Aterrizaje con precaución, el copiloto está fatigado.");
} else if (copilotoFatigado === "no" && avionAveriado === "si") {
    console.log("Aterrizaje con precaución, el avión está averiado.");
} else {
    console.log("Aterrizaje con precaución, el copiloto está fatigado y el avión está averiado.");
}

console.log("Resumen del Vuelo");
console.log("Pasajeros Objetivo:", pasajerosObjetivo);
console.log("Pasajeros Embarcados:", pasajerosEmbarcados);
console.log("Porcentaje de Cumplimiento:", porcentajeCumplimiento.toFixed(2) + "%");
console.log("Combustible Inicial:", combustibleInicial);
console.log("Combustible Consumido:", combustibleGastado);
console.log("Combustible Restante:", combustibleRestante);
console.log("Copiloto Fatigado:", copilotoFatigado);
console.log("Avión Averiado:", avionAveriado);
console.log("Bonificación Otorgada:", bonificacion);