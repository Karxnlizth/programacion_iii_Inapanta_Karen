let puertaEmbarque = 4;
switch (puertaEmbarque) {
    case 1:
        console.log("Estás en la puerta de embarque 1");
        break;
    case 2:
        console.log("Estás en la puerta de embarque 2");
        break;
    case 3:
        console.log("Estás en la puerta de embarque 3");
        break;
    case 4:
        console.log("Estás en la puerta de embarque de Karen");
        break;
    default:
        console.log("No sé qué puerta de embarque es esa");
}

let tripulante = "Capitán";
switch (tripulante) {
    case "Capitán":
    case "Copiloto":
        console.log("¡Hola Capitán y Copiloto! ¿Preparados para el despegue?");
        break;
    case "Aeromoza":
        console.log("¡Hola Aeromoza! ¿Lista para el servicio en cabina?");
        break;
    default:
        console.log("No reconocemos a este miembro de la tripulación, ¡ten cuidado!");
}

let combustibleVuelo = 50;
switch (true) {
    case (combustibleVuelo > 0 && combustibleVuelo <= 25):
        console.log("Tienes poco combustible para el vuelo.");
        break;
    case (combustibleVuelo > 25 && combustibleVuelo <= 50):
        console.log("Tienes algo de combustible para el vuelo.");
        break;
    case (combustibleVuelo > 50 && combustibleVuelo <= 75):
        console.log("Tienes suficiente combustible para el vuelo.");
        break;
    case (combustibleVuelo > 75  && combustibleVuelo <= 100):
        console.log("Tu nivel de combustible es alto, ¡ten cuidado!");
        break;
    default:
        console.log("No tienes suficiente combustible para continuar el vuelo.");
}

console.log("Calculadora de Vuelo");
let numero1 = 10;
let numero2 = 5;
let operacion = "multiplicacion";
let resultado;
switch (operacion) {
    case "suma":
        resultado = numero1 + numero2;
        console.log("Resultado de la suma:", resultado);
        break;
    case "resta":
        resultado = numero1 - numero2;
        console.log("Resultado de la resta:", resultado);
        break;
    case "multiplicacion":
        resultado = numero1 * numero2;
        console.log("Resultado de la multiplicación:", resultado);
        break;
    case "division":
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            console.log("Resultado de la división:", resultado);
        } else {
            console.log("Error: No se puede dividir entre cero.");
        }
        break;
    default:
        console.log("Operación no reconocida.");
}