console.log("Misión de rescate");

let cristalesObjetivos = 200;
let cristalesRecogidos = 150;
let combustibleInicial = 1000;
let combustibleGastado = 800;
let mortyHerido = "si";
let naveAveriada = "no";
let bonificacion = 0;

let porcentajeCumplimiento = (cristalesRecogidos / cristalesObjetivos) * 100;
let combustibleRestante = combustibleInicial - combustibleGastado;

console.log("Resultados de la misión:");

if (porcentajeCumplimiento >= 90) {
    console.log("Misión cumplida con éxito");
} else if (porcentajeCumplimiento > 70 && porcentajeCumplimiento < 90) {
    console.log("Misión cumplida parcialmente");
} else if (porcentajeCumplimiento > 50 && porcentajeCumplimiento <= 70) {
    console.log("Misión regular, se requiere mejorar");
} else {
    console.log("Misión fallida");
}

console.log("Evaluación de bonificación por desempeño");

if (porcentajeCumplimiento >= 90 && combustibleRestante >= 200) {
    bonificacion = 1000;
    console.log("Bonificación otorgada por desempeño excelente.");
} else {
    console.log("No se otorga bonificación por desempeño.");
}

console.log("Regreso seguro a la dimensión original");

if (mortyHerido === "no" && naveAveriada === "no") {
    console.log("Regreso seguro a la dimensión original.");
} else if (mortyHerido === "si" && naveAveriada === "no") {
    console.log("Regreso a la dimensión original con precaución, Morty está herido.");
} else if (mortyHerido === "no" && naveAveriada === "si") {
    console.log("Regreso a la dimensión original con precaución, la nave está averiada.");
} else {
    console.log("Regreso a la dimensión original con precaución, Morty está herido y la nave está averiada.");
}

console.log("Resumen de la misión");
console.log("Cristales Objetivos:", cristalesObjetivos);
console.log("Cristales Recolectados:", cristalesRecogidos);
console.log("Porcentaje de Cumplimiento:", porcentajeCumplimiento.toFixed(2) + "%");
console.log("Combustible Inicial:", combustibleInicial);
console.log("Combustible Consumido:", combustibleGastado);
console.log("Combustible Restante:", combustibleRestante);
console.log("Morty Herido:", mortyHerido);
console.log("Nave Averiada:", naveAveriada);
console.log("Bonificación Otorgada:", bonificacion);