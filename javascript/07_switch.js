let dimension = 4;
switch (dimension) {
    case 1:
        console.log("Estas en la dimensión C-137");
        break;
    case 2:
        console.log("Estas en la dimensión C-140");
        break;
    case 3:
        console.log("Estas en la dimensión C-500");
        break;
    case 4:
        console.log("Estas en la dimensión de Alejandro");
        break;
    default:
        console.log("No se que dimensión es esa");
}

let personaje = "Rick";
switch (personaje) {
    case "Rick":
    case "Morty":
        console.log("¡Hola Rick y Morty! ¿Preparado para la locura?");
        break;
    case "Summer":
        console.log("¡Hola Summer! ¿Lista para la acción?");
        break;
    default:
        console.log("No reconocemos a este personaje, ¡ten cuidado!");
}

let energia = 50;
switch (true) {
    case (energia > 0 && energia <= 25):
        console.log("Tienes poca energía para la aventura.");
        break;
    case (energia > 25 && energia <= 50):
        console.log("Tienes algo de energía para la aventura.");
        break;
    case (energia > 50 && energia <= 75):
        console.log("Tienes suficiente energía para la aventura.");
        break;
    case (energia > 75  && energia <= 100):
        console.log("Tu energía es alta, ¡ten cuidado!");
        break;
    default:
        console.log("No tienes suficiente energía para continuar la aventura.");
}

console.log("Calculadora");
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